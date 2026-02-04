import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale, pulse } from "../utils/animations";
import { texts, Language } from "../utils/texts";

/**
 * Scene 1: Restaurant Title (4 seconds / 120 frames)
 * Shows title and introduces the restaurant metaphor
 */
export const RestaurantTitleScene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const t = texts[language];
  const frame = useCurrentFrame();

  // Icon animations
  const iconOpacity = fadeIn(frame, 0);
  const iconScale = bounceScale(frame, 0);
  const iconPulse = frame > 60 ? pulse(frame - 60, 0.08, 0.05) : 1;

  // Title animations
  const titleOpacity = fadeIn(frame, 15);
  const titleY = fadeIn(frame, 15, 20) * -50 + 50;

  // Subtitle animations
  const subtitleOpacity = fadeIn(frame, 35);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgPrimary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Restaurant Icon */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          fontSize: 150,
          opacity: iconOpacity,
          transform: `scale(${iconScale * iconPulse})`,
        }}
      >
        🍽️
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
        {t.title}
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
        {t.subtitle}
      </div>
    </AbsoluteFill>
  );
};
