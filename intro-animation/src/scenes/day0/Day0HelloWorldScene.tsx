import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { colors } from "../../utils/colors";
import { typography } from "../../utils/typography";
import { fadeIn, bounceScale, typingEffect } from "../../utils/animations";

/**
 * Day 0 Scene 5: Hello World Test (15 seconds / 450 frames)
 * Shows first Agent program running successfully
 */
export const Day0HelloWorldScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = fadeIn(frame, 0);

  // Editor appears
  const editorOpacity = fadeIn(frame, 30);
  const editorScale = bounceScale(frame, 30);

  // Code appears with typing effect
  const codeLines = [
    'from anthropic import Anthropic',
    '',
    'client = Anthropic(api_key="your_key")',
    'response = client.messages.create(',
    '    model="claude-3-5-sonnet",',
    '    messages=[{"role": "user",',
    '              "content": "Hello!"}]',
    ')',
    'print(response.content[0].text)',
  ];

  const codeStartFrame = 80;
  const codeOpacity = fadeIn(frame, codeStartFrame);

  // Run button
  const runButtonOpacity = fadeIn(frame, 200);
  const runButtonScale = bounceScale(frame, 200);

  // Click animation
  const clickFrame = 250;
  const isClicked = frame >= clickFrame && frame < clickFrame + 15;

  // Terminal output
  const terminalOpacity = fadeIn(frame, 280);
  const outputText = "Hello, I'm your first Agent! 👋";
  const typingChars = typingEffect(frame, 300, 60, outputText.length);
  const displayedOutput = outputText.substring(0, typingChars);

  // Success mark
  const successOpacity = fadeIn(frame, 380);
  const successScale = bounceScale(frame, 380);

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
        第一个 Agent 程序
      </div>

      {/* Code Editor */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: "50%",
          transform: `translateY(-50%) scale(${editorScale})`,
          opacity: editorOpacity,
          width: 700,
        }}
      >
        {/* Editor Header */}
        <div
          style={{
            backgroundColor: colors.bgTertiary,
            padding: "12px 20px",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ff5f56" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ffbd2e" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#27c93f" }} />
          <div style={{ fontSize: typography.caption, color: colors.textSecondary, marginLeft: 15 }}>
            hello_agent.py
          </div>
        </div>

        {/* Editor Content */}
        <div
          style={{
            backgroundColor: colors.bgSecondary,
            padding: "20px",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            border: `2px solid ${colors.customer}`,
            borderTop: "none",
            minHeight: 280,
            fontFamily: "monospace",
          }}
        >
          <div style={{ opacity: codeOpacity }}>
            {codeLines.map((line, index) => (
              <div
                key={index}
                style={{
                  fontSize: typography.caption,
                  color: line.startsWith('from') || line.startsWith('import') || line.startsWith('print')
                    ? colors.brain
                    : line.includes('"')
                    ? colors.result
                    : colors.textPrimary,
                  marginBottom: 6,
                  lineHeight: 1.5,
                }}
              >
                {line || '\u00A0'}
              </div>
            ))}
          </div>
        </div>

        {/* Run Button */}
        <div
          style={{
            marginTop: 20,
            opacity: runButtonOpacity,
            transform: `scale(${runButtonScale})`,
          }}
        >
          <div
            style={{
              backgroundColor: isClicked ? colors.chef : colors.result,
              color: colors.bgPrimary,
              padding: "15px 40px",
              borderRadius: 8,
              fontSize: typography.body,
              fontWeight: typography.bold,
              textAlign: "center",
              cursor: "pointer",
              transform: isClicked ? "scale(0.95)" : "scale(1)",
              transition: "all 0.1s",
            }}
          >
            ▶️ 运行程序
          </div>
        </div>
      </div>

      {/* Terminal Output */}
      <div
        style={{
          position: "absolute",
          right: 200,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: terminalOpacity,
          width: 700,
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            backgroundColor: colors.bgTertiary,
            padding: "12px 20px",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            fontSize: typography.caption,
            color: colors.textSecondary,
          }}
        >
          终端输出
        </div>

        {/* Terminal Content */}
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "25px",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            border: `2px solid ${colors.result}`,
            borderTop: "none",
            minHeight: 200,
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              fontSize: typography.body,
              color: colors.result,
              lineHeight: 1.8,
            }}
          >
            $ python hello_agent.py
            <br />
            <br />
            {displayedOutput}
            {typingChars < outputText.length && (
              <span style={{ opacity: Math.sin(frame * 0.3) * 0.5 + 0.5 }}>▋</span>
            )}
          </div>
        </div>

        {/* Success Mark */}
        {successOpacity > 0 && (
          <div
            style={{
              marginTop: 25,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 15,
              opacity: successOpacity,
              transform: `scale(${successScale})`,
            }}
          >
            <div style={{ fontSize: 50 }}>✅</div>
            <div
              style={{
                fontSize: typography.subheading,
                color: colors.result,
                fontWeight: typography.bold,
              }}
            >
              运行成功！
            </div>
          </div>
        )}
      </div>

      {/* Bottom Message */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          fontSize: typography.body,
          color: colors.textSecondary,
          opacity: fadeIn(frame, 400),
        }}
      >
        🎉 恭喜！你的开发环境已经准备就绪
      </div>
    </AbsoluteFill>
  );
};
