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

// ===== 场景 3: ReAct 循环 =====
export const Scene3React: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const nodes = [
    { id: "thought", label: "Thought\n思考下一步", x: 600, y: 180, color: "#6366f1" },
    { id: "action", label: "Action\n执行工具", x: 1150, y: 500, color: "#8b5cf6" },
    { id: "observation", label: "Observation\n观察结果", x: 250, y: 500, color: "#a855f7" },
    { id: "loop", label: "Loop\n重复循环", x: 600, y: 700, color: "#ec4899" },
  ];

  const edges = [
    { from: "thought", to: "action" },
    { from: "action", to: "observation" },
    { from: "observation", to: "loop" },
    { from: "loop", to: "thought" },
  ];

  return (
    <AbsoluteFill style={{ background: "#ffffff", padding: "60px" }}>
      {/* 标题 */}
      <div
        style={{
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "80px",
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: "20px",
          }}
        >
          ReAct 工作循环
        </h2>
        <p style={{ fontSize: "36px", color: "#666" }}>Reasoning（推理）+ Acting（行动）</p>
      </div>

      {/* 流程图 */}
      <div style={{ width: "100%", height: "600px" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { num: 1, text: "分析当前情况\n规划下一步", color: "#6366f1" },
            { num: 2, text: "选择并执行\n合适的工具", color: "#8b5cf6" },
            { num: 3, text: "接收工具\n返回结果", color: "#a855f7" },
            { num: 4, text: "判断完成\n继续循环", color: "#ec4899" },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                background: `${step.color}15`,
                border: `4px solid ${step.color}`,
                borderRadius: "20px",
                padding: "28px",
                opacity: interpolate(frame, [70 + i * 12, 88 + i * 12], [0, 1], {
                  extrapolateRight: "clamp",
                }),
                transform: `translateY(${interpolate(frame, [70 + i * 12, 88 + i * 12], [30, 0], {
                  extrapolateRight: "clamp",
                })}px)`,
              }}
            >
              <div
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  color: step.color,
                  marginBottom: "12px",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  color: "#1a1a1a",
                  whiteSpace: "pre-line",
                  lineHeight: 1.5,
                  fontWeight: 600,
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

// ===== 场景 4: 代码实现 =====
export const Scene4Code: React.FC = () => {
  const frame = useCurrentFrame();

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
        availableTools: this.getToolDescriptions()
      });

      // 2. Action: 执行工具
      if (thought.needsTool) {
        const toolName = thought.selectedTool;
        const params = thought.params;

        const result = await this.tools[toolName](params);

        // 3. Observation: 记录结果
        this.memory.add({
          type: 'tool_execution',
          tool: toolName,
          params: params,
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
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "white",
            marginBottom: "20px",
          }}
        >
          Agent 代码实现
        </h2>
        <p style={{ fontSize: "32px", color: "rgba(255,255,255,0.8)" }}>
          将理论转化为可执行的代码
        </p>
      </div>

      {/* 代码块 */}
      <CodeBlock
        code={codeExample}
        language="javascript"
        startFrame={30}
        highlightLines={[5, 6, 7, 16, 17, 18, 22, 23, 28, 29, 30, 37, 38, 39]}
      />
    </AbsoluteFill>
  );
};

// ===== 场景 5: 实际案例 =====
export const Scene5Case: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { phase: "用户需求", content: "整理我的下载文件夹", icon: "👤", color: "#667eea" },
    { phase: "Thought 1", content: "需要先查看文件夹里有什么文件", icon: "💭", color: "#6366f1" },
    { phase: "Action 1", content: 'list_files("/Downloads")', icon: "⚡", color: "#8b5cf6" },
    { phase: "Observation 1", content: "找到 50 个文件: 15个PDF, 20个图片, 10个视频...", icon: "👁️", color: "#a855f7" },
    { phase: "Thought 2", content: "应该按文件类型创建分类文件夹", icon: "💭", color: "#6366f1" },
    { phase: "Action 2", content: 'create_folders(["文档", "图片", "视频"])', icon: "⚡", color: "#8b5cf6" },
    { phase: "Observation 2", content: "3个文件夹创建成功", icon: "👁️", color: "#a855f7" },
    { phase: "Thought 3", content: "现在可以移动文件到对应文件夹了", icon: "💭", color: "#6366f1" },
    { phase: "Action 3", content: "move_files_by_type()", icon: "⚡", color: "#8b5cf6" },
    { phase: "✅ 完成", content: "已整理 50 个文件到 3 个分类文件夹", icon: "🎉", color: "#10b981" },
  ];

  return (
    <AbsoluteFill style={{ background: "#ffffff", padding: "60px" }}>
      {/* 标题 */}
      <div
        style={{
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: "20px",
          }}
        >
          实际案例：文件整理 Agent
        </h2>
        <p style={{ fontSize: "32px", color: "#666" }}>
          从用户需求到任务完成的完整流程
        </p>
      </div>

      {/* 时间轴 */}
      <div style={{ maxWidth: "1500px", margin: "0 auto", position: "relative" }}>
        {/* 垂直连接线 */}
        <div
          style={{
            position: "absolute",
            left: "90px",
            top: "0",
            bottom: "0",
            width: "6px",
            background: "linear-gradient(180deg, #667eea, #10b981)",
            opacity: 0.2,
            borderRadius: "3px",
          }}
        />

        {/* 步骤列表 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {steps.map((step, i) => {
            const progress = spring({
              frame: frame - i * 8,
              fps,
              config: { damping: 100 },
            });

            return (
              <div
                key={i}
                style={{
                  opacity: interpolate(progress, [0, 1], [0, 1]),
                  transform: `translateX(${interpolate(progress, [0, 1], [-40, 0])}px)`,
                  display: "flex",
                  alignItems: "center",
                  gap: "36px",
                }}
              >
                {/* 图标 */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "36px",
                    flexShrink: 0,
                    boxShadow: `0 8px 24px ${step.color}40`,
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
                    border: `4px solid ${step.color}`,
                    borderRadius: "20px",
                    padding: "24px 32px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: step.color,
                      marginBottom: "10px",
                    }}
                  >
                    {step.phase}
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      color: "#1a1a1a",
                      fontFamily: step.phase.includes("Action")
                        ? "'JetBrains Mono', monospace"
                        : "inherit",
                      fontWeight: 500,
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

// ===== 场景 6: 总结 =====
export const Scene6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const keyPoints = [
    { icon: "🧠", title: "三大组件", desc: "LLM + Tools + Memory 协同工作" },
    { icon: "🔄", title: "ReAct 循环", desc: "思考 → 行动 → 观察 → 循环" },
    { icon: "💻", title: "可编程实现", desc: "用代码构建自主 Agent" },
    { icon: "🎯", title: "实际应用", desc: "解决真实世界的问题" },
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
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "80px",
            fontWeight: 800,
            color: "white",
            marginBottom: "28px",
          }}
        >
          核心要点回顾
        </h2>
        <p style={{ fontSize: "36px", color: "rgba(255,255,255,0.95)" }}>
          掌握这些，你就理解了 Agent 的本质
        </p>
      </div>

      {/* 要点卡片 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
          maxWidth: "1500px",
        }}
      >
        {keyPoints.map((point, i) => {
          const progress = spring({
            frame: frame - 25 - i * 10,
            fps,
            config: { damping: 80 },
          });

          return (
            <div
              key={i}
              style={{
                opacity: interpolate(progress, [0, 1], [0, 1]),
                transform: `scale(${interpolate(progress, [0, 1], [0.9, 1])})`,
                background: "white",
                borderRadius: "28px",
                padding: "48px",
                textAlign: "center",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ fontSize: "80px", marginBottom: "24px" }}>{point.icon}</div>
              <h3
                style={{
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "16px",
                }}
              >
                {point.title}
              </h3>
              <p style={{ fontSize: "28px", color: "#666", lineHeight: 1.5 }}>{point.desc}</p>
            </div>
          );
        })}
      </div>

      {/* 下节预告 */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          opacity: interpolate(frame, [70, 90], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.95)",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          下一节：<strong style={{ fontSize: "36px" }}>提示工程与 Agent 控制</strong>
          <br />
          <span style={{ fontSize: "28px", opacity: 0.9 }}>
            学习如何设计和优化 Agent 的行为
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== 辅助组件 =====

// 背景装饰圆圈
export const BackgroundCircles: React.FC = () => {
  const frame = useCurrentFrame();

  const circles = [
    { x: 120, y: 120, size: 220, speed: 0.4 },
    { x: 1700, y: 180, size: 320, speed: 0.25 },
    { x: 280, y: 880, size: 280, speed: 0.35 },
    { x: 1600, y: 820, size: 200, speed: 0.5 },
  ];

  return (
    <>
      {circles.map((circle, i) => {
        const offset = Math.sin((frame * circle.speed) / 30) * 40;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: circle.x,
              top: circle.y + offset,
              width: circle.size,
              height: circle.size,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(4px)",
              opacity: 0.7,
            }}
          />
        );
      })}
    </>
  );
};

// 进度指示器
export const ProgressIndicator: React.FC<{ totalDuration: number }> = ({ totalDuration }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = (frame / (totalDuration * fps)) * 100;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "30px",
        left: "60px",
        right: "60px",
        height: "8px",
        background: "rgba(0,0,0,0.1)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "4px",
          transition: "width 0.1s ease-out",
        }}
      />
    </div>
  );
};
