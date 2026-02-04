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

// Load Noto Sans SC (Source Han Sans) for consistent Chinese font rendering
const { fontFamily } = loadFont();

export const AgentAcademyIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0d1117", fontFamily }}>
      <Series>
        {/* 场景 1: 餐厅标题 (4秒 / 120帧) */}
        <Series.Sequence durationInFrames={sceneDurations.title}>
          <RestaurantTitleScene />
        </Series.Sequence>

        {/* 场景 2: 餐厅介绍 (5秒 / 150帧) */}
        <Series.Sequence durationInFrames={sceneDurations.intro}>
          <RestaurantIntroScene />
        </Series.Sequence>

        {/* 场景 3: 顾客点餐 (5秒 / 150帧) */}
        <Series.Sequence durationInFrames={sceneDurations.order}>
          <CustomerOrderScene />
        </Series.Sequence>

        {/* 场景 4: 厨师接单 (6秒 / 180帧) */}
        <Series.Sequence durationInFrames={sceneDurations.receives}>
          <ChefReceivesScene />
        </Series.Sequence>

        {/* 场景 5: 查阅菜谱获取工具 (8秒 / 240帧) */}
        <Series.Sequence durationInFrames={sceneDurations.recipe}>
          <RecipeToolsScene />
        </Series.Sequence>

        {/* 场景 6: 烹饪过程 (8秒 / 240帧) */}
        <Series.Sequence durationInFrames={sceneDurations.cooking}>
          <CookingProcessScene />
        </Series.Sequence>

        {/* 场景 7: 上菜完成 (5秒 / 150帧) */}
        <Series.Sequence durationInFrames={sceneDurations.serve}>
          <ServeResultScene />
        </Series.Sequence>

        {/* 场景 8: 餐厅总结 (4秒 / 120帧) */}
        <Series.Sequence durationInFrames={sceneDurations.summary}>
          <RestaurantSummaryScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
