import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";

/**
 * Day 2 Scene 7: Principle 4 - Example Guidance (10 seconds / 300 frames)
 */
export const Day2Principle4Scene: React.FC = () => {
  return (
    <Day2PrincipleScene
      title="原则 4：示例引导"
      description="使用 Few-shot Learning 提供示例"
      beforeText="提取关键词"
      afterText={`提取文本关键词，示例：\n输入："Python 很强大"\n输出：["Python", "强大"]`}
      tipText="💡 用例子说明"
    />
  );
};
