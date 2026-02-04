// 应用状态管理
let currentDay = -1;  // 从课程导览开始（餐厅比喻）
let currentLanguage = localStorage.getItem('agentCourseLanguage') || 'zh';  // 默认中文
let progress = loadProgress();

// 从 localStorage 加载进度
function loadProgress() {
    let saved = localStorage.getItem('agentCourseProgressV3');

    // 尝试从旧版本迁移数据
    if (!saved) {
        const oldV2 = localStorage.getItem('agentCourseProgressV2');
        if (oldV2) {
            try {
                const oldData = JSON.parse(oldV2);
                // 迁移 V2 → V3（移除 notes 和 bookmarks）
                const migratedData = {
                    days: oldData.days || {}
                };
                saved = JSON.stringify(migratedData);
                localStorage.setItem('agentCourseProgressV3', saved);
                console.log('✅ Migrated progress from V2 to V3');
            } catch (e) {
                console.error('Migration failed:', e);
            }
        }
    }

    if (saved) {
        const progress = JSON.parse(saved);

        // 确保所有 day 都有进度对象（处理新增的 Day）
        courseData.forEach(day => {
            if (!progress.days[day.day]) {
                progress.days[day.day] = {
                    completed: false,
                    watchedTime: 0,
                    chaptersCompleted: []
                };
            }
        });

        return progress;
    }

    // 初始化进度对象
    const newProgress = {
        days: {}
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
    // 设置语言按钮状态
    document.getElementById(`lang-${currentLanguage}`).classList.add('active');

    renderNavigation();
    loadDay(currentDay);
    updateOverallProgress();
    updateUILabels();

    // 设置视频时间更新监听
    const video = document.getElementById('main-video');
    video.addEventListener('timeupdate', handleVideoTimeUpdate);
    video.addEventListener('ended', handleVideoEnded);
}

// 切换移动端导航
function toggleMobileNav() {
    const panel = document.getElementById('mobile-nav-panel');
    if (panel) {
        panel.classList.toggle('active');
    }
}

// 渲染左侧导航 - GitHub 风格
function renderNavigation() {
    const nav = document.getElementById('course-nav');
    const mobileNav = document.getElementById('mobile-course-nav');
    const chaptersLabel = currentLanguage === 'zh' ? '章节' : 'chapters';

    const navHTML = courseData.map(day => {
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
                                ${day.day === -1 ? 'INTRO' : `DAY ${day.day}`}
                            </span>
                            ${dayProgress.completed ? `<span class="text-gh-green text-xs">✓</span>` : ''}
                        </div>
                        <h3 class="font-medium text-xs ${isActive ? 'text-gh-text' : 'text-gh-text'} line-clamp-1">
                            ${getText(day.title)}
                        </h3>
                        <div class="flex items-center gap-2 text-[10px] ${isActive ? 'text-gh-text-secondary' : 'text-gh-text-secondary'} mt-1 font-mono">
                            <span>${completedChapters}/${totalChapters} ${chaptersLabel}</span>
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

    // 渲染到桌面端
    nav.innerHTML = navHTML;

    // 移动端导航（点击后关闭）
    if (mobileNav) {
        const mobileNavHTML = courseData.map(day => {
            const dayProgress = progress.days[day.day];
            const isActive = day.day === currentDay;
            const completedChapters = dayProgress.chaptersCompleted.length;
            const totalChapters = day.chapters.length || 0;
            const progressPercent = totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

            return `
                <button onclick="loadDay(${day.day}); toggleMobileNav()"
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
                                    ${day.day === -1 ? 'INTRO' : `DAY ${day.day}`}
                                </span>
                                ${dayProgress.completed ? `<span class="text-gh-green text-xs">✓</span>` : ''}
                            </div>
                            <h3 class="font-medium text-xs ${isActive ? 'text-gh-text' : 'text-gh-text'} line-clamp-1">
                                ${getText(day.title)}
                            </h3>
                            <div class="flex items-center gap-2 text-[10px] ${isActive ? 'text-gh-text-secondary' : 'text-gh-text-secondary'} mt-1 font-mono">
                                <span>${completedChapters}/${totalChapters} ${chaptersLabel}</span>
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
        mobileNav.innerHTML = mobileNavHTML;
    }
}

// 加载某一天的内容
function loadDay(day) {
    currentDay = day;

    const dayData = courseData.find(d => d.day === day);
    if (!dayData) return;

    // 清理旧视频的事件监听器（通过克隆节点）
    const oldVideo = document.getElementById('main-video');
    const newVideo = oldVideo.cloneNode(true);
    oldVideo.parentNode.replaceChild(newVideo, oldVideo);

    // 重新绑定事件监听器
    newVideo.addEventListener('timeupdate', handleVideoTimeUpdate);
    newVideo.addEventListener('ended', handleVideoEnded);

    // 更新视频引用
    const video = newVideo;
    const videoPlaceholder = document.getElementById('video-placeholder');

    if (dayData.videoUrl) {
        // 处理视频路径：支持多语言视频
        let videoSrc = typeof dayData.videoUrl === 'object'
            ? dayData.videoUrl[currentLanguage]
            : dayData.videoUrl;

        // 如果是相对路径，转换为基于当前页面的路径
        if (videoSrc && (videoSrc.startsWith('../') || videoSrc.startsWith('./'))) {
            const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
            videoSrc = basePath + '/' + videoSrc;
        }

        video.src = videoSrc;
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
    document.getElementById('video-title').textContent = `Day ${day}: ${getText(dayData.title)}`;
    document.getElementById('video-subtitle').textContent = getText(dayData.subtitle);
    document.getElementById('video-duration').textContent = dayData.duration;

    // 渲染章节
    renderChapters(dayData);

    // 更新导航高亮
    renderNavigation();
}

// 渲染章节卡片 - 外部链接整合在章节内
function renderChapters(dayData) {
    const container = document.getElementById('chapters-container');
    const dayProgress = progress.days[dayData.day];

    const labels = {
        zh: {
            contentInProduction: '内容制作中',
            materialsBeingPrepared: `Day ${dayData.day} 的教学材料正在准备中`,
            topic: '主题',
            goal: '目标',
            status: '状态',
            inProgress: '制作中',
            readyHint: '💡 Day 1 内容已完成 - 可通过左侧导航切换',
            chapter: '章节',
            corePoints: '核心要点',
            codeExample: '代码示例',
            copy: '复制',
            bestPractices: '最佳实践',
            extendedReading: '拓展阅读',
            markComplete: '标记为完成',
            markIncomplete: '标记为未完成'
        },
        en: {
            contentInProduction: 'Content in production',
            materialsBeingPrepared: `Day ${dayData.day} materials are being prepared`,
            topic: 'Topic',
            goal: 'Goal',
            status: 'Status',
            inProgress: 'IN PROGRESS',
            readyHint: '💡 Day 1 content is ready - return via left navigation',
            chapter: 'Chapter',
            corePoints: 'Core Points',
            codeExample: 'Code Example',
            copy: 'Copy',
            bestPractices: 'Best Practices',
            extendedReading: 'Extended Reading',
            markComplete: 'Mark as complete',
            markIncomplete: 'Mark as incomplete'
        }
    };

    const l = labels[currentLanguage];

    // 如果没有章节内容，显示待制作提示
    if (!dayData.chapters || dayData.chapters.length === 0) {
        container.innerHTML = `
            <div class="bg-gh-card border border-gh-border rounded-lg p-6 md:p-10 text-center">
                <div class="text-4xl md:text-6xl mb-3 md:mb-4">🚧</div>
                <h3 class="text-base md:text-xl font-semibold text-gh-text mb-2 md:mb-3 font-mono">${l.contentInProduction}</h3>
                <p class="text-xs md:text-sm text-gh-text-secondary mb-4 md:mb-5">${l.materialsBeingPrepared}</p>
                <div class="bg-gh-hover border border-gh-border rounded p-3 md:p-4 max-w-md mx-auto">
                    <div class="text-left text-gh-text space-y-2 text-[11px] md:text-xs">
                        <p><span class="text-gh-text-secondary font-mono">${l.topic}:</span> ${getText(dayData.title)}</p>
                        <p><span class="text-gh-text-secondary font-mono">${l.goal}:</span> ${getText(dayData.subtitle)}</p>
                        <p><span class="text-gh-text-secondary font-mono">${l.status}:</span> <span class="inline-block px-2 py-0.5 bg-yellow-900/30 text-yellow-500 rounded text-[10px] font-mono border border-yellow-900/50">${l.inProgress}</span></p>
                    </div>
                </div>
                <div class="mt-4 md:mt-6 text-[11px] md:text-xs text-gh-text-secondary">
                    ${l.readyHint}
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = dayData.chapters.map((chapter, index) => {
        const isCompleted = dayProgress.chaptersCompleted.includes(chapter.id);
        const isExpanded = index === 0; // 默认展开第一个章节

        return `
            <div class="bg-gh-card border border-gh-border rounded-lg overflow-hidden hover:border-gh-text-secondary transition-colors">
                <div class="bg-gh-hover px-3 md:px-5 py-2.5 md:py-3.5">
                    <div class="flex items-center justify-between gap-3">
                        <button onclick="toggleChapterExpand('chapter-${chapter.id}')" class="flex-1 min-w-0 text-left flex items-center gap-3 group">
                            <svg class="chapter-chevron w-5 h-5 text-gh-text-secondary transition-transform ${isExpanded ? 'rotate-90' : ''}" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                            </svg>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-sm md:text-base font-semibold text-gh-text group-hover:text-gh-blue transition-colors">${getText(chapter.title)}</h3>
                                <p class="text-[10px] md:text-xs text-gh-text-secondary mt-0.5 font-mono">${l.chapter} ${index + 1}</p>
                            </div>
                        </button>
                        <button onclick="toggleChapterComplete('${chapter.id}')"
                            class="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full border-2 ${
                                isCompleted
                                    ? 'bg-gh-green border-gh-green'
                                    : 'border-gh-border hover:border-gh-green'
                            } flex items-center justify-center transition-all hover:scale-110"
                            title="${isCompleted ? l.markIncomplete : l.markComplete}">
                            ${isCompleted ? '<svg class="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : '<div class="w-2 h-2 rounded-full bg-gh-text-secondary"></div>'}
                        </button>
                    </div>
                </div>

                <div id="chapter-${chapter.id}" class="chapter-content ${isExpanded ? '' : 'hidden'}">
                    <div class="p-4 md:p-6 border-t border-gh-border">
                    <div class="prose prose-invert prose-sm max-w-none text-gh-text text-sm md:text-base">
                        ${getText(chapter.content || chapter.description || '')}
                    </div>

                    ${chapter.corePoints ? `
                        <div class="mt-4 md:mt-6 bg-blue-950/30 border-l-2 border-gh-blue p-3 md:p-4 rounded-r">
                            <h4 class="font-semibold text-gh-text mb-2 md:mb-2.5 flex items-center text-xs md:text-sm">
                                <span class="mr-2">🎯</span>
                                <span class="font-mono">${l.corePoints}</span>
                            </h4>
                            <ul class="space-y-1.5">
                                ${chapter.corePoints.map(point => `
                                    <li class="text-[11px] md:text-xs text-gh-text-secondary flex items-start">
                                        <span class="text-gh-blue mr-2 mt-0.5 flex-shrink-0">▸</span>
                                        <span>${getText(point)}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}

                    ${chapter.codeExample ? `
                        <div class="mt-4 md:mt-6 bg-black border border-gh-border rounded-lg overflow-hidden">
                            <div class="px-3 md:px-4 py-2 md:py-2.5 bg-gh-hover border-b border-gh-border flex items-center justify-between">
                                <span class="text-[10px] md:text-xs text-gh-text font-mono">${l.codeExample}</span>
                                <button onclick="copyCodeFromChapter(this)" class="text-[9px] md:text-[10px] text-gh-text-secondary hover:text-gh-text transition-colors font-mono">${l.copy}</button>
                            </div>
                            <pre class="p-3 md:p-4 text-[10px] md:text-xs text-gh-text overflow-x-auto font-mono"><code>${escapeHtml(getText(chapter.codeExample))}</code></pre>
                        </div>
                    ` : ''}

                    ${chapter.bestPractices ? `
                        <div class="mt-4 md:mt-6 bg-green-950/20 border-l-2 border-gh-green p-3 md:p-4 rounded-r">
                            <h4 class="font-semibold text-gh-text mb-2 md:mb-2.5 flex items-center text-xs md:text-sm">
                                <span class="mr-2">💡</span>
                                <span class="font-mono">${l.bestPractices}</span>
                            </h4>
                            <ul class="space-y-1.5">
                                ${chapter.bestPractices.map(practice => `
                                    <li class="text-[11px] md:text-xs text-gh-text-secondary flex items-start">
                                        <span class="text-gh-green mr-2 mt-0.5 flex-shrink-0">✓</span>
                                        <span>${getText(practice)}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('') + (dayData.externalLinks && dayData.externalLinks.length > 0 ? `
        <div class="bg-gh-card border border-gh-border rounded-lg p-4 md:p-6">
            <h3 class="font-semibold text-gh-text mb-3 md:mb-4 flex items-center text-xs md:text-sm">
                <span class="mr-2">🔗</span>
                <span class="font-mono">${l.extendedReading}</span>
            </h3>
            <div class="space-y-2 md:space-y-3">
                ${dayData.externalLinks.map(link => `
                    <a href="${getText(link.url)}" target="_blank" rel="noopener noreferrer"
                        class="block p-3 md:p-4 bg-gh-hover border border-gh-border rounded hover:border-gh-blue transition-colors group">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex-1 min-w-0">
                                <div class="font-medium text-xs md:text-sm text-gh-text group-hover:text-gh-blue transition-colors mb-1">${getText(link.title)}</div>
                                <div class="text-[11px] md:text-xs text-gh-text-secondary line-clamp-2">${getText(link.description)}</div>
                            </div>
                            <svg class="w-3 h-3 md:w-4 md:h-4 text-gh-text-secondary group-hover:text-gh-blue flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    ` : '');
}

// 切换章节展开/折叠
function toggleChapterExpand(chapterId) {
    const chapterContent = document.getElementById(chapterId);
    const chevron = chapterContent.previousElementSibling.querySelector('.chapter-chevron');

    if (chapterContent.classList.contains('hidden')) {
        chapterContent.classList.remove('hidden');
        chevron.classList.add('rotate-90');
    } else {
        chapterContent.classList.add('hidden');
        chevron.classList.remove('rotate-90');
    }
}

// 切换章节完成状态
function toggleChapterComplete(chapterId) {
    const dayProgress = progress.days[currentDay];
    const index = dayProgress.chaptersCompleted.indexOf(chapterId);

    if (index > -1) {
        // 已完成 → 取消完成
        dayProgress.chaptersCompleted.splice(index, 1);
    } else {
        // 未完成 → 标记完成
        dayProgress.chaptersCompleted.push(chapterId);
    }

    // 检查是否所有章节都完成
    const dayData = courseData.find(d => d.day === currentDay);
    if (dayData && dayProgress.chaptersCompleted.length === dayData.chapters.length) {
        dayProgress.completed = true;
    } else {
        dayProgress.completed = false;
    }

    saveProgress();
    renderNavigation();

    // 重新渲染章节以更新按钮状态
    const container = document.getElementById('chapters-container');
    renderChapters(dayData);

    // 检查是否所有课程完成
    checkAllCoursesCompleted();
}

// 复制代码（从章节内的按钮）
function copyCodeFromChapter(button) {
    const codeBlock = button.closest('.bg-black').querySelector('code');
    const code = codeBlock.textContent;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

// 处理视频时间更新
let lastSaveTime = 0;

function handleVideoTimeUpdate(e) {
    const video = e.target;
    progress.days[currentDay].watchedTime = video.currentTime;

    // 节流：每 5 秒保存一次
    const currentTime = Math.floor(video.currentTime);
    if (currentTime - lastSaveTime >= 5) {
        saveProgress();
        lastSaveTime = currentTime;
    }
}

// 处理视频播放完成
function handleVideoEnded() {
    progress.days[currentDay].completed = true;
    saveProgress();
    renderNavigation();

    // 检查是否所有课程完成
    const allCompleted = checkAllCoursesCompleted();

    if (allCompleted) {
        return; // 礼花动画会处理后续提示
    }

    // 提示进入下一天
    if (currentDay < courseData.length - 1) {
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

// 重置学习进度
function resetProgress() {
    const confirmText = currentLanguage === 'zh'
        ? '⚠️ 确定要重置所有学习进度吗？此操作无法撤销。'
        : '⚠️ Are you sure you want to reset all progress? This action cannot be undone.';

    if (confirm(confirmText)) {
        localStorage.removeItem('agentCourseProgressV3');
        localStorage.removeItem('agentCourseProgressV2');
        location.reload();
    }
}

// 语言切换
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('agentCourseLanguage', lang);

    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // 重新渲染页面
    renderNavigation();
    loadDay(currentDay);
    updateOverallProgress();
    updateUILabels();
}

// 更新界面文本标签
function updateUILabels() {
    const labels = {
        zh: {
            progress: '进度',
            days: '天',
            courseIndex: '课程目录',
            resetProgress: '重置进度'
        },
        en: {
            progress: 'Progress',
            days: 'days',
            courseIndex: 'Course Index',
            resetProgress: 'Reset Progress'
        }
    };

    const l = labels[currentLanguage];
    document.getElementById('progress-label').textContent = l.progress;

    const asideH2 = document.querySelector('aside h2');
    if (asideH2) {
        asideH2.textContent = l.courseIndex.toUpperCase();
    }

    document.getElementById('reset-btn-text').textContent = l.resetProgress;

    const mobileResetBtn = document.getElementById('mobile-reset-btn-text');
    if (mobileResetBtn) {
        mobileResetBtn.textContent = l.resetProgress;
    }

    // 更新完成天数显示
    const completedDays = Object.values(progress.days).filter(d => d.completed).length;
    document.getElementById('completed-count').textContent = `${completedDays}/${courseData.length} ${l.days}`;
}

// 获取多语言文本
function getText(obj) {
    if (typeof obj === 'string') return obj;
    return obj[currentLanguage] || obj.zh || obj.en || '';
}

// 检查所有课程是否完成
function checkAllCoursesCompleted() {
    const totalDays = courseData.length;
    const completedDays = Object.values(progress.days).filter(d => d.completed).length;

    if (completedDays === totalDays) {
        // 所有课程完成，触发礼花动画
        playConfettiAnimation();
        return true;
    }
    return false;
}

// 礼花动画
function playConfettiAnimation() {
    // 创建全屏遮罩
    const overlay = document.createElement('div');
    overlay.id = 'confetti-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(13, 17, 23, 0.95);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    // 创建 canvas
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    `;

    // 祝贺文字
    const message = document.createElement('div');
    message.style.cssText = `
        z-index: 10000;
        text-align: center;
        color: #e6edf3;
        animation: scaleIn 0.5s ease 0.3s both;
    `;
    message.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: #3fb950;">
            ${currentLanguage === 'zh' ? '恭喜完成！' : 'Congratulations!'}
        </h1>
        <p style="font-size: 1.2rem; color: #b1bac4; margin-bottom: 2rem;">
            ${currentLanguage === 'zh'
                ? '你已完成 Agent Academy 全部 8 天课程！'
                : 'You have completed all 8 days of Agent Academy!'}
        </p>
        <button id="close-confetti" style="
            padding: 12px 32px;
            background: #3fb950;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        " onmouseover="this.style.background='#56d364'" onmouseout="this.style.background='#3fb950'">
            ${currentLanguage === 'zh' ? '太棒了！' : 'Awesome!'}
        </button>
    `;

    overlay.appendChild(canvas);
    overlay.appendChild(message);
    document.body.appendChild(overlay);

    // 礼花粒子系统
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 150;
    const colors = ['#3fb950', '#58a6ff', '#f778ba', '#ffa657', '#bc8cff'];

    // 创建粒子
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 3 + 2,
            radius: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: 1,
            gravity: 0.15,
            friction: 0.99
        });
    }

    // 动画循环
    let animationId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            // 更新位置
            p.vy += p.gravity;
            p.vx *= p.friction;
            p.x += p.vx;
            p.y += p.vy;

            // 淡出
            if (p.y > canvas.height * 0.8) {
                p.opacity -= 0.02;
            }

            // 绘制粒子
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();

            // 移除消失的粒子
            if (p.opacity <= 0) {
                particles.splice(index, 1);
            }
        });

        // 持续发射新粒子（前3秒）
        if (particles.length < particleCount && Date.now() - startTime < 3000) {
            for (let i = 0; i < 5; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: -20,
                    vx: (Math.random() - 0.5) * 8,
                    vy: Math.random() * 3 + 2,
                    radius: Math.random() * 4 + 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    opacity: 1,
                    gravity: 0.15,
                    friction: 0.99
                });
            }
        }

        if (particles.length > 0) {
            animationId = requestAnimationFrame(animate);
        }
    }

    const startTime = Date.now();
    animate();

    // 关闭按钮
    document.getElementById('close-confetti').addEventListener('click', () => {
        cancelAnimationFrame(animationId);
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    });

    // 添加 CSS 动画
    if (!document.getElementById('confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            @keyframes scaleIn {
                from {
                    transform: scale(0.5);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp);
