import React from "react";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";

interface SpeechBubbleProps {
  text: string;
  direction?: "left" | "right"; // Direction of the pointer
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  opacity?: number;
  scale?: number;
  maxWidth?: number;
  showCursor?: boolean;
  cursorOpacity?: number;
  style?: React.CSSProperties;
}

/**
 * Reusable speech bubble component with pointer
 * Supports left/right pointer directions and typing cursor
 */
export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  text,
  direction = "left",
  color = colors.customer,
  backgroundColor = colors.bgTertiary,
  fontSize = typography.body,
  opacity = 1,
  scale = 1,
  maxWidth = 700,
  showCursor = false,
  cursorOpacity = 1,
  style = {},
}) => {
  const pointerLeft = direction === "left";
  const pointerRight = direction === "right";

  return (
    <div
      style={{
        position: "relative",
        backgroundColor,
        border: `3px solid ${color}`,
        borderRadius: 30,
        padding: "40px 60px",
        maxWidth,
        boxShadow: `0 0 40px ${color}33`,
        opacity,
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      {/* Pointer - outer (border) */}
      {pointerLeft && (
        <div
          style={{
            position: "absolute",
            left: -20,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "20px solid transparent",
            borderBottom: "20px solid transparent",
            borderRight: `20px solid ${color}`,
          }}
        />
      )}
      {pointerRight && (
        <div
          style={{
            position: "absolute",
            right: -20,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "20px solid transparent",
            borderBottom: "20px solid transparent",
            borderLeft: `20px solid ${color}`,
          }}
        />
      )}

      {/* Pointer - inner (background) */}
      {pointerLeft && (
        <div
          style={{
            position: "absolute",
            left: -14,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "16px solid transparent",
            borderBottom: "16px solid transparent",
            borderRight: `16px solid ${backgroundColor}`,
          }}
        />
      )}
      {pointerRight && (
        <div
          style={{
            position: "absolute",
            right: -14,
            top: "50%",
            transform: "translateY(-50%)",
            width: 0,
            height: 0,
            borderTop: "16px solid transparent",
            borderBottom: "16px solid transparent",
            borderLeft: `16px solid ${backgroundColor}`,
          }}
        />
      )}

      {/* Text content */}
      <div
        style={{
          fontSize,
          color,
          fontWeight: typography.semibold,
          lineHeight: typography.normal,
        }}
      >
        {text}
        {showCursor && (
          <span
            style={{
              opacity: cursorOpacity,
            }}
          >
            |
          </span>
        )}
      </div>
    </div>
  );
};
