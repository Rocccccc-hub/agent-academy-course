import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale } from "../utils/animations";
import { IconNode } from "../components/IconNode";
import { AnnotationLabel } from "../components/AnnotationLabel";
import { texts, Language } from "../utils/texts";

/**
 * Scene 6: Cooking Process (8 seconds / 240 frames)
 * Chef cooks with fire, ingredients, steam particles, memory note, and progress ring
 */
export const CookingProcessScene: React.FC<{ language?: Language }> = ({ language = "zh" }) => {
  const frame = useCurrentFrame();
  const t = texts[language];

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Chef animation
  const chefOpacity = fadeIn(frame, 0);

  // Wok (pan) animation
  const wokOpacity = fadeIn(frame, 15);
  const wokScale = bounceScale(frame, 15);

  // Fire animation (appears and flickers)
  const fireOpacity = fadeIn(frame, 30);
  const fireFlicker = Math.sin(frame * 0.3) * 0.2 + 0.8;

  // Wok heating animation (color shift)
  const heatProgress = interpolate(frame, [30, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Ingredients drop in (staggered)
  const ingredients = [
    { emoji: "🌶️", delay: 70 },
    { emoji: "🧄", delay: 80 },
    { emoji: "🧅", delay: 90 },
    { emoji: "🥩", delay: 100 },
  ];

  // Steam particles
  const steamStartFrame = 110;
  const steamParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    startFrame: steamStartFrame + i * 3,
    offsetX: (Math.sin(i * 2) * 40),
    speed: 2 + Math.random() * 1.5,
  }));

  // Memory notebook animation
  const notebookOpacity = fadeIn(frame, 140);
  const notebookScale = bounceScale(frame, 140);

  // Writing animation (pen following text)
  const writingProgress = interpolate(frame, [155, 185], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Progress ring
  const progressOpacity = fadeIn(frame, 50);
  const progress = interpolate(frame, [50, 210], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Annotation (appears earlier for better visibility)
  const annotationOpacity = fadeIn(frame, 180);

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
        {t.cookingTitle}
      </div>

      {/* Chef */}
      <div
        style={{
          position: "absolute",
          left: 250,
          top: "45%",
          transform: "translateY(-50%)",
        }}
      >
        <IconNode
          icon="👨‍🍳"
          color={colors.chef}
          opacity={chefOpacity}
        />
      </div>

      {/* Cooking Area (Center) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Fire */}
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 100,
            opacity: fireOpacity * fireFlicker,
          }}
        >
          🔥
        </div>

        {/* Wok (pan) with heat effect */}
        <div
          style={{
            position: "relative",
            fontSize: 150,
            opacity: wokOpacity,
            transform: `scale(${wokScale})`,
            filter: `hue-rotate(${heatProgress * 30}deg) brightness(${1 + heatProgress * 0.3})`,
          }}
        >
          🥘

          {/* Ingredients inside wok */}
          {ingredients.map((ingredient, index) => {
            const opacity = fadeIn(frame, ingredient.delay);
            const dropY = interpolate(
              frame,
              [ingredient.delay, ingredient.delay + 15],
              [-100, 0],
              {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }
            );

            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `${50 + dropY}%`,
                  left: `${30 + index * 15}%`,
                  fontSize: 40,
                  opacity,
                }}
              >
                {ingredient.emoji}
              </div>
            );
          })}
        </div>

        {/* Steam particles rising */}
        {steamParticles.map((particle) => {
          const particleAge = frame - particle.startFrame;
          if (particleAge < 0 || particleAge > 60) return null;

          const opacity = fadeIn(particleAge, 0, 10) * (1 - particleAge / 60);
          const y = -particleAge * particle.speed;
          const size = 20 + particleAge * 0.5;

          return (
            <div
              key={particle.id}
              style={{
                position: "absolute",
                top: y,
                left: particle.offsetX,
                fontSize: size,
                opacity,
              }}
            >
              💨
            </div>
          );
        })}
      </div>

      {/* Progress Ring */}
      <div
        style={{
          position: "absolute",
          right: 150,
          top: "30%",
          opacity: progressOpacity,
        }}
      >
        <svg width={180} height={180}>
          {/* Background circle */}
          <circle
            cx={90}
            cy={90}
            r={70}
            stroke={colors.bgTertiary}
            strokeWidth={12}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={90}
            cy={90}
            r={70}
            stroke={colors.result}
            strokeWidth={12}
            fill="none"
            strokeDasharray={2 * Math.PI * 70}
            strokeDashoffset={2 * Math.PI * 70 * (1 - progress)}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
            style={{
              transition: "stroke-dashoffset 0.3s ease",
            }}
          />
          {/* Percentage text */}
          <text
            x={90}
            y={100}
            textAnchor="middle"
            fontSize={36}
            fill={colors.textPrimary}
            fontWeight={typography.bold}
          >
            {Math.floor(progress * 100)}%
          </text>
        </svg>
      </div>

      {/* Memory Notebook */}
      <div
        style={{
          position: "absolute",
          right: 250,
          bottom: 180,
          opacity: notebookOpacity,
        }}
      >
        <div
          style={{
            position: "relative",
            transform: `scale(${notebookScale})`,
          }}
        >
          {/* Notebook icon */}
          <div style={{ fontSize: 80 }}>📓</div>

          {/* Writing content */}
          <div
            style={{
              position: "absolute",
              top: 20,
              left: 100,
              backgroundColor: colors.bgSecondary,
              padding: "12px 20px",
              borderRadius: 10,
              border: `2px solid ${colors.memory}`,
              whiteSpace: "nowrap",
              boxShadow: `0 0 20px ${colors.memory}33`,
            }}
          >
            <div
              style={{
                fontSize: typography.small,
                color: colors.memory,
                fontWeight: typography.semibold,
              }}
            >
              {writingProgress > 0 && t.cookingNote.substring(0, Math.floor(writingProgress * t.cookingNote.length))}
            </div>

            {/* Pen icon (follows text) */}
            {writingProgress < 1 && (
              <div
                style={{
                  position: "absolute",
                  right: -12,
                  top: "50%",
                  transform: "translateY(-50%) rotate(45deg)",
                  fontSize: 20,
                }}
              >
                ✍️
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Annotation */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          opacity: annotationOpacity,
        }}
      >
        <AnnotationLabel
          text={t.cookingAnnotation}
          color={colors.memory}
          fontSize={36}
        />
      </div>
    </AbsoluteFill>
  );
};
