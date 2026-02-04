import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";
import { texts, Language } from "../../utils/texts";

/**
 * Day 0 Scene 3: Three Core Tools (15 seconds / 450 frames)
 * Shows the three essential tools needed
 */
export const Day0ThreeToolsScene: React.FC<{ language?: Language }> = ({ language = "zh" }) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  const titleOpacity = fadeIn(frame, 0);

  // Three tools appear sequentially
  const tools = [
    {
      icon: "💻",
      title: t.day0Tool1Title,
      subtitle: t.day0Tool1Subtitle,
      analogy: t.day0Tool1Analogy,
      desc: t.day0Tool1Desc,
      color: colors.customer,
      delay: 50,
    },
    {
      icon: "🐍",
      title: t.day0Tool2Title,
      subtitle: t.day0Tool2Subtitle,
      analogy: t.day0Tool2Analogy,
      desc: t.day0Tool2Desc,
      color: colors.chef,
      delay: 140,
    },
    {
      icon: "🔑",
      title: t.day0Tool3Title,
      subtitle: t.day0Tool3Subtitle,
      analogy: t.day0Tool3Analogy,
      desc: t.day0Tool3Desc,
      color: colors.brain,
      delay: 230,
    },
  ];

  // Connection animation
  const connectionOpacity = fadeIn(frame, 350);

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
        {t.day0ThreeToolsTitle}
      </div>

      {/* Three Tools */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: 80,
          width: 1600,
          justifyContent: "center",
        }}
      >
        {tools.map((tool, index) => {
          const toolOpacity = fadeIn(frame, tool.delay);
          const toolScale = bounceScale(frame, tool.delay);

          return (
            <div
              key={index}
              style={{
                opacity: toolOpacity,
                transform: `scale(${toolScale})`,
                width: 450,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: 100,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                {tool.icon}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: typography.subheading,
                  color: tool.color,
                  fontWeight: typography.bold,
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                {tool.title}
              </div>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: typography.caption,
                  color: colors.textSecondary,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                {tool.subtitle}
              </div>

              {/* Card */}
              <div
                style={{
                  backgroundColor: colors.bgSecondary,
                  padding: "20px",
                  borderRadius: 12,
                  border: `2px solid ${tool.color}`,
                }}
              >
                {/* Analogy */}
                <div
                  style={{
                    fontSize: typography.caption,
                    color: tool.color,
                    marginBottom: 12,
                    textAlign: "center",
                  }}
                >
                  {language === "zh" ? "类比：" : "Analogy: "}{tool.analogy}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: typography.body,
                    color: colors.textPrimary,
                    textAlign: "center",
                  }}
                >
                  {tool.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Connection Lines */}
      {connectionOpacity > 0 && (
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
          {/* Line 1 to 2 */}
          <line
            x1={580}
            y1={540}
            x2={890}
            y2={540}
            stroke={colors.textSecondary}
            strokeWidth={2}
            strokeDasharray="5,5"
            opacity={connectionOpacity * 0.5}
          />
          {/* Line 2 to 3 */}
          <line
            x1={1030}
            y1={540}
            x2={1340}
            y2={540}
            stroke={colors.textSecondary}
            strokeWidth={2}
            strokeDasharray="5,5"
            opacity={connectionOpacity * 0.5}
          />
        </svg>
      )}

      {/* Bottom Note */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: fadeIn(frame, 380),
        }}
      >
        {t.day0ThreeToolsNote}
      </div>
    </AbsoluteFill>
  );
};
