import React from "react";
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

interface ConceptCardProps {
  title: string;
  description: string;
  icon?: string;
  delay?: number;
  color?: string;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({
  title,
  description,
  icon = "💡",
  delay = 0,
  color = "#6366f1",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 100,
      stiffness: 100,
    },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [50, 0]);
  const scale = interpolate(entrance, [0, 1], [0.9, 1]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        background: "white",
        borderRadius: "20px",
        padding: "32px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        border: `3px solid ${color}`,
        maxWidth: "500px",
      }}
    >
      {/* 图标 */}
      <div
        style={{
          fontSize: "48px",
          marginBottom: "16px",
        }}
      >
        {icon}
      </div>

      {/* 标题 */}
      <h3
        style={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#1a1a1a",
          marginBottom: "12px",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {title}
      </h3>

      {/* 描述 */}
      <p
        style={{
          fontSize: "20px",
          color: "#666",
          lineHeight: 1.6,
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {description}
      </p>
    </div>
  );
};
