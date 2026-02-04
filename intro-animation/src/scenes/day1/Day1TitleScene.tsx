import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale, pulse } from "../../utils/animations";

/**
 * Day 1 Scene 1: Title (15 seconds / 450 frames)
 * Introduction to Agent Architecture Fundamentals
 */
export const Day1TitleScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Icon animations
  const iconOpacity = fadeIn(frame, 0);
  const iconScale = bounceScale(frame, 0);
  const iconPulse = frame > 60 ? pulse(frame - 60, 0.08, 0.05) : 1;

  // Title animations
  const titleOpacity = fadeIn(frame, 20);
  const titleY = fadeIn(frame, 20, 20) * -50 + 50;

  // Subtitle animations
  const subtitleOpacity = fadeIn(frame, 45);

  // Day label
  const dayLabelOpacity = fadeIn(frame, 10);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgPrimary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Day Label */}
      <div
        style={{
          position: "absolute",
          top: 60,
          fontSize: typography.caption,
          color: colors.textSecondary,
          fontWeight: typography.semibold,
          opacity: dayLabelOpacity,
          letterSpacing: "0.1em",
        }}
      >
        DAY 1
      </div>

      {/* Robot Icon */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          fontSize: 150,
          opacity: iconOpacity,
          transform: `scale(${iconScale * iconPulse})`,
        }}
      >
        🤖
      </div>

      {/* Main Title */}
      <div
        style={{
          position: "absolute",
          top: `calc(50% + ${titleY}px)`,
          fontSize: typography.title,
          color: colors.textPrimary,
          fontWeight: typography.bold,
          opacity: titleOpacity,
          textAlign: "center",
        }}
      >
        Agent 架构基础
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: "65%",
          fontSize: typography.subheading,
          color: colors.textSecondary,
          fontWeight: typography.medium,
          opacity: subtitleOpacity,
          textAlign: "center",
        }}
      >
        理解 Agent 的工作原理和架构模式
      </div>
    </AbsoluteFill>
  );
};
