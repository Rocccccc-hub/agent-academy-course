import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale, typingEffect } from "../../utils/animations";

/**
 * Day 1 Scene 4: Reason Stage (15 seconds / 450 frames)
 * Deep dive into the thinking/reasoning phase
 */
export const Day1ReasonStageScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // User input
  const inputOpacity = fadeIn(frame, 30);
  const inputText = "查询北京明天的天气";

  // Brain appears
  const brainOpacity = fadeIn(frame, 80);
  const brainScale = bounceScale(frame, 80);

  // Thinking process steps
  const thinkingSteps = [
    { text: "1. 理解用户需求：需要天气信息", delay: 130 },
    { text: "2. 分析所需数据：城市、日期", delay: 180 },
    { text: "3. 规划执行步骤：调用天气API", delay: 230 },
  ];

  // Output decision
  const decisionOpacity = fadeIn(frame, 300);
  const decisionScale = bounceScale(frame, 300);

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

      {/* User Input */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 250,
          opacity: inputOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.caption,
            color: colors.customer,
            marginBottom: 10,
          }}
        >
          📥 输入
        </div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "20px 30px",
            borderRadius: 12,
            border: `2px solid ${colors.customer}`,
            minWidth: 350,
          }}
        >
          {inputText}
        </div>
      </div>

      {/* Brain (LLM) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "35%",
          transform: `translate(-50%, -50%) scale(${brainScale})`,
          opacity: brainOpacity,
        }}
      >
        <div style={{ fontSize: 150 }}>🧠</div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.brain,
            fontWeight: typography.bold,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          LLM 推理
        </div>
      </div>

      {/* Thinking Process Steps */}
      <div
        style={{
          position: "absolute",
          left: 150,
          top: "58%",
          width: 1600,
        }}
      >
        {thinkingSteps.map((step, index) => {
          const stepOpacity = fadeIn(frame, step.delay);
          const stepX = interpolate(
            frame,
            [step.delay, step.delay + 30],
            [-50, 0],
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
                marginBottom: 20,
                opacity: stepOpacity,
                transform: `translateX(${stepX}px)`,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: colors.brain,
                  marginRight: 20,
                }}
              />
              {step.text}
            </div>
          );
        })}
      </div>

      {/* Output Decision */}
      <div
        style={{
          position: "absolute",
          right: 200,
          top: 250,
          opacity: decisionOpacity,
          transform: `scale(${decisionScale})`,
        }}
      >
        <div
          style={{
            fontSize: typography.caption,
            color: colors.result,
            marginBottom: 10,
            textAlign: "right",
          }}
        >
          📤 决策
        </div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "20px 30px",
            borderRadius: 12,
            border: `2px solid ${colors.result}`,
            minWidth: 350,
          }}
        >
          调用工具: get_weather
          <br />
          参数: 北京, 明天
        </div>
      </div>

      {/* Arrow */}
      {frame > 350 && (
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
              id="arrow-reason"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill={colors.brain} />
            </marker>
          </defs>
          <line
            x1={600}
            y1={300}
            x2={1300}
            y2={300}
            stroke={colors.brain}
            strokeWidth={3}
            markerEnd="url(#arrow-reason)"
          />
        </svg>
      )}
    </AbsoluteFill>
  );
};
