import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 8: Prompt Template Structure (12 seconds / 360 frames)
 * Show the complete Agent Prompt template
 */
export const Day2TemplateScene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  const titleOpacity = fadeIn(frame, 0);

  // Formula components appear one by one
  const formula1Opacity = fadeIn(frame, 40);
  const formula2Opacity = fadeIn(frame, 60);
  const formula3Opacity = fadeIn(frame, 80);
  const formula4Opacity = fadeIn(frame, 100);
  const formula5Opacity = fadeIn(frame, 120);

  // Full formula box
  const formulaBoxOpacity = fadeIn(frame, 150);

  // Example label
  const exampleLabelOpacity = fadeIn(frame, 200);

  // Example content
  const exampleOpacity = fadeIn(frame, 220);

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
        }}
      >
        {t.day2TemplateTitle}
      </div>

      {/* Formula Components */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <div
          style={{
            opacity: formula1Opacity,
            fontSize: typography.body,
            color: colors.customer,
            backgroundColor: colors.bgSecondary,
            padding: "10px 20px",
            borderRadius: 8,
            border: `2px solid ${colors.customer}`,
            fontWeight: typography.bold,
          }}
        >
          [系统角色]
        </div>

        <div style={{ opacity: formula2Opacity, fontSize: 28, color: colors.textSecondary }}>
          +
        </div>

        <div
          style={{
            opacity: formula2Opacity,
            fontSize: typography.body,
            color: colors.brain,
            backgroundColor: colors.bgSecondary,
            padding: "10px 20px",
            borderRadius: 8,
            border: `2px solid ${colors.brain}`,
            fontWeight: typography.bold,
          }}
        >
          [任务目标]
        </div>

        <div style={{ opacity: formula3Opacity, fontSize: 28, color: colors.textSecondary }}>
          +
        </div>

        <div
          style={{
            opacity: formula3Opacity,
            fontSize: typography.body,
            color: colors.tools,
            backgroundColor: colors.bgSecondary,
            padding: "10px 20px",
            borderRadius: 8,
            border: `2px solid ${colors.tools}`,
            fontWeight: typography.bold,
          }}
        >
          [可用工具]
        </div>

        <div style={{ opacity: formula4Opacity, fontSize: 28, color: colors.textSecondary }}>
          +
        </div>

        <div
          style={{
            opacity: formula4Opacity,
            fontSize: typography.body,
            color: colors.recipe,
            backgroundColor: colors.bgSecondary,
            padding: "10px 20px",
            borderRadius: 8,
            border: `2px solid ${colors.recipe}`,
            fontWeight: typography.bold,
          }}
        >
          [输出格式]
        </div>

        <div style={{ opacity: formula5Opacity, fontSize: 28, color: colors.textSecondary }}>
          +
        </div>

        <div
          style={{
            opacity: formula5Opacity,
            fontSize: typography.body,
            color: colors.memory,
            backgroundColor: colors.bgSecondary,
            padding: "10px 20px",
            borderRadius: 8,
            border: `2px solid ${colors.memory}`,
            fontWeight: typography.bold,
          }}
        >
          [约束条件]
        </div>
      </div>

      {/* Example Label */}
      <div
        style={{
          position: "absolute",
          top: 320,
          fontSize: typography.subheading,
          color: colors.result,
          fontWeight: typography.bold,
          opacity: exampleLabelOpacity,
        }}
      >
        {t.day2TemplateLabel}
      </div>

      {/* Example Template Box */}
      <div
        style={{
          position: "absolute",
          top: 390,
          left: "50%",
          transform: `translateX(-50%) scale(${bounceScale(frame, 220)})`,
          opacity: exampleOpacity,
          width: 1300,
        }}
      >
        <div
          style={{
            fontSize: typography.body,
            color: colors.textPrimary,
            backgroundColor: colors.bgSecondary,
            padding: "30px 40px",
            borderRadius: 12,
            border: `3px solid ${colors.result}`,
            whiteSpace: "pre-line",
            lineHeight: 1.8,
            fontFamily: "monospace",
          }}
        >
          {t.day2TemplateExample}
        </div>
      </div>

      {/* Bottom message */}
      <div
        style={{
          position: "absolute",
          bottom: 160,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: fadeIn(frame, 320),
          textAlign: "center",
          width: "100%",
        }}
      >
        💡 按照这个模板结构，构建清晰完整的 Agent Prompt
      </div>
    </AbsoluteFill>
  );
};
