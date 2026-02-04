import React from "react";
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

interface CodeBlockProps {
  code: string;
  language?: string;
  startFrame?: number;
  highlightLines?: number[];
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
  startFrame = 0,
  highlightLines = [],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lines = code.split("\n");

  return (
    <div
      style={{
        background: "#1e1e1e",
        borderRadius: "12px",
        padding: "24px",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: "18px",
        lineHeight: 1.6,
        maxWidth: "800px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
      }}
    >
      {/* 代码语言标签 */}
      <div
        style={{
          color: "#858585",
          fontSize: "12px",
          textTransform: "uppercase",
          marginBottom: "16px",
          letterSpacing: "1px",
        }}
      >
        {language}
      </div>

      {/* 代码行 */}
      {lines.map((line, index) => {
        const lineStartFrame = startFrame + index * 3;
        const progress = spring({
          frame: frame - lineStartFrame,
          fps,
          config: {
            damping: 100,
            stiffness: 200,
          },
        });

        const opacity = interpolate(progress, [0, 1], [0, 1]);
        const translateX = interpolate(progress, [0, 1], [-20, 0]);

        const isHighlighted = highlightLines.includes(index + 1);

        return (
          <div
            key={index}
            style={{
              opacity,
              transform: `translateX(${translateX}px)`,
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "4px",
              padding: "4px 8px",
              borderRadius: "4px",
              backgroundColor: isHighlighted
                ? "rgba(99, 102, 241, 0.2)"
                : "transparent",
              borderLeft: isHighlighted
                ? "3px solid #6366f1"
                : "3px solid transparent",
            }}
          >
            {/* 行号 */}
            <span
              style={{
                color: "#858585",
                minWidth: "32px",
                textAlign: "right",
                fontSize: "14px",
              }}
            >
              {index + 1}
            </span>

            {/* 代码内容 */}
            <span
              style={{
                color: isHighlighted ? "#e0e7ff" : "#d4d4d4",
                flex: 1,
              }}
            >
              {line || " "}
            </span>
          </div>
        );
      })}
    </div>
  );
};
