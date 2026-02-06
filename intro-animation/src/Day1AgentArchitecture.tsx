import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { Day1TitleScene } from "./scenes/day1/Day1TitleScene";
import { Day1AgentDefinitionScene } from "./scenes/day1/Day1AgentDefinitionScene";
import { Day1ReactIntroScene } from "./scenes/day1/Day1ReactIntroScene";
import { Day1ReasonStageScene } from "./scenes/day1/Day1ReasonStageScene";
import { Day1ActStageScene } from "./scenes/day1/Day1ActStageScene";
import { Day1ObserveStageScene } from "./scenes/day1/Day1ObserveStageScene";
import { Day1MultiRoundScene } from "./scenes/day1/Day1MultiRoundScene";
import { Day1SummaryScene } from "./scenes/day1/Day1SummaryScene";

const fontFamily = 'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif';

// Each scene is 15 seconds (450 frames at 30fps)
const SCENE_DURATION = 450;

export const Day1AgentArchitecture: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0d1117", fontFamily }}>
      <Series>
        {/* Scene 1: Title - Agent 架构基础 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1TitleScene />
        </Series.Sequence>

        {/* Scene 2: Agent Definition - 三大特征 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1AgentDefinitionScene />
        </Series.Sequence>

        {/* Scene 3: ReAct Loop Introduction */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1ReactIntroScene />
        </Series.Sequence>

        {/* Scene 4: Reason Stage - 思考阶段 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1ReasonStageScene />
        </Series.Sequence>

        {/* Scene 5: Act Stage - 行动阶段 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1ActStageScene />
        </Series.Sequence>

        {/* Scene 6: Observe Stage - 观察阶段 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1ObserveStageScene />
        </Series.Sequence>

        {/* Scene 7: Multi-Round Interaction - 多轮交互 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1MultiRoundScene />
        </Series.Sequence>

        {/* Scene 8: Summary - 架构总结 */}
        <Series.Sequence durationInFrames={SCENE_DURATION}>
          <Day1SummaryScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
