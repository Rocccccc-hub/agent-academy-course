import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

// 统一的字体定义
const FONT_FAMILY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif";
const CODE_FONT_FAMILY = "'SF Mono', 'Monaco', 'Courier New', monospace";

// ===== 场景 2: 三大组件 =====
export const Scene2Components: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const components = [
    {
      icon: "🧠",
      title: "LLM 大脑",
      subtitle: "决策中枢",
      features: ["理解意图", "制定计划", "选择工具", "评估结果"],
      color: "#667eea",
      delay: 30,
    },
    {
      icon: "🔧",
      title: "工具库",
      subtitle: "执行接口",
      features: ["文件操作", "API调用", "数据库", "代码执行"],
      color: "#764ba2",
      delay: 50,
    },
    {
      icon: "💾",
      title: "记忆系统",
      subtitle: "上下文管理",
      features: ["对话历史", "任务状态", "中间结果", "执行日志"],
      color: "#f093fb",
      delay: 70,
    },
  ];

  // 标题动画
  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 100 },
  });

  // 连接线动画
  const lineProgress = interpolate(frame, [90, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 30%, #0a0015 0%, #000000 100%)",
        padding: "80px",
        overflow: "hidden",
      }}
    >
      {/* 背景网格 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.5,
        }}
      />

      {/* 标题 */}
      <div
        style={{
          opacity: titleProgress,
          transform: `scale(${interpolate(titleProgress, [0, 1], [0.9, 1])})`,
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
            fontWeight: 900,
            background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            textShadow: "0 0 60px rgba(102, 126, 234, 0.4)",
            fontFamily: FONT_FAMILY,
          }}
        >
          Agent 的三大组件
        </h2>
        <p
          style={{
            fontSize: "32px",
            color: "rgba(255, 255, 255, 0.6)",
            fontWeight: 600,
            fontFamily: FONT_FAMILY,
          }}
        >
          缺一不可的核心架构
        </p>
      </div>

      {/* 组件卡片 */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "60px",
        }}
      >
        {components.map((comp, i) => (
          <ComponentCard
            key={i}
            {...comp}
            frame={frame}
            fps={fps}
            index={i}
          />
        ))}
      </div>

      {/* 连接线 */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" stopOpacity={lineProgress} />
            <stop offset="50%" stopColor="#764ba2" stopOpacity={lineProgress} />
            <stop offset="100%" stopColor="#f093fb" stopOpacity={lineProgress} />
          </linearGradient>
        </defs>
        <path
          d="M 400,540 Q 960,540 1520,540"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray={`${1120 * lineProgress} 1120`}
        />
      </svg>
    </AbsoluteFill>
  );
};

// 组件卡片
const ComponentCard: React.FC<any> = ({
  icon,
  title,
  subtitle,
  features,
  color,
  delay,
  frame,
  fps,
  index,
}) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 80, mass: 0.5 },
  });

  // 卡片旋转效果
  const rotate = interpolate(
    progress,
    [0, 1],
    [index * 10 - 10, 0],
    { extrapolateRight: "clamp" }
  );

  // 发光效果
  const glowIntensity = 0.6 + Math.sin(frame * 0.05 + index) * 0.2;

  return (
    <div
      style={{
        opacity: progress,
        transform: `
          translateY(${interpolate(progress, [0, 1], [80, 0])}px)
          scale(${interpolate(progress, [0, 1], [0.85, 1])})
          rotate(${rotate}deg)
        `,
        flex: 1,
        maxWidth: "380px",
      }}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
          borderRadius: "32px",
          padding: "40px",
          border: `2px solid ${color}40`,
          boxShadow: `
            0 20px 60px ${color}30,
            0 0 80px ${color}${Math.floor(glowIntensity * 40).toString(16).padStart(2, '0')},
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
          backdropFilter: "blur(20px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景发光球 */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${color}40, transparent)`,
            filter: "blur(60px)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />

        {/* 图标 */}
        <div
          style={{
            fontSize: "100px",
            textAlign: "center",
            marginBottom: "28px",
            filter: `drop-shadow(0 10px 40px ${color}60)`,
            transform: `scale(${interpolate(frame - delay, [0, 30], [0.5, 1], { extrapolateRight: "clamp" })})`,
          }}
        >
          {icon}
        </div>

        {/* 标题 */}
        <h3
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "white",
            marginBottom: "12px",
            textAlign: "center",
            textShadow: `0 0 30px ${color}80`,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "24px",
            color: color,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "32px",
            opacity: 0.9,
          }}
        >
          {subtitle}
        </p>

        {/* 功能列表 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {features.map((feature: string, i: number) => {
            const featureProgress = spring({
              frame: frame - delay - 30 - i * 5,
              fps,
              config: { damping: 20, stiffness: 100 },
            });

            return (
              <div
                key={i}
                style={{
                  padding: "14px 24px",
                  background: `linear-gradient(90deg, ${color}25 0%, ${color}10 100%)`,
                  borderRadius: "12px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.95)",
                  textAlign: "center",
                  opacity: featureProgress,
                  transform: `
                    translateX(${interpolate(featureProgress, [0, 1], [-40, 0])}px)
                    scale(${interpolate(featureProgress, [0, 1], [0.9, 1])})
                  `,
                  border: `1px solid ${color}30`,
                  boxShadow: `0 4px 16px ${color}20`,
                }}
              >
                {feature}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ===== 场景 3: ReAct 循环 =====
export const Scene3React: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { id: "thought", label: "Thought\n思考", x: 960, y: 300, color: "#667eea", icon: "💭" },
    { id: "action", label: "Action\n行动", x: 1400, y: 540, color: "#764ba2", icon: "⚡" },
    { id: "observation", label: "Observation\n观察", x: 960, y: 780, color: "#f093fb", icon: "👁️" },
    { id: "loop", label: "Loop\n循环", x: 520, y: 540, color: "#4facfe", icon: "🔄" },
  ];

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 50%, #0a0020 0%, #000000 100%)",
        padding: "60px",
        overflow: "hidden",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [40, 0])}px)`,
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            fontWeight: 900,
            background: "linear-gradient(135deg, #667eea 0%, #4facfe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          ReAct 工作循环
        </h2>
        <p style={{ fontSize: "28px", color: "rgba(255, 255, 255, 0.6)" }}>
          Reasoning（推理）+ Acting（行动）
        </p>
      </div>

      {/* 循环节点 */}
      {steps.map((step, i) => {
        const nodeProgress = spring({
          frame: frame - 30 - i * 15,
          fps,
          config: { damping: 15, stiffness: 100 },
        });

        const pulseScale = 1 + Math.sin(frame * 0.1 + i * 1.5) * 0.05;

        return (
          <div
            key={step.id}
            style={{
              position: "absolute",
              left: step.x - 100,
              top: step.y - 100,
              width: "200px",
              height: "200px",
              opacity: nodeProgress,
              transform: `scale(${interpolate(nodeProgress, [0, 1], [0, pulseScale])})`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${step.color}30, transparent)`,
                filter: "blur(30px)",
                position: "absolute",
              }}
            />
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}80 100%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: `3px solid ${step.color}`,
                boxShadow: `
                  0 0 60px ${step.color}60,
                  inset 0 0 40px ${step.color}30
                `,
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "8px" }}>
                {step.icon}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "white",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                  lineHeight: 1.3,
                }}
              >
                {step.label}
              </div>
            </div>
          </div>
        );
      })}

      {/* 连接箭头 */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              fill="rgba(102, 126, 234, 0.8)"
            />
          </marker>
        </defs>
        {[
          { from: 0, to: 1, path: "M 1050,400 Q 1300,450 1310,540" },
          { from: 1, to: 2, path: "M 1310,640 Q 1200,720 1050,780" },
          { from: 2, to: 3, path: "M 870,780 Q 700,720 610,640" },
          { from: 3, to: 0, path: "M 610,440 Q 700,360 870,300" },
        ].map((arrow, i) => {
          const arrowProgress = interpolate(
            frame,
            [60 + i * 20, 100 + i * 20],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <path
              key={i}
              d={arrow.path}
              stroke="rgba(102, 126, 234, 0.6)"
              strokeWidth="4"
              fill="none"
              markerEnd="url(#arrowhead)"
              strokeDasharray="10 5"
              strokeDashoffset={interpolate(arrowProgress, [0, 1], [100, 0])}
              opacity={arrowProgress}
            />
          );
        })}
      </svg>

      {/* 步骤说明 */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "60px",
          right: "60px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {[
            { num: 1, text: "分析当前情况\n规划下一步", color: "#667eea" },
            { num: 2, text: "选择并执行\n合适的工具", color: "#764ba2" },
            { num: 3, text: "接收工具\n返回结果", color: "#f093fb" },
            { num: 4, text: "判断完成\n继续循环", color: "#4facfe" },
          ].map((step, i) => {
            const progress = spring({
              frame: frame - 100 - i * 10,
              fps,
              config: { damping: 20 },
            });

            return (
              <div
                key={i}
                style={{
                  background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`,
                  border: `2px solid ${step.color}50`,
                  borderRadius: "16px",
                  padding: "20px",
                  opacity: progress,
                  transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 900,
                    color: step.color,
                    marginBottom: "8px",
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.9)",
                    whiteSpace: "pre-line",
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {step.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== 场景 4: 代码实现 =====
export const Scene4Code: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const codeLines = [
    { text: "class Agent {", indent: 0, highlight: false },
    { text: "  constructor(llm, tools, memory) {", indent: 1, highlight: true },
    { text: "    this.llm = llm;", indent: 2, highlight: false },
    { text: "    this.tools = tools;", indent: 2, highlight: false },
    { text: "    this.memory = memory;", indent: 2, highlight: false },
    { text: "  }", indent: 1, highlight: false },
    { text: "", indent: 0, highlight: false },
    { text: "  async run(userGoal) {", indent: 1, highlight: true },
    { text: "    let completed = false;", indent: 2, highlight: false },
    { text: "    while (!completed) {", indent: 2, highlight: true },
    { text: "      // 1. Thought: 思考下一步", indent: 3, highlight: false },
    { text: "      const thought = await this.llm.think({", indent: 3, highlight: true },
    { text: "        goal: userGoal,", indent: 4, highlight: false },
    { text: "        history: this.memory.getHistory()", indent: 4, highlight: false },
    { text: "      });", indent: 3, highlight: false },
    { text: "", indent: 0, highlight: false },
    { text: "      // 2. Action: 执行工具", indent: 3, highlight: false },
    { text: "      if (thought.needsTool) {", indent: 3, highlight: true },
    { text: "        const result = await this.tools[", indent: 4, highlight: false },
    { text: "          thought.selectedTool", indent: 4, highlight: false },
    { text: "        ](thought.params);", indent: 4, highlight: false },
    { text: "", indent: 0, highlight: false },
    { text: "        // 3. Observation: 记录结果", indent: 4, highlight: false },
    { text: "        this.memory.add(result);", indent: 4, highlight: true },
    { text: "      }", indent: 3, highlight: false },
    { text: "", indent: 0, highlight: false },
    { text: "      // 4. Loop: 判断是否完成", indent: 3, highlight: false },
    { text: "      completed = await this.llm", indent: 3, highlight: true },
    { text: "        .isGoalAchieved(userGoal);", indent: 4, highlight: false },
    { text: "    }", indent: 2, highlight: false },
    { text: "  }", indent: 1, highlight: false },
    { text: "}", indent: 0, highlight: false },
  ];

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        padding: "60px",
        overflow: "hidden",
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
            fontSize: "56px",
            fontWeight: 900,
            color: "white",
            marginBottom: "12px",
            textShadow: "0 0 40px rgba(102, 126, 234, 0.6)",
          }}
        >
          Agent 代码实现
        </h2>
        <p style={{ fontSize: "24px", color: "rgba(255, 255, 255, 0.6)" }}>
          将理论转化为可执行的代码
        </p>
      </div>

      {/* 代码编辑器窗口 */}
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 100px rgba(102, 126, 234, 0.3)",
        }}
      >
        {/* 编辑器头部 */}
        <div
          style={{
            background: "linear-gradient(180deg, #2d2d3f 0%, #25253a 100%)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#ff5f57",
              boxShadow: "0 0 10px #ff5f5780",
            }}
          />
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#febc2e",
              boxShadow: "0 0 10px #febc2e80",
            }}
          />
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#28c840",
              boxShadow: "0 0 10px #28c84080",
            }}
          />
          <span
            style={{
              marginLeft: "20px",
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: 600,
            }}
          >
            agent.js
          </span>
        </div>

        {/* 代码内容 */}
        <div
          style={{
            background: "#1a1a2e",
            padding: "32px",
            fontFamily: "'SF Mono', 'Monaco', 'Courier New', monospace",
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#e6e6e6",
          }}
        >
          {codeLines.map((line, i) => {
            const lineProgress = spring({
              frame: frame - 20 - i * 2,
              fps,
              config: { damping: 25, stiffness: 120 },
            });

            const glowIntensity = line.highlight
              ? 0.8 + Math.sin(frame * 0.1 + i) * 0.2
              : 0;

            return (
              <div
                key={i}
                style={{
                  opacity: lineProgress,
                  transform: `translateX(${interpolate(lineProgress, [0, 1], [-20, 0])}px)`,
                  paddingLeft: `${line.indent * 30}px`,
                  background: line.highlight
                    ? `rgba(102, 126, 234, ${0.1 * glowIntensity})`
                    : "transparent",
                  marginLeft: "-32px",
                  marginRight: "-32px",
                  paddingLeft: `${32 + line.indent * 30}px`,
                  paddingRight: "32px",
                  borderLeft: line.highlight
                    ? `3px solid rgba(102, 126, 234, ${glowIntensity})`
                    : "3px solid transparent",
                  transition: "all 0.3s ease",
                }}
              >
                {line.text === "" ? "\u00A0" : (
                  <span
                    style={{
                      color: line.highlight ? "#a0d7ff" : "#e6e6e6",
                      textShadow: line.highlight
                        ? `0 0 20px rgba(102, 126, 234, ${glowIntensity})`
                        : "none",
                    }}
                  >
                    {line.text}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 底部注释 */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: interpolate(frame, [120, 150], [0, 1], {
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            background: "rgba(102, 126, 234, 0.15)",
            backdropFilter: "blur(20px)",
            padding: "16px 48px",
            borderRadius: "100px",
            border: "2px solid rgba(102, 126, 234, 0.3)",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 600,
            }}
          >
            💡 简洁的架构，强大的能力
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== 场景 5: 实际案例 =====
export const Scene5Case: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const steps = [
    { phase: "用户需求", content: "整理我的下载文件夹", icon: "👤", color: "#667eea" },
    { phase: "Thought 1", content: "需要先查看文件夹里有什么文件", icon: "💭", color: "#764ba2" },
    { phase: "Action 1", content: 'list_files("/Downloads")', icon: "⚡", color: "#f093fb" },
    { phase: "Observation 1", content: "找到 50 个文件: 15个PDF, 20个图片...", icon: "👁️", color: "#4facfe" },
    { phase: "Thought 2", content: "应该按文件类型创建分类文件夹", icon: "💭", color: "#764ba2" },
    { phase: "Action 2", content: 'create_folders(["文档", "图片", "视频"])', icon: "⚡", color: "#f093fb" },
    { phase: "Observation 2", content: "3个文件夹创建成功", icon: "👁️", color: "#4facfe" },
    { phase: "Thought 3", content: "现在可以移动文件到对应文件夹了", icon: "💭", color: "#764ba2" },
    { phase: "Action 3", content: "move_files_by_type()", icon: "⚡", color: "#f093fb" },
    { phase: "✅ 完成", content: "已整理 50 个文件到 3 个分类文件夹", icon: "🎉", color: "#10b981" },
  ];

  const titleProgress = spring({ frame, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 30% 20%, #1a0033 0%, #000000 100%)",
        padding: "60px",
        overflow: "hidden",
      }}
    >
      {/* 标题 */}
      <div
        style={{
          opacity: titleProgress,
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            fontWeight: 900,
            background: "linear-gradient(135deg, #667eea 0%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "12px",
          }}
        >
          实际案例：文件整理 Agent
        </h2>
        <p style={{ fontSize: "24px", color: "rgba(255, 255, 255, 0.6)" }}>
          从用户需求到任务完成的完整流程
        </p>
      </div>

      {/* 时间轴 */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        {/* 垂直线 */}
        <div
          style={{
            position: "absolute",
            left: "60px",
            top: "0",
            bottom: "0",
            width: "4px",
            background: "linear-gradient(180deg, #667eea, #10b981)",
            opacity: interpolate(frame, [0, 60], [0, 0.3], {
              extrapolateRight: "clamp",
            }),
            borderRadius: "2px",
          }}
        />

        {/* 步骤列表 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {steps.map((step, i) => {
            const progress = spring({
              frame: frame - 10 - i * 6,
              fps,
              config: { damping: 20, stiffness: 100 },
            });

            const pulseScale = 1 + Math.sin(frame * 0.08 + i) * 0.03;

            return (
              <div
                key={i}
                style={{
                  opacity: progress,
                  transform: `translateX(${interpolate(progress, [0, 1], [-60, 0])}px) scale(${interpolate(progress, [0, 1], [0.95, 1])})`,
                  display: "flex",
                  alignItems: "center",
                  gap: "28px",
                }}
              >
                {/* 图标 */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    flexShrink: 0,
                    boxShadow: `0 8px 32px ${step.color}60, 0 0 60px ${step.color}40`,
                    transform: `scale(${pulseScale})`,
                    zIndex: 1,
                    border: "3px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {step.icon}
                </div>

                {/* 内容卡片 */}
                <div
                  style={{
                    flex: 1,
                    background: `linear-gradient(135deg, ${step.color}15 0%, ${step.color}05 100%)`,
                    border: `2px solid ${step.color}40`,
                    borderRadius: "16px",
                    padding: "20px 28px",
                    backdropFilter: "blur(20px)",
                    boxShadow: `0 8px 32px ${step.color}20`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: step.color,
                      marginBottom: "8px",
                    }}
                  >
                    {step.phase}
                  </div>
                  <div
                    style={{
                      fontSize: "22px",
                      color: "rgba(255, 255, 255, 0.95)",
                      fontFamily: step.phase.includes("Action")
                        ? "'SF Mono', monospace"
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
    { icon: "🧠", title: "三大组件", desc: "LLM + Tools + Memory 协同工作", color: "#667eea" },
    { icon: "🔄", title: "ReAct 循环", desc: "思考 → 行动 → 观察 → 循环", color: "#764ba2" },
    { icon: "💻", title: "可编程实现", desc: "用代码构建自主 Agent", color: "#f093fb" },
    { icon: "🎯", title: "实际应用", desc: "解决真实世界的问题", color: "#10b981" },
  ];

  const titleProgress = spring({ frame, fps, config: { damping: 18, stiffness: 100 } });

  // 背景粒子
  const particles = Array.from({ length: 40 }, (_, i) => ({
    x: Math.sin(i * 0.7 + frame * 0.03) * 900,
    y: Math.cos(i * 0.5 + frame * 0.025) * 500,
    size: 8 + Math.sin(i + frame * 0.08) * 6,
    opacity: 0.2 + Math.sin(i * 1.5 + frame * 0.06) * 0.15,
    color: ["#667eea", "#764ba2", "#f093fb", "#10b981"][i % 4],
  }));

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 50%, #1a0040 0%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        overflow: "hidden",
      }}
    >
      {/* 背景粒子 */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.color}${Math.floor(p.opacity * 255).toString(16).padStart(2, '0')}, transparent)`,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* 标题 */}
      <div
        style={{
          opacity: titleProgress,
          transform: `scale(${interpolate(titleProgress, [0, 1], [0.9, 1])})`,
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "68px",
            fontWeight: 900,
            background: "linear-gradient(135deg, #667eea 0%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
            textShadow: "0 0 80px rgba(102, 126, 234, 0.5)",
          }}
        >
          核心要点回顾
        </h2>
        <p style={{ fontSize: "28px", color: "rgba(255, 255, 255, 0.7)", fontWeight: 600 }}>
          掌握这些，你就理解了 Agent 的本质
        </p>
      </div>

      {/* 要点卡片 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px",
          maxWidth: "1300px",
        }}
      >
        {keyPoints.map((point, i) => {
          const progress = spring({
            frame: frame - 25 - i * 8,
            fps,
            config: { damping: 18, stiffness: 90 },
          });

          const hoverScale = 1 + Math.sin(frame * 0.05 + i * 1.2) * 0.02;

          return (
            <div
              key={i}
              style={{
                opacity: progress,
                transform: `
                  scale(${interpolate(progress, [0, 1], [0.85, hoverScale])})
                  rotate(${interpolate(progress, [0, 1], [i * 3 - 4, 0])}deg)
                `,
                background: `linear-gradient(135deg, ${point.color}20 0%, ${point.color}08 100%)`,
                borderRadius: "24px",
                padding: "40px",
                textAlign: "center",
                border: `2px solid ${point.color}50`,
                boxShadow: `
                  0 20px 60px ${point.color}30,
                  0 0 80px ${point.color}20,
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                style={{
                  fontSize: "72px",
                  marginBottom: "20px",
                  filter: `drop-shadow(0 0 30px ${point.color}60)`,
                }}
              >
                {point.icon}
              </div>
              <h3
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: point.color,
                  marginBottom: "12px",
                  textShadow: `0 0 30px ${point.color}40`,
                }}
              >
                {point.title}
              </h3>
              <p
                style={{
                  fontSize: "22px",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                {point.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* 下节预告 */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          opacity: interpolate(frame, [80, 110], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            background: "rgba(102, 126, 234, 0.15)",
            backdropFilter: "blur(20px)",
            padding: "20px 60px",
            borderRadius: "100px",
            border: "2px solid rgba(102, 126, 234, 0.3)",
            boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255, 255, 255, 0.95)",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            下一节：<strong style={{ color: "#667eea" }}>提示工程与 Agent 控制</strong>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
