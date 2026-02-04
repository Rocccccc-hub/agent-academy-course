import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale } from "../utils/animations";
import { IconNode } from "../components/IconNode";

/**
 * Scene 8: Restaurant Summary (4 seconds / 120 frames)
 * Shows all components working together in a circular layout
 */
export const RestaurantSummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Center chef animation
  const chefOpacity = fadeIn(frame, 15);
  const chefScale = bounceScale(frame, 15);

  // Surrounding components (circular layout)
  const components = [
    { icon: "👤", label: "顾客 (User)", color: colors.customer, angle: 0 },
    { icon: "📝", label: "点菜单 (Prompt)", color: colors.customer, angle: 45 },
    { icon: "🧠", label: "大脑 (LLM)", color: colors.brain, angle: 90 },
    { icon: "📖", label: "菜谱 (MCP)", color: colors.recipe, angle: 135 },
    { icon: "🥘", label: "厨具 (Tools)", color: colors.tools, angle: 180 },
    { icon: "📓", label: "记录本 (Memory)", color: colors.memory, angle: 225 },
    { icon: "🍜", label: "菜品 (Result)", color: colors.result, angle: 270 },
  ];

  const radius = 350;
  const centerX = 960; // 1920 / 2
  const centerY = 540; // 1080 / 2

  // Bottom text animation
  const bottomTextOpacity = fadeIn(frame, 90);

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
        智能餐厅：完整协作流程
      </div>

      {/* Center Chef (Agent) */}
      <div
        style={{
          position: "absolute",
          left: centerX,
          top: centerY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <IconNode
          icon="👨‍🍳"
          label="厨师 (Agent)"
          color={colors.chef}
          iconSize={150}
          labelSize={typography.subheading}
          opacity={chefOpacity}
          scale={chefScale}
        />
      </div>

      {/* Surrounding Components */}
      {components.map((component, index) => {
        const startFrame = 30 + index * 8;
        const opacity = fadeIn(frame, startFrame);
        const scale = bounceScale(frame, startFrame, 15);

        const angleRad = (component.angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(angleRad);
        const y = centerY + radius * Math.sin(angleRad);

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <IconNode
              icon={component.icon}
              label={component.label}
              color={component.color}
              iconSize={80}
              labelSize={typography.caption}
              opacity={opacity}
              scale={scale}
            />
          </div>
        );
      })}

      {/* Connection Lines */}
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
        {components.map((component, index) => {
          const startFrame = 30 + index * 8 + 10;
          const opacity = fadeIn(frame, startFrame, 10);

          const angleRad = (component.angle * Math.PI) / 180;
          const x = centerX + radius * Math.cos(angleRad);
          const y = centerY + radius * Math.sin(angleRad);

          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke={colors.textSecondary}
              strokeWidth={2}
              strokeDasharray="5,5"
              opacity={opacity * 0.3}
            />
          );
        })}
      </svg>

      {/* Bottom Text */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontSize: typography.subheading,
          color: colors.textSecondary,
          fontWeight: typography.medium,
          opacity: bottomTextOpacity,
          textAlign: "center",
        }}
      >
        这些组件协同工作，完成智能服务 🎯
      </div>
    </AbsoluteFill>
  );
};
