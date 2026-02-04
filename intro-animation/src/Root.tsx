import { Composition } from "remotion";
import { AgentAcademyIntro } from "./AgentAcademyIntro";
import { Day0EnvironmentSetup } from "./Day0EnvironmentSetup";
import { Day1AgentArchitecture } from "./Day1AgentArchitecture";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AgentAcademyIntro"
        component={AgentAcademyIntro}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          language: "zh" as const,
        }}
      />
      <Composition
        id="AgentAcademyIntroEN"
        component={AgentAcademyIntro}
        durationInFrames={1350}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          language: "en" as const,
        }}
      />
      <Composition
        id="Day0EnvironmentSetup"
        component={Day0EnvironmentSetup}
        durationInFrames={2700}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Day1AgentArchitecture"
        component={Day1AgentArchitecture}
        durationInFrames={3600}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
