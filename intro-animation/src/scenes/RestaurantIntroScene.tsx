import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale } from "../utils/animations";
import { IconNode } from "../components/IconNode";
import { texts, Language } from "../utils/texts";

/**
 * Scene 2: Restaurant Introduction (5 seconds / 150 frames)
 * Introduces the restaurant metaphor with all key elements
 */
export const RestaurantIntroScene: React.FC<{ language?: Language }> = ({ language = "zh" }) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Restaurant building animation
  const restaurantOpacity = fadeIn(frame, 20);
  const restaurantScale = bounceScale(frame, 20);

  // Customer (left side)
  const customerOpacity = fadeIn(frame, 40);
  const customerScale = bounceScale(frame, 40);

  // Chef (right side)
  const chefOpacity = fadeIn(frame, 60);
  const chefScale = bounceScale(frame, 60);

  // Bottom tools
  const tools = [
    { icon: "📖", label: t.recipe, startFrame: 80 },
    { icon: "🥘", label: t.tools, startFrame: 90 },
    { icon: "📓", label: t.notebook, startFrame: 100 },
  ];

  // Connection lines
  const linesOpacity = fadeIn(frame, 110, 20);

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
        {t.introTitle}
      </div>

      {/* Restaurant Building (Center) */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <IconNode
          icon="🏪"
          iconSize={180}
          opacity={restaurantOpacity}
          scale={restaurantScale}
        />
      </div>

      {/* Customer (Left) */}
      <div
        style={{
          position: "absolute",
          left: 250,
          top: "45%",
          transform: "translateY(-50%)",
        }}
      >
        <IconNode
          icon="👤"
          label={t.customer}
          color={colors.customer}
          opacity={customerOpacity}
          scale={customerScale}
        />
      </div>

      {/* Chef (Right) */}
      <div
        style={{
          position: "absolute",
          right: 250,
          top: "45%",
          transform: "translateY(-50%)",
        }}
      >
        <IconNode
          icon="👨‍🍳"
          label={t.chef}
          color={colors.chef}
          opacity={chefOpacity}
          scale={chefScale}
        />
      </div>

      {/* Bottom Tools */}
      <div
        style={{
          position: "absolute",
          bottom: 150,
          display: "flex",
          gap: 150,
        }}
      >
        {tools.map((tool, index) => {
          const opacity = fadeIn(frame, tool.startFrame);
          const scale = bounceScale(frame, tool.startFrame, 15);

          return (
            <div key={index}>
              <IconNode
                icon={tool.icon}
                label={tool.label}
                color={colors.textSecondary}
                iconSize={80}
                labelSize={typography.caption}
                opacity={opacity}
                scale={scale}
              />
            </div>
          );
        })}
      </div>

      {/* Connection Lines (SVG) */}
      <svg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: linesOpacity,
        }}
      >
        {/* Line from customer to restaurant */}
        <line
          x1={370}
          y1={540}
          x2={860}
          y2={486}
          stroke={colors.customer}
          strokeWidth={2}
          strokeDasharray="10,5"
        />

        {/* Line from restaurant to chef */}
        <line
          x1={1060}
          y1={486}
          x2={1550}
          y2={540}
          stroke={colors.chef}
          strokeWidth={2}
          strokeDasharray="10,5"
        />

        {/* Lines from restaurant to bottom tools */}
        <line
          x1={960}
          y1={540}
          x2={560}
          y2={850}
          stroke={colors.textSecondary}
          strokeWidth={2}
          strokeDasharray="10,5"
          opacity={0.5}
        />
        <line
          x1={960}
          y1={540}
          x2={960}
          y2={850}
          stroke={colors.textSecondary}
          strokeWidth={2}
          strokeDasharray="10,5"
          opacity={0.5}
        />
        <line
          x1={960}
          y1={540}
          x2={1360}
          y2={850}
          stroke={colors.textSecondary}
          strokeWidth={2}
          strokeDasharray="10,5"
          opacity={0.5}
        />
      </svg>
    </AbsoluteFill>
  );
};
