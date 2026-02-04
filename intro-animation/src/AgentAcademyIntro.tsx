import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { loadFont } from "@remotion/google-fonts/NotoSansSC";
import { RestaurantTitleScene } from "./scenes/RestaurantTitleScene";
import { RestaurantIntroScene } from "./scenes/RestaurantIntroScene";
import { CustomerOrderScene } from "./scenes/CustomerOrderScene";
import { ChefReceivesScene } from "./scenes/ChefReceivesScene";
import { RecipeToolsScene } from "./scenes/RecipeToolsScene";
import { CookingProcessScene } from "./scenes/CookingProcessScene";
import { ServeResultScene } from "./scenes/ServeResultScene";
import { RestaurantSummaryScene } from "./scenes/RestaurantSummaryScene";
import { sceneDurations } from "./utils/timing";
import { Language } from "./utils/texts";

// Load Noto Sans SC (Source Han Sans) for consistent Chinese font rendering
const { fontFamily } = loadFont();

export interface AgentAcademyIntroProps {
  language?: Language;
}

export const AgentAcademyIntro: React.FC<AgentAcademyIntroProps> = ({
  language = "zh",
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0d1117", fontFamily }}>
      <Series>
        {/* Scene 1: Restaurant Title (4s / 120 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.title}>
          <RestaurantTitleScene language={language} />
        </Series.Sequence>

        {/* Scene 2: Restaurant Intro (5s / 150 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.intro}>
          <RestaurantIntroScene language={language} />
        </Series.Sequence>

        {/* Scene 3: Customer Order (5s / 150 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.order}>
          <CustomerOrderScene language={language} />
        </Series.Sequence>

        {/* Scene 4: Chef Receives (6s / 180 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.receives}>
          <ChefReceivesScene language={language} />
        </Series.Sequence>

        {/* Scene 5: Recipe Tools (8s / 240 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.recipe}>
          <RecipeToolsScene language={language} />
        </Series.Sequence>

        {/* Scene 6: Cooking Process (8s / 240 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.cooking}>
          <CookingProcessScene language={language} />
        </Series.Sequence>

        {/* Scene 7: Serve Result (5s / 150 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.serve}>
          <ServeResultScene language={language} />
        </Series.Sequence>

        {/* Scene 8: Restaurant Summary (4s / 120 frames) */}
        <Series.Sequence durationInFrames={sceneDurations.summary}>
          <RestaurantSummaryScene language={language} />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
