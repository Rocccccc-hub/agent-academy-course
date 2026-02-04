// 应用状态管理
let currentDay = 1;
let currentChapter = 0;
let currentTab = 'resources';
let progress = loadProgress();

// 从 localStorage 加载进度
function loadProgress() {
    const saved = localStorage.getItem('agentCourseProgressV2');
    if (saved) {
        return JSON.parse(saved);
    }

    // 初始化进度对象
    const newProgress = {
        days: {},
        notes: {},
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
    localStorage.setItem('agentCourseProgressV2', JSON.stringify(progress));
    updateOverallProgress();
}

// 重置进度
function resetProgress() {
    if (confirm('确定要重置所有学习进度吗？这将清除笔记和观看记录。')) {
        localStorage.removeItem('agentCourseProgressV2');
        location.reload();
    }
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

// 渲染左侧导航
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
                class="w-full text-left px-4 py-3 rounded-xl transition-all ${
                    isActive
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                        : 'bg-white text-slate-700 hover:shadow-md hover:scale-102'
                }">
                <div class="flex items-center gap-3">
                    <div class="text-2xl">${day.icon}</div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-xs font-bold ${isActive ? 'text-white' : 'text-slate-500'}">
                                DAY ${day.day}
                            </span>
                            ${dayProgress.completed ? `<span class="${isActive ? 'text-white' : 'text-green-500'}">✓</span>` : ''}
                        </div>
                        <h3 class="font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-900'} line-clamp-1">
                            ${day.title}
                        </h3>
                        <div class="flex items-center gap-2 text-xs ${isActive ? 'text-white/80' : 'text-slate-500'} mt-1">
                            <span>${completedChapters}/${totalChapters} 章节</span>
                        </div>
                        ${progressPercent > 0 ? `
                            <div class="mt-2 w-full ${isActive ? 'bg-white/30' : 'bg-slate-200'} rounded-full h-1">
                                <div class="${isActive ? 'bg-white' : 'bg-gradient-to-r from-green-400 to-emerald-500'} h-1 rounded-full transition-all" style="width: ${progressPercent}%"></div>
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
            console.log('视频加载成功，时长:', video.duration);
        }, { once: true });

        video.addEventListener('error', function(e) {
            console.error('视频加载失败:', e);
            videoPlaceholder.style.display = 'flex';
            videoPlaceholder.innerHTML = `
                <div class="text-center text-white">
                    <div class="text-6xl mb-4">❌</div>
                    <p class="text-xl font-semibold">视频加载失败</p>
                    <p class="text-sm opacity-80 mt-2">请检查视频文件路径</p>
                    <p class="text-xs opacity-60 mt-2">${dayData.videoUrl}</p>
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

        // 更新占位符内容为待制作提示
        videoPlaceholder.innerHTML = `
            <div class="text-center text-white">
                <div class="text-7xl mb-6">🎬</div>
                <p class="text-2xl font-bold mb-3">视频制作中...</p>
                <p class="text-base opacity-80 mb-6">Day ${day} 的教学视频正在制作</p>
                <div class="bg-white bg-opacity-10 backdrop-blur rounded-lg px-6 py-3 inline-block">
                    <p class="text-sm">当前进度: Day 1 已完成 ✅</p>
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

// 渲染章节卡片
function renderChapters(dayData) {
    const container = document.getElementById('chapters-container');
    const dayProgress = progress.days[dayData.day];

    // 如果没有章节内容，显示待制作提示
    if (!dayData.chapters || dayData.chapters.length === 0) {
        container.innerHTML = `
            <div class="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-indigo-300">
                <div class="p-12 text-center">
                    <div class="text-8xl mb-6">🚧</div>
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">课程制作中</h3>
                    <p class="text-lg text-gray-600 mb-6">Day ${dayData.day} 的视频和内容正在精心制作中</p>
                    <div class="bg-white rounded-xl p-6 max-w-2xl mx-auto">
                        <h4 class="font-bold text-gray-900 mb-4 text-left">📋 计划内容</h4>
                        <div class="text-left text-gray-700 space-y-2">
                            <p><strong>主题</strong>: ${dayData.title}</p>
                            <p><strong>目标</strong>: ${dayData.subtitle}</p>
                            <p><strong>状态</strong>: <span class="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">待制作</span></p>
                        </div>
                    </div>
                    <div class="mt-8 text-sm text-gray-500">
                        💡 提示：Day 1 的课程已经可以学习了，点击左侧导航返回 Day 1
                    </div>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = dayData.chapters.map((chapter, index) => {
        const isCompleted = dayProgress.chaptersCompleted.includes(chapter.id);

        return `
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-5">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-white mb-1">${chapter.title}</h3>
                            <p class="text-sm text-white/80">章节 ${index + 1} • ${formatTime(chapter.timestamp)}</p>
                        </div>
                        <button onclick="toggleChapterComplete('${chapter.id}')"
                            class="w-10 h-10 rounded-full border-2 ${
                                isCompleted
                                    ? 'bg-white border-white shadow-lg'
                                    : 'bg-white/20 border-white/40 hover:bg-white/30'
                            } flex items-center justify-center transition-all hover:scale-110">
                            ${isCompleted ? '<svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : '<div class="w-3 h-3 rounded-full border-2 border-white"></div>'}
                        </button>
                    </div>
                </div>

                <div class="p-8">
                    <div class="prose prose-slate max-w-none">
                        ${chapter.content}
                    </div>

                    ${chapter.corePoints ? `
                        <div class="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-r-xl shadow-md">
                            <h4 class="font-bold text-amber-900 mb-3 flex items-center">
                                <span class="text-xl mr-2">🎯</span>
                                核心要点
                            </h4>
                            <ul class="space-y-2">
                                ${chapter.corePoints.map(point => `
                                    <li class="text-sm text-amber-900 flex items-start">
                                        <span class="text-amber-500 mr-2 mt-0.5">▸</span>
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

// 加载资源到右侧栏
function loadResources(dayData) {
    // 核心概念
    const conceptsContainer = document.getElementById('core-concepts');
    if (!dayData.chapters || dayData.chapters.length === 0) {
        conceptsContainer.innerHTML = `
            <div class="text-center py-6 text-gray-500">
                <div class="text-4xl mb-3">📚</div>
                <p class="text-sm">内容制作中...</p>
            </div>
        `;
    } else if (dayData.chapters[0]) {
        conceptsContainer.innerHTML = `
            <div class="space-y-2">
                ${dayData.chapters.map(ch => `
                    <div class="p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200 hover:border-indigo-300 transition-all cursor-pointer">
                        <div class="font-semibold text-slate-900 text-sm">${ch.title}</div>
                        <div class="text-xs text-slate-500 mt-1">${formatTime(ch.timestamp)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 外部链接
    const linksContainer = document.getElementById('external-links');
    if (!dayData.chapters || dayData.chapters.length === 0) {
        linksContainer.innerHTML = `
            <div class="text-center py-6 text-gray-500">
                <div class="text-4xl mb-3">🔗</div>
                <p class="text-sm">内容制作中...</p>
            </div>
        `;
    } else if (dayData.externalLinks) {
        linksContainer.innerHTML = dayData.externalLinks.map(link => `
            <a href="${link.url}" target="_blank"
                class="block p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:border-indigo-400 hover:shadow-lg transition-all group">
                <div class="flex items-start justify-between">
                    <div class="flex-1">
                        <div class="font-semibold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">${link.title}</div>
                        <div class="text-xs text-slate-600 mt-1 line-clamp-2">${link.description}</div>
                    </div>
                    <svg class="w-4 h-4 text-slate-400 group-hover:text-indigo-500 flex-shrink-0 ml-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </div>
            </a>
        `).join('');
    }

    // 代码示例
    if (!dayData.chapters || dayData.chapters.length === 0) {
        document.getElementById('code-display').innerHTML = `<code class="text-gray-500">// 代码示例制作中...</code>`;
    } else if (dayData.chapters[currentChapter] && dayData.chapters[currentChapter].codeExample) {
        document.getElementById('code-display').innerHTML = `<code>${escapeHtml(dayData.chapters[currentChapter].codeExample)}</code>`;
    }

    // 最佳实践
    const bestPracticesContainer = document.getElementById('best-practices');
    if (!dayData.chapters || dayData.chapters.length === 0) {
        bestPracticesContainer.innerHTML = `
            <li class="text-center text-gray-500 py-4">
                <div class="text-3xl mb-2">💡</div>
                <span class="text-sm">内容制作中...</span>
            </li>
        `;
    } else if (dayData.chapters[currentChapter] && dayData.chapters[currentChapter].bestPractices) {
        document.getElementById('best-practices').innerHTML = dayData.chapters[currentChapter].bestPractices.map(practice => `
            <li class="flex items-start gap-2">
                <span class="text-purple-500 flex-shrink-0">✓</span>
                <span class="text-sm text-gray-700">${practice}</span>
            </li>
        `).join('');
    }
}

// 加载笔记
function loadNotes(day) {
    const notesKey = `day${day}`;
    const savedNote = progress.notes[notesKey] || '';
    document.getElementById('notes-textarea').value = savedNote;

    // TODO: 显示已保存的笔记列表
}

// 保存笔记
function saveNote() {
    const notesKey = `day${currentDay}`;
    const noteText = document.getElementById('notes-textarea').value;
    progress.notes[notesKey] = noteText;
    saveProgress();

    // 显示保存成功提示
    alert('笔记已保存！');
}

// 切换章节完成状态
function toggleChapterComplete(chapterId) {
    const dayProgress = progress.days[currentDay];
    const index = dayProgress.chaptersCompleted.indexOf(chapterId);

    if (index > -1) {
        dayProgress.chaptersCompleted.splice(index, 1);
    } else {
        dayProgress.chaptersCompleted.push(chapterId);
    }

    // 检查是否所有章节都完成
    const dayData = courseData.find(d => d.day === currentDay);
    if (dayProgress.chaptersCompleted.length === dayData.chapters.length) {
        dayProgress.completed = true;
    } else {
        dayProgress.completed = false;
    }

    saveProgress();
    loadDay(currentDay);
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
        if (confirm(`Day ${currentDay} 完成！是否开始 Day ${currentDay + 1}？`)) {
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
    document.getElementById('completed-count').textContent = `已完成 ${completedDays}/${totalDays} 天`;
}

// 切换右侧栏 Tab
function switchTab(tabName) {
    currentTab = tabName;

    // 更新 Tab 样式
    ['resources', 'code'].forEach(tab => {
        const tabBtn = document.getElementById(`tab-${tab}`);
        const content = document.getElementById(`content-${tab}`);

        if (tab === tabName) {
            tabBtn.classList.remove('text-gray-500');
            tabBtn.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
            content.classList.remove('hidden');
        } else {
            tabBtn.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
            tabBtn.classList.add('text-gray-500');
            content.classList.add('hidden');
        }
    });
}

// 复制代码
function copyCode() {
    const code = document.getElementById('code-display').textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert('代码已复制到剪贴板！');
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
