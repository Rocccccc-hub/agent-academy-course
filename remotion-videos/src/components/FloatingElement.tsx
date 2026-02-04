import React from "react";
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  floatIntensity?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  floatIntensity = 20,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 100,
      stiffness: 100,
      mass: 1,
    },
  });

  const float = interpolate(
    frame,
    [0, fps * 2, fps * 4, fps * 6],
    [0, -floatIntensity, 0, -floatIntensity],
    {
      extrapolateRight: "wrap",
    }
  );

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [50, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY + float}px)`,
      }}
    >
      {children}
    </div>
  );
};
