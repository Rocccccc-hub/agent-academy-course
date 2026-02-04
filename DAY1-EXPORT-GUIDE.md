# 🎬 Day 1 导出指南（无字幕版 + SRT 字幕文件）

## ✅ 已准备好的文件

### 1. 无字幕视频版本
**文件**: `Day1UltimateNoSubtitles`
- ✅ 所有动画完整
- ✅ 统一的中文字体（PingFang SC / Microsoft YaHei）
- ❌ 视频中不包含字幕
- 🎯 **用于导出纯视频**

### 2. SRT 字幕文件
**文件**: `/Users/anker/Desktop/CC project/agent/day1-ultimate-subtitles.srt`
- ✅ 完整的时间轴（00:00:00 → 00:08:00）
- ✅ 57 条字幕
- ✅ 精确的开始/结束时间
- 🎯 **用于在视频编辑软件中添加字幕**

---

## 🚀 导出视频

### 方法 1：使用命令行（推荐）

```bash
cd "/Users/anker/Desktop/CC project/agent/remotion-videos"
npx remotion render Day1UltimateNoSubtitles out/day1-no-subtitles.mp4
```

**导出参数**:
- 分辨率: 1920x1080
- 帧率: 30fps
- 时长: 8 分钟（480 秒）
- 格式: MP4 (H.264)

### 方法 2：通过 Remotion Studio

1. 访问 http://localhost:3003
2. 选择 **"Day1UltimateNoSubtitles"**
3. 点击右上角的 "Render" 按钮
4. 选择输出位置
5. 点击 "Render video"

---

## 📝 在视频编辑软件中添加字幕

### Adobe Premiere Pro

1. 导入视频: `day1-no-subtitles.mp4`
2. 导入字幕文件: `day1-ultimate-subtitles.srt`
3. 在时间轴中，右键点击视频 → 字幕 → 添加字幕轨道
4. 将 SRT 文件拖到字幕轨道
5. 调整字幕样式:
   - 字体: PingFang SC / Microsoft YaHei
   - 大小: 32-36px
   - 颜色: 白色
   - 背景: 半透明黑色 (rgba(0,0,0,0.85))
   - 位置: 底部居中

### Final Cut Pro

1. 导入视频
2. 文件 → 导入 → 字幕 → 选择 `day1-ultimate-subtitles.srt`
3. 字幕会自动添加到时间轴
4. 在检查器中调整字幕样式

### DaVinci Resolve

1. 导入视频到时间轴
2. 文件 → 导入 → 字幕 → 选择 SRT 文件
3. 字幕会出现在字幕轨道
4. 在字幕面板中调整样式

### iMovie

1. 导入视频
2. 手动添加字幕（iMovie 不支持 SRT 自动导入）
3. 参考 SRT 文件的时间轴手动添加

### 在线工具（Kapwing）

1. 访问 https://www.kapwing.com
2. 上传 `day1-no-subtitles.mp4`
3. 点击 "Subtitles" → "Upload SRT"
4. 上传 `day1-ultimate-subtitles.srt`
5. 调整字幕样式
6. 导出视频

---

## 🎨 推荐的字幕样式

### 基础样式
```
字体: PingFang SC (macOS) / Microsoft YaHei (Windows)
大小: 32-36px
颜色: 白色 (#ffffff)
对齐: 底部居中
边距: 距底部 80px
```

### 背景样式
```
背景颜色: rgba(0, 0, 0, 0.85)
圆角: 16px
内边距: 20px 48px
边框: 2px solid rgba(255, 255, 255, 0.1)
模糊效果: backdrop-filter: blur(20px)
```

### 动画效果（可选）
```
淡入: 0.3秒
淡出: 0.3秒
```

---

## 📊 字幕时间轴概览

| 场景 | 时间范围 | 字幕数量 | 内容 |
|------|----------|----------|------|
| 场景1 开场 | 00:00 - 00:40 | 5条 | 课程介绍 |
| 场景2 三大组件 | 00:40 - 02:40 | 13条 | LLM、Tools、Memory |
| 场景3 ReAct循环 | 02:40 - 04:20 | 11条 | 思考-行动-观察-循环 |
| 场景4 代码实现 | 04:20 - 05:50 | 10条 | Agent 类代码 |
| 场景5 实际案例 | 05:50 - 07:20 | 11条 | 文件整理流程 |
| 场景6 总结 | 07:20 - 08:00 | 7条 | 核心要点回顾 |

---

## 🔧 自定义字幕

### 修改字幕文本

编辑 `day1-ultimate-subtitles.srt` 文件:

```srt
1
00:00:00,000 --> 00:00:06,000
你的新字幕内容
```

### SRT 格式说明

```srt
[序号]
[开始时间] --> [结束时间]
[字幕文本]
[空行]
```

**时间格式**: `HH:MM:SS,mmm`
- HH: 小时 (00-23)
- MM: 分钟 (00-59)
- SS: 秒 (00-59)
- mmm: 毫秒 (000-999)

---

## 🎙️ 配音选项

### 选项 1：使用 OpenAI TTS（推荐）

```bash
# 1. 设置 API Key
export OPENAI_API_KEY="your-key"

# 2. 生成配音
node scripts/generate-voiceover.js

# 3. 渲染带配音的视频
npx remotion render Day1UltimateWithAudio out/day1-with-audio.mp4
```

### 选项 2：使用其他配音工具

1. 导出无字幕视频: `Day1UltimateNoSubtitles`
2. 使用你喜欢的 TTS 工具生成音频:
   - 讯飞配音
   - 阿里云 TTS
   - Microsoft Azure TTS
   - 其他本地配音软件
3. 在视频编辑软件中:
   - 导入视频
   - 导入音频
   - 导入 SRT 字幕
   - 合成为最终视频

### 选项 3：人工配音

1. 参考 SRT 文件的时间轴
2. 录制配音
3. 在视频编辑软件中对齐

---

## 🎨 字体问题解决

### 问题：渲染的字体和预览不一致

**原因**: 系统默认字体在不同环境下可能不同

**解决**: Day1UltimateNoSubtitles 已经明确指定字体顺序:
```
-apple-system (macOS 系统字体)
PingFang SC (macOS 中文)
Hiragino Sans GB (macOS 中文备选)
Microsoft YaHei (Windows 中文)
sans-serif (通用无衬线字体)
```

### 确保字体一致性

**渲染时使用的字体**:
- macOS: PingFang SC（苹方）
- Windows: Microsoft YaHei（微软雅黑）

**建议**:
- 在 macOS 上渲染，字体会使用 PingFang SC
- 在 Windows 上渲染，字体会使用 Microsoft YaHei
- 两种字体都很适合教学视频

---

## 📝 完整工作流程

### 方式 A：纯视频 + 后期添加配音和字幕

```
1. 导出无字幕视频
   npx remotion render Day1UltimateNoSubtitles out/day1.mp4

2. 使用配音工具生成音频
   （讯飞、阿里云、Azure 等）

3. 在视频编辑软件中合成
   - 导入视频
   - 导入音频
   - 导入 day1-ultimate-subtitles.srt
   - 调整字幕样式
   - 导出最终视频
```

### 方式 B：使用 OpenAI TTS 一次性生成

```
1. 生成配音
   node scripts/generate-voiceover.js

2. 渲染带配音带字幕的完整视频
   npx remotion render Day1UltimateWithAudio out/day1-complete.mp4

3. 完成！
```

### 方式 C：混合方式

```
1. 导出无字幕视频
   npx remotion render Day1UltimateNoSubtitles out/day1.mp4

2. 生成 OpenAI 配音
   node scripts/generate-voiceover.js

3. 在视频编辑软件中
   - 导入视频
   - 导入 public/audio/scene*.mp3 音频文件
   - 导入 day1-ultimate-subtitles.srt
   - 微调音频和字幕时间轴
   - 导出最终视频
```

---

## 📊 版本对比

| 版本 | 用途 | 字幕 | 配音 | 推荐场景 |
|------|------|------|------|----------|
| Day1Ultimate | 预览 | ✅ 内嵌 | ❌ 无 | 快速查看效果 |
| Day1UltimateNoSubtitles | 导出 | ❌ 无 | ❌ 无 | 后期添加字幕和配音 |
| Day1UltimateWithAudio | 完整版 | ✅ 内嵌 | ✅ AI | 一次性生成成品 |

---

## ✅ 检查清单

### 导出前检查
- [ ] 选择了 Day1UltimateNoSubtitles
- [ ] 确认输出路径
- [ ] 确认分辨率 1920x1080
- [ ] 确认帧率 30fps

### 后期制作检查
- [ ] 视频已导入编辑软件
- [ ] SRT 字幕文件已导入
- [ ] 字幕样式已调整
- [ ] 配音已添加（如果有）
- [ ] 字幕和配音时间轴对齐
- [ ] 预览检查无误

### 导出最终视频
- [ ] 选择合适的编码格式（H.264）
- [ ] 设置合适的比特率（8-15 Mbps）
- [ ] 确认音频格式（AAC）
- [ ] 导出完成后检查

---

## 💡 提示和技巧

### 字幕时间微调
如果字幕和配音不完全同步:
1. 在视频编辑软件中整体偏移字幕轨道
2. 或者编辑 SRT 文件的时间码

### 配音语速调整
- 如果配音太快: 在 `day1-voiceover.json` 中设置 `speed: 0.9`
- 如果配音太慢: 设置 `speed: 1.1`

### 字幕样式预设
大多数视频编辑软件支持保存字幕样式预设，调整一次后可重复使用。

---

## 🎉 完成！

现在你有：
- ✅ **纯动画视频**（Day1UltimateNoSubtitles）
- ✅ **SRT 字幕文件**（day1-ultimate-subtitles.srt）
- ✅ **完整的字体定义**（确保渲染一致性）
- ✅ **灵活的后期制作选项**

**开始导出**:
```bash
npx remotion render Day1UltimateNoSubtitles out/day1-no-subtitles.mp4
```

**字幕文件位置**:
```
/Users/anker/Desktop/CC project/agent/day1-ultimate-subtitles.srt
```

祝创作顺利！🚀
