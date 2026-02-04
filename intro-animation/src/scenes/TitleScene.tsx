import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 标题淡入动画
  const titleOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 标题缩放动画
  const titleScale = interpolate(
    frame,
    [0, 1 * fps],
    [0.8, 1],
    {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.5)),
    }
  );

  // 副标题延迟淡入
  const subtitleOpacity = interpolate(
    frame,
    [1 * fps, 1.8 * fps],
    [0, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
      }}
    >
      {/* 背景装饰光晕 */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(63, 185, 80, 0.15) 0%, transparent 70%)",
          opacity: titleOpacity,
        }}
      />

      {/* 机器人图标 */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          fontSize: 180,
          marginBottom: 40,
        }}
      >
        🤖
      </div>

      {/* 主标题 */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 96,
            fontWeight: "bold",
            color: "#e6edf3",
            margin: 0,
            letterSpacing: "2px",
          }}
        >
          AI Agent 如何工作？
        </h1>
      </div>

      {/* 副标题 */}
      <div
        style={{
          opacity: subtitleOpacity,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        <h2
          style={{
            fontSize: 40,
            color: "#8b949e",
            margin: 0,
            fontWeight: "normal",
          }}
        >
          理解智能 Agent 的运作原理
        </h2>
      </div>
    </AbsoluteFill>
  );
};
