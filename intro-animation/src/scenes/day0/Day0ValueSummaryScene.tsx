import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale, pulse } from "../../utils/animations";

/**
 * Day 0 Scene 6: Value Summary (15 seconds / 450 frames)
 * Shows the three key benefits of having a dev environment
 */
export const Day0ValueSummaryScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // Central icon
  const centerOpacity = fadeIn(frame, 20);
  const centerScale = bounceScale(frame, 20);
  const centerPulse = frame > 60 ? pulse(frame - 60, 0.08, 0.05) : 1;

  // Three values appear
  const values = [
    {
      icon: "⚡",
      title: "即学即用",
      desc: "写完代码立即运行\n实时看到效果",
      color: colors.result,
      delay: 100,
      angle: -90,
    },
    {
      icon: "🔄",
      title: "反复练习",
      desc: "本地环境随时可用\n不受次数限制",
      color: colors.chef,
      delay: 160,
      angle: 150,
    },
    {
      icon: "🚀",
      title: "自由探索",
      desc: "不受在线平台限制\n可以深度定制",
      color: colors.customer,
      delay: 220,
      angle: 30,
    },
  ];

  // Connection lines
  const linesOpacity = fadeIn(frame, 280);

  // Final message
  const messageOpacity = fadeIn(frame, 350);

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
        开发环境的三大价值
      </div>

      {/* Central Icon */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${centerScale * centerPulse})`,
          opacity: centerOpacity,
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            backgroundColor: colors.bgSecondary,
            border: `4px solid ${colors.result}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 40px ${colors.result}44`,
          }}
        >
          <div style={{ fontSize: 80 }}>🛠️</div>
        </div>
      </div>

      {/* Three Values in Circle */}
      {values.map((value, index) => {
        const valueOpacity = fadeIn(frame, value.delay);
        const valueScale = bounceScale(frame, value.delay);

        // Position in circle
        const radius = 380;
        const angleRad = (value.angle * Math.PI) / 180;
        const x = 960 + radius * Math.cos(angleRad);
        const y = 540 + radius * Math.sin(angleRad);

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: `translate(-50%, -50%) scale(${valueScale})`,
              opacity: valueOpacity,
              width: 350,
            }}
          >
            {/* Icon Circle */}
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: colors.bgSecondary,
                border: `3px solid ${value.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 50,
                margin: "0 auto 20px",
                boxShadow: `0 0 20px ${value.color}44`,
              }}
            >
              {value.icon}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: typography.subheading,
                color: value.color,
                fontWeight: typography.bold,
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              {value.title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: typography.body,
                color: colors.textPrimary,
                textAlign: "center",
                lineHeight: 1.6,
                backgroundColor: colors.bgSecondary,
                padding: "15px 20px",
                borderRadius: 10,
                border: `2px solid ${value.color}`,
                whiteSpace: "pre-line",
              }}
            >
              {value.desc}
            </div>
          </div>
        );
      })}

      {/* Connection Lines */}
      {linesOpacity > 0 && (
        <svg
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {values.map((value, index) => {
            const angleRad = (value.angle * Math.PI) / 180;
            const x = 960 + 380 * Math.cos(angleRad);
            const y = 540 + 380 * Math.sin(angleRad);

            return (
              <line
                key={index}
                x1={960}
                y1={540}
                x2={x}
                y2={y}
                stroke={value.color}
                strokeWidth={2}
                opacity={linesOpacity * 0.5}
              />
            );
          })}
        </svg>
      )}

      {/* Final Message */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          fontSize: typography.subheading,
          color: colors.result,
          fontWeight: typography.bold,
          opacity: messageOpacity,
          textAlign: "center",
        }}
      >
        🎯 现在开始，让我们一起探索 Agent 的世界！
      </div>
    </AbsoluteFill>
  );
};
