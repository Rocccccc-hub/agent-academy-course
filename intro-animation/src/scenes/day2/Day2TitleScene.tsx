import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale, pulse } from "../../utils/animations";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 1: Title (4 seconds / 120 frames)
 * Introduction to Prompt Engineering
 */
export const Day2TitleScene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  // Icon animation
  const iconOpacity = fadeIn(frame, 0);
  const iconScale = bounceScale(frame, 0);
  const iconPulse = frame > 30 ? pulse(frame - 30, 0.1, 0.05) : 1;

  // Label animation
  const labelOpacity = fadeIn(frame, 20);

  // Title animation
  const titleOpacity = fadeIn(frame, 40);

  // Subtitle animation
  const subtitleOpacity = fadeIn(frame, 60);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgPrimary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Icon */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          transform: `translateY(-50%) scale(${iconScale * iconPulse})`,
          opacity: iconOpacity,
        }}
      >
        <div style={{ fontSize: 180, textAlign: "center" }}>📝</div>
      </div>

      {/* Day Label */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          fontSize: typography.subheading,
          color: colors.customer,
          fontWeight: typography.bold,
          opacity: labelOpacity,
          backgroundColor: colors.bgSecondary,
          padding: "8px 20px",
          borderRadius: 8,
          border: `2px solid ${colors.customer}`,
        }}
      >
        DAY 2 - Prompt 工程
      </div>

      {/* Main Title */}
      <div
        style={{
          position: "absolute",
          top: "58%",
          fontSize: typography.heading,
          color: colors.textPrimary,
          fontWeight: typography.bold,
          opacity: titleOpacity,
        }}
      >
        Prompt 工程与优化
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: "68%",
          fontSize: typography.subheading,
          color: colors.textSecondary,
          opacity: subtitleOpacity,
        }}
      >
        掌握与 Agent 对话的艺术
      </div>
    </AbsoluteFill>
  );
};
