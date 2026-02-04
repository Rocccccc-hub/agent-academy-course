// 应用状态管理
let currentDay = 1;
let currentChapter = 0;
let currentTab = 'resources';
let progress = loadProgress();

// 从 localStorage 加载进度
function loadProgress() {
    const saved = localStorage.getItem('agentCourseProgressV3');
    if (saved) {
        return JSON.parse(saved);
    }

    // 初始化进度对象
    const newProgress = {
        days: {},
        bookmarks: []
    };

    courseData.forEach(day => {
        newProgress.days[day.day] = {
            completed: false,
            watchedTime: 0,
            chaptersCompleted: []
        };
    });

    return newProgress;
}

// 保存进度
function saveProgress() {
    localStorage.setItem('agentCourseProgressV3', JSON.stringify(progress));
    updateOverallProgress();
}

// 初始化应用
function initApp() {
    renderNavigation();
    loadDay(currentDay);
    updateOverallProgress();

    // 设置视频时间更新监听
    const video = document.getElementById('main-video');
    video.addEventListener('timeupdate', handleVideoTimeUpdate);
    video.addEventListener('ended', handleVideoEnded);
}

// 渲染左侧导航 - GitHub 风格
function renderNavigation() {
    const nav = document.getElementById('course-nav');

    nav.innerHTML = courseData.map(day => {
        const dayProgress = progress.days[day.day];
        const isActive = day.day === currentDay;
        const completedChapters = dayProgress.chaptersCompleted.length;
        const totalChapters = day.chapters.length || 0;
        const progressPercent = totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

        return `
            <button onclick="loadDay(${day.day})"
                class="w-full text-left px-3 py-2.5 rounded-md transition-all border ${
                    isActive
                        ? 'bg-gh-hover border-gh-green text-gh-text'
                        : 'bg-gh-card border-gh-border text-gh-text hover:border-gh-text-secondary'
                }">
                <div class="flex items-center gap-2.5">
                    <div class="text-lg">${day.icon}</div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-0.5">
                            <span class="text-[10px] font-semibold ${isActive ? 'text-gh-green' : 'text-gh-text-secondary'} uppercase tracking-wider font-mono">
                                DAY ${day.day}
                            </span>
                            ${dayProgress.completed ? `<span class="text-gh-green text-xs">✓</span>` : ''}
                        </div>
                        <h3 class="font-medium text-xs ${isActive ? 'text-gh-text' : 'text-gh-text'} line-clamp-1">
                            ${day.title}
                        </h3>
                        <div class="flex items-center gap-2 text-[10px] ${isActive ? 'text-gh-text-secondary' : 'text-gh-text-secondary'} mt-1 font-mono">
                            <span>${completedChapters}/${totalChapters} chapters</span>
                        </div>
                        ${progressPercent > 0 ? `
                            <div class="mt-2 w-full bg-gh-border rounded-full h-1">
                                <div class="bg-gh-green h-1 rounded-full transition-all" style="width: ${progressPercent}%"></div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </button>
        `;
    }).join('');
}

// 加载某一天的内容
function loadDay(day) {
    currentDay = day;
    currentChapter = 0;

    const dayData = courseData.find(d => d.day === day);
    if (!dayData) return;

    // 更新视频
    const video = document.getElementById('main-video');
    const videoPlaceholder = document.getElementById('video-placeholder');

    if (dayData.videoUrl) {
        video.src = dayData.videoUrl;
        video.style.display = 'block';
        videoPlaceholder.style.display = 'none';

        // 视频加载成功/失败的处理
        video.addEventListener('loadedmetadata', function() {
            console.log('Video loaded, duration:', video.duration);
        }, { once: true });

        video.addEventListener('error', function(e) {
            console.error('Video load error:', e);
            videoPlaceholder.style.display = 'flex';
            videoPlaceholder.innerHTML = `
                <div class="text-center">
                    <div class="text-5xl mb-3">❌</div>
                    <p class="text-base font-semibold text-gh-text font-mono">Video load failed</p>
                    <p class="text-xs text-gh-text-secondary mt-2">Check video file path</p>
                    <p class="text-[10px] text-gh-text-secondary mt-2 font-mono">${dayData.videoUrl}</p>
                </div>
            `;
        }, { once: true });

        // 恢复上次观看位置
        const savedTime = progress.days[day].watchedTime;
        if (savedTime > 0) {
            video.addEventListener('loadedmetadata', function() {
                if (savedTime < video.duration - 5) {
                    video.currentTime = savedTime;
                }
            }, { once: true });
        }
    } else {
        video.style.display = 'none';
        videoPlaceholder.style.display = 'flex';

        // 更新占位符内容
        videoPlaceholder.innerHTML = `
            <div class="text-center">
                <div class="text-6xl mb-4">⚙️</div>
                <p class="text-lg font-semibold text-gh-text font-mono">Video rendering...</p>
                <p class="text-sm text-gh-text-secondary mt-2">Day ${day} video in production</p>
                <div class="mt-6 px-4 py-2 bg-gh-hover border border-gh-border rounded text-xs text-gh-text-secondary font-mono">
                    Status: Day 1 ✅ Complete
                </div>
            </div>
        `;
    }

    // 更新标题
    document.getElementById('video-title').textContent = `Day ${day}: ${dayData.title}`;
    document.getElementById('video-subtitle').textContent = dayData.subtitle;
    document.getElementById('video-duration').textContent = dayData.duration;

    // 渲染章节
    renderChapters(dayData);

    // 更新右侧栏
    loadResources(dayData);

    // 更新导航高亮
    renderNavigation();
}

// 渲染章节卡片 - GitHub 风格，移除完成按钮
function renderChapters(dayData) {
    const container = document.getElementById('chapters-container');
    const dayProgress = progress.days[dayData.day];

    // 如果没有章节内容，显示待制作提示
    if (!dayData.chapters || dayData.chapters.length === 0) {
        container.innerHTML = `
            <div class="bg-gh-card border border-gh-border rounded-lg p-10 text-center">
                <div class="text-6xl mb-4">🚧</div>
                <h3 class="text-xl font-semibold text-gh-text mb-3 font-mono">Content in production</h3>
                <p class="text-sm text-gh-text-secondary mb-5">Day ${dayData.day} materials are being prepared</p>
                <div class="bg-gh-hover border border-gh-border rounded p-4 max-w-md mx-auto">
                    <div class="text-left text-gh-text space-y-2 text-xs">
                        <p><span class="text-gh-text-secondary font-mono">Topic:</span> ${dayData.title}</p>
                        <p><span class="text-gh-text-secondary font-mono">Goal:</span> ${dayData.subtitle}</p>
                        <p><span class="text-gh-text-secondary font-mono">Status:</span> <span class="inline-block px-2 py-0.5 bg-yellow-900/30 text-yellow-500 rounded text-[10px] font-mono border border-yellow-900/50">IN PROGRESS</span></p>
                    </div>
                </div>
                <div class="mt-6 text-xs text-gh-text-secondary">
                    💡 Day 1 content is ready - return via left navigation
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = dayData.chapters.map((chapter, index) => {
        return `
            <div class="bg-gh-card border border-gh-border rounded-lg overflow-hidden hover:border-gh-text-secondary transition-colors">
                <div class="bg-gh-hover px-5 py-3.5 border-b border-gh-border">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-base font-semibold text-gh-text">${chapter.title}</h3>
                            <p class="text-xs text-gh-text-secondary mt-0.5 font-mono">Chapter ${index + 1} • ${formatTime(chapter.timestamp)}</p>
                        </div>
                    </div>
                </div>

                <div class="p-6">
                    <div class="prose prose-invert prose-sm max-w-none text-gh-text">
                        ${chapter.content}
                    </div>

                    ${chapter.corePoints ? `
                        <div class="mt-6 bg-blue-950/30 border-l-2 border-gh-blue p-4 rounded-r">
                            <h4 class="font-semibold text-gh-text mb-2.5 flex items-center text-sm">
                                <span class="mr-2">🎯</span>
                                <span class="font-mono">Core Points</span>
                            </h4>
                            <ul class="space-y-1.5">
                                ${chapter.corePoints.map(point => `
                                    <li class="text-xs text-gh-text-secondary flex items-start">
                                        <span class="text-gh-blue mr-2 mt-0.5 flex-shrink-0">▸</span>
                                        <span>${point}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// 加载资源到右侧栏 - GitHub 风格
function loadResources(dayData) {
    // 核心概念
    const conceptsContainer = document.getElementById('core-concepts');
    if (!dayData.chapters || dayData.chapters.length === 0) {
        conceptsContainer.innerHTML = `
            <div class="text-center py-5 text-gh-text-secondary">
                <div class="text-3xl mb-2">📚</div>
                <p class="text-xs font-mono">Content in production...</p>
            </div>
        `;
    } else if (dayData.chapters[0]) {
        conceptsContainer.innerHTML = `
            <div class="space-y-1.5">
                ${dayData.chapters.map(ch => `
                    <div class="p-2.5 bg-gh-hover border border-gh-border rounded text-gh-text hover:border-gh-text-secondary transition-colors cursor-pointer">
                        <div class="font-medium text-xs">${ch.title}</div>
                        <div class="text-[10px] text-gh-text-secondary mt-0.5 font-mono">${formatTime(ch.timestamp)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 外部链接
    const linksContainer = document.getElementById('external-links');
    if (!dayData.chapters || dayData.chapters.length === 0) {
        linksContainer.innerHTML = `
            <div class="text-center py-5 text-gh-text-secondary">
                <div class="text-3xl mb-2">🔗</div>
                <p class="text-xs font-mono">Content in production...</p>
            </div>
        `;
    } else if (dayData.externalLinks) {
        linksContainer.innerHTML = dayData.externalLinks.map(link => `
            <a href="${link.url}" target="_blank"
                class="block p-3 bg-gh-hover border border-gh-border rounded hover:border-gh-blue transition-colors group">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <div class="font-medium text-xs text-gh-text group-hover:text-gh-blue transition-colors">${link.title}</div>
                        <div class="text-[10px] text-gh-text-secondary mt-1 line-clamp-2">${link.description}</div>
                    </div>
                    <svg class="w-3 h-3 text-gh-text-secondary group-hover:text-gh-blue flex-shrink-0 ml-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </div>
            </a>
        `).join('');
    }

    // 代码示例
    if (!dayData.chapters || dayData.chapters.length === 0) {
        document.getElementById('code-display').innerHTML = `<code class="text-gh-text-secondary">// Code example in production...</code>`;
    } else if (dayData.chapters[currentChapter] && dayData.chapters[currentChapter].codeExample) {
        document.getElementById('code-display').innerHTML = `<code>${escapeHtml(dayData.chapters[currentChapter].codeExample)}</code>`;
    }

    // 最佳实践
    const bestPracticesContainer = document.getElementById('best-practices');
    if (!dayData.chapters || dayData.chapters.length === 0) {
        bestPracticesContainer.innerHTML = `
            <li class="text-center text-gh-text-secondary py-3">
                <div class="text-2xl mb-1">💡</div>
                <span class="text-xs font-mono">Content in production...</span>
            </li>
        `;
    } else if (dayData.chapters[currentChapter] && dayData.chapters[currentChapter].bestPractices) {
        bestPracticesContainer.innerHTML = dayData.chapters[currentChapter].bestPractices.map(practice => `
            <li class="flex items-start gap-2">
                <span class="text-gh-green flex-shrink-0 text-xs">✓</span>
                <span class="text-xs text-gh-text-secondary">${practice}</span>
            </li>
        `).join('');
    }
}

// 视频跳转到章节
function seekToChapter(timestamp) {
    const video = document.getElementById('main-video');
    video.currentTime = timestamp;
    video.play();
}

// 处理视频时间更新
function handleVideoTimeUpdate(e) {
    const video = e.target;
    progress.days[currentDay].watchedTime = video.currentTime;

    // 每 5 秒保存一次
    if (Math.floor(video.currentTime) % 5 === 0) {
        saveProgress();
    }
}

// 处理视频播放完成
function handleVideoEnded() {
    progress.days[currentDay].completed = true;
    saveProgress();
    renderNavigation();

    // 提示进入下一天
    if (currentDay < courseData.length) {
        if (confirm(`Day ${currentDay} completed! Start Day ${currentDay + 1}?`)) {
            loadDay(currentDay + 1);
        }
    }
}

// 更新总体进度
function updateOverallProgress() {
    const totalDays = courseData.length;
    const completedDays = Object.values(progress.days).filter(d => d.completed).length;
    const percent = Math.round((completedDays / totalDays) * 100);

    document.getElementById('overall-progress-bar').style.width = percent + '%';
    document.getElementById('overall-progress-text').textContent = percent + '%';
    document.getElementById('completed-count').textContent = `${completedDays}/${totalDays} days`;
}

// 切换右侧栏 Tab
function switchTab(tabName) {
    currentTab = tabName;

    // 更新 Tab 样式
    ['resources', 'code'].forEach(tab => {
        const tabBtn = document.getElementById(`tab-${tab}`);
        const content = document.getElementById(`content-${tab}`);

        if (tab === tabName) {
            tabBtn.classList.remove('text-gh-text-secondary');
            tabBtn.classList.add('bg-gh-hover', 'text-gh-text');
            content.classList.remove('hidden');
        } else {
            tabBtn.classList.remove('bg-gh-hover', 'text-gh-text');
            tabBtn.classList.add('text-gh-text-secondary');
            content.classList.add('hidden');
        }
    });
}

// 复制代码
function copyCode() {
    const code = document.getElementById('code-display').textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('Code copied to clipboard!');
    });
}

// 工具函数：格式化时间
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// 工具函数：转义 HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);
