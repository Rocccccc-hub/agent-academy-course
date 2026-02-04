import React from "react";
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

interface AppleGradientProps {
  colors: string[];
  animated?: boolean;
}

export const AppleGradient: React.FC<AppleGradientProps> = ({
  colors,
  animated = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rotation = animated
    ? interpolate(frame, [0, fps * 6], [0, 360], {
        extrapolateRight: "clamp",
      })
    : 0;

  const scale = animated
    ? spring({
        frame,
        fps,
        from: 1.2,
        to: 1,
        durationInFrames: fps * 2,
      })
    : 1;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `linear-gradient(${rotation}deg, ${colors.join(", ")})`,
        transform: `scale(${scale})`,
        filter: "blur(120px)",
        opacity: 0.6,
      }}
    />
  );
};
