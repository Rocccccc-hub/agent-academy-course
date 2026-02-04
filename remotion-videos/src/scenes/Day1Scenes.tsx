import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { DiagramFlow } from "../components/DiagramFlow";
import { CodeBlock } from "../components/CodeBlock";

// 场景 3: ReAct 循环详解
export const Scene3React: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  // ReAct 流程节点
  const nodes = [
    { id: "thought", label: "Thought\n思考", x: 600, y: 200, color: "#6366f1" },
    { id: "action", label: "Action\n行动", x: 1100, y: 500, color: "#8b5cf6" },
    { id: "observation", label: "Observation\n观察", x: 300, y: 500, color: "#a855f7" },
    { id: "loop", label: "Loop\n循环", x: 600, y: 650, color: "#ec4899" },
  ];

  const edges = [
    { from: "thought", to: "action" },
    { from: "action", to: "observation" },
    { from: "observation", to: "loop" },
    { from: "loop", to: "thought" },
  ];

  return (
    <AbsoluteFill style={{ background: "#ffffff" }}>
      {/* 标题 */}
      <div
        style={{
          opacity: titleProgress,
          textAlign: "center",
          padding: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: "16px",
          }}
        >
          ReAct 工作循环
        </h2>
        <p style={{ fontSize: "32px", color: "#666" }}>
          Reasoning（推理）+ Acting（行动）
        </p>
      </div>

      {/* 流程图 */}
      <div style={{ width: "100%", height: "600px", marginTop: "-100px" }}>
        <DiagramFlow nodes={nodes} edges={edges} startFrame={30} />
      </div>

      {/* 步骤说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "80px",
          right: "80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {[
            { num: 1, text: "分析当前情况\n规划下一步", color: "#6366f1" },
            { num: 2, text: "选择并执行\n合适的工具", color: "#8b5cf6" },
            { num: 3, text: "接收工具\n返回结果", color: "#a855f7" },
            { num: 4, text: "重复循环\n直到完成", color: "#ec4899" },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                background: `${step.color}15`,
                border: `3px solid ${step.color}`,
                borderRadius: "16px",
                padding: "24px",
                opacity: interpolate(frame, [60 + i * 15, 75 + i * 15], [0, 1], {
                  extrapolateRight: "clamp",
                }),
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: step.color,
                  marginBottom: "12px",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  color: "#1a1a1a",
                  whiteSpace: "pre-line",
                  lineHeight: 1.4,
                }}
              >
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 场景 4: 代码实现
export const Scene4Code: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const codeExample = `// Agent 基础实现
class Agent {
  constructor(llm, tools, memory) {
    this.llm = llm;        // 大语言模型
    this.tools = tools;    // 工具列表
    this.memory = memory;  // 记忆系统
  }

  async run(userGoal) {
    let completed = false;

    while (!completed) {
      // 1. Thought: 思考下一步
      const thought = await this.llm.think({
        goal: userGoal,
        history: this.memory.getHistory(),
        tools: this.getToolDescriptions()
      });

      // 2. Action: 选择并执行工具
      if (thought.needsTool) {
        const toolName = thought.selectedTool;
        const toolParams = thought.params;

        const result = await this.tools[toolName](
          toolParams
        );

        // 3. Observation: 记录结果
        this.memory.add({
          type: 'tool_use',
          tool: toolName,
          params: toolParams,
          result: result
        });
      }

      // 4. Loop: 判断是否完成
      completed = await this.llm.isGoalAchieved({
        goal: userGoal,
        history: this.memory.getHistory()
      });
    }

    return this.memory.getHistory();
  }

  getToolDescriptions() {
    return Object.keys(this.tools).map(name => ({
      name,
      description: this.tools[name].description
    }));
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
        <h2
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            marginBottom: "16px",
          }}
        >
          Agent 代码实现
        </h2>
        <p style={{ fontSize: "28px", color: "rgba(255,255,255,0.8)" }}>
          将理论转化为可执行的代码
        </p>
      </div>

      {/* 代码块 */}
      <CodeBlock
        code={codeExample}
        language="javascript"
        startFrame={30}
        highlightLines={[5, 6, 7, 15, 16, 17, 22, 23, 24, 29, 30, 31, 38, 39, 40]}
      />
    </AbsoluteFill>
  );
};

// 场景 5: 实际案例演示
export const Scene5Case: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  // 案例步骤
  const steps = [
    {
      phase: "用户需求",
      content: "整理我的下载文件夹",
      icon: "👤",
      color: "#6366f1",
    },
    {
      phase: "Thought 1",
      content: "需要先查看文件夹里有什么文件",
      icon: "💭",
      color: "#8b5cf6",
    },
    {
      phase: "Action 1",
      content: 'list_files("/Downloads")',
      icon: "⚡",
      color: "#a855f7",
    },
    {
      phase: "Observation 1",
      content: "找到 50 个文件: 15个PDF, 20个图片, 10个视频...",
      icon: "👁️",
      color: "#ec4899",
    },
    {
      phase: "Thought 2",
      content: "应该按文件类型创建分类文件夹",
      icon: "💭",
      color: "#8b5cf6",
    },
    {
      phase: "Action 2",
      content: 'create_folders(["文档", "图片", "视频"])',
      icon: "⚡",
      color: "#a855f7",
    },
    {
      phase: "Observation 2",
      content: "3个文件夹创建成功",
      icon: "👁️",
      color: "#ec4899",
    },
    {
      phase: "Thought 3",
      content: "现在可以移动文件到对应文件夹了",
      icon: "💭",
      color: "#8b5cf6",
    },
    {
      phase: "Action 3",
      content: "move_files_by_type()",
      icon: "⚡",
      color: "#a855f7",
    },
    {
      phase: "完成",
      content: "✅ 已整理 50 个文件到 3 个分类文件夹",
      icon: "🎉",
      color: "#10b981",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "#ffffff",
        padding: "60px",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: titleProgress,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: "16px",
          }}
        >
          实际案例：文件整理 Agent
        </h2>
        <p style={{ fontSize: "28px", color: "#666" }}>
          从用户需求到任务完成的完整流程
        </p>
      </div>

      {/* 时间轴 */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* 垂直线 */}
        <div
          style={{
            position: "absolute",
            left: "80px",
            top: "0",
            bottom: "0",
            width: "4px",
            background: "linear-gradient(180deg, #6366f1, #ec4899)",
            opacity: 0.3,
          }}
        />

        {/* 步骤 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {steps.map((step, i) => {
            const stepProgress = spring({
              frame: frame - i * 10,
              fps,
              config: { damping: 100 },
            });

            const opacity = interpolate(stepProgress, [0, 1], [0, 1]);
            const translateX = interpolate(stepProgress, [0, 1], [-30, 0]);

            return (
              <div
                key={i}
                style={{
                  opacity,
                  transform: `translateX(${translateX}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: "32px",
                }}
              >
                {/* 图标 */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  {step.icon}
                </div>

                {/* 内容 */}
                <div
                  style={{
                    flex: 1,
                    background: "white",
                    border: `3px solid ${step.color}`,
                    borderRadius: "16px",
                    padding: "20px 28px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: step.color,
                      marginBottom: "8px",
                    }}
                  >
                    {step.phase}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#1a1a1a",
                      fontFamily:
                        step.phase.includes("Action")
                          ? "'JetBrains Mono', monospace"
                          : "inherit",
                    }}
                  >
                    {step.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// 场景 6: 总结
export const Scene6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const keyPoints = [
    {
      icon: "🧠",
      title: "LLM + Tools + Memory",
      desc: "三大组件协同工作",
    },
    {
      icon: "🔄",
      title: "ReAct 循环",
      desc: "思考 → 行动 → 观察",
    },
    {
      icon: "💻",
      title: "可编程实现",
      desc: "用代码构建 Agent",
    },
    {
      icon: "🎯",
      title: "实际应用",
      desc: "解决真实问题",
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: titleProgress,
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            marginBottom: "24px",
          }}
        >
          核心要点回顾
        </h2>
        <p style={{ fontSize: "32px", color: "rgba(255,255,255,0.9)" }}>
          掌握这些，你就理解了 Agent 的本质
        </p>
      </div>

      {/* 要点卡片 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px",
          maxWidth: "1400px",
        }}
      >
        {keyPoints.map((point, i) => {
          const cardProgress = spring({
            frame: frame - 20 - i * 10,
            fps,
            config: { damping: 100 },
          });

          const opacity = interpolate(cardProgress, [0, 1], [0, 1]);
          const scale = interpolate(cardProgress, [0, 1], [0.9, 1]);

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `scale(${scale})`,
                background: "white",
                borderRadius: "24px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>
                {point.icon}
              </div>
              <h3
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "12px",
                }}
              >
                {point.title}
              </h3>
              <p style={{ fontSize: "24px", color: "#666" }}>{point.desc}</p>
            </div>
          );
        })}
      </div>

      {/* 下节预告 */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          opacity: interpolate(frame, [60, 80], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
          }}
        >
          下一节：<strong>提示工程与 Agent 控制</strong>
          <br />
          学习如何设计和优化 Agent 的行为
        </div>
      </div>
    </AbsoluteFill>
  );
};
