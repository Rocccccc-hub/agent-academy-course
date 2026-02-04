import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { colors } from "../utils/colors";
import { typography } from "../utils/typography";
import { fadeIn, bounceScale } from "../utils/animations";
import { IconNode } from "../components/IconNode";
import { SpeechBubble } from "../components/SpeechBubble";

/**
 * Scene 7: Serve Result (5 seconds / 150 frames)
 * Dish moves from chef to customer along bezier path
 */
export const ServeResultScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Title animation
  const titleOpacity = fadeIn(frame, 0);

  // Chef animation
  const chefOpacity = fadeIn(frame, 0);

  // Customer animation
  const customerOpacity = fadeIn(frame, 0);

  // Dish appears and glows
  const dishGlowOpacity = fadeIn(frame, 20, 10);

  // Dish flight animation (bezier curve from chef to customer)
  const dishProgress = interpolate(frame, [30, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  // Bezier path: start at chef (right), arc upward, end at customer (left)
  const startX = 1520;
  const startY = 540;
  const endX = 300;
  const endY = 540;
  const controlX = (startX + endX) / 2;
  const controlY = 300; // Arc upward

  // Calculate position on bezier curve
  const t = dishProgress;
  const dishX =
    Math.pow(1 - t, 2) * startX +
    2 * (1 - t) * t * controlX +
    Math.pow(t, 2) * endX;
  const dishY =
    Math.pow(1 - t, 2) * startY +
    2 * (1 - t) * t * controlY +
    Math.pow(t, 2) * endY;

  const dishOpacity = frame >= 20 && frame < 120 ? 1 : 0;

  // Bounce when dish arrives
  const dishArrivalBounce = frame >= 90 && frame < 105 ? bounceScale(frame, 90, 15, 1, 1.3) : 1;
  const dishScale = dishProgress < 1 ? 1 : dishArrivalBounce;

  // Speech bubble from chef
  const speechOpacity = fadeIn(frame, 95);
  const speechScale = bounceScale(frame, 95);

  // Customer happy expression
  const happyOpacity = fadeIn(frame, 105);

  // Success check mark
  const checkOpacity = fadeIn(frame, 115);
  const checkScale = bounceScale(frame, 115);

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
        上菜完成
      </div>

      {/* Chef (right) */}
      <div
        style={{
          position: "absolute",
          right: 200,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <IconNode
          icon="👨‍🍳"
          color={colors.chef}
          opacity={chefOpacity}
        />
      </div>

      {/* Customer (left) */}
      <div
        style={{
          position: "absolute",
          left: 200,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <IconNode
          icon="👤"
          color={colors.customer}
          opacity={customerOpacity}
        />
      </div>

      {/* Dish glow effect at start */}
      {frame >= 20 && frame < 35 && (
        <div
          style={{
            position: "absolute",
            right: 220,
            top: "38%",
            fontSize: 150,
            opacity: dishGlowOpacity * 0.3,
            filter: "blur(20px)",
          }}
        >
          🍜
        </div>
      )}

      {/* Flying Dish */}
      {dishOpacity > 0 && (
        <div
          style={{
            position: "absolute",
            left: dishX,
            top: dishY,
            transform: `translate(-50%, -50%) scale(${dishScale})`,
            fontSize: 100,
            opacity: dishOpacity,
            filter: frame < 90 ? "drop-shadow(0 0 20px rgba(63, 185, 80, 0.6))" : "none",
          }}
        >
          🍜
        </div>
      )}

      {/* Bezier path visualization (faint line) */}
      {frame >= 30 && frame < 90 && (
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
          <path
            d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
            stroke={colors.result}
            strokeWidth={2}
            strokeDasharray="10,5"
            fill="none"
            opacity={0.2}
          />
        </svg>
      )}

      {/* Speech Bubble */}
      <div
        style={{
          position: "absolute",
          right: 450,
          top: "30%",
        }}
      >
        <SpeechBubble
          text="这就是您要的拉面！"
          direction="right"
          color={colors.result}
          opacity={speechOpacity}
          scale={speechScale}
        />
      </div>

      {/* Happy Customer Expression */}
      <div
        style={{
          position: "absolute",
          left: 270,
          top: "38%",
          fontSize: 50,
          opacity: happyOpacity,
        }}
      >
        😊
      </div>

      {/* Success Check Mark */}
      <div
        style={{
          position: "absolute",
          bottom: 150,
          display: "flex",
          alignItems: "center",
          gap: 20,
          opacity: checkOpacity,
          transform: `scale(${checkScale})`,
        }}
      >
        <div style={{ fontSize: 60 }}>✅</div>
        <div
          style={{
            fontSize: typography.subheading,
            color: colors.result,
            fontWeight: typography.bold,
          }}
        >
          Agent 成功处理请求
        </div>
      </div>
    </AbsoluteFill>
  );
};
