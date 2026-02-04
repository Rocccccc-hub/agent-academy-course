import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale, pulse } from "../../utils/animations";

/**
 * Day 1 Scene 8: Summary (15 seconds / 450 frames)
 * Complete architecture summary with all components
 */
export const Day1SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // Central Agent icon
  const agentOpacity = fadeIn(frame, 20);
  const agentScale = bounceScale(frame, 20);
  const agentPulse = frame > 60 ? pulse(frame - 60, 0.08, 0.05) : 1;

  // Surrounding components
  const components = [
    { icon: "🧠", label: "Reason\n思考", color: colors.brain, delay: 80, angle: 0 },
    { icon: "⚡", label: "Act\n行动", color: colors.chef, delay: 110, angle: 120 },
    { icon: "👁️", label: "Observe\n观察", color: colors.customer, delay: 140, angle: 240 },
  ];

  // Key features
  const features = [
    { icon: "🧭", text: "自主决策", delay: 200 },
    { icon: "🎯", text: "目标导向", delay: 230 },
    { icon: "🔧", text: "工具使用", delay: 260 },
    { icon: "🔄", text: "循环迭代", delay: 290 },
  ];

  // Connection lines
  const linesOpacity = fadeIn(frame, 180);

  // Bottom message
  const bottomOpacity = fadeIn(frame, 350);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgPrimary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 80,
          fontSize: typography.heading,
          color: colors.textPrimary,
          fontWeight: typography.bold,
          opacity: titleOpacity,
        }}
      >
        Agent 架构总结
      </div>

      {/* Central Agent */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "45%",
          transform: `translate(-50%, -50%) scale(${agentScale * agentPulse})`,
          opacity: agentOpacity,
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundColor: colors.bgSecondary,
            border: `4px solid ${colors.result}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 40px ${colors.result}44`,
          }}
        >
          <div style={{ fontSize: 80 }}>🤖</div>
          <div
            style={{
              fontSize: typography.body,
              color: colors.result,
              fontWeight: typography.bold,
              marginTop: 10,
            }}
          >
            Agent
          </div>
        </div>
      </div>

      {/* Surrounding Components (ReAct Cycle) */}
      {components.map((comp, index) => {
        const compOpacity = fadeIn(frame, comp.delay);
        const compScale = bounceScale(frame, comp.delay);

        // Position in circle around center
        const radius = 350;
        const centerX = 960;
        const centerY = 490;
        const angleRad = (comp.angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(angleRad);
        const y = centerY + radius * Math.sin(angleRad);

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${compScale})`,
              opacity: compOpacity,
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                backgroundColor: colors.bgSecondary,
                border: `3px solid ${comp.color}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px ${comp.color}44`,
              }}
            >
              <div style={{ fontSize: 50 }}>{comp.icon}</div>
              <div
                style={{
                  fontSize: typography.caption,
                  color: comp.color,
                  fontWeight: typography.bold,
                  marginTop: 8,
                  textAlign: "center",
                  whiteSpace: "pre-line",
                  lineHeight: 1.3,
                }}
              >
                {comp.label}
              </div>
            </div>
          </div>
        );
      })}

      {/* Connection Lines (Circular) */}
      {linesOpacity > 0 && (
        <svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <defs>
            <marker
              id="arrow-summary"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill={colors.result} />
            </marker>
          </defs>

          {/* Circular arrows showing ReAct cycle */}
          <circle
            cx={960}
            cy={490}
            r={350}
            stroke={colors.result}
            strokeWidth={3}
            fill="none"
            strokeDasharray="20,10"
            opacity={linesOpacity * 0.3}
          />

          {/* Lines from center to components */}
          {components.map((comp, index) => {
            const angleRad = (comp.angle * Math.PI) / 180;
            const x = 960 + 350 * Math.cos(angleRad);
            const y = 490 + 350 * Math.sin(angleRad);

            return (
              <line
                key={index}
                x1={960}
                y1={490}
                x2={x}
                y2={y}
                stroke={comp.color}
                strokeWidth={2}
                opacity={linesOpacity * 0.5}
              />
            );
          })}
        </svg>
      )}

      {/* Key Features (Bottom) */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 50,
        }}
      >
        {features.map((feature, index) => {
          const featureOpacity = fadeIn(frame, feature.delay);
          const featureScale = bounceScale(frame, feature.delay);

          return (
            <div
              key={index}
              style={{
                opacity: featureOpacity,
                transform: `scale(${featureScale})`,
                display: "flex",
                alignItems: "center",
                backgroundColor: colors.bgSecondary,
                padding: "12px 25px",
                borderRadius: 10,
                border: `2px solid ${colors.result}`,
              }}
            >
              <div style={{ fontSize: 30, marginRight: 12 }}>{feature.icon}</div>
              <div style={{ fontSize: typography.body, color: colors.textPrimary }}>
                {feature.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Message */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          fontSize: typography.body,
          color: colors.result,
          fontWeight: typography.bold,
          opacity: bottomOpacity,
        }}
      >
        🎓 掌握 ReAct 循环，理解 Agent 核心机制
      </div>
    </AbsoluteFill>
  );
};
