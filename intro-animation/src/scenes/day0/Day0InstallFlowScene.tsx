import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";
import { texts, Language } from "../../utils/texts";

/**
 * Day 0 Scene 4: Install Flow (15 seconds / 450 frames)
 * Shows simplified installation steps
 */
export const Day0InstallFlowScene: React.FC<{ language?: Language }> = ({ language = "zh" }) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  const titleOpacity = fadeIn(frame, 0);

  // Three steps appear sequentially
  const steps = [
    {
      num: 1,
      icon: "📥",
      title: t.day0Step1Title,
      desc: t.day0Step1Desc,
      color: colors.customer,
      delay: 50,
    },
    {
      num: 2,
      icon: "🐍",
      title: t.day0Step2Title,
      desc: t.day0Step2Desc,
      color: colors.chef,
      delay: 140,
    },
    {
      num: 3,
      icon: "🔑",
      title: t.day0Step3Title,
      desc: t.day0Step3Desc,
      color: colors.brain,
      delay: 230,
    },
  ];

  // Progress bar animation
  const progressOpacity = fadeIn(frame, 320);
  const progressValue = interpolate(frame, [320, 420], [0, 100], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Bottom message
  const messageOpacity = fadeIn(frame, 380);

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
        {t.day0InstallTitle}
      </div>

      {/* Three Steps */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1400,
        }}
      >
        {steps.map((step, index) => {
          const stepOpacity = fadeIn(frame, step.delay);
          const stepScale = bounceScale(frame, step.delay);

          return (
            <div
              key={index}
              style={{
                opacity: stepOpacity,
                transform: `scale(${stepScale})`,
                marginBottom: 35,
                display: "flex",
                alignItems: "center",
                backgroundColor: colors.bgSecondary,
                padding: "25px 35px",
                borderRadius: 12,
                border: `2px solid ${step.color}`,
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: step.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: typography.subheading,
                  color: colors.bgPrimary,
                  fontWeight: typography.bold,
                  marginRight: 30,
                  flexShrink: 0,
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: 60,
                  marginRight: 25,
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: typography.subheading,
                    color: colors.textPrimary,
                    fontWeight: typography.bold,
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: typography.body,
                    color: colors.textSecondary,
                  }}
                >
                  {step.desc}
                </div>
              </div>

              {/* Check mark (appears after delay) */}
              {frame > step.delay + 60 && (
                <div
                  style={{
                    fontSize: 50,
                    color: colors.result,
                    marginLeft: 20,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Progress Bar */}
      {progressOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 180,
            width: 800,
            opacity: progressOpacity,
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: colors.textSecondary,
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            {t.day0InstallProgress}
          </div>
          <div
            style={{
              width: "100%",
              height: 30,
              backgroundColor: colors.bgSecondary,
              borderRadius: 15,
              border: `2px solid ${colors.result}`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progressValue}%`,
                height: "100%",
                backgroundColor: colors.result,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: typography.caption,
                color: colors.bgPrimary,
                fontWeight: typography.bold,
              }}
            >
              {Math.round(progressValue)}%
            </div>
          </div>
        </div>
      )}

      {/* Bottom Message */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontSize: typography.body,
          color: colors.result,
          fontWeight: typography.bold,
          opacity: messageOpacity,
        }}
      >
        {t.day0InstallMessage}
      </div>
    </AbsoluteFill>
  );
};
