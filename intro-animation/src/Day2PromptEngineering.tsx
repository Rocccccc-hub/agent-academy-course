import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { Day2TitleScene } from "./scenes/day2/Day2TitleScene";
import { Day2WhatIsPromptScene } from "./scenes/day2/Day2WhatIsPromptScene";
import { Day2BadVsGoodScene } from "./scenes/day2/Day2BadVsGoodScene";
import { Day2Principle1Scene } from "./scenes/day2/Day2Principle1Scene";
import { Day2Principle2Scene } from "./scenes/day2/Day2Principle2Scene";
import { Day2Principle3Scene } from "./scenes/day2/Day2Principle3Scene";
import { Day2Principle4Scene } from "./scenes/day2/Day2Principle4Scene";
import { Day2TemplateScene } from "./scenes/day2/Day2TemplateScene";
import { Day2SummaryScene } from "./scenes/day2/Day2SummaryScene";
import { Language } from "./utils/texts";

export interface Day2PromptEngineeringProps {
  language?: Language;
}

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

// Scene durations (in frames at 30fps)
const TITLE_DURATION = 120; // 4 seconds
const WHAT_IS_DURATION = 240; // 8 seconds
const BAD_VS_GOOD_DURATION = 360; // 12 seconds
const PRINCIPLE_DURATION = 300; // 10 seconds each (×4)
const TEMPLATE_DURATION = 360; // 12 seconds
const SUMMARY_DURATION = 120; // 4 seconds

/**
 * Day 2: Prompt Engineering & Optimization
 * Total: 2 minutes (1800 frames)
 *
 * Scene breakdown:
 * 1. Title (4s)
 * 2. What is Prompt (8s)
 * 3. Bad vs Good (12s)
 * 4. Principle 1: Clear & Specific (10s)
 * 5. Principle 2: Provide Context (10s)
 * 6. Principle 3: Structured Output (10s)
 * 7. Principle 4: Example Guidance (10s)
 * 8. Template Structure (12s)
 * 9. Summary (4s)
 */
export const Day2PromptEngineering: React.FC<Day2PromptEngineeringProps> = ({
  language = "zh",
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0d1117", fontFamily }}>
      <Series>
        {/* Scene 1: Title */}
        <Series.Sequence durationInFrames={TITLE_DURATION}>
          <Day2TitleScene language={language} />
        </Series.Sequence>

        {/* Scene 2: What is Prompt */}
        <Series.Sequence durationInFrames={WHAT_IS_DURATION}>
          <Day2WhatIsPromptScene language={language} />
        </Series.Sequence>

        {/* Scene 3: Bad vs Good */}
        <Series.Sequence durationInFrames={BAD_VS_GOOD_DURATION}>
          <Day2BadVsGoodScene language={language} />
        </Series.Sequence>

        {/* Scene 4: Principle 1 */}
        <Series.Sequence durationInFrames={PRINCIPLE_DURATION}>
          <Day2Principle1Scene language={language} />
        </Series.Sequence>

        {/* Scene 5: Principle 2 */}
        <Series.Sequence durationInFrames={PRINCIPLE_DURATION}>
          <Day2Principle2Scene language={language} />
        </Series.Sequence>

        {/* Scene 6: Principle 3 */}
        <Series.Sequence durationInFrames={PRINCIPLE_DURATION}>
          <Day2Principle3Scene language={language} />
        </Series.Sequence>

        {/* Scene 7: Principle 4 */}
        <Series.Sequence durationInFrames={PRINCIPLE_DURATION}>
          <Day2Principle4Scene language={language} />
        </Series.Sequence>

        {/* Scene 8: Template Structure */}
        <Series.Sequence durationInFrames={TEMPLATE_DURATION}>
          <Day2TemplateScene language={language} />
        </Series.Sequence>

        {/* Scene 9: Summary */}
        <Series.Sequence durationInFrames={SUMMARY_DURATION}>
          <Day2SummaryScene language={language} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
