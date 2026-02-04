import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Day 1 Scene 4: Reason Stage (15 seconds / 450 frames)
 * Deep dive into the thinking/reasoning phase
 * Redesigned: Horizontal flow with arrows through LLM
 */
export const Day1ReasonStageScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // User input (left)
  const inputOpacity = fadeIn(frame, 30);
  const inputScale = bounceScale(frame, 30);

  // Brain appears (center)
  const brainOpacity = fadeIn(frame, 90);
  const brainScale = bounceScale(frame, 90);

  // Output decision (right)
  const decisionOpacity = fadeIn(frame, 150);
  const decisionScale = bounceScale(frame, 150);

  // Thinking process steps (below)
  const thinkingSteps = [
    { text: "1. 理解用户需求：需要天气信息", delay: 210 },
    { text: "2. 分析所需数据：城市、日期", delay: 260 },
    { text: "3. 规划执行步骤：调用天气API", delay: 310 },
  ];

  // Arrows
  const arrow1Opacity = fadeIn(frame, 120);
  const arrow2Opacity = fadeIn(frame, 180);

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
        Reason: 思考阶段
      </div>

      {/* User Input (Left) */}
      <div
        style={{
          position: "absolute",
          left: 150,
          top: "40%",
          transform: `translateY(-50%) scale(${inputScale})`,
          opacity: inputOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.caption,
            color: colors.customer,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          📥 输入
        </div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "25px 35px",
            borderRadius: 12,
            border: `3px solid ${colors.customer}`,
            minWidth: 300,
            textAlign: "center",
          }}
        >
          查询北京明天的天气
        </div>
      </div>

      {/* Brain (LLM) - Center */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          transform: `translate(-50%, -50%) scale(${brainScale})`,
          opacity: brainOpacity,
        }}
      >
        <div style={{ fontSize: 140, textAlign: "center" }}>🧠</div>
        <div
          style={{
            fontSize: typography.subheading,
            color: colors.brain,
            fontWeight: typography.bold,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          LLM 推理
        </div>
      </div>

      {/* Output Decision (Right) */}
      <div
        style={{
          position: "absolute",
          right: 150,
          top: "40%",
          transform: `translateY(-50%) scale(${decisionScale})`,
          opacity: decisionOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.caption,
            color: colors.result,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          📤 决策
        </div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "25px 35px",
            borderRadius: 12,
            border: `3px solid ${colors.result}`,
            minWidth: 300,
            textAlign: "center",
          }}
        >
          调用工具: get_weather
          <br />
          <span style={{ fontSize: typography.caption, color: colors.textSecondary }}>
            参数: 北京, 明天
          </span>
        </div>
      </div>

      {/* Arrows through LLM */}
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
            id="arrow-reason-1"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill={colors.brain} />
          </marker>
          <marker
            id="arrow-reason-2"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill={colors.result} />
          </marker>
        </defs>

        {/* Arrow 1: Input → LLM */}
        <line
          x1={500}
          y1={432}
          x2={820}
          y2={432}
          stroke={colors.brain}
          strokeWidth={4}
          markerEnd="url(#arrow-reason-1)"
          opacity={arrow1Opacity}
        />

        {/* Arrow 2: LLM → Decision */}
        <line
          x1={1100}
          y1={432}
          x2={1420}
          y2={432}
          stroke={colors.result}
          strokeWidth={4}
          markerEnd="url(#arrow-reason-2)"
          opacity={arrow2Opacity}
        />
      </svg>

      {/* Thinking Process Steps (Below) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "68%",
          transform: "translateX(-50%)",
          width: 1400,
        }}
      >
        {thinkingSteps.map((step, index) => {
          const stepOpacity = fadeIn(frame, step.delay);
          const stepY = interpolate(
            frame,
            [step.delay, step.delay + 25],
            [20, 0],
            {
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.ease),
            }
          );

          return (
            <div
              key={index}
              style={{
                fontSize: typography.body,
                color: colors.textPrimary,
                marginBottom: 18,
                opacity: stepOpacity,
                transform: `translateY(${stepY}px)`,
                display: "flex",
                alignItems: "center",
                backgroundColor: colors.bgSecondary,
                padding: "15px 30px",
                borderRadius: 10,
                border: `2px solid ${colors.brain}`,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: colors.brain,
                  marginRight: 20,
                  flexShrink: 0,
                }}
              />
              {step.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
