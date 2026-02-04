import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 3: Bad vs Good Prompt (12 seconds / 360 frames)
 * Compare bad and good prompts side by side
 */
export const Day2BadVsGoodScene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  const titleOpacity = fadeIn(frame, 0);

  // Bad prompt (left side)
  const badLabelOpacity = fadeIn(frame, 30);
  const badPromptOpacity = fadeIn(frame, 50);
  const badResultOpacity = fadeIn(frame, 120);

  // Good prompt (right side)
  const goodLabelOpacity = fadeIn(frame, 180);
  const goodPromptOpacity = fadeIn(frame, 200);
  const goodResultOpacity = fadeIn(frame, 270);

  // VS divider
  const vsOpacity = fadeIn(frame, 150);

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
          textAlign: "center",
          width: "100%",
        }}
      >
        {t.day2CompareTitle}
      </div>

      {/* VS Divider */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 250,
          bottom: 200,
          width: 3,
          backgroundColor: colors.textSecondary,
          opacity: vsOpacity * 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 60,
          color: colors.textPrimary,
          fontWeight: typography.bold,
          opacity: vsOpacity,
          backgroundColor: colors.bgPrimary,
          padding: "10px 30px",
        }}
      >
        VS
      </div>

      {/* ===== LEFT SIDE: Bad Prompt ===== */}
      <div
        style={{
          position: "absolute",
          left: 140,
          top: 220,
          width: 750,
        }}
      >
        {/* Bad Label */}
        <div
          style={{
            opacity: badLabelOpacity,
            fontSize: typography.subheading,
            color: "#ff6b6b",
            fontWeight: typography.bold,
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          {t.day2BadLabel}
        </div>

        {/* Bad Prompt */}
        <div
          style={{
            opacity: badPromptOpacity,
            transform: `scale(${bounceScale(frame, 50)})`,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: colors.textPrimary,
              backgroundColor: colors.bgSecondary,
              padding: "20px 30px",
              borderRadius: 12,
              border: `3px solid #ff6b6b`,
              textAlign: "center",
            }}
          >
            💬 {t.day2BadPrompt}
          </div>
        </div>

        {/* Bad Result */}
        <div
          style={{
            opacity: badResultOpacity,
            transform: `scale(${bounceScale(frame, 120)})`,
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: "#ff6b6b",
              backgroundColor: colors.bgSecondary,
              padding: "20px 30px",
              borderRadius: 12,
              border: `2px solid #ff6b6b`,
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {t.day2BadResult}
          </div>
        </div>
      </div>

      {/* ===== RIGHT SIDE: Good Prompt ===== */}
      <div
        style={{
          position: "absolute",
          right: 140,
          top: 220,
          width: 750,
        }}
      >
        {/* Good Label */}
        <div
          style={{
            opacity: goodLabelOpacity,
            fontSize: typography.subheading,
            color: colors.result,
            fontWeight: typography.bold,
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          {t.day2GoodLabel}
        </div>

        {/* Good Prompt */}
        <div
          style={{
            opacity: goodPromptOpacity,
            transform: `scale(${bounceScale(frame, 200)})`,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: colors.textPrimary,
              backgroundColor: colors.bgSecondary,
              padding: "20px 30px",
              borderRadius: 12,
              border: `3px solid ${colors.result}`,
              textAlign: "center",
              whiteSpace: "pre-line",
              lineHeight: 1.6,
            }}
          >
            💬 {t.day2GoodPrompt}
          </div>
        </div>

        {/* Good Result */}
        <div
          style={{
            opacity: goodResultOpacity,
            transform: `scale(${bounceScale(frame, 270)})`,
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: colors.result,
              backgroundColor: colors.bgSecondary,
              padding: "20px 30px",
              borderRadius: 12,
              border: `2px solid ${colors.result}`,
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {t.day2GoodResult}
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div
        style={{
          position: "absolute",
          bottom: 150,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: fadeIn(frame, 320),
          textAlign: "center",
          width: "100%",
        }}
      >
        💡 对比可见：清晰具体的 Prompt 带来更好的结果
      </div>
    </AbsoluteFill>
  );
};
