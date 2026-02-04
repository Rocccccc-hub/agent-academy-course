import React from "react";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";

interface IconNodeProps {
  icon: string; // Emoji icon
  label?: string;
  color?: string;
  iconSize?: number;
  labelSize?: number;
  opacity?: number;
  scale?: number;
  pulse?: number; // Pulse scale multiplier (e.g., from pulse() function)
  style?: React.CSSProperties;
}

/**
 * Reusable icon node component with optional label
 * Used for consistent styling of all character/object icons in the animation
 */
export const IconNode: React.FC<IconNodeProps> = ({
  icon,
  label,
  color = colors.textSecondary,
  iconSize = 120,
  labelSize = typography.body,
  opacity = 1,
  scale = 1,
  pulse = 1,
  style = {},
}) => {
  const finalScale = scale * pulse;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity,
        transform: `scale(${finalScale})`,
        ...style,
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: iconSize,
          lineHeight: 1,
        }}
      >
        {icon}
      </div>

      {/* Label (optional) */}
      {label && (
        <div
          style={{
            fontSize: labelSize,
            color,
            marginTop: 20,
            fontWeight: typography.semibold,
            textAlign: "center",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};
