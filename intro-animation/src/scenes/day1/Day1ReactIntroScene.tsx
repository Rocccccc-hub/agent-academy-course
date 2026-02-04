import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Day 1 Scene 3: ReAct Loop Introduction (15 seconds / 450 frames)
 * Shows the Reason → Act → Observe cycle
 */
export const Day1ReactIntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Three stages of ReAct
  const stages = [
    {
      icon: "🧠",
      title: "Reason",
      subtitle: "思考",
      desc: "分析问题，规划步骤",
      color: colors.brain,
      delay: 60,
      x: 960,
      y: 300,
    },
    {
      icon: "⚡",
      title: "Act",
      subtitle: "行动",
      desc: "调用工具，执行操作",
      color: colors.chef,
      delay: 150,
      x: 1400,
      y: 650,
    },
    {
      icon: "👁️",
      title: "Observe",
      subtitle: "观察",
      desc: "接收反馈，更新状态",
      color: colors.customer,
      delay: 240,
      x: 520,
      y: 650,
    },
  ];

  // Draw circular arrows
  const arrowOpacity = fadeIn(frame, 330);

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
        ReAct 循环：Agent 的核心机制
      </div>

      {/* Three Stages */}
      {stages.map((stage, index) => {
        const stageOpacity = fadeIn(frame, stage.delay);
        const stageScale = bounceScale(frame, stage.delay);

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: stage.x,
              top: stage.y,
              transform: `translate(-50%, -50%) scale(${stageScale})`,
              opacity: stageOpacity,
              width: 280,
            }}
          >
            {/* Icon Circle Background */}
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                backgroundColor: colors.bgSecondary,
                border: `4px solid ${stage.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 60,
                margin: "0 auto 20px",
                boxShadow: `0 0 30px ${stage.color}44`,
              }}
            >
              {stage.icon}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: typography.subheading,
                color: stage.color,
                fontWeight: typography.bold,
                textAlign: "center",
                marginBottom: 8,
              }}
            >
              {stage.title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: typography.body,
                color: colors.textPrimary,
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              {stage.subtitle}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: typography.caption,
                color: colors.textSecondary,
                textAlign: "center",
              }}
            >
              {stage.desc}
            </div>
          </div>
        );
      })}

      {/* Circular Arrows */}
      {arrowOpacity > 0 && (
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
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3, 0 6"
                fill={colors.result}
              />
            </marker>
          </defs>

          {/* Reason to Act */}
          <path
            d="M 1050 350 Q 1250 450 1350 600"
            stroke={colors.result}
            strokeWidth={4}
            fill="none"
            markerEnd="url(#arrowhead)"
            opacity={arrowOpacity}
          />

          {/* Act to Observe */}
          <path
            d="M 1300 700 Q 950 800 620 700"
            stroke={colors.result}
            strokeWidth={4}
            fill="none"
            markerEnd="url(#arrowhead)"
            opacity={arrowOpacity}
          />

          {/* Observe to Reason */}
          <path
            d="M 570 600 Q 650 400 910 330"
            stroke={colors.result}
            strokeWidth={4}
            fill="none"
            markerEnd="url(#arrowhead)"
            opacity={arrowOpacity}
          />

          {/* Cycle Label */}
          <text
            x="960"
            y="520"
            textAnchor="middle"
            fill={colors.result}
            fontSize="32"
            fontWeight="bold"
            opacity={arrowOpacity}
          >
            循环执行
          </text>
        </svg>
      )}

      {/* Bottom note */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: fadeIn(frame, 380),
        }}
      >
        💡 Agent 通过不断循环这三个步骤来完成复杂任务
      </div>
    </AbsoluteFill>
  );
};
