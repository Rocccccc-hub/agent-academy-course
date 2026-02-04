import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Day 1 Scene 2: Agent Definition (15 seconds / 450 frames)
 * Shows three core characteristics: Autonomy, Goal-oriented, Tool Use
 */
export const Day1AgentDefinitionScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Three characteristics appear sequentially
  const features = [
    {
      icon: "🧭",
      title: "自主性",
      subtitle: "Autonomy",
      desc: "根据环境变化自主调整策略",
      color: colors.customer,
      delay: 40,
    },
    {
      icon: "🎯",
      title: "目标导向",
      subtitle: "Goal-oriented",
      desc: "围绕用户目标进行多步推理",
      color: colors.chef,
      delay: 120,
    },
    {
      icon: "🔧",
      title: "工具使用",
      subtitle: "Tool Use",
      desc: "调用外部工具扩展能力",
      color: colors.tools,
      delay: 200,
    },
  ];

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
        什么是 Agent？
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: 150,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: titleOpacity,
        }}
      >
        Agent 的三大核心特征
      </div>

      {/* Three Features */}
      {features.map((feature, index) => {
        const featureOpacity = fadeIn(frame, feature.delay);
        const featureScale = bounceScale(frame, feature.delay);

        const positions = [
          { left: 200, top: "50%" },
          { left: 760, top: "50%" },
          { left: 1320, top: "50%" },
        ];

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              ...positions[index],
              transform: `translateY(-50%) scale(${featureScale})`,
              opacity: featureOpacity,
              width: 400,
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: 120,
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: typography.subheading,
                color: feature.color,
                fontWeight: typography.bold,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              {feature.title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: typography.caption,
                color: colors.textSecondary,
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              {feature.subtitle}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: typography.caption,
                color: colors.textPrimary,
                textAlign: "center",
                padding: "15px 20px",
                backgroundColor: colors.bgTertiary,
                borderRadius: 12,
                border: `2px solid ${feature.color}`,
              }}
            >
              {feature.desc}
            </div>
          </div>
        );
      })}

      {/* Connecting Lines */}
      {frame > 280 && (
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
          {/* Line 1 to 2 */}
          <line
            x1={600}
            y1={540}
            x2={760}
            y2={540}
            stroke={colors.textSecondary}
            strokeWidth={2}
            strokeDasharray="5,5"
            opacity={0.5}
          />
          {/* Line 2 to 3 */}
          <line
            x1={1160}
            y1={540}
            x2={1320}
            y2={540}
            stroke={colors.textSecondary}
            strokeWidth={2}
            strokeDasharray="5,5"
            opacity={0.5}
          />
        </svg>
      )}
    </AbsoluteFill>
  );
};
