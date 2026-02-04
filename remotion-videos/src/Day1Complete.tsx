import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Sequence,
  spring,
} from "remotion";
import { ConceptCard } from "./components/ConceptCard";
import { DiagramFlow } from "./components/DiagramFlow";
import { CodeBlock } from "./components/CodeBlock";
import {
  Scene3React,
  Scene4Code,
  Scene5Case,
  Scene6Outro,
} from "./scenes/Day1Scenes";

// 场景时长配置（30fps）
const SCENE_DURATIONS = {
  intro: 30,        // 1分钟 = 30秒 * 30fps = 900帧，简化为30秒
  components: 60,   // 2分钟
  react: 60,        // 2分钟
  code: 60,         // 2分钟
  case: 60,         // 2分钟
  outro: 30,        // 1分钟
};

const getTotalDuration = () => {
  return Object.values(SCENE_DURATIONS).reduce((a, b) => a + b, 0);
};

export const Day1Complete: React.FC = () => {
  let currentFrame = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#ffffff" }}>
      {/* 场景 1: 开场 + Agent 定义 */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.intro * 30}>
        <Scene1Intro />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.intro * 30)}

      {/* 场景 2: 三大组件详解 */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.components * 30}>
        <Scene2Components />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.components * 30)}

      {/* 场景 3: ReAct 循环 */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.react * 30}>
        <Scene3React />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.react * 30)}

      {/* 场景 4: 代码实现 */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.code * 30}>
        <Scene4Code />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.code * 30)}

      {/* 场景 5: 实际案例 */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.case * 30}>
        <Scene5Case />
      </Sequence>
      {(currentFrame += SCENE_DURATIONS.case * 30)}

      {/* 场景 6: 总结 */}
      <Sequence from={currentFrame} durationInFrames={SCENE_DURATIONS.outro * 30}>
        <Scene6Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

// 场景 1: 开场 + Agent 定义
const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const subtitleProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 100 },
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
      }}
    >
      {/* 主标题 */}
      <div
        style={{
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [50, 0])}px) scale(${interpolate(titleProgress, [0, 1], [0.9, 1])})`,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "120px", marginBottom: "40px" }}>🤖</div>
        <h1
          style={{
            fontSize: "96px",
            fontWeight: 900,
            color: "white",
            marginBottom: "32px",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Agent 架构基础
        </h1>
      </div>

      {/* 副标题 */}
      <div
        style={{
          opacity: subtitleProgress,
          transform: `translateY(${interpolate(subtitleProgress, [0, 1], [30, 0])}px)`,
        }}
      >
        <p
          style={{
            fontSize: "48px",
            color: "rgba(255,255,255,0.95)",
            fontWeight: 600,
            textAlign: "center",
            lineHeight: 1.4,
            maxWidth: "1200px",
          }}
        >
          理解 AI Agent 如何工作<br />
          从原理到实践的完整指南
        </p>
      </div>

      {/* 底部标签 */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          opacity: interpolate(frame, [40, 60], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "24px",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
          }}
        >
          <span>📚 概念讲解</span>
          <span>•</span>
          <span>💻 代码实战</span>
          <span>•</span>
          <span>🎯 实际案例</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 场景 2: 三大组件详解
const Scene2Components: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

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
          opacity: titleOpacity,
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: "20px",
          }}
        >
          Agent 的三大组件
        </h2>
        <p style={{ fontSize: "32px", color: "#666" }}>
          缺一不可的核心架构
        </p>
      </div>

      {/* 组件图示 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {/* 组件 1: LLM 大脑 */}
        <ComponentBox
          icon="🧠"
          title="LLM 大脑"
          description="负责推理、决策和规划。分析任务需求，选择合适的行动方案。"
          details={["理解用户意图", "制定执行计划", "选择合适工具", "评估执行结果"]}
          color="#6366f1"
          delay={30}
        />

        {/* 组件 2: 工具库 */}
        <ComponentBox
          icon="🔧"
          title="工具库 (Tools)"
          description="扩展 Agent 能力的外部接口。让 AI 能够与真实世界交互。"
          details={["文件操作", "API 调用", "数据库查询", "代码执行"]}
          color="#8b5cf6"
          delay={60}
        />

        {/* 组件 3: 记忆系统 */}
        <ComponentBox
          icon="💾"
          title="记忆系统 (Memory)"
          description="维护对话历史和任务状态。让 Agent 能够进行多轮交互。"
          details={["对话历史", "任务状态", "中间结果", "上下文信息"]}
          color="#a855f7"
          delay={90}
        />
      </div>
    </AbsoluteFill>
  );
};

// 组件盒子
const ComponentBox: React.FC<{
  icon: string;
  title: string;
  description: string;
  details: string[];
  color: string;
  delay: number;
}> = ({ icon, title, description, details, color, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 100 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateX = interpolate(progress, [0, 1], [-50, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translateX}px)`,
        display: "flex",
        alignItems: "flex-start",
        gap: "40px",
        background: "white",
        border: `4px solid ${color}`,
        borderRadius: "24px",
        padding: "40px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      }}
    >
      {/* 图标 */}
      <div
        style={{
          fontSize: "80px",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* 内容 */}
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "16px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "28px",
            color: "#666",
            marginBottom: "24px",
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>

        {/* 功能列表 */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {details.map((detail, i) => (
            <div
              key={i}
              style={{
                padding: "12px 24px",
                background: `${color}15`,
                color: color,
                borderRadius: "100px",
                fontSize: "22px",
                fontWeight: 600,
                opacity: interpolate(frame, [delay + 20 + i * 5, delay + 30 + i * 5], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Day1Complete;
