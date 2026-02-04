import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Day 1 Scene 5: Act Stage (15 seconds / 450 frames)
 * Shows tool execution and action phase
 */
export const Day1ActStageScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // Decision input
  const decisionOpacity = fadeIn(frame, 30);

  // Tool selection
  const toolOpacity = fadeIn(frame, 80);
  const toolScale = bounceScale(frame, 80);

  // Execution steps
  const execSteps = [
    { icon: "📋", text: "1. 选择工具: get_weather()", delay: 130, color: colors.tools },
    { icon: "📦", text: "2. 准备参数: {city: '北京', date: '明天'}", delay: 180, color: colors.recipe },
    { icon: "🚀", text: "3. 执行调用: API Request", delay: 230, color: colors.chef },
  ];

  // Result appears
  const resultOpacity = fadeIn(frame, 310);
  const resultScale = bounceScale(frame, 310);

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
        Act: 行动阶段
      </div>

      {/* Decision Input */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 220,
          opacity: decisionOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "20px 30px",
            borderRadius: 12,
            border: `2px solid ${colors.brain}`,
            minWidth: 350,
          }}
        >
          决策: 调用 get_weather
          <br />
          <span style={{ color: colors.textSecondary, fontSize: typography.caption }}>
            参数: 北京, 明天
          </span>
        </div>
      </div>

      {/* Tool Icon */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "25%",
          transform: `translate(-50%, -50%) scale(${toolScale})`,
          opacity: toolOpacity,
        }}
      >
        <div style={{ fontSize: 100 }}>🔧</div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.tools,
            fontWeight: typography.bold,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          工具执行
        </div>
      </div>

      {/* Execution Steps */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
        }}
      >
        {execSteps.map((step, index) => {
          const stepOpacity = fadeIn(frame, step.delay);
          const stepScale = bounceScale(frame, step.delay, 15);

          return (
            <div
              key={index}
              style={{
                fontSize: typography.body,
                color: colors.textPrimary,
                marginBottom: 25,
                opacity: stepOpacity,
                transform: `scale(${stepScale})`,
                display: "flex",
                alignItems: "center",
                backgroundColor: colors.bgSecondary,
                padding: "15px 25px",
                borderRadius: 10,
                border: `2px solid ${step.color}`,
              }}
            >
              <div style={{ fontSize: 40, marginRight: 20 }}>{step.icon}</div>
              <div>{step.text}</div>
            </div>
          );
        })}
      </div>

      {/* Result */}
      <div
        style={{
          position: "absolute",
          right: 200,
          bottom: 150,
          opacity: resultOpacity,
          transform: `scale(${resultScale})`,
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
          ✅ 执行结果
        </div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "20px 30px",
            borderRadius: 12,
            border: `2px solid ${colors.result}`,
            minWidth: 400,
          }}
        >
          <div style={{ color: colors.result, marginBottom: 8 }}>状态: 成功 ✓</div>
          <div style={{ fontSize: typography.caption, color: colors.textSecondary }}>
            数据: {"{temperature: 15°C, ...}"}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
