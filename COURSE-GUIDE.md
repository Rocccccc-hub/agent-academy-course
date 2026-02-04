# Agent 开发 7天精通 - 使用指南

## 🎯 核心改进

### 1. 📹 **真正的教学视频**
- **不再是标题展示**，每个视频包含 3 个教学场景
- **场景 1**: 概念讲解（可视化图表、卡片动画）
- **场景 2**: 流程演示（ReAct 循环、架构图）
- **场景 3**: 代码实战（高亮显示、逐行解释）

**示例：Day 1 教学视频**
- 0:00-1:30: Agent 三大组件（LLM大脑、工具库、记忆系统）
- 1:30-3:00: ReAct 工作循环动画
- 3:00-4:30: 代码实现示例

### 2. 📚 **整合外部资源**
- **核心内容直接展示**：不需要跳转到外部网站
- **详细的概念解释**：包含表格对比、流程图、最佳实践
- **可复制的代码示例**：带注释的完整代码
- **原始链接保留**：作为"深入阅读"放在资源 Tab

### 3. 🎨 **三栏 Tailwind 布局**
```
┌──────────┬────────────────┬──────────┐
│ 左侧导航 │   中间主内容   │ 右侧补充 │
│  280px   │   flex-1       │  320px   │
├──────────┼────────────────┼──────────┤
│ • Logo   │ • 视频播放器   │ • 笔记   │
│ • 进度条 │ • 章节详情     │ • 资源   │
│ • 目录   │ • 核心要点     │ • 代码   │
└──────────┴────────────────┴──────────┘
```

### 4. ✨ **现代 UI 风格**
- **Tailwind CSS**：现代渐变、圆角、阴影
- **响应式设计**：大屏三栏、中屏两栏、小屏单栏
- **平滑动画**：Spring 动画、渐变过渡
- **配色方案**：Indigo-Purple 主题，专业且友好

---

## 🚀 快速开始

### 方式一：直接使用（推荐）

1. **打开课程页面**
   ```bash
   open "/Users/anker/Desktop/CC project/agent/course.html"
   ```

2. **开始学习**
   - 左侧选择天数
   - 中间观看视频并阅读章节
   - 右侧记笔记、查看资源

3. **Remotion 视频预览**
   ```bash
   cd "/Users/anker/Desktop/CC project/agent/remotion-videos"
   npm start
   ```
   - 浏览器打开 http://localhost:3003
   - 选择 "Day1Teaching" 查看教学视频
   - 实时编辑 `src/Day1Teaching.tsx` 预览效果

### 方式二：渲染视频

渲染教学视频到 MP4：
```bash
cd remotion-videos
npx remotion render Day1Teaching out/day1-teaching.mp4
```

---

## 📖 功能详解

### 左侧导航栏

**整体进度**
- 显示已完成天数和百分比
- 彩色进度条可视化

**课程目录**
- 每天显示图标、标题、时长
- 章节完成度进度条
- 当前选中高亮显示

**重置按钮**
- 清除所有进度和笔记
- 重新开始学习

### 中间主内容

**视频播放器**
- 标准 HTML5 视频控制
- 自动记住观看位置
- 视频结束自动提示下一天

**章节卡片**
- 渐变顶栏显示章节标题
- 播放按钮跳转到对应时间点
- 完成按钮标记已学习
- 详细内容：概念讲解、表格对比、核心要点
- 代码高亮显示

### 右侧补充栏

**📝 笔记 Tab**
- 当前章节笔记编辑器
- 自动保存到 localStorage
- 支持 Markdown 格式

**📚 资源 Tab**
- 核心概念卡片（章节导航）
- 深入阅读链接（外部文档）

**💻 代码 Tab**
- 当前章节代码示例
- 一键复制功能
- 最佳实践列表

---

## 🎬 Remotion 视频制作

### 视频组件结构

```
remotion-videos/src/
├── Day1Teaching.tsx        # 教学视频主文件
├── components/
│   ├── CodeBlock.tsx       # 代码展示组件
│   ├── DiagramFlow.tsx     # 流程图动画
│   ├── ConceptCard.tsx     # 概念卡片
│   ├── AppleGradient.tsx   # 背景渐变
│   └── FloatingElement.tsx # 漂浮动画
└── Root.tsx               # 注册所有组件
```

### 创建新的教学视频

**步骤 1: 复制模板**
```bash
cp src/Day1Teaching.tsx src/Day2Teaching.tsx
```

**步骤 2: 修改场景内容**
```typescript
// 修改概念卡片
<ConceptCard
  title="你的标题"
  description="你的描述"
  icon="🎯"
  delay={30}
  color="#6366f1"
/>

// 修改流程图
const nodes = [
  { id: "node1", label: "步骤1", x: 200, y: 200, color: "#6366f1" },
  { id: "node2", label: "步骤2", x: 600, y: 200, color: "#8b5cf6" },
];

// 修改代码示例
const codeExample = `
// 你的代码
function example() {
  return "Hello World";
}
`;
```

**步骤 3: 注册组件**
在 `Root.tsx` 中添加：
```typescript
import { Day2Teaching } from "./Day2Teaching";

<Composition
  id="Day2Teaching"
  component={Day2Teaching}
  durationInFrames={270}
  fps={30}
  width={1920}
  height={1080}
/>
```

**步骤 4: 预览和渲染**
```bash
npm start                           # 预览
npx remotion render Day2Teaching out/day2.mp4  # 渲染
```

---

## 💡 学习建议

### 高效学习流程

1. **先看视频（3-5分钟）**
   - 快速理解核心概念
   - 了解工作流程
   - 看代码示例

2. **再读详细内容（10-15分钟）**
   - 深入理解理论
   - 查看对比表格
   - 阅读最佳实践

3. **动手实践（20-30分钟）**
   - 复制代码到本地
   - 运行示例
   - 修改参数实验

4. **记笔记和总结（5分钟）**
   - 右侧笔记区记录要点
   - 标记完成章节
   - 收藏重要资源

### 进度管理

- ✅ **每天完成** = 看完视频 + 读完章节 + 完成项目
- 📌 **标记章节** = 点击章节右上角的圆圈
- 💾 **自动保存** = 进度、笔记自动存储到浏览器

---

## 🔧 自定义扩展

### 修改配色

编辑 `course.html` 中的 Tailwind 配置：
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#你的主色',  // 改这里
                    600: '#你的深色',
                }
            }
        }
    }
}
```

### 添加新的章节内容

编辑 `course-data.js`：
```javascript
{
    id: "new-chapter",
    title: "新章节标题",
    timestamp: 120,  // 视频时间点（秒）
    content: `HTML 内容...`,
    corePoints: ["要点1", "要点2"],
    codeExample: "代码示例...",
    bestPractices: ["实践1", "实践2"]
}
```

### 集成真实视频

1. **渲染 Remotion 视频**
   ```bash
   npx remotion render Day1Teaching out/day1.mp4
   ```

2. **更新 course-data.js**
   ```javascript
   videoUrl: "./remotion-videos/out/day1.mp4"
   ```

3. **刷新页面**
   - 视频将自动加载
   - 占位符消失

---

## 📊 数据管理

### localStorage 存储结构

```javascript
{
  days: {
    1: {
      completed: false,
      watchedTime: 123,  // 观看到第123秒
      chaptersCompleted: ["concept", "react-pattern"]
    }
  },
  notes: {
    day1: "我的笔记内容..."
  },
  bookmarks: []
}
```

### 导出数据

打开浏览器控制台：
```javascript
// 导出进度
const data = localStorage.getItem('agentCourseProgressV2');
console.log(JSON.parse(data));

// 备份到文件
const blob = new Blob([data], { type: 'application/json' });
const url = URL.createObjectURL(blob);
// 右键保存
```

---

## 🎯 下一步

1. ✅ **完成 Day 1** - 理解 Agent 基础
2. 🎬 **创建 Day 2-7 教学视频** - 复制模板修改内容
3. 📝 **丰富课程数据** - 添加更多示例和练习
4. 🚀 **部署到网站** - 上传到服务器或 GitHub Pages

---

## ❓ 常见问题

**Q: 视频播放不了？**
A: 确保视频文件路径正确，或等待 Remotion 渲染完成

**Q: 进度丢失了？**
A: 检查浏览器是否清除了 localStorage，建议定期导出备份

**Q: Remotion 启动失败？**
A: 确保安装了依赖：`npm install`

**Q: 如何分享课程？**
A: 将整个 `agent` 文件夹压缩发送，接收者直接打开 `course.html`

---

**🎓 祝学习愉快！从零到 Agent 专家，只需 7 天！**
