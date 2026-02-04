import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale } from "../../utils/animations";

/**
 * Day 0 Scene 2: Why Need Environment? (15 seconds / 450 frames)
 * Uses cooking analogy to explain why setup is necessary
 */
export const Day0WhyNeedScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // Left side: Without setup (chaos)
  const leftOpacity = fadeIn(frame, 40);
  const leftScale = bounceScale(frame, 40);

  // Right side: With setup (organized)
  const rightOpacity = fadeIn(frame, 120);
  const rightScale = bounceScale(frame, 120);

  // Analogy text
  const analogyOpacity = fadeIn(frame, 240);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgPrimary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 80,
          fontSize: typography.heading,
          color: colors.textPrimary,
          fontWeight: typography.bold,
          opacity: titleOpacity,
        }}
      >
        为什么需要开发环境？
      </div>

      {/* Left Side: Without Setup */}
      <div
        style={{
          position: "absolute",
          left: 280,
          top: "50%",
          transform: `translateY(-50%) scale(${leftScale})`,
          opacity: leftOpacity,
          width: 600,
        }}
      >
        {/* X Mark */}
        <div
          style={{
            fontSize: 80,
            textAlign: "center",
            marginBottom: 30,
            color: "#ff6b6b",
          }}
        >
          ❌
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: typography.subheading,
            color: "#ff6b6b",
            fontWeight: typography.bold,
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          没有准备
        </div>

        {/* Problems */}
        <div
          style={{
            backgroundColor: colors.bgSecondary,
            padding: "25px",
            borderRadius: 12,
            border: "2px solid #ff6b6b",
          }}
        >
          <div style={{ fontSize: typography.body, color: colors.textPrimary, marginBottom: 15 }}>
            😰 不知道在哪里写代码
          </div>
          <div style={{ fontSize: typography.body, color: colors.textPrimary, marginBottom: 15 }}>
            🤷 代码写了无法运行
          </div>
          <div style={{ fontSize: typography.body, color: colors.textPrimary }}>
            ⏰ 每次都要重新配置
          </div>
        </div>
      </div>

      {/* Right Side: With Setup */}
      <div
        style={{
          position: "absolute",
          right: 280,
          top: "50%",
          transform: `translateY(-50%) scale(${rightScale})`,
          opacity: rightOpacity,
          width: 600,
        }}
      >
        {/* Check Mark */}
        <div
          style={{
            fontSize: 80,
            textAlign: "center",
            marginBottom: 30,
            color: colors.result,
          }}
        >
          ✅
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: typography.subheading,
            color: colors.result,
            fontWeight: typography.bold,
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          准备就绪
        </div>

        {/* Benefits */}
        <div
          style={{
            backgroundColor: colors.bgSecondary,
            padding: "25px",
            borderRadius: 12,
            border: `2px solid ${colors.result}`,
          }}
        >
          <div style={{ fontSize: typography.body, color: colors.textPrimary, marginBottom: 15 }}>
            💻 专业工具随时可用
          </div>
          <div style={{ fontSize: typography.body, color: colors.textPrimary, marginBottom: 15 }}>
            ⚡ 写完代码立即测试
          </div>
          <div style={{ fontSize: typography.body, color: colors.textPrimary }}>
            🎯 专注学习不分心
          </div>
        </div>
      </div>

      {/* Analogy Text */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: analogyOpacity,
          textAlign: "center",
        }}
      >
        💡 就像做菜前要准备好厨房，开发 Agent 也需要搭建工作环境
      </div>
    </AbsoluteFill>
  );
};
