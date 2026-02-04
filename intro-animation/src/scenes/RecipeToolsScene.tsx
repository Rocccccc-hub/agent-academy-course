import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale } from "../utils/animations";
import { AnnotationLabel } from "../components/AnnotationLabel";

/**
 * Scene 5: Recipe and Tools (8 seconds / 240 frames)
 * Book opens, flips pages, MCP connects recipe to tools, tools fly out
 */
export const RecipeToolsScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Book appears and opens
  const bookOpacity = fadeIn(frame, 15);
  const bookScale = bounceScale(frame, 15);

  // Book open animation (rotateY effect simulated with scaleX)
  const bookOpenProgress = interpolate(frame, [30, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.ease),
  });

  // Recipe list appears after book opens
  const recipeListOpacity = fadeIn(frame, 65);

  // Recipes to display
  const recipes = ["麻婆豆腐", "宫保鸡丁", "水煮鱼"];

  // Highlight selected recipe
  const highlightProgress = interpolate(frame, [85, 100], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // MCP connection icon
  const mcpOpacity = fadeIn(frame, 110);
  const mcpScale = bounceScale(frame, 110);

  // MCP connection lines with flowing particles
  const flowProgress = interpolate(frame, [120, 180], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Tool box appears
  const toolBoxOpacity = fadeIn(frame, 130);

  // Tools fly out
  const tools = [
    { icon: "🥘", delay: 150, x: 1350, y: 350 },
    { icon: "🔪", delay: 160, x: 1450, y: 450 },
    { icon: "🥄", delay: 170, x: 1350, y: 550 },
    { icon: "🧂", delay: 180, x: 1450, y: 650 },
  ];

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
        查阅菜谱获取工具
      </div>

      {/* Recipe Book (closed then opens) */}
      <div
        style={{
          position: "absolute",
          left: 350,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: bookOpacity,
        }}
      >
        {/* Closed book icon */}
        {bookOpenProgress < 0.5 && (
          <div
            style={{
              fontSize: 150,
              transform: `scale(${bookScale})`,
              opacity: 1 - bookOpenProgress * 2,
            }}
          >
            📖
          </div>
        )}

        {/* Open book (simulated) */}
        {bookOpenProgress >= 0.5 && (
          <div
            style={{
              width: 400,
              height: 500,
              backgroundColor: colors.bgSecondary,
              border: `4px solid ${colors.recipe}`,
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: `scale(${0.8 + bookOpenProgress * 0.2})`,
              boxShadow: `0 0 40px ${colors.recipe}33`,
            }}
          >
            {/* Book content */}
            <div
              style={{
                padding: 40,
                opacity: recipeListOpacity,
              }}
            >
              <div
                style={{
                  fontSize: typography.subheading,
                  color: colors.recipe,
                  fontWeight: typography.bold,
                  marginBottom: 30,
                  textAlign: "center",
                }}
              >
                川菜菜谱
              </div>

              {/* Recipe list */}
              {recipes.map((recipe, index) => {
                const isSelected = index === 0;
                const highlight = isSelected ? highlightProgress : 0;

                return (
                  <div
                    key={index}
                    style={{
                      fontSize: typography.body,
                      color: colors.textPrimary,
                      padding: "15px 20px",
                      marginBottom: 15,
                      backgroundColor: isSelected
                        ? `rgba(247, 120, 186, ${highlight * 0.3})`
                        : colors.bgTertiary,
                      borderRadius: 10,
                      border: isSelected
                        ? `2px solid ${colors.recipe}`
                        : `2px solid ${colors.border}`,
                      boxShadow: isSelected
                        ? `0 0 ${highlight * 30}px ${colors.recipe}`
                        : "none",
                    }}
                  >
                    {recipe}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* MCP Protocol Icon */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: mcpOpacity,
        }}
      >
        <div
          style={{
            fontSize: 100,
            transform: `scale(${mcpScale})`,
            filter: `drop-shadow(0 0 20px ${colors.recipe})`,
          }}
        >
          🔌
        </div>
        <div
          style={{
            fontSize: typography.caption,
            color: colors.recipe,
            fontWeight: typography.bold,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          MCP
        </div>
      </div>

      {/* Connection lines with flowing particles */}
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
        {/* Line from book to MCP */}
        <line
          x1={750}
          y1={540}
          x2={920}
          y2={540}
          stroke={colors.recipe}
          strokeWidth={4}
          strokeDasharray={flowProgress * 170}
          strokeDashoffset={0}
          opacity={flowProgress > 0 ? 1 : 0}
        />

        {/* Line from MCP to toolbox */}
        <line
          x1={1000}
          y1={540}
          x2={1300}
          y2={540}
          stroke={colors.tools}
          strokeWidth={4}
          strokeDasharray={flowProgress * 300}
          strokeDashoffset={0}
          opacity={flowProgress > 0.3 ? 1 : 0}
        />

        {/* Flowing particles */}
        {flowProgress > 0 && [0, 1, 2].map((i) => {
          const particleProgress = (flowProgress + i * 0.3) % 1;
          const particleX = 750 + particleProgress * 550;
          const particleOpacity = Math.sin(particleProgress * Math.PI);

          return (
            <circle
              key={i}
              cx={particleX}
              cy={540}
              r={6}
              fill={colors.recipe}
              opacity={particleOpacity * 0.8}
            />
          );
        })}
      </svg>

      {/* Tool Box */}
      <div
        style={{
          position: "absolute",
          right: 300,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: toolBoxOpacity,
        }}
      >
        <div style={{ fontSize: 120 }}>🧰</div>
      </div>

      {/* Flying Tools */}
      {tools.map((tool, index) => {
        const toolOpacity = fadeIn(frame, tool.delay);
        const toolScale = bounceScale(frame, tool.delay, 15);

        // Flight path from toolbox to final position
        const flightProgress = interpolate(
          frame,
          [tool.delay, tool.delay + 20],
          [0, 1],
          {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: Easing.out(Easing.ease),
          }
        );

        const startX = 1520;
        const startY = 540;
        const toolX = startX + (tool.x - startX) * flightProgress;
        const toolY = startY + (tool.y - startY) * flightProgress;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: toolX,
              top: toolY,
              transform: `translate(-50%, -50%) scale(${toolScale}) rotate(${flightProgress * 360}deg)`,
              fontSize: 80,
              opacity: toolOpacity,
              filter: `drop-shadow(0 0 10px ${colors.tools})`,
            }}
          >
            {tool.icon}
          </div>
        );
      })}

      {/* Annotation */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          opacity: annotationOpacity,
        }}
      >
        <AnnotationLabel
          text="菜谱 = MCP | 厨具 = Tools"
          color={colors.recipe}
          fontSize={36}
        />
      </div>
    </AbsoluteFill>
  );
};
