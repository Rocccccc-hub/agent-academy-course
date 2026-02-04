import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  Easing,
} from "remotion";
import {
  Scene2Components,
  Scene3React,
  Scene4Code,
  Scene5Case,
  Scene6Outro,
} from "./scenes/Day1UltimateScenes";

/**
 * Day 1 Ultimate - 终极动画版本
 *
 * 特点：
 * - Apple风格的流畅动画
 * - 丰富的视觉效果和过渡
 * - AI配音和同步字幕
 * - 完整的内容展示
 */

// 场景配置
const SCENES = [
  { id: 1, start: 0, duration: 40, title: "开场" },
  { id: 2, start: 40, duration: 120, title: "三大组件" },
  { id: 3, start: 160, duration: 100, title: "ReAct循环" },
  { id: 4, start: 260, duration: 90, title: "代码实现" },
  { id: 5, start: 350, duration: 90, title: "实际案例" },
  { id: 6, start: 440, duration: 40, title: "总结" },
];

// 字幕数据
const SUBTITLES = {
  1: [
    { start: 0, end: 6, text: "欢迎来到 AI Agent 架构基础课程" },
    { start: 6, end: 12, text: "我们将从原理到实践，全面掌握 Agent 系统" },
    { start: 12, end: 18, text: "Agent 不仅仅是聊天机器人" },
    { start: 18, end: 24, text: "它能够自主思考、规划、执行任务" },
    { start: 24, end: 40, text: "让我们开始这段激动人心的旅程" }
  ],
  2: [
    { start: 40, end: 46, text: "Agent 由三个核心组件构成" },
    { start: 46, end: 52, text: "首先是 LLM 大脑 - 决策中枢" },
    { start: 52, end: 58, text: "LLM 理解意图、制定计划" },
    { start: 58, end: 64, text: "选择工具、评估结果" },
    { start: 64, end: 70, text: "LLM 是 Agent 的智慧源泉" },
    { start: 70, end: 76, text: "第二个组件是工具库" },
    { start: 76, end: 82, text: "工具是与外部世界交互的接口" },
    { start: 82, end: 88, text: "文件操作、API调用、数据库查询" },
    { start: 88, end: 94, text: "工具库决定了 Agent 的能力边界" },
    { start: 94, end: 100, text: "第三个组件是记忆系统" },
    { start: 100, end: 106, text: "存储对话历史和任务状态" },
    { start: 106, end: 112, text: "记忆保持上下文连贯性" },
    { start: 112, end: 120, text: "三个组件协同构成强大系统" }
  ],
  3: [
    { start: 160, end: 166, text: "Agent 的核心是 ReAct 循环" },
    { start: 166, end: 172, text: "ReAct = 推理 + 行动" },
    { start: 172, end: 178, text: "第一步：思考 - 分析当前情况" },
    { start: 178, end: 184, text: "理解目标，规划下一步" },
    { start: 184, end: 190, text: "第二步：行动 - 选择执行工具" },
    { start: 190, end: 196, text: "查询天气、搜索信息、读取文件" },
    { start: 196, end: 202, text: "第三步：观察 - 接收工具结果" },
    { start: 202, end: 208, text: "结果作为新的输入信息" },
    { start: 208, end: 214, text: "第四步：循环 - 评估任务完成度" },
    { start: 214, end: 220, text: "未完成则继续思考" },
    { start: 220, end: 226, text: "循环直到任务完全完成" },
    { start: 226, end: 260, text: "ReAct 让 Agent 处理复杂任务" }
  ],
  4: [
    { start: 260, end: 266, text: "Agent 类需要三个组件" },
    { start: 266, end: 272, text: "LLM、工具列表、记忆系统" },
    { start: 272, end: 278, text: "运行方法是一个异步循环" },
    { start: 278, end: 284, text: "首先调用 LLM 进行思考" },
    { start: 284, end: 290, text: "传入目标、历史、可用工具" },
    { start: 290, end: 296, text: "然后执行 LLM 选择的工具" },
    { start: 296, end: 302, text: "将结果记录到记忆系统" },
    { start: 302, end: 308, text: "判断任务是否完成" },
    { start: 308, end: 314, text: "未完成则继续循环" },
    { start: 314, end: 350, text: "这个架构赋予 AI 强大的自主能力" }
  ],
  5: [
    { start: 350, end: 356, text: "案例：整理下载文件夹" },
    { start: 356, end: 362, text: "Agent 思考：需要先查看文件" },
    { start: 362, end: 368, text: "执行 list_files 工具" },
    { start: 368, end: 374, text: "观察：50个文件，15个PDF，20个图片" },
    { start: 374, end: 380, text: "再次思考：按类型创建文件夹" },
    { start: 380, end: 386, text: "执行 create_folders 工具" },
    { start: 386, end: 392, text: "观察：3个文件夹创建成功" },
    { start: 392, end: 398, text: "继续思考：移动文件到对应文件夹" },
    { start: 398, end: 404, text: "执行 move_files_by_type 工具" },
    { start: 404, end: 410, text: "任务完成：50个文件已整理" },
    { start: 410, end: 440, text: "这展示了 Agent 的自主规划能力" }
  ],
  6: [
    { start: 440, end: 446, text: "核心要点：三大组件协同工作" },
    { start: 446, end: 452, text: "ReAct 循环：思考-行动-观察" },
    { start: 452, end: 458, text: "Agent 是可编程的" },
    { start: 458, end: 464, text: "可以解决真实世界的问题" },
    { start: 464, end: 470, text: "下一节：提示工程与 Agent 控制" },
    { start: 470, end: 480, text: "感谢观看，下节课见" }
  ]
};

export const Day1Ultimate: React.FC = () => {
  const fps = 30;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {SCENES.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.start * fps}
          durationInFrames={scene.duration * fps}
        >
          {scene.id === 1 && <Scene1Opening />}
          {scene.id === 2 && <Scene2Components />}
          {scene.id === 3 && <Scene3React />}
          {scene.id === 4 && <Scene4Code />}
          {scene.id === 5 && <Scene5Case />}
          {scene.id === 6 && <Scene6Outro />}

          {/* 字幕 */}
          <SubtitleDisplay
            subtitles={SUBTITLES[scene.id]}
            sceneStart={scene.start}
          />
        </Sequence>
      ))}

      {/* 全局进度指示器 */}
      <ProgressBar />
    </AbsoluteFill>
  );
};

// ===== 字幕组件 =====
const SubtitleDisplay: React.FC<{
  subtitles: Array<{ start: number; end: number; text: string }>;
  sceneStart: number;
}> = ({ subtitles, sceneStart }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = sceneStart + frame / fps;

  const currentSubtitle = subtitles.find(
    (sub) => currentTime >= sub.start && currentTime < sub.end
  );

  if (!currentSubtitle) return null;

  const progress = (currentTime - currentSubtitle.start) / (currentSubtitle.end - currentSubtitle.start);
  const opacity = interpolate(
    progress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: "80px",
        left: "10%",
        right: "10%",
        textAlign: "center",
        opacity,
      }}
    >
      <div
        style={{
          display: "inline-block",
          background: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(20px)",
          padding: "20px 48px",
          borderRadius: "16px",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "32px",
            color: "white",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {currentSubtitle.text}
        </p>
      </div>
    </div>
  );
};

// ===== 进度条组件 =====
const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = (frame / durationInFrames) * 100;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #667eea, #764ba2)",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
};

// ===== 场景 1: 开场 =====
const Scene1Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 多层动画序列
  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 80, mass: 1 },
  });

  const logoRotate = interpolate(frame, [0, 120], [0, 360], {
    extrapolateRight: "clamp",
  });

  const titleY = spring({
    frame: frame - 40,
    fps,
    config: { damping: 25, stiffness: 100 },
  });

  // 粒子效果参数
  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.sin(i * 0.5 + frame * 0.05) * 800,
    y: Math.cos(i * 0.7 + frame * 0.03) * 400,
    size: 10 + Math.sin(i + frame * 0.1) * 8,
    opacity: 0.3 + Math.sin(i + frame * 0.08) * 0.2,
  }));

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 50%, #1a0033 0%, #000000 100%)",
        overflow: "hidden",
      }}
    >
      {/* 背景粒子 */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(102, 126, 234, ${p.opacity}), transparent)`,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* 主内容容器 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px",
        }}
      >
        {/* Logo 动画 */}
        <div
          style={{
            transform: `scale(${logoScale}) rotate(${interpolate(logoScale, [0, 1], [0, 0])})`,
            filter: `drop-shadow(0 ${20 * logoScale}px ${60 * logoScale}px rgba(102, 126, 234, 0.6))`,
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              fontSize: "200px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(102, 126, 234, 0.8))",
            }}
          >
            🤖
          </div>
        </div>

        {/* 标题动画 */}
        <div
          style={{
            opacity: interpolate(titleY, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(titleY, [0, 1], [50, 0])}px)`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "96px",
              fontWeight: 900,
              background: "linear-gradient(135deg, #ffffff 0%, #a0a0ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "32px",
              letterSpacing: "-0.02em",
              textShadow: "0 0 80px rgba(102, 126, 234, 0.5)",
            }}
          >
            Agent 架构基础
          </h1>
          <p
            style={{
              fontSize: "42px",
              color: "rgba(255, 255, 255, 0.8)",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            从原理到实践的完整指南
          </p>
        </div>

        {/* 底部标签 */}
        <div
          style={{
            position: "absolute",
            bottom: "120px",
            display: "flex",
            gap: "24px",
          }}
        >
          {[
            { icon: "📚", text: "概念讲解", delay: 70 },
            { icon: "💻", text: "代码实战", delay: 80 },
            { icon: "🎯", text: "实际案例", delay: 90 },
          ].map((item, i) => {
            const progress = spring({
              frame: frame - item.delay,
              fps,
              config: { damping: 20 },
            });

            return (
              <div
                key={i}
                style={{
                  opacity: progress,
                  transform: `translateY(${interpolate(progress, [0, 1], [40, 0])}px) scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
                  background: "rgba(102, 126, 234, 0.15)",
                  backdropFilter: "blur(20px)",
                  padding: "16px 32px",
                  borderRadius: "100px",
                  border: "2px solid rgba(102, 126, 234, 0.3)",
                  boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)",
                }}
              >
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {item.icon} {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// Scene 2-6 将在下一个文件继续...

export default Day1Ultimate;
