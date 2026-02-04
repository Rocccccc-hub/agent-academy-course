import React from "react";
import { colors } from "../utils/colors";

interface FlowArrowProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  color?: string;
  strokeWidth?: number;
  opacity?: number;
  dashProgress?: number; // 0-1, for animated drawing effect
  style?: React.CSSProperties;
}

/**
 * Reusable arrow component for showing flow between elements
 * Supports animated drawing with dashProgress
 */
export const FlowArrow: React.FC<FlowArrowProps> = ({
  fromX,
  fromY,
  toX,
  toY,
  color = colors.textSecondary,
  strokeWidth = 3,
  opacity = 1,
  dashProgress = 1,
  style = {},
}) => {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx);

  // Arrow head dimensions
  const arrowHeadLength = 20;
  const arrowHeadWidth = 12;

  // Calculate arrow head points
  const arrowTipX = toX;
  const arrowTipY = toY;
  const arrowBase1X =
    arrowTipX - arrowHeadLength * Math.cos(angle) - arrowHeadWidth * Math.sin(angle);
  const arrowBase1Y =
    arrowTipY - arrowHeadLength * Math.sin(angle) + arrowHeadWidth * Math.cos(angle);
  const arrowBase2X =
    arrowTipX - arrowHeadLength * Math.cos(angle) + arrowHeadWidth * Math.sin(angle);
  const arrowBase2Y =
    arrowTipY - arrowHeadLength * Math.sin(angle) - arrowHeadWidth * Math.cos(angle);

  // Calculate dash array for animation
  const dashArray = distance;
  const dashOffset = distance * (1 - dashProgress);

  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity,
        ...style,
      }}
    >
      {/* Main line */}
      <line
        x1={fromX}
        y1={fromY}
        x2={toX}
        y2={toY}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />

      {/* Arrow head (only show when line is mostly drawn) */}
      {dashProgress > 0.8 && (
        <polygon
          points={`${arrowTipX},${arrowTipY} ${arrowBase1X},${arrowBase1Y} ${arrowBase2X},${arrowBase2Y}`}
          fill={color}
          opacity={dashProgress > 0.8 ? (dashProgress - 0.8) * 5 : 0}
        />
      )}
    </svg>
  );
};
