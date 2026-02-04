import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 2: What is Prompt (8 seconds / 240 frames)
 * Explain the concept of Prompt
 */
export const Day2WhatIsPromptScene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  const titleOpacity = fadeIn(frame, 0);

  // Description
  const descOpacity = fadeIn(frame, 30);

  // Example prompt box
  const promptOpacity = fadeIn(frame, 70);
  const promptScale = bounceScale(frame, 70);

  // Flow arrows and labels
  const flowOpacity = fadeIn(frame, 120);

  // Three flow stages
  const stage1Opacity = fadeIn(frame, 130);
  const stage2Opacity = fadeIn(frame, 160);
  const stage3Opacity = fadeIn(frame, 190);

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
        {t.day2WhatTitle}
      </div>

      {/* Description */}
      <div
        style={{
          position: "absolute",
          top: 200,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: descOpacity,
          textAlign: "center",
          whiteSpace: "pre-line",
          lineHeight: 1.5,
        }}
      >
        {t.day2WhatDesc}
      </div>

      {/* Example Prompt Box */}
      <div
        style={{
          position: "absolute",
          top: 360,
          transform: `scale(${promptScale})`,
          opacity: promptOpacity,
        }}
      >
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "20px 40px",
            borderRadius: 12,
            border: `3px solid ${colors.customer}`,
            minWidth: 500,
            textAlign: "center",
          }}
        >
          💬 {t.day2WhatExample}
        </div>
      </div>

      {/* Flow Diagram */}
      <div
        style={{
          position: "absolute",
          top: 520,
          width: 1200,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: flowOpacity,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Stage 1: User Input */}
          <div
            style={{
              opacity: stage1Opacity,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 80, marginBottom: 15 }}>👤</div>
            <div
              style={{
                fontSize: typography.body,
                color: colors.customer,
                fontWeight: typography.bold,
              }}
            >
              用户输入
            </div>
          </div>

          {/* Arrow 1 */}
          <div
            style={{
              opacity: stage2Opacity,
              fontSize: 60,
              color: colors.result,
            }}
          >
            →
          </div>

          {/* Stage 2: Agent Understanding */}
          <div
            style={{
              opacity: stage2Opacity,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 80, marginBottom: 15 }}>🧠</div>
            <div
              style={{
                fontSize: typography.body,
                color: colors.brain,
                fontWeight: typography.bold,
              }}
            >
              Agent 理解
            </div>
          </div>

          {/* Arrow 2 */}
          <div
            style={{
              opacity: stage3Opacity,
              fontSize: 60,
              color: colors.result,
            }}
          >
            →
          </div>

          {/* Stage 3: Execute Task */}
          <div
            style={{
              opacity: stage3Opacity,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 80, marginBottom: 15 }}>⚡</div>
            <div
              style={{
                fontSize: typography.body,
                color: colors.chef,
                fontWeight: typography.bold,
              }}
            >
              执行任务
            </div>
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div
        style={{
          position: "absolute",
          bottom: 180,
          fontSize: typography.body,
          color: colors.result,
          opacity: fadeIn(frame, 210),
          textAlign: "center",
          width: "100%",
        }}
      >
        💡 优质的 Prompt 是 Agent 成功的关键
      </div>
    </AbsoluteFill>
  );
};
