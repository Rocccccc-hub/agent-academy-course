import React from "react";
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

interface AppleTextProps {
  children: React.ReactNode;
  delay?: number;
  size?: number;
  weight?: number;
  gradient?: boolean;
  center?: boolean;
}

export const AppleText: React.FC<AppleTextProps> = ({
  children,
  delay = 0,
  size = 48,
  weight = 700,
  gradient = false,
  center = true,
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
  const translateY = interpolate(entrance, [0, 1], [30, 0]);
  const scale = interpolate(entrance, [0, 1], [0.95, 1]);

  const textStyle: React.CSSProperties = {
    fontSize: size,
    fontWeight: weight,
    textAlign: center ? "center" : "left",
    opacity,
    transform: `translateY(${translateY}px) scale(${scale})`,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
  };

  if (gradient) {
    return (
      <div
        style={{
          ...textStyle,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {children}
      </div>
    );
  }

  return <div style={textStyle}>{children}</div>;
};
