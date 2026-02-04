import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Day 1 Scene 6: Observe Stage (15 seconds / 450 frames)
 * Shows observation and state update phase
 */
export const Day1ObserveStageScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // Result input
  const resultOpacity = fadeIn(frame, 30);

  // Eye icon (observe)
  const eyeOpacity = fadeIn(frame, 80);
  const eyeScale = bounceScale(frame, 80);

  // Analysis steps
  const analysisSteps = [
    { text: "分析结果: 获取到天气数据", icon: "📊", delay: 130 },
    { text: "判断是否完成目标", icon: "🎯", delay: 180 },
    { text: "更新内部状态", icon: "💾", delay: 230 },
  ];

  // Decision
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
        Observe: 观察阶段
      </div>

      {/* Result Input */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: 220,
          opacity: resultOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.caption,
            color: colors.result,
            marginBottom: 10,
          }}
        >
          📥 工具返回
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
          温度: 15°C
          <br />
          天气: 晴
          <br />
          <span style={{ fontSize: typography.caption, color: colors.textSecondary }}>
            风速: 3m/s
          </span>
        </div>
      </div>

      {/* Eye Icon */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: `translate(-50%, -50%) scale(${eyeScale})`,
          opacity: eyeOpacity,
        }}
      >
        <div style={{ fontSize: 120 }}>👁️</div>
        <div
          style={{
            fontSize: typography.body,
            color: colors.customer,
            fontWeight: typography.bold,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          观察与分析
        </div>
      </div>

      {/* Analysis Steps */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "55%",
          transform: "translateX(-50%)",
          width: 800,
        }}
      >
        {analysisSteps.map((step, index) => {
          const stepOpacity = fadeIn(frame, step.delay);
          const stepScale = bounceScale(frame, step.delay, 15);

          return (
            <div
              key={index}
              style={{
                fontSize: typography.body,
                color: colors.textPrimary,
                marginBottom: 20,
                opacity: stepOpacity,
                transform: `scale(${stepScale})`,
                display: "flex",
                alignItems: "center",
                backgroundColor: colors.bgSecondary,
                padding: "15px 25px",
                borderRadius: 10,
                border: `2px solid ${colors.customer}`,
              }}
            >
              <div style={{ fontSize: 40, marginRight: 20 }}>{step.icon}</div>
              <div>{step.text}</div>
            </div>
          );
        })}
      </div>

      {/* Decision Box */}
      <div
        style={{
          position: "absolute",
          right: 200,
          bottom: 150,
          opacity: decisionOpacity,
          transform: `scale(${decisionScale})`,
        }}
      >
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "25px 35px",
            borderRadius: 12,
            border: `3px solid ${colors.result}`,
            minWidth: 400,
          }}
        >
          <div style={{ color: colors.result, fontSize: typography.subheading, marginBottom: 15 }}>
            ✅ 目标已完成
          </div>
          <div style={{ fontSize: typography.caption, color: colors.textSecondary }}>
            可以向用户返回结果
          </div>
        </div>
      </div>

      {/* Note at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          fontSize: typography.caption,
          color: colors.textSecondary,
          opacity: fadeIn(frame, 380),
        }}
      >
        💡 如果目标未完成，Agent 将进入下一轮 ReAct 循环
      </div>
    </AbsoluteFill>
  );
};
