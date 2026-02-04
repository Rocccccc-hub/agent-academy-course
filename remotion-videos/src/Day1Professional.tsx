import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { DiagramFlow } from "./components/DiagramFlow";
import { CodeBlock } from "./components/CodeBlock";
import {
  Scene3React,
  Scene4Code,
  Scene5Case,
  Scene6Outro,
  BackgroundCircles,
  ProgressIndicator,
} from "./scenes/Day1ProfessionalScenes";

/**
 * Day 1 Professional - 完整的专业级教学视频
 *
 * 不依赖外部音频文件，可以直接预览
 * 包含完整的6个场景
 */

// 场景时长配置（秒）
const SCENE_CONFIG = {
  scene1: { start: 0, duration: 40 },      // 开场
  scene2: { start: 40, duration: 120 },    // 三大组件
  scene3: { start: 160, duration: 100 },   // ReAct循环
  scene4: { start: 260, duration: 90 },    // 代码实现
  scene5: { start: 350, duration: 90 },    // 实际案例
  scene6: { start: 440, duration: 40 },    // 总结
};

const getTotalDuration = () => {
  return Object.values(SCENE_CONFIG).reduce((sum, scene) => sum + scene.duration, 0);
};

export const Day1Professional: React.FC = () => {
  const fps = 30;
  const totalDuration = getTotalDuration();

  return (
    <AbsoluteFill style={{ backgroundColor: "#ffffff" }}>
      {/* 场景 1: 开场 */}
      <Sequence
        from={SCENE_CONFIG.scene1.start * fps}
        durationInFrames={SCENE_CONFIG.scene1.duration * fps}
      >
        <Scene1Opening />
      </Sequence>

      {/* 场景 2: 三大组件 */}
      <Sequence
        from={SCENE_CONFIG.scene2.start * fps}
        durationInFrames={SCENE_CONFIG.scene2.duration * fps}
      >
        <Scene2Components />
      </Sequence>

      {/* 场景 3: ReAct 循环 */}
      <Sequence
        from={SCENE_CONFIG.scene3.start * fps}
        durationInFrames={SCENE_CONFIG.scene3.duration * fps}
      >
        <Scene3React />
      </Sequence>

      {/* 场景 4: 代码实现 */}
      <Sequence
        from={SCENE_CONFIG.scene4.start * fps}
        durationInFrames={SCENE_CONFIG.scene4.duration * fps}
      >
        <Scene4Code />
      </Sequence>

      {/* 场景 5: 实际案例 */}
      <Sequence
        from={SCENE_CONFIG.scene5.start * fps}
        durationInFrames={SCENE_CONFIG.scene5.duration * fps}
      >
        <Scene5Case />
      </Sequence>

      {/* 场景 6: 总结 */}
      <Sequence
        from={SCENE_CONFIG.scene6.start * fps}
        durationInFrames={SCENE_CONFIG.scene6.duration * fps}
      >
        <Scene6Outro />
      </Sequence>

      {/* 底部进度指示器 */}
      <ProgressIndicator totalDuration={totalDuration} />
    </AbsoluteFill>
  );
};

// ===== 场景 1: 开场 =====
const Scene1Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景装饰 */}
      <BackgroundCircles />

      {/* 主内容 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
            transform: `scale(${interpolate(frame, [0, 30], [0.5, 1], { extrapolateRight: "clamp" })})`,
          }}
        >
          <div style={{ fontSize: "180px", filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.3))" }}>
            🤖
          </div>
        </div>

        {/* 标题 */}
        <div
          style={{
            opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [20, 40], [30, 0], { extrapolateRight: "clamp" })}px)`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "140px",
              fontWeight: 900,
              color: "white",
              marginBottom: "32px",
              textShadow: "0 10px 40px rgba(0,0,0,0.3)",
              letterSpacing: "-0.04em",
            }}
          >
            Agent 架构基础
          </h1>
          <p
            style={{
              fontSize: "52px",
              color: "rgba(255,255,255,0.95)",
              fontWeight: 600,
              lineHeight: 1.4,
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
            gap: "32px",
          }}
        >
          {[
            { icon: "📚", text: "概念讲解" },
            { icon: "💻", text: "代码实战" },
            { icon: "🎯", text: "实际案例" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                opacity: interpolate(frame, [60 + i * 8, 80 + i * 8], [0, 1], { extrapolateRight: "clamp" }),
                transform: `translateY(${interpolate(frame, [60 + i * 8, 80 + i * 8], [20, 0], { extrapolateRight: "clamp" })}px)`,
                background: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                padding: "24px 48px",
                borderRadius: "100px",
                border: "3px solid rgba(255,255,255,0.3)",
              }}
            >
              <span style={{ fontSize: "32px", fontWeight: 700, color: "white" }}>
                {item.icon} {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== 场景 2: 三大组件 =====
const Scene2Components: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const components = [
    {
      icon: "🧠",
      title: "LLM 大脑",
      subtitle: "决策中枢",
      features: ["理解意图", "制定计划", "选择工具", "评估结果"],
      color: "#6366f1",
      delay: 30,
    },
    {
      icon: "🔧",
      title: "工具库",
      subtitle: "执行接口",
      features: ["文件操作", "API 调用", "数据库查询", "代码执行"],
      color: "#8b5cf6",
      delay: 60,
    },
    {
      icon: "💾",
      title: "记忆系统",
      subtitle: "上下文管理",
      features: ["对话历史", "任务状态", "中间结果", "执行日志"],
      color: "#a855f7",
      delay: 90,
    },
  ];

  return (
    <AbsoluteFill style={{ background: "#ffffff", padding: "80px" }}>
      {/* 标题 */}
      <div
        style={{
          opacity: interpolate(frame, [0, 25], [0, 1], { extrapolateRight: "clamp" }),
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "88px",
            fontWeight: 800,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "24px",
          }}
        >
          Agent 的三大组件
        </h2>
        <p style={{ fontSize: "40px", color: "#666" }}>缺一不可的核心架构</p>
      </div>

      {/* 组件卡片 */}
      <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
        {components.map((comp, i) => (
          <ComponentCard key={i} {...comp} frame={frame} fps={fps} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// 组件卡片
const ComponentCard: React.FC<any> = ({ icon, title, subtitle, features, color, delay, frame, fps }) => {
  const progress = spring({ frame: frame - delay, fps, config: { damping: 80 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [60, 0]);
  const scale = interpolate(progress, [0, 1], [0.9, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        flex: 1,
        maxWidth: "420px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "32px",
          padding: "48px",
          boxShadow: "0 24px 72px rgba(0,0,0,0.12)",
          border: `4px solid ${color}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景装饰 */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 240,
            height: 240,
            background: `linear-gradient(135deg, ${color}40, ${color}10)`,
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />

        {/* 图标 */}
        <div style={{ fontSize: "120px", textAlign: "center", marginBottom: "28px" }}>
          {icon}
        </div>

        {/* 标题 */}
        <h3
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "28px",
            color: color,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "36px",
          }}
        >
          {subtitle}
        </p>

        {/* 功能列表 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {features.map((feature: string, i: number) => (
            <div
              key={i}
              style={{
                padding: "18px 28px",
                background: `${color}15`,
                borderRadius: "14px",
                fontSize: "24px",
                fontWeight: 600,
                color: color,
                textAlign: "center",
                opacity: interpolate(frame, [delay + 25 + i * 6, delay + 40 + i * 6], [0, 1], {
                  extrapolateRight: "clamp",
                }),
                transform: `translateX(${interpolate(frame, [delay + 25 + i * 6, delay + 40 + i * 6], [-30, 0], {
                  extrapolateRight: "clamp",
                })}px)`,
              }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Day1Professional;
