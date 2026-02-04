import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Sequence } from "remotion";
import { ConceptCard } from "./components/ConceptCard";
import { DiagramFlow } from "./components/DiagramFlow";
import { CodeBlock } from "./components/CodeBlock";

export const Day1Teaching: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#ffffff" }}>
      {/* Scene 1: Agent 三大组件 (0-90秒) */}
      <Sequence from={0} durationInFrames={90 * fps / 60}>
        <Scene1Components />
      </Sequence>

      {/* Scene 2: ReAct 循环 (90-180秒) */}
      <Sequence from={90 * fps / 60} durationInFrames={90 * fps / 60}>
        <Scene2ReactLoop />
      </Sequence>

      {/* Scene 3: 代码示例 (180-270秒) */}
      <Sequence from={180 * fps / 60} durationInFrames={90 * fps / 60}>
        <Scene3CodeExample />
      </Sequence>
    </AbsoluteFill>
  );
};

// 场景 1: Agent 三大组件
const Scene1Components: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 标题动画
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: titleOpacity,
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Agent 的三大组件
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          理解 Agent 如何工作
        </p>
      </div>

      {/* 三个概念卡片 */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1400px",
        }}
      >
        <ConceptCard
          title="LLM 大脑"
          description="负责推理、决策和规划。分析任务需求，选择合适的工具"
          icon="🧠"
          delay={30}
          color="#6366f1"
        />

        <ConceptCard
          title="工具库"
          description="扩展 Agent 能力的外部工具。如文件操作、API 调用、数据库查询"
          icon="🔧"
          delay={45}
          color="#8b5cf6"
        />

        <ConceptCard
          title="记忆系统"
          description="维护对话历史和任务状态。让 Agent 能够进行多轮交互"
          icon="💾"
          delay={60}
          color="#a855f7"
        />
      </div>

      {/* 底部说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          fontSize: "20px",
          color: "rgba(255,255,255,0.8)",
          opacity: interpolate(frame, [60, 80], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        这三个组件协同工作，让 Agent 能够自主完成复杂任务
      </div>
    </AbsoluteFill>
  );
};

// 场景 2: ReAct 循环
const Scene2ReactLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 标题动画
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 流程图节点
  const nodes = [
    { id: "thought", label: "Thought\n思考", x: 600, y: 150, color: "#6366f1" },
    { id: "action", label: "Action\n行动", x: 950, y: 400, color: "#8b5cf6" },
    { id: "observation", label: "Observation\n观察", x: 250, y: 400, color: "#a855f7" },
  ];

  const edges = [
    { from: "thought", to: "action" },
    { from: "action", to: "observation" },
    { from: "observation", to: "thought" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: titleOpacity,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: "16px",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          ReAct 工作循环
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "#666",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Reasoning（推理）+ Acting（行动）
        </p>
      </div>

      {/* 流程图 */}
      <div style={{ width: "1200px", height: "600px" }}>
        <DiagramFlow nodes={nodes} edges={edges} startFrame={20} />
      </div>

      {/* 示例说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "60px",
          right: "60px",
          background: "rgba(99, 102, 241, 0.1)",
          padding: "24px",
          borderRadius: "16px",
          borderLeft: "4px solid #6366f1",
          opacity: interpolate(frame, [60, 80], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.6 }}>
          <strong>示例：</strong> 用户要求"整理文件夹" →
          <span style={{ color: "#6366f1" }}> Thought: 先列出文件</span> →
          <span style={{ color: "#8b5cf6" }}> Action: list_files()</span> →
          <span style={{ color: "#a855f7" }}> Observation: 找到50个文件</span> →
          重复循环直到完成
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 场景 3: 代码示例
const Scene3CodeExample: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const codeExample = `// Agent 基础实现
class Agent {
  constructor(llm, tools) {
    this.llm = llm;
    this.tools = tools;
    this.memory = [];
  }

  async run(userGoal) {
    while (!taskCompleted) {
      // 1. 思考下一步
      const thought = await this.llm.think(
        userGoal,
        this.memory
      );

      // 2. 选择并执行工具
      const action = this.selectTool(thought);
      const result = await this.tools[action.name](
        action.params
      );

      // 3. 记录结果
      this.memory.push({ thought, action, result });

      // 4. 判断是否完成
      taskCompleted = this.llm.isGoalAchieved(
        userGoal,
        this.memory
      );
    }
    return this.memory;
  }
}`;

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #1e1e1e 0%, #2d3748 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: titleOpacity,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          Agent 代码实现
        </h1>
        <p
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          将理论转化为实践
        </p>
      </div>

      {/* 代码块 */}
      <CodeBlock
        code={codeExample}
        language="javascript"
        startFrame={30}
        highlightLines={[6, 7, 8, 13, 14, 15, 21, 22, 23]}
      />

      {/* 底部提示 */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          fontSize: "20px",
          color: "rgba(255,255,255,0.7)",
          opacity: interpolate(frame, [80, 100], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        💡 核心是 think → select → execute → remember 的循环
      </div>
    </AbsoluteFill>
  );
};
