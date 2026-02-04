import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { AppleGradient } from "./components/AppleGradient";
import { FloatingElement } from "./components/FloatingElement";
import { AppleText } from "./components/AppleText";

export const Day5: React.FC = () => {
  const frame = useCurrentFrame();

  const iconScale = interpolate(frame, [20, 40], [0, 1], {
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
      <AppleGradient
        colors={["#a8edea", "#fed6e3", "#c471f5"]}
        animated={true}
      />

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
        <FloatingElement delay={0}>
          <AppleText delay={0} size={72} weight={800}>
            <span style={{ color: "#c471f5" }}>Day 5</span>
          </AppleText>
        </FloatingElement>

        <div style={{ transform: `scale(${iconScale})` }}>
          <div
            style={{
              fontSize: "200px",
              filter: "drop-shadow(0 20px 60px rgba(196, 113, 245, 0.3))",
            }}
          >
            🎯
          </div>
        </div>

        <FloatingElement delay={30} floatIntensity={15}>
          <AppleText delay={30} size={96} weight={800}>
            <span style={{ color: "#1a1a1a" }}>Agent 编排模式</span>
          </AppleText>
        </FloatingElement>

        <FloatingElement delay={45} floatIntensity={10}>
          <AppleText delay={45} size={42} weight={500}>
            <span style={{ color: "#666666" }}>构建多 Agent 系统</span>
          </AppleText>
        </FloatingElement>

        <FloatingElement delay={60} floatIntensity={8}>
          <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
            {["主从架构", "专家分工", "并行执行"].map((text, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 40px",
                  background: "rgba(196, 113, 245, 0.1)",
                  borderRadius: "100px",
                  border: "2px solid rgba(196, 113, 245, 0.3)",
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
                    color: "#c471f5",
                    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </FloatingElement>
      </div>

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
