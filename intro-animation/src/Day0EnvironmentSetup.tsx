import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { loadFont } from "@remotion/google-fonts/NotoSansSC";
import { Day0TitleScene } from "./scenes/day0/Day0TitleScene";
import { Day0WhyNeedScene } from "./scenes/day0/Day0WhyNeedScene";
import { Day0ThreeToolsScene } from "./scenes/day0/Day0ThreeToolsScene";
import { Day0InstallFlowScene } from "./scenes/day0/Day0InstallFlowScene";
import { Day0HelloWorldScene } from "./scenes/day0/Day0HelloWorldScene";
import { Day0ValueSummaryScene } from "./scenes/day0/Day0ValueSummaryScene";

// Load Noto Sans SC for consistent Chinese font rendering
const { fontFamily } = loadFont();

// Each scene is 15 seconds (450 frames at 30fps)
const SCENE_DURATION = 450;

export const Day0EnvironmentSetup: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0d1117", fontFamily }}>
      <Series>
        {/* Scene 1: Title - 搭建你的 Agent 工作台 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0TitleScene />
        </Series.Sequence>

        {/* Scene 2: Why Need? - 为什么需要开发环境 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0WhyNeedScene />
        </Series.Sequence>

        {/* Scene 3: Three Core Tools - 三大核心工具 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0ThreeToolsScene />
        </Series.Sequence>

        {/* Scene 4: Install Flow - 快速安装流程 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0InstallFlowScene />
        </Series.Sequence>

        {/* Scene 5: Hello World Test - 第一个 Agent */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0HelloWorldScene />
        </Series.Sequence>

        {/* Scene 6: Value Summary - 价值总结 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0ValueSummaryScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
