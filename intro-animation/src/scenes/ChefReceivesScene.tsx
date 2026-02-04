import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale, pulse, typingEffect } from "../utils/animations";
import { IconNode } from "../components/IconNode";
import { SpeechBubble } from "../components/SpeechBubble";
import { AnnotationLabel } from "../components/AnnotationLabel";
import { texts, Language } from "../utils/texts";

/**
 * Scene 4: Chef Receives Order (6 seconds / 180 frames)
 * Menu flies to chef, brain appears, chef thinks
 */
export const ChefReceivesScene: React.FC<{ language?: Language }> = ({ language = "zh" }) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  const thoughtText = t.chefThought;

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Chef animation
  const chefOpacity = fadeIn(frame, 0);
  const chefScale = bounceScale(frame, 0);

  // Menu paper flight animation (flies from left to chef)
  const menuProgress = interpolate(frame, [20, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  const menuX = interpolate(menuProgress, [0, 1], [200, 1550]);
  const menuY = interpolate(
    menuProgress,
    [0, 0.5, 1],
    [540, 400, 540],
    {
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }
  );
  const menuRotation = menuProgress * 360;
  const menuOpacity = fadeIn(frame, 20);

  // Chef bounce when receiving menu
  const chefBounce = frame >= 60 && frame < 75 ? bounceScale(frame, 60, 15, 1, 1.1) : 1;

  // Brain animation (appears after menu arrives)
  const brainOpacity = fadeIn(frame, 70);
  const brainScale = bounceScale(frame, 70);
  const brainPulse = frame > 85 ? pulse(frame - 85, 0.1, 0.1) : 1;

  // Thought bubble animation
  const thoughtOpacity = fadeIn(frame, 90);
  const thoughtScale = bounceScale(frame, 90);

  // Typing effect for thought text
  const charsToShow = typingEffect(frame, 105, 45, thoughtText.length);
  const displayedThought = thoughtText.substring(0, charsToShow);

  // Annotation (appears earlier and stays longer)
  const annotationOpacity = fadeIn(frame, 130);

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
        {t.chefTitle}
      </div>

      {/* Flying Menu Paper */}
      {menuProgress < 1 && (
        <div
          style={{
            position: "absolute",
            left: menuX,
            top: menuY,
            transform: `translate(-50%, -50%) rotate(${menuRotation}deg)`,
            fontSize: 80,
            opacity: menuOpacity,
          }}
        >
          📝
        </div>
      )}

      {/* Chef */}
      <div
        style={{
          position: "absolute",
          right: 250,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <IconNode
          icon="👨‍🍳"
          label={t.chef}
          color={colors.chef}
          opacity={chefOpacity}
          scale={chefScale * chefBounce}
        />
      </div>

      {/* Brain (above chef) */}
      <div
        style={{
          position: "absolute",
          right: 270,
          top: "28%",
        }}
      >
        <IconNode
          icon="🧠"
          label="LLM"
          color={colors.brain}
          iconSize={100}
          labelSize={28}
          opacity={brainOpacity}
          scale={brainScale}
          pulse={brainPulse}
        />
      </div>

      {/* Thought Bubble */}
      <div
        style={{
          position: "absolute",
          left: 250,
          top: "35%",
        }}
      >
        <SpeechBubble
          text={displayedThought}
          direction="right"
          color={colors.brain}
          backgroundColor={colors.bgSecondary}
          fontSize={typography.body}
          opacity={thoughtOpacity}
          scale={thoughtScale}
          maxWidth={800}
        />
      </div>

      {/* Annotation - larger font, appears earlier */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          opacity: annotationOpacity,
        }}
      >
        <AnnotationLabel
          text={t.chefAnnotation}
          color={colors.chef}
          fontSize={36}
        />
      </div>
    </AbsoluteFill>
  );
};
