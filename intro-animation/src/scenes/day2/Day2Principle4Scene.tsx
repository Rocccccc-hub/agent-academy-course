import React from "react";
import { Day2PrincipleScene } from "./Day2PrincipleScene";
import { texts, Language } from "../../utils/texts";

/**
 * Day 2 Scene 7: Principle 4 - Example Guidance (10 seconds / 300 frames)
 */
export const Day2Principle4Scene: React.FC<{ language?: Language }> = ({
  language = "zh",
}) => {
  const t = texts[language];

  return (
    <Day2PrincipleScene
      title={t.day2P4Title}
      description={t.day2P4Desc}
      beforeText={t.day2P4Before}
      afterText={t.day2P4After}
      tipText={t.day2P4Tip}
    />
  );
};
