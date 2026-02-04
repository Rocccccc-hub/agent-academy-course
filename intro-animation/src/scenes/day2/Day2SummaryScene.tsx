import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale, pulse } from "../../utils/animations";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 9: Summary (4 seconds / 120 frames)
 * Summarize Prompt Engineering key points
 */
export const Day2SummaryScene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  const titleOpacity = fadeIn(frame, 0);

  // Central icon
  const iconOpacity = fadeIn(frame, 15);
  const iconScale = bounceScale(frame, 15);
  const iconPulse = frame > 40 ? pulse(frame - 40, 0.08, 0.05) : 1;

  // Four points appear in sequence
  const points = [
    { text: t.day2SummaryPoint1, delay: 30, color: colors.customer },
    { text: t.day2SummaryPoint2, delay: 45, color: colors.brain },
    { text: t.day2SummaryPoint3, delay: 60, color: colors.recipe },
    { text: t.day2SummaryPoint4, delay: 75, color: colors.memory },
  ];

  // Bottom message
  const messageOpacity = fadeIn(frame, 95);

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
        {t.day2SummaryTitle}
      </div>

      {/* Central Icon */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 280,
          transform: `translate(-50%, -50%) scale(${iconScale * iconPulse})`,
          opacity: iconOpacity,
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            backgroundColor: colors.bgSecondary,
            border: `4px solid ${colors.result}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
            boxShadow: `0 0 40px ${colors.result}44`,
          }}
        >
          📝
        </div>
      </div>

      {/* Four Key Points in Grid Layout */}
      <div
        style={{
          position: "absolute",
          top: 420,
          left: "50%",
          transform: "translateX(-50%)",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 30,
          width: 1200,
        }}
      >
        {points.map((point, index) => {
          const pointOpacity = fadeIn(frame, point.delay);
          const pointScale = bounceScale(frame, point.delay);

          return (
            <div
              key={index}
              style={{
                opacity: pointOpacity,
                transform: `scale(${pointScale})`,
              }}
            >
              <div
                style={{
                  fontSize: typography.body,
                  color: colors.textPrimary,
                  backgroundColor: colors.bgSecondary,
                  padding: "18px 30px",
                  borderRadius: 10,
                  border: `3px solid ${point.color}`,
                  textAlign: "center",
                  fontWeight: typography.bold,
                }}
              >
                {point.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Message */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          fontSize: typography.body,
          color: colors.result,
          fontWeight: typography.bold,
          opacity: messageOpacity,
          textAlign: "center",
          width: "100%",
        }}
      >
        🎓 {t.day2SummaryMessage}
      </div>
    </AbsoluteFill>
  );
};
