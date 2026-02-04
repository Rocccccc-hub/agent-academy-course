import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Reusable component for displaying a single principle
 * Used for all 4 principle scenes (10 seconds / 300 frames each)
 */
interface PrincipleProps {
  title: string;
  description: string;
  beforeLabel?: string;
  beforeText: string;
  afterLabel?: string;
  afterText: string;
  tipText: string;
  icon?: string;
}

export const Day2PrincipleScene: React.FC<PrincipleProps> = ({
  title,
  description,
  beforeLabel = "❌ 改进前",
  beforeText,
  afterLabel = "✅ 改进后",
  afterText,
  tipText,
  icon = "💡",
}) => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);
  const descOpacity = fadeIn(frame, 25);

  // Before example
  const beforeLabelOpacity = fadeIn(frame, 60);
  const beforeTextOpacity = fadeIn(frame, 80);

  // After example
  const afterLabelOpacity = fadeIn(frame, 150);
  const afterTextOpacity = fadeIn(frame, 170);

  // Tip
  const tipOpacity = fadeIn(frame, 240);

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
        {title}
      </div>

      {/* Description */}
      <div
        style={{
          position: "absolute",
          top: 190,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: descOpacity,
          textAlign: "center",
        }}
      >
        {description}
      </div>

      {/* Before Example */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 310,
          transform: "translateX(-50%)",
          width: 1200,
        }}
      >
        {/* Before Label */}
        <div
          style={{
            opacity: beforeLabelOpacity,
            fontSize: typography.subheading,
            color: "#ff6b6b",
            fontWeight: typography.bold,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {beforeLabel}
        </div>

        {/* Before Text */}
        <div
          style={{
            opacity: beforeTextOpacity,
            transform: `scale(${bounceScale(frame, 80)})`,
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: colors.textPrimary,
              backgroundColor: colors.bgSecondary,
              padding: "18px 35px",
              borderRadius: 12,
              border: `3px solid #ff6b6b`,
              textAlign: "center",
              whiteSpace: "pre-line",
              lineHeight: 1.6,
            }}
          >
            {beforeText}
          </div>
        </div>
      </div>

      {/* After Example */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 520,
          transform: "translateX(-50%)",
          width: 1200,
        }}
      >
        {/* After Label */}
        <div
          style={{
            opacity: afterLabelOpacity,
            fontSize: typography.subheading,
            color: colors.result,
            fontWeight: typography.bold,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {afterLabel}
        </div>

        {/* After Text */}
        <div
          style={{
            opacity: afterTextOpacity,
            transform: `scale(${bounceScale(frame, 170)})`,
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: colors.textPrimary,
              backgroundColor: colors.bgSecondary,
              padding: "18px 35px",
              borderRadius: 12,
              border: `3px solid ${colors.result}`,
              textAlign: "center",
              whiteSpace: "pre-line",
              lineHeight: 1.6,
            }}
          >
            {afterText}
          </div>
        </div>
      </div>

      {/* Tip */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          fontSize: typography.body,
          color: colors.customer,
          fontWeight: typography.bold,
          opacity: tipOpacity,
          backgroundColor: colors.bgSecondary,
          padding: "12px 30px",
          borderRadius: 10,
          border: `2px solid ${colors.customer}`,
        }}
      >
        {icon} {tipText}
      </div>
    </AbsoluteFill>
  );
};
