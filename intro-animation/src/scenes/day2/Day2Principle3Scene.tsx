import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";

/**
 * Day 2 Scene 6: Principle 3 - Structured Output (10 seconds / 300 frames)
 */
export const Day2Principle3Scene: React.FC = () => {
  return (
    <Day2PrincipleScene
      title="原则 3：结构化输出"
      description="指定期望的输出格式"
      beforeText="分析这段代码"
      afterText={`分析这段代码，按以下格式输出：\n1. 功能说明\n2. 潜在问题\n3. 改进建议`}
      tipText="💡 规范输出格式"
    />
  );
};
