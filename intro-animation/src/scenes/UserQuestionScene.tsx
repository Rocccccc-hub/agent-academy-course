import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";

export const UserQuestionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 用户图标动画
  const userOpacity = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const userScale = interpolate(
    frame,
    [0, 0.6 * fps],
    [0.5, 1],
    {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.5)),
    }
  );

  // 问题气泡动画
  const bubbleOpacity = interpolate(
    frame,
    [0.8 * fps, 1.5 * fps],
    [0, 1],
    {
      extrapolateRight: "clamp",
    }
  );

  const bubbleScale = interpolate(
    frame,
    [0.8 * fps, 1.5 * fps],
    [0.8, 1],
    {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.back(1.5)),
    }
  );

  // 打字效果 - 逐字显示
  const question = "帮我查一下北京今天的天气";
  const typingProgress = interpolate(
    frame,
    [1.5 * fps, 2.5 * fps],
    [0, question.length],
    {
      extrapolateRight: "clamp",
    }
  );
  const displayedText = question.substring(0, Math.floor(typingProgress));

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          position: "absolute",
          top: 100,
          fontSize: 48,
          color: "#e6edf3",
          fontWeight: "bold",
        }}
      >
        用户提问
      </div>

      {/* 用户图标 */}
      <div
        style={{
          position: "absolute",
          left: 300,
          top: "50%",
          transform: `translateY(-50%) scale(${userScale})`,
          opacity: userOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: 120,
          }}
        >
          👤
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#8b949e",
            marginTop: 20,
            fontWeight: "600",
          }}
        >
          用户
        </div>
      </div>

      {/* 问题气泡 */}
      <div
        style={{
          position: "absolute",
          left: 550,
          top: "50%",
          transform: `translateY(-50%) scale(${bubbleScale})`,
          opacity: bubbleOpacity,
          backgroundColor: "#21262d",
          border: "3px solid #58a6ff",
          borderRadius: 30,
          padding: "40px 60px",
          maxWidth: 700,
          boxShadow: "0 0 40px rgba(88, 166, 255, 0.3)",
        }}
      >
        {/* 气泡尖角 */}
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
            borderRight: "20px solid #58a6ff",
          }}
        />
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
            borderRight: "16px solid #21262d",
          }}
        />

        <div
          style={{
            fontSize: 48,
            color: "#58a6ff",
            fontWeight: "600",
            lineHeight: 1.5,
          }}
        >
          {displayedText}
          {typingProgress < question.length && (
            <span
              style={{
                opacity: Math.sin(frame * 0.3) * 0.5 + 0.5,
              }}
            >
              |
            </span>
          )}
        </div>
      </div>

      {/* 底部提示 */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          opacity: interpolate(frame, [2 * fps, 2.5 * fps], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <p
          style={{
            fontSize: 32,
            color: "#8b949e",
            margin: 0,
          }}
        >
          接下来，看看 AI Agent 如何处理这个问题...
        </p>
      </div>
    </AbsoluteFill>
  );
};
