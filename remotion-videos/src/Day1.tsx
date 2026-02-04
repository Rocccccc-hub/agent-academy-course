import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { AppleGradient } from "./components/AppleGradient";
import { FloatingElement } from "./components/FloatingElement";
import { AppleText } from "./components/AppleText";

export const Day1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Icon animation
  const iconScale = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const iconRotate = interpolate(frame, [20, 60], [0, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient */}
      <AppleGradient
        colors={["#667eea", "#764ba2", "#f093fb"]}
        animated={true}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* Day Number */}
        <FloatingElement delay={0}>
          <AppleText delay={0} size={72} weight={800} gradient={false}>
            <span style={{ color: "#667eea" }}>Day 1</span>
          </AppleText>
        </FloatingElement>

        {/* Icon */}
        <div
          style={{
            transform: `scale(${iconScale}) rotate(${iconRotate}deg)`,
          }}
        >
          <div
            style={{
              fontSize: "200px",
              filter: "drop-shadow(0 20px 60px rgba(102, 126, 234, 0.3))",
            }}
          >
            🤖
          </div>
        </div>

        {/* Title */}
        <FloatingElement delay={30} floatIntensity={15}>
          <AppleText delay={30} size={96} weight={800}>
            <span style={{ color: "#1a1a1a" }}>Agent 架构基础</span>
          </AppleText>
        </FloatingElement>

        {/* Subtitle */}
        <FloatingElement delay={45} floatIntensity={10}>
          <AppleText delay={45} size={42} weight={500}>
            <span style={{ color: "#666666" }}>
              理解 Agent 的工作原理和架构模式
            </span>
          </AppleText>
        </FloatingElement>

        {/* Key Concepts */}
        <FloatingElement delay={60} floatIntensity={8}>
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            {["核心概念", "工具调用", "动手实践"].map((text, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 40px",
                  background: "rgba(102, 126, 234, 0.1)",
                  borderRadius: "100px",
                  border: "2px solid rgba(102, 126, 234, 0.3)",
                  opacity: interpolate(
                    frame,
                    [60 + i * 10, 80 + i * 10],
                    [0, 1],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }
                  ),
                  transform: `translateY(${interpolate(
                    frame,
                    [60 + i * 10, 80 + i * 10],
                    [30, 0],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }
                  )}px)`,
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    color: "#667eea",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </FloatingElement>
      </div>

      {/* Bottom Accent */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontSize: 36,
          fontWeight: 600,
          color: "#999999",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          opacity: interpolate(frame, [120, 140], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        零代码 Agent 开发 · 7天精通计划
      </div>
    </AbsoluteFill>
  );
};
