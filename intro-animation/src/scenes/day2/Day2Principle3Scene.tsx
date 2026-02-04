import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 6: Principle 3 - Structured Output (10 seconds / 300 frames)
 */
export const Day2Principle3Scene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const t = texts[language];

  return (
    <Day2PrincipleScene
      title={t.day2P3Title}
      description={t.day2P3Desc}
      beforeText={t.day2P3Before}
      afterText={t.day2P3After}
      tipText={t.day2P3Tip}
    />
  );
};
