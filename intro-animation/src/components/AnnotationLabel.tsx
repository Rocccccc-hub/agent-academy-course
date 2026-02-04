import React from "react";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";

interface AnnotationLabelProps {
  text: string;
  color?: string;
  fontSize?: number;
  opacity?: number;
  style?: React.CSSProperties;
}

/**
 * Reusable annotation label component for marking concepts
 * Example: "Customer = User" or "Chef = Agent"
 */
export const AnnotationLabel: React.FC<AnnotationLabelProps> = ({
  text,
  color = colors.textSecondary,
  fontSize = typography.caption,
  opacity = 1,
  style = {},
}) => {
  return (
    <div
      style={{
        fontSize,
        color,
        opacity,
        fontWeight: typography.semibold,
        backgroundColor: colors.bgTertiary,
        padding: "8px 16px",
        borderRadius: 8,
        border: `2px solid ${color}`,
        display: "inline-block",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
