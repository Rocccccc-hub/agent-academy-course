import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Day 1 Scene 7: Multi-Round Interaction (15 seconds / 450 frames)
 * Shows 3 complete ReAct cycles for a complex task
 */
export const Day1MultiRoundScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // User query
  const queryOpacity = fadeIn(frame, 20);

  // Three rounds of ReAct
  const rounds = [
    {
      num: 1,
      reason: "需要用户位置",
      act: "get_location()",
      observe: "获取: 北京",
      delay: 60,
      color: colors.customer,
    },
    {
      num: 2,
      reason: "查询天气",
      act: "get_weather('北京')",
      observe: "获取: 15°C 晴",
      delay: 160,
      color: colors.chef,
    },
    {
      num: 3,
      reason: "生成建议",
      act: "generate_advice()",
      observe: "完成任务 ✓",
      delay: 260,
      color: colors.result,
    },
  ];

  // Final answer
  const answerOpacity = fadeIn(frame, 380);
  const answerScale = bounceScale(frame, 380);

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
        多轮交互：复杂任务处理
      </div>

      {/* User Query */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 180,
          transform: "translateX(-50%)",
          opacity: queryOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "20px 40px",
            borderRadius: 12,
            border: `2px solid ${colors.customer}`,
            textAlign: "center",
          }}
        >
          👤 用户: "我现在所在城市的天气怎么样？给我穿衣建议"
        </div>
      </div>

      {/* Three Rounds */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 340,
          transform: "translateX(-50%)",
          width: 1600,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {rounds.map((round, index) => {
          const roundOpacity = fadeIn(frame, round.delay);
          const roundScale = bounceScale(frame, round.delay);

          return (
            <div
              key={index}
              style={{
                opacity: roundOpacity,
                transform: `scale(${roundScale})`,
                width: 450,
              }}
            >
              {/* Round Number */}
              <div
                style={{
                  fontSize: typography.subheading,
                  color: round.color,
                  fontWeight: typography.bold,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                第 {round.num} 轮
              </div>

              {/* Steps */}
              <div
                style={{
                  backgroundColor: colors.bgSecondary,
                  padding: "20px",
                  borderRadius: 12,
                  border: `2px solid ${round.color}`,
                }}
              >
                {/* Reason */}
                <div style={{ marginBottom: 15 }}>
                  <div style={{ fontSize: typography.caption, color: colors.brain, marginBottom: 5 }}>
                    🧠 Reason:
                  </div>
                  <div style={{ fontSize: typography.caption, color: colors.textPrimary }}>
                    {round.reason}
                  </div>
                </div>

                {/* Act */}
                <div style={{ marginBottom: 15 }}>
                  <div style={{ fontSize: typography.caption, color: colors.chef, marginBottom: 5 }}>
                    ⚡ Act:
                  </div>
                  <div style={{ fontSize: typography.caption, color: colors.textPrimary, fontFamily: "monospace" }}>
                    {round.act}
                  </div>
                </div>

                {/* Observe */}
                <div>
                  <div style={{ fontSize: typography.caption, color: colors.customer, marginBottom: 5 }}>
                    👁️ Observe:
                  </div>
                  <div style={{ fontSize: typography.caption, color: colors.textPrimary }}>
                    {round.observe}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows between rounds */}
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
              id="arrow-multi"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill={colors.result} />
            </marker>
          </defs>
          {/* Arrow 1 to 2 */}
          <line
            x1={570}
            y1={540}
            x2={750}
            y2={540}
            stroke={colors.result}
            strokeWidth={3}
            markerEnd="url(#arrow-multi)"
          />
          {/* Arrow 2 to 3 */}
          <line
            x1={1080}
            y1={540}
            x2={1260}
            y2={540}
            stroke={colors.result}
            strokeWidth={3}
            markerEnd="url(#arrow-multi)"
          />
        </svg>
      )}

      {/* Final Answer */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 100,
          transform: `translateX(-50%) scale(${answerScale})`,
          opacity: answerOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "20px 40px",
            borderRadius: 12,
            border: `3px solid ${colors.result}`,
            textAlign: "center",
            minWidth: 600,
          }}
        >
          <div style={{ color: colors.result, marginBottom: 10 }}>✅ 最终回答</div>
          <div style={{ fontSize: typography.caption }}>
            "您在北京，今天15°C 晴天，建议穿外套"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
