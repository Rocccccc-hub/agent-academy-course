# 零代码 Agent 开发 - 7天精通计划

一个完整的 Agent 开发学习平台，包含交互式课程和 iOS 风格动画讲解。

## 📁 项目结构

```
agent/
├── index.html              # 交互式课程主页面
├── remotion-videos/        # Remotion 动画项目
│   ├── src/
│   │   ├── Day1.tsx - Day7.tsx  # 7天课程动画
│   │   ├── components/          # 共享组件
│   │   │   ├── AppleGradient.tsx   # iOS 风格渐变背景
│   │   │   ├── FloatingElement.tsx  # 漂浮动画
│   │   │   └── AppleText.tsx        # 文字动画
│   │   └── Root.tsx                 # Remotion 入口
│   └── package.json
└── README.md
```

## 🚀 快速开始

### 1. 打开交互式课程

直接在浏览器中打开 `index.html` 文件：

```bash
open index.html
```

**功能特性：**
- ✅ 7天完整课程内容
- ✅ 可展开/折叠的章节
- ✅ 学习进度自动保存
- ✅ 每节完成后自动勾选
- ✅ 响应式设计

### 2. 运行 Remotion 动画

```bash
cd remotion-videos
npm install
npm start
```

浏览器会自动打开 Remotion Studio，你可以预览和编辑所有 7 个动画。

### 3. 渲染视频

渲染单个视频：
```bash
npm run render-day1  # 渲染 Day 1
npm run render-day2  # 渲染 Day 2
# ... 以此类推
```

渲染所有视频：
```bash
npm run render-all
```

渲染后的视频会保存在 `out/` 目录。

## 🎨 设计风格

### 交互式课程 (HTML)
- **深色主题** - 科技感的深色配色
- **渐变设计** - 紫色到粉色的渐变系统
- **流畅动画** - 展开/折叠、悬停效果
- **字体** - Manrope + Fira Code

### Remotion 动画 (iOS 风格)
- **纯净背景** - 白色背景 + 流体渐变
- **漂浮效果** - 元素轻微上下浮动
- **Spring 动画** - 自然的弹性动画
- **极简文案** - 大字号、高对比度
- **每天不同配色** - 7种独特的渐变方案

## 📚 课程内容

### Day 1: Agent 架构基础
- Agent 核心概念
- 工具调用机制
- 动手项目：文件管理 Agent

### Day 2: 提示工程与控制
- System Prompt 设计
- 多步推理优化
- 动手项目：增强版 Agent

### Day 3: MCP 与工具生态
- MCP 协议基础
- 创建自定义工具
- 工具组合策略

### Day 4: Agent 记忆系统
- 上下文窗口管理
- 记忆系统设计
- 动手项目：项目管理 Agent

### Day 5: Agent 编排模式
- Agent 编排模式
- 高级 Agent 模式
- 动手项目：内容创作系统

### Day 6: 实战项目开发
- 项目规划
- 开发实现
- 测试与优化

### Day 7: 部署与进阶
- 部署方案
- 进阶主题
- 后续学习路径

## 💡 使用提示

### HTML 课程
1. 点击侧边栏切换天数
2. 点击章节标题展开/折叠内容
3. 点击复选框标记完成
4. 进度自动保存在浏览器本地存储
5. 点击右下角🔄按钮重置进度

### Remotion 动画
1. 在 Studio 中实时预览
2. 修改 `src/Day*.tsx` 自定义动画
3. 调整 `durationInFrames` 改变视频长度
4. 使用 `interpolate` 和 `spring` 创建动画

## 🛠️ 技术栈

### HTML 课程
- Vanilla JavaScript (无框架)
- CSS Grid + Flexbox
- localStorage API
- Google Fonts (Manrope + Fira Code)

### Remotion 动画
- React 19
- Remotion 4.0
- TypeScript
- Spring 动画

## 🎯 下一步

1. **完成课程** - 跟随7天计划系统学习
2. **实践项目** - 动手实现每天的项目
3. **自定义动画** - 修改 Remotion 代码创建你的风格
4. **分享成果** - 将渲染的视频用于教学或社交媒体

## 📝 许可

MIT License - 自由使用和修改

---

**Made with ❤️ for Agent Developers**
