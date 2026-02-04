import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 5: Principle 2 - Provide Context (10 seconds / 300 frames)
 */
export const Day2Principle2Scene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const t = texts[language];

  return (
    <Day2PrincipleScene
      title={t.day2P2Title}
      description={t.day2P2Desc}
      beforeText={t.day2P2Before}
      afterText={t.day2P2After}
      tipText={t.day2P2Tip}
    />
  );
};
