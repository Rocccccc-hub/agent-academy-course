import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { Day0TitleScene } from "./scenes/day0/Day0TitleScene";
import { Day0WhyNeedScene } from "./scenes/day0/Day0WhyNeedScene";
import { Day0ThreeToolsScene } from "./scenes/day0/Day0ThreeToolsScene";
import { Day0InstallFlowScene } from "./scenes/day0/Day0InstallFlowScene";
import { Day0HelloWorldScene } from "./scenes/day0/Day0HelloWorldScene";
import { Day0ValueSummaryScene } from "./scenes/day0/Day0ValueSummaryScene";
import { Language } from "./utils/texts";

const fontFamily = 'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif';

// Each scene is 15 seconds (450 frames at 30fps)
const SCENE_DURATION = 450;

export interface Day0EnvironmentSetupProps {
  language?: Language;
}

export const Day0EnvironmentSetup: React.FC<Day0EnvironmentSetupProps> = ({
  language = "zh",
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0d1117", fontFamily }}>
      <Series>
        {/* Scene 1: Title - Build Your Agent Workbench */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0TitleScene language={language} />
        </Series.Sequence>

        {/* Scene 2: Why Need? - Why Need Development Environment */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0WhyNeedScene language={language} />
        </Series.Sequence>

        {/* Scene 3: Three Core Tools */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0ThreeToolsScene language={language} />
        </Series.Sequence>

        {/* Scene 4: Install Flow - Quick Installation Process */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0InstallFlowScene language={language} />
        </Series.Sequence>

        {/* Scene 5: Hello World Test - First Agent Program */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0HelloWorldScene language={language} />
        </Series.Sequence>

        {/* Scene 6: Value Summary - Three Key Values */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day0ValueSummaryScene language={language} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
