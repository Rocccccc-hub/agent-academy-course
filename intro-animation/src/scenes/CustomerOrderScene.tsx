import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale, typingEffect, blinkingCursor } from "../utils/animations";
import { IconNode } from "../components/IconNode";
import { SpeechBubble } from "../components/SpeechBubble";
import { AnnotationLabel } from "../components/AnnotationLabel";

/**
 * Scene 3: Customer Order (5 seconds / 150 frames)
 * Customer places an order (User gives prompt)
 */
export const CustomerOrderScene: React.FC = () => {
  const frame = useCurrentFrame();

  const question = "我想吃拉面";

  // Customer icon animations
  const customerOpacity = fadeIn(frame, 0);
  const customerScale = bounceScale(frame, 0);

  // Speech bubble animations
  const bubbleOpacity = fadeIn(frame, 25);
  const bubbleScale = bounceScale(frame, 25, 18);

  // Typing effect
  const charsToShow = typingEffect(frame, 45, 30, question.length);
  const displayedText = question.substring(0, charsToShow);
  const showCursor = charsToShow < question.length;
  const cursorOpacity = blinkingCursor(frame);

  // Menu paper icon
  const menuOpacity = fadeIn(frame, 75);
  const menuScale = bounceScale(frame, 75, 18);

  // Annotation label
  const annotationOpacity = fadeIn(frame, 95);

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
        }}
      >
        顾客点餐
      </div>

      {/* Customer Icon */}
      <div
        style={{
          position: "absolute",
          left: 250,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <IconNode
          icon="👤"
          label="顾客"
          color={colors.customer}
          opacity={customerOpacity}
          scale={customerScale}
        />
      </div>

      {/* Speech Bubble */}
      <div
        style={{
          position: "absolute",
          left: 520,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <SpeechBubble
          text={displayedText}
          direction="left"
          color={colors.customer}
          opacity={bubbleOpacity}
          scale={bubbleScale}
          showCursor={showCursor}
          cursorOpacity={cursorOpacity}
        />
      </div>

      {/* Menu Paper Icon */}
      <div
        style={{
          position: "absolute",
          right: 250,
          top: "50%",
          transform: `translateY(-50%) scale(${menuScale})`,
          fontSize: 100,
          opacity: menuOpacity,
        }}
      >
        📝
      </div>

      {/* Annotation */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          opacity: annotationOpacity,
        }}
      >
        <AnnotationLabel
          text="顾客 = 用户 | 点菜单 = Prompt"
          color={colors.customer}
          fontSize={36}
        />
      </div>
    </AbsoluteFill>
  );
};
