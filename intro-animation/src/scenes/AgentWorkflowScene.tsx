import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

interface StepProps {
  step: {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    color: string;
  };
  index: number;
  x: number;
  y: number;
  isActive: boolean;
}

const StepNode: React.FC<StepProps> = ({ step, index, x, y, isActive }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 节点出现动画
  const appearStart = index * 1.5 * fps;
  const appearEnd = appearStart + 0.6 * fps;

  const opacity = interpolate(
    frame,
    [appearStart, appearEnd],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [appearStart, appearEnd],
    [0.5, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.5)),
    }
  );

  // 激活状态的脉冲效果
  const pulseScale = isActive
    ? Math.sin((frame - appearEnd) * 0.15) * 0.1 + 1.1
    : 1;

  return (
    <div
      style={{
        position: "absolute",
        left: x - 100,
        top: y - 100,
        width: 200,
        height: 200,
        opacity,
        transform: `scale(${scale * (isActive ? pulseScale : 1)})`,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: isActive ? step.color + "20" : "#161b22",
          border: `4px solid ${step.color}`,
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isActive
            ? `0 0 60px ${step.color}80`
            : `0 0 30px ${step.color}40`,
        }}
      >
        <div style={{ fontSize: 60, marginBottom: 8 }}>{step.icon}</div>
        <div
          style={{
            fontSize: 20,
            color: step.color,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {step.title}
        </div>
      </div>

      {/* 步骤说明 */}
      {isActive && (
        <div
          style={{
            position: "absolute",
            top: 220,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#21262d",
            border: `2px solid ${step.color}`,
            borderRadius: 15,
            padding: "15px 25px",
            whiteSpace: "nowrap",
            boxShadow: `0 0 20px ${step.color}40`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#e6edf3",
              textAlign: "center",
            }}
          >
            {step.subtitle}
          </div>
        </div>
      )}
    </div>
  );
};

interface ArrowProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  delay: number;
  color: string;
}

const Arrow: React.FC<ArrowProps> = ({ fromX, fromY, toX, toY, delay, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const start = delay * fps;
  const end = start + 0.5 * fps;

  const progress = interpolate(
    frame,
    [start, end],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const length = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const angle = Math.atan2(toY - fromY, toX - fromX) * (180 / Math.PI);

  return (
    <>
      {/* 连接线 */}
      <div
        style={{
          position: "absolute",
          left: fromX,
          top: fromY,
          width: length * progress,
          height: 4,
          backgroundColor: color,
          transform: `rotate(${angle}deg)`,
          transformOrigin: "left center",
          opacity: progress,
          boxShadow: `0 0 10px ${color}80`,
        }}
      />
      {/* 箭头 */}
      {progress > 0.8 && (
        <div
          style={{
            position: "absolute",
            left: fromX + Math.cos((angle * Math.PI) / 180) * length * progress - 8,
            top: fromY + Math.sin((angle * Math.PI) / 180) * length * progress - 8,
            width: 0,
            height: 0,
            borderLeft: `16px solid ${color}`,
            borderTop: "10px solid transparent",
            borderBottom: "10px solid transparent",
            transform: `rotate(${angle}deg)`,
            opacity: progress,
          }}
        />
      )}
    </>
  );
};

export const AgentWorkflowScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const centerX = width / 2;
  const centerY = height / 2;

  // 工作流程步骤
  const steps = [
    {
      id: "prompt",
      icon: "📝",
      title: "Prompt",
      subtitle: "接收用户输入",
      color: "#58a6ff",
      x: centerX - 400,
      y: centerY - 200,
    },
    {
      id: "agent",
      icon: "🤖",
      title: "Agent",
      subtitle: "分析任务需求",
      color: "#3fb950",
      x: centerX,
      y: centerY - 200,
    },
    {
      id: "llm",
      icon: "🧠",
      title: "LLM",
      subtitle: "大脑思考分析",
      color: "#bc8cff",
      x: centerX + 400,
      y: centerY - 200,
    },
    {
      id: "decision",
      icon: "🎯",
      title: "决策",
      subtitle: "选择合适工具",
      color: "#ffa657",
      x: centerX + 400,
      y: centerY + 100,
    },
    {
      id: "mcp",
      icon: "🔌",
      title: "MCP",
      subtitle: "协议连接工具",
      color: "#f778ba",
      x: centerX,
      y: centerY + 100,
    },
    {
      id: "tool",
      icon: "🛠️",
      title: "Tool",
      subtitle: "执行查询天气",
      color: "#79c0ff",
      x: centerX - 400,
      y: centerY + 100,
    },
    {
      id: "memory",
      icon: "💾",
      title: "Memory",
      subtitle: "记录交互历史",
      color: "#56d364",
      x: centerX - 400,
      y: centerY + 400,
    },
    {
      id: "result",
      icon: "✅",
      title: "Result",
      subtitle: "返回最终答案",
      color: "#3fb950",
      x: centerX,
      y: centerY + 400,
    },
  ];

  // 确定当前激活的步骤
  const currentStepIndex = Math.floor(frame / (1.5 * fps));

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: 60,
          fontSize: 48,
          color: "#e6edf3",
          fontWeight: "bold",
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        🔄 工作流程
      </div>

      {/* 绘制所有步骤节点 */}
      {steps.map((step, index) => (
        <StepNode
          key={step.id}
          step={step}
          index={index}
          x={step.x}
          y={step.y}
          isActive={index === currentStepIndex}
        />
      ))}

      {/* 绘制连接箭头 */}
      {/* Prompt -> Agent */}
      <Arrow
        fromX={steps[0].x + 100}
        fromY={steps[0].y}
        toX={steps[1].x - 100}
        toY={steps[1].y}
        delay={1.2}
        color={steps[0].color}
      />

      {/* Agent -> LLM */}
      <Arrow
        fromX={steps[1].x + 100}
        fromY={steps[1].y}
        toX={steps[2].x - 100}
        toY={steps[2].y}
        delay={2.7}
        color={steps[1].color}
      />

      {/* LLM -> Decision */}
      <Arrow
        fromX={steps[2].x}
        fromY={steps[2].y + 100}
        toX={steps[3].x}
        toY={steps[3].y - 100}
        delay={4.2}
        color={steps[2].color}
      />

      {/* Decision -> MCP */}
      <Arrow
        fromX={steps[3].x - 100}
        fromY={steps[3].y}
        toX={steps[4].x + 100}
        toY={steps[4].y}
        delay={5.7}
        color={steps[3].color}
      />

      {/* MCP -> Tool */}
      <Arrow
        fromX={steps[4].x - 100}
        fromY={steps[4].y}
        toX={steps[5].x + 100}
        toY={steps[5].y}
        delay={7.2}
        color={steps[4].color}
      />

      {/* Tool -> Memory */}
      <Arrow
        fromX={steps[5].x}
        fromY={steps[5].y + 100}
        toX={steps[6].x}
        toY={steps[6].y - 100}
        delay={8.7}
        color={steps[5].color}
      />

      {/* Memory -> Result */}
      <Arrow
        fromX={steps[6].x + 100}
        fromY={steps[6].y}
        toX={steps[7].x - 100}
        toY={steps[7].y}
        delay={10.2}
        color={steps[6].color}
      />

      {/* 最终答案显示 */}
      {frame > 11.5 * fps && (
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#21262d",
            border: "3px solid #3fb950",
            borderRadius: 20,
            padding: "30px 60px",
            boxShadow: "0 0 40px rgba(63, 185, 80, 0.4)",
            opacity: interpolate(
              frame,
              [11.5 * fps, 12.2 * fps],
              [0, 1],
              {
                extrapolateRight: "clamp",
              }
            ),
          }}
        >
          <div
            style={{
              fontSize: 36,
              color: "#e6edf3",
              fontWeight: "600",
            }}
          >
            💬 北京今天晴朗，气温 18-25°C
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
