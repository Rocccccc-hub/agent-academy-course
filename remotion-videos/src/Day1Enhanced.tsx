import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { Subtitles } from "./components/Subtitles";

// 导入配音脚本
import narrationData from "../scripts/day1-narration.json";

/**
 * Day 1 Enhanced - 带配音和字幕的完整版本
 *
 * 使用方法：
 * 1. 先运行 node scripts/generate-audio.js 生成配音
 * 2. 在 Remotion Studio 中预览此组件
 */
export const Day1Enhanced: React.FC = () => {
  const scenes = narrationData.scenes;
  const fps = 30;

  return (
    <AbsoluteFill style={{ backgroundColor: "#ffffff" }}>
      {scenes.map((scene, index) => {
        const startFrame = scene.startTime * fps;
        const durationFrames = scene.duration * fps;

        return (
          <Sequence
            key={scene.scene}
            from={startFrame}
            durationInFrames={durationFrames}
          >
            {/* 场景内容 */}
            {index === 0 && <Scene1Opening />}
            {index === 1 && <Scene2Components />}
            {/* 更多场景... */}

            {/* 配音音频 */}
            <Audio src={`/audio/scene${scene.scene}.mp3`} />

            {/* 字幕 */}
            <Subtitles subtitles={scene.subtitles} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

// 场景 1: 开场（优化版）
const Scene1Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 80 },
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景装饰 - 流动的圆圈 */}
      <BackgroundCircles />

      {/* Logo 动画 */}
      <div
        style={{
          opacity: titleProgress,
          transform: `scale(${interpolate(titleProgress, [0, 1], [0.5, 1])})`,
        }}
      >
        <div
          style={{
            fontSize: "160px",
            marginBottom: "40px",
            filter: "drop-shadow(0 10px 40px rgba(0,0,0,0.3))",
          }}
        >
          🤖
        </div>
      </div>

      {/* 主标题 */}
      <div
        style={{
          opacity: interpolate(frame, [20, 40], [0, 1], {
            extrapolateRight: "clamp",
          }),
          transform: `translateY(${interpolate(frame, [20, 40], [30, 0], {
            extrapolateRight: "clamp",
          })}px)`,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            fontWeight: 900,
            color: "white",
            marginBottom: "32px",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.03em",
            textShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          Agent 架构基础
        </h1>

        <p
          style={{
            fontSize: "48px",
            color: "rgba(255,255,255,0.95)",
            fontWeight: 600,
            lineHeight: 1.4,
            maxWidth: "1200px",
          }}
        >
          从原理到实践的完整指南
        </p>
      </div>

      {/* 标签 */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          display: "flex",
          gap: "32px",
          opacity: interpolate(frame, [60, 80], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        {["📚 概念讲解", "💻 代码实战", "🎯 实际案例"].map((label, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              padding: "20px 40px",
              borderRadius: "100px",
              fontSize: "28px",
              fontWeight: 600,
              color: "white",
              border: "2px solid rgba(255,255,255,0.3)",
              transform: `translateY(${interpolate(
                frame,
                [60 + i * 5, 80 + i * 5],
                [20, 0],
                {
                  extrapolateRight: "clamp",
                }
              )}px)`,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// 场景 2: 三大组件（优化版）
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
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      delay: 30,
    },
    {
      icon: "🔧",
      title: "工具库",
      subtitle: "执行接口",
      features: ["文件操作", "API 调用", "数据库", "代码执行"],
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
      delay: 60,
    },
    {
      icon: "💾",
      title: "记忆系统",
      subtitle: "上下文管理",
      features: ["对话历史", "任务状态", "中间结果", "上下文"],
      color: "#a855f7",
      gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
      delay: 90,
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "#ffffff",
        padding: "80px",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateRight: "clamp",
          }),
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "80px",
            fontWeight: 800,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "24px",
          }}
        >
          Agent 的三大组件
        </h2>
        <p style={{ fontSize: "36px", color: "#666" }}>
          缺一不可的核心架构
        </p>
      </div>

      {/* 组件卡片 */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {components.map((comp, index) => (
          <ComponentCard key={index} {...comp} frame={frame} fps={fps} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// 组件卡片（优化版）
const ComponentCard: React.FC<{
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
  color: string;
  gradient: string;
  delay: number;
  frame: number;
  fps: number;
}> = ({ icon, title, subtitle, features, color, gradient, delay, frame, fps }) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 80, stiffness: 100 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [50, 0]);
  const scale = interpolate(progress, [0, 1], [0.9, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        flex: 1,
        maxWidth: "400px",
      }}
    >
      {/* 卡片 */}
      <div
        style={{
          background: "white",
          borderRadius: "32px",
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          border: `4px solid ${color}`,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景渐变装饰 */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 200,
            height: 200,
            background: gradient,
            borderRadius: "50%",
            opacity: 0.1,
            filter: "blur(40px)",
          }}
        />

        {/* 图标 */}
        <div
          style={{
            fontSize: "100px",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          {icon}
        </div>

        {/* 标题 */}
        <h3
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "24px",
            color: color,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          {subtitle}
        </p>

        {/* 功能列表 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                padding: "16px 24px",
                background: `${color}10`,
                borderRadius: "12px",
                fontSize: "22px",
                fontWeight: 600,
                color: color,
                textAlign: "center",
                opacity: interpolate(
                  frame,
                  [delay + 20 + i * 5, delay + 35 + i * 5],
                  [0, 1],
                  { extrapolateRight: "clamp" }
                ),
                transform: `translateX(${interpolate(
                  frame,
                  [delay + 20 + i * 5, delay + 35 + i * 5],
                  [-20, 0],
                  { extrapolateRight: "clamp" }
                )}px)`,
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

// 背景装饰圆圈
const BackgroundCircles: React.FC = () => {
  const frame = useCurrentFrame();

  const circles = [
    { x: 100, y: 100, size: 200, speed: 0.5 },
    { x: 1700, y: 200, size: 300, speed: 0.3 },
    { x: 300, y: 900, size: 250, speed: 0.4 },
    { x: 1600, y: 850, size: 180, speed: 0.6 },
  ];

  return (
    <>
      {circles.map((circle, i) => {
        const offset = Math.sin((frame * circle.speed) / 30) * 30;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: circle.x,
              top: circle.y + offset,
              width: circle.size,
              height: circle.size,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(2px)",
              opacity: 0.6,
            }}
          />
        );
      })}
    </>
  );
};
