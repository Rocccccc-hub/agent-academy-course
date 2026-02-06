import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";

/**
 * Day 2 Scene 5: Principle 2 - Provide Context (10 seconds / 300 frames)
 */
export const Day2Principle2Scene: React.FC = () => {
  return (
    <Day2PrincipleScene
      title="原则 2：提供上下文"
      description="给出背景信息和约束条件"
      beforeText="查询数据库"
      afterText={`在用户表中查询 ID=123 的用户信息，\n字段包括姓名、邮箱、注册时间`}
      tipText="💡 提供必要信息"
    />
  );
};
