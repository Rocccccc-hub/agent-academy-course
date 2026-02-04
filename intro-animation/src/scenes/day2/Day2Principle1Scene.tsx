import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 4: Principle 1 - Be Clear & Specific (10 seconds / 300 frames)
 */
export const Day2Principle1Scene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const t = texts[language];

  return (
    <Day2PrincipleScene
      title={t.day2P1Title}
      description={t.day2P1Desc}
      beforeText={t.day2P1Before}
      afterText={t.day2P1After}
      tipText={t.day2P1Tip}
    />
  );
};
