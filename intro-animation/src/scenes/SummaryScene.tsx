import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const centerX = width / 2;
  const centerY = height / 2;

  // 核心组件
  const components = [
    { id: "llm", icon: "🧠", label: "LLM", desc: "思考大脑", color: "#bc8cff" },
    { id: "prompt", icon: "📝", label: "Prompt", desc: "输入指令", color: "#58a6ff" },
    { id: "tools", icon: "🛠️", label: "Tools", desc: "执行工具", color: "#79c0ff" },
    { id: "mcp", icon: "🔌", label: "MCP", desc: "协议连接", color: "#f778ba" },
    { id: "memory", icon: "💾", label: "Memory", desc: "记忆存储", color: "#56d364" },
  ];

  // 标题动画
  const titleOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 中心 Agent 动画
  const agentOpacity = interpolate(frame, [0.3 * fps, 1 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const agentScale = interpolate(
    frame,
    [0.3 * fps, 1 * fps],
    [0.5, 1],
    {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.5)),
    }
  );

  // 周围组件动画
  const radius = 350;

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
          top: 80,
          opacity: titleOpacity,
        }}
      >
        <h2
          style={{
            fontSize: 56,
            color: "#e6edf3",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          🎯 核心组件协作
        </h2>
      </div>

      {/* 背景光圈 */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          border: "2px dashed #3fb95040",
          opacity: agentOpacity * 0.5,
        }}
      />

      {/* 中心 Agent */}
      <div
        style={{
          position: "absolute",
          left: centerX - 120,
          top: centerY - 120,
          width: 240,
          height: 240,
          opacity: agentOpacity,
          transform: `scale(${agentScale})`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#21262d",
            border: "5px solid #3fb950",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 80px rgba(63, 185, 80, 0.5)",
          }}
        >
          <div style={{ fontSize: 100 }}>🤖</div>
          <div
            style={{
              fontSize: 32,
              color: "#3fb950",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Agent
          </div>
        </div>
      </div>

      {/* 周围组件节点 */}
      {components.map((component, index) => {
        const angle = (index / components.length) * Math.PI * 2 - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        const appearStart = 1.2 * fps + index * 0.3 * fps;
        const appearEnd = appearStart + 0.5 * fps;

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

        // 连接线动画
        const lineOpacity = interpolate(
          frame,
          [appearEnd, appearEnd + 0.3 * fps],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        );

        const lineLength = Math.sqrt(
          Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2)
        );
        const lineAngle = Math.atan2(y - centerY, x - centerX);

        return (
          <React.Fragment key={component.id}>
            {/* 连接线 */}
            <div
              style={{
                position: "absolute",
                left: centerX,
                top: centerY,
                width: lineLength - 200,
                height: 3,
                backgroundColor: component.color,
                transform: `rotate(${lineAngle}rad)`,
                transformOrigin: "left center",
                opacity: lineOpacity,
                boxShadow: `0 0 10px ${component.color}80`,
              }}
            />

            {/* 组件节点 */}
            <div
              style={{
                position: "absolute",
                left: x - 90,
                top: y - 90,
                width: 180,
                height: 180,
                opacity,
                transform: `scale(${scale})`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#161b22",
                  border: `4px solid ${component.color}`,
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 40px ${component.color}60`,
                }}
              >
                <div style={{ fontSize: 56, marginBottom: 8 }}>
                  {component.icon}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    color: component.color,
                    fontWeight: "bold",
                  }}
                >
                  {component.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#8b949e",
                    marginTop: 4,
                  }}
                >
                  {component.desc}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}

      {/* 底部说明 */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          opacity: interpolate(frame, [3 * fps, 3.5 * fps], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <p
          style={{
            fontSize: 36,
            color: "#8b949e",
            margin: 0,
            textAlign: "center",
          }}
        >
          通过 <span style={{ color: "#3fb950", fontWeight: "bold" }}>Agent Academy</span>，
          掌握智能 Agent 开发
        </p>
      </div>
    </AbsoluteFill>
  );
};
