import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

interface Subtitle {
  start: number;
  end: number;
  text: string;
}

interface SubtitlesProps {
  subtitles: Subtitle[];
  startFrame?: number;
  style?: "bottom" | "center";
}

export const Subtitles: React.FC<SubtitlesProps> = ({
  subtitles,
  startFrame = 0,
  style = "bottom",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 当前时间（秒）
  const currentTime = (frame - startFrame) / fps;

  // 找到当前应该显示的字幕
  const currentSubtitle = subtitles.find(
    (sub) => currentTime >= sub.start && currentTime < sub.end
  );

  if (!currentSubtitle) {
    return null;
  }

  // 字幕出现动画
  const subtitleStartFrame = startFrame + currentSubtitle.start * fps;
  const framesSinceStart = frame - subtitleStartFrame;

  const entrance = spring({
    frame: framesSinceStart,
    fps,
    config: {
      damping: 100,
      stiffness: 200,
    },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [20, 0]);
  const scale = interpolate(entrance, [0, 1], [0.95, 1]);

  // 字幕退出动画
  const subtitleEndFrame = startFrame + currentSubtitle.end * fps;
  const framesUntilEnd = subtitleEndFrame - frame;

  let exitOpacity = 1;
  if (framesUntilEnd < 10) {
    // 最后10帧淡出
    exitOpacity = interpolate(framesUntilEnd, [0, 10], [0, 1]);
  }

  const finalOpacity = Math.min(opacity, exitOpacity);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        ...(style === "bottom"
          ? { bottom: "120px" }
          : { top: "50%", transform: "translateY(-50%)" }),
        display: "flex",
        justifyContent: "center",
        padding: "0 100px",
        zIndex: 100,
        opacity: finalOpacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(10px)",
          padding: "20px 40px",
          borderRadius: "12px",
          maxWidth: "1200px",
        }}
      >
        <p
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.5,
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {currentSubtitle.text}
        </p>
      </div>
    </div>
  );
};

// 双语字幕组件
interface BilingualSubtitlesProps {
  chinese: Subtitle[];
  english?: Subtitle[];
  startFrame?: number;
}

export const BilingualSubtitles: React.FC<BilingualSubtitlesProps> = ({
  chinese,
  english,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentTime = (frame - startFrame) / fps;

  const currentChinese = chinese.find(
    (sub) => currentTime >= sub.start && currentTime < sub.end
  );

  const currentEnglish = english?.find(
    (sub) => currentTime >= sub.start && currentTime < sub.end
  );

  if (!currentChinese) {
    return null;
  }

  const subtitleStartFrame = startFrame + currentChinese.start * fps;
  const framesSinceStart = frame - subtitleStartFrame;

  const entrance = spring({
    frame: framesSinceStart,
    fps,
    config: { damping: 100, stiffness: 200 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        padding: "0 100px",
        zIndex: 100,
        opacity,
      }}
    >
      {/* 中文字幕 */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(10px)",
          padding: "16px 36px",
          borderRadius: "10px",
          maxWidth: "1200px",
        }}
      >
        <p
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.5,
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {currentChinese.text}
        </p>
      </div>

      {/* 英文字幕（可选）*/}
      {currentEnglish && (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(8px)",
            padding: "12px 32px",
            borderRadius: "8px",
            maxWidth: "1200px",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              lineHeight: 1.5,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            {currentEnglish.text}
          </p>
        </div>
      )}
    </div>
  );
};
