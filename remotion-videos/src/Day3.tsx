import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { AppleGradient } from "./components/AppleGradient";
import { FloatingElement } from "./components/FloatingElement";
import { AppleText } from "./components/AppleText";

export const Day3: React.FC = () => {
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
        colors={["#4facfe", "#00f2fe", "#43e97b"]}
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
            <span style={{ color: "#4facfe" }}>Day 3</span>
          </AppleText>
        </FloatingElement>

        <div style={{ transform: `scale(${iconScale})` }}>
          <div
            style={{
              fontSize: "200px",
              filter: "drop-shadow(0 20px 60px rgba(79, 172, 254, 0.3))",
            }}
          >
            🔧
          </div>
        </div>

        <FloatingElement delay={30} floatIntensity={15}>
          <AppleText delay={30} size={96} weight={800}>
            <span style={{ color: "#1a1a1a" }}>MCP 与工具生态</span>
          </AppleText>
        </FloatingElement>

        <FloatingElement delay={45} floatIntensity={10}>
          <AppleText delay={45} size={42} weight={500}>
            <span style={{ color: "#666666" }}>理解如何扩展 Agent 能力</span>
          </AppleText>
        </FloatingElement>

        <FloatingElement delay={60} floatIntensity={8}>
          <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
            {["MCP 协议", "自定义工具", "工具组合"].map((text, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 40px",
                  background: "rgba(79, 172, 254, 0.1)",
                  borderRadius: "100px",
                  border: "2px solid rgba(79, 172, 254, 0.3)",
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
                    color: "#4facfe",
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
