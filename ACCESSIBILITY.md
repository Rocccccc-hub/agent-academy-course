# 可访问性说明 (Accessibility Guidelines)

本项目遵循 **WCAG 2.1 AA 级别**标准，确保所有用户都能清晰阅读内容。

## 配色方案对比度标准

### 主要文字颜色
| 背景色 | 文字颜色 | 对比度 | WCAG 等级 | 用途 |
|--------|----------|--------|-----------|------|
| #0d1117 (gh-bg) | #e6edf3 (gh-text) | 12.6:1 | AAA | 主要内容文字 |
| #161b22 (gh-card) | #e6edf3 (gh-text) | 11.9:1 | AAA | 卡片内文字 |
| #0d1117 (gh-bg) | #8b949e (gh-text-secondary) | 5.2:1 | AA | 次要说明文字 |
| #161b22 (gh-card) | #8b949e (gh-text-secondary) | 4.9:1 | AA | 卡片内次要文字 |

### 强调色
| 背景色 | 文字/图标颜色 | 对比度 | WCAG 等级 | 用途 |
|--------|---------------|--------|-----------|------|
| #0d1117 (gh-bg) | #3fb950 (gh-green) | 5.8:1 | AA | 成功状态、进度 |
| #0d1117 (gh-bg) | #58a6ff (gh-blue) | 6.2:1 | AA | 链接、信息提示 |
| #0d1117 (gh-bg) | #fef3c7 (yellow-100) | 14.1:1 | AAA | 警告文字 |

### 警告框配色
| 组件 | 背景色 | 边框色 | 文字颜色 | 对比度 | 说明 |
|------|--------|--------|----------|--------|------|
| 黄色警告框 | #78350f/20 (yellow-900/20) | #ca8a04/50 (yellow-600/50) | #fef3c7 (yellow-100) | 14.1:1 | 重要提示和警告 |
| 蓝色信息框 | #172554/30 (blue-950/30) | #3b82f6/50 (blue-500/50) | #e6edf3 | 12.6:1 | 核心要点和提示 |
| 绿色实践框 | #14532d/20 (green-950/20) | #3fb950 | #e6edf3 | 12.6:1 | 最佳实践建议 |

### 交互元素
| 元素 | 默认状态 | 悬停状态 | 对比度 | 说明 |
|------|----------|----------|--------|------|
| 链接 | #58a6ff | #79c0ff | 6.2:1 / 7.8:1 | 符合 AA 标准 |
| 按钮（主要） | bg: #3fb950, text: #ffffff | bg: #56d364 | 3.5:1 / 4.2:1 | 大文字符合 AA |
| 按钮（次要） | bg: #161b22, text: #e6edf3 | border: #8b949e | 11.9:1 | 符合 AAA 标准 |

## 文字大小标准

### 正文
- **最小字号**: 14px (0.875rem)
- **行高**: 1.6
- **段落间距**: 1rem

### 标题
- H1: 24px / 1.5rem (font-semibold)
- H2: 20px / 1.25rem (font-semibold)
- H3: 18px / 1.125rem (font-semibold)
- H4: 16px / 1rem (font-medium)

### 代码
- 内联代码: 13px / 0.8125rem (JetBrains Mono)
- 代码块: 12px / 0.75rem (JetBrains Mono)
- 行高: 1.5

## 字体选择

### 主字体
- **正文**: Inter, -apple-system, BlinkMacSystemFont, sans-serif
- **代码**: JetBrains Mono, Consolas, Monaco, monospace

### 为什么选择这些字体？
- **Inter**: 专为屏幕显示优化，在小字号下依然清晰
- **JetBrains Mono**: 编程字体，字符区分度高（如 0/O, 1/l/I）

## 键盘导航支持

- 所有交互元素支持 Tab 键导航
- 视频播放器支持键盘快捷键（空格、方向键等）
- 焦点状态有明显视觉反馈

## 屏幕阅读器优化

- 语义化 HTML 标签（header, nav, main, aside）
- 图标使用 aria-label 或文字说明
- 视频包含 controls 属性

## 对比度计算工具

推荐使用以下工具验证对比度：
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- Chrome DevTools Accessibility Panel

## 测试清单

- [ ] 所有文字对比度 ≥ 4.5:1 (AA 标准)
- [ ] 大文字对比度 ≥ 3:1 (AA 标准)
- [ ] 交互元素对比度 ≥ 3:1
- [ ] 支持 200% 缩放不破坏布局
- [ ] 键盘可访问所有功能
- [ ] 屏幕阅读器可读取所有内容

---

**最后更新**: 2025-02-03
**标准版本**: WCAG 2.1 Level AA
