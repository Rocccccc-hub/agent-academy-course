import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";

/**
 * Day 2 Scene 4: Principle 1 - Be Clear & Specific (10 seconds / 300 frames)
 */
export const Day2Principle1Scene: React.FC = () => {
  return (
    <Day2PrincipleScene
      title="原则 1：清晰明确"
      description="避免歧义，具体描述任务目标"
      beforeText="帮我写代码"
      afterText={`用 Python 写一个函数，\n输入城市名，返回天气数据`}
      tipText="💡 从模糊到具体"
    />
  );
};
