import { Composition } from "remotion";
import { Day1 } from "./Day1";
import { Day1Teaching } from "./Day1Teaching";
import Day1Complete from "./Day1Complete";
import { Day1Enhanced } from "./Day1Enhanced";
import Day1Professional from "./Day1Professional";
import Day1Ultimate from "./Day1Ultimate";
import Day1UltimateWithAudio from "./Day1UltimateWithAudio";
import Day1UltimateNoSubtitles from "./Day1UltimateNoSubtitles";
import { Day2 } from "./Day2";
import { Day3 } from "./Day3";
import { Day4 } from "./Day4";
import { Day5 } from "./Day5";
import { Day6 } from "./Day6";
import { Day7 } from "./Day7";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Day1"
        component={Day1}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1Teaching"
        component={Day1Teaching}
        durationInFrames={270}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1Complete"
        component={Day1Complete}
        durationInFrames={9000}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1Enhanced"
        component={Day1Enhanced}
        durationInFrames={14400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1Professional"
        component={Day1Professional}
        durationInFrames={14400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1Ultimate"
        component={Day1Ultimate}
        durationInFrames={14400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1UltimateWithAudio"
        component={Day1UltimateWithAudio}
        durationInFrames={14400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1UltimateNoSubtitles"
        component={Day1UltimateNoSubtitles}
        durationInFrames={14400}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day2"
        component={Day2}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day3"
        component={Day3}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day4"
        component={Day4}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day5"
        component={Day5}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day6"
        component={Day6}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day7"
        component={Day7}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
