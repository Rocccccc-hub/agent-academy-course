import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import {
  Scene2Components,
  Scene3React,
  Scene4Code,
  Scene5Case,
  Scene6Outro,
} from "./scenes/Day1UltimateScenes";

/**
 * Day 1 Ultimate No Subtitles - 无字幕版本
 *
 * 用于导出纯视频，字幕单独使用 SRT 文件
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

export const Day1UltimateNoSubtitles: React.FC = () => {
  const fps = 30;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
      }}
    >
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
        </Sequence>
      ))}

      {/* 全局进度指示器 */}
      <ProgressBar />
    </AbsoluteFill>
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

  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 20, stiffness: 80, mass: 1 },
  });

  const titleY = spring({
    frame: frame - 40,
    fps,
    config: { damping: 25, stiffness: 100 },
  });

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
        <div
          style={{
            transform: `scale(${logoScale})`,
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
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
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
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
            }}
          >
            从原理到实践的完整指南
          </p>
        </div>

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
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
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

export default Day1UltimateNoSubtitles;
