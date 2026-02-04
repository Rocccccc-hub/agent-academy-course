// 课程数据 - 整合了外部资源的核心内容
const courseData = [
    // Intro: 课程导览 - 餐厅比喻
    {
        day: -1,
        title: {
            zh: "课程导览",
            en: "Course Introduction"
        },
        subtitle: {
            zh: "通过餐厅类比理解 AI Agent",
            en: "Understanding AI Agents Through Restaurant Analogy"
        },
        duration: "0:45",
        videoUrl: "./lessons/INTRO-餐厅比喻.mp4",
        icon: "🍽️",
        chapters: [
            {
                id: "title",
                title: {
                    zh: "餐厅标题",
                    en: "Restaurant Title"
                },
                timestamp: 0,
                description: {
                    zh: "智能餐厅：理解 AI Agent",
                    en: "Smart Restaurant: Understanding AI Agent"
                }
            },
            {
                id: "intro",
                title: {
                    zh: "餐厅介绍",
                    en: "Restaurant Introduction"
                },
                timestamp: 4,
                description: {
                    zh: "AI Agent 就像一个智能餐厅",
                    en: "AI Agent is like a smart restaurant"
                }
            },
            {
                id: "order",
                title: {
                    zh: "顾客点餐",
                    en: "Customer Order"
                },
                timestamp: 9,
                description: {
                    zh: "用户提出需求（Prompt）",
                    en: "User makes a request (Prompt)"
                }
            },
            {
                id: "receives",
                title: {
                    zh: "厨师接单",
                    en: "Chef Receives Order"
                },
                timestamp: 14,
                description: {
                    zh: "Agent 接收并思考（LLM）",
                    en: "Agent receives and thinks (LLM)"
                }
            },
            {
                id: "recipe",
                title: {
                    zh: "查阅菜谱获取工具",
                    en: "Consulting Recipe for Tools"
                },
                timestamp: 20,
                description: {
                    zh: "通过 MCP 协议连接工具",
                    en: "Connecting tools via MCP protocol"
                }
            },
            {
                id: "cooking",
                title: {
                    zh: "烹饪过程",
                    en: "Cooking Process"
                },
                timestamp: 28,
                description: {
                    zh: "执行任务并记录（Memory）",
                    en: "Executing tasks and recording (Memory)"
                }
            },
            {
                id: "serve",
                title: {
                    zh: "上菜完成",
                    en: "Serving Complete"
                },
                timestamp: 36,
                description: {
                    zh: "返回结果给用户",
                    en: "Returning results to user"
                }
            },
            {
                id: "summary",
                title: {
                    zh: "餐厅总结",
                    en: "Restaurant Summary"
                },
                timestamp: 41,
                description: {
                    zh: "完整协作流程回顾",
                    en: "Complete workflow review"
                }
            }
        ],
        isFree: true
    },
    // Day 0: 开发环境准备
    {
        day: 0,
        title: {
            zh: "开发环境准备",
            en: "Development Environment Setup"
        },
        subtitle: {
            zh: "工具安装与配置完全指南",
            en: "Complete Guide to Tool Installation and Configuration"
        },
        duration: "1:30",
        videoUrl: "./lessons/DAY0-environment-setup.mp4",
        icon: "⚙️",
        chapters: [
            {
                id: "overview",
                title: {
                    zh: "环境准备概览",
                    en: "Environment Setup Overview"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3 text-gh-text">开始之前</h3>
                        <p class="mb-4 text-gh-text">在学习 Agent 开发之前，我们需要准备好开发环境。本章将指导你安装所有必要的工具。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <h4 class="font-semibold mb-3 text-blue-200">📋 你将安装：</h4>
                            <ul class="space-y-2 text-gh-text text-sm">
                                <li>✅ 代码编辑器（VS Code 或 Cursor）</li>
                                <li>✅ Python 3.10+ 运行环境</li>
                                <li>✅ 免费的 AI API 访问（Claude 或 OpenAI）</li>
                                <li>✅ 必要的 Python 库</li>
                                <li>✅ 第一个 Hello World Agent</li>
                            </ul>
                        </div>

                        <div class="bg-green-950/20 border-l-2 border-gh-green p-4 rounded-r">
                            <h4 class="font-semibold text-gh-text mb-2 text-sm">⏱️ 预计时间：30-45 分钟</h4>
                            <p class="text-xs text-gh-text-secondary">跟着步骤来，很快就能完成！</p>
                        </div>

                        <h4 class="font-bold mb-2 mt-6 text-gh-text">🔗 快速链接</h4>
                        <div class="space-y-2">
                            <a href="https://code.visualstudio.com/" target="_blank" class="block p-3 bg-gh-card border border-gh-border rounded hover:border-gh-blue transition-colors">
                                <div class="font-medium text-sm text-gh-text">VS Code 下载</div>
                                <div class="text-xs text-gh-text-secondary">最流行的免费编辑器</div>
                            </a>
                            <a href="https://www.python.org/downloads/" target="_blank" class="block p-3 bg-gh-card border border-gh-border rounded hover:border-gh-blue transition-colors">
                                <div class="font-medium text-sm text-gh-text">Python 下载</div>
                                <div class="text-xs text-gh-text-secondary">官方 Python 3.11+</div>
                            </a>
                            <a href="https://console.anthropic.com/" target="_blank" class="block p-3 bg-gh-card border border-gh-border rounded hover:border-gh-blue transition-colors">
                                <div class="font-medium text-sm text-gh-text">Claude API</div>
                                <div class="text-xs text-gh-text-secondary">免费 $5 额度（推荐）</div>
                            </a>
                        </div>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3 text-gh-text">Before You Start</h3>
                        <p class="mb-4 text-gh-text">Before learning Agent development, we need to set up the development environment. This chapter will guide you through installing all necessary tools.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <h4 class="font-semibold mb-3 text-blue-200">📋 What You'll Install:</h4>
                            <ul class="space-y-2 text-gh-text text-sm">
                                <li>✅ Code Editor (VS Code or Cursor)</li>
                                <li>✅ Python 3.10+ Runtime</li>
                                <li>✅ Free AI API Access (Claude or OpenAI)</li>
                                <li>✅ Required Python Libraries</li>
                                <li>✅ Your First Hello World Agent</li>
                            </ul>
                        </div>

                        <div class="bg-green-950/20 border-l-2 border-gh-green p-4 rounded-r">
                            <h4 class="font-semibold text-gh-text mb-2 text-sm">⏱️ Estimated Time: 30-45 minutes</h4>
                            <p class="text-xs text-gh-text-secondary">Follow the steps and you'll be done soon!</p>
                        </div>

                        <h4 class="font-bold mb-2 mt-6 text-gh-text">🔗 Quick Links</h4>
                        <div class="space-y-2">
                            <a href="https://code.visualstudio.com/" target="_blank" class="block p-3 bg-gh-card border border-gh-border rounded hover:border-gh-blue transition-colors">
                                <div class="font-medium text-sm text-gh-text">VS Code Download</div>
                                <div class="text-xs text-gh-text-secondary">Most popular free editor</div>
                            </a>
                            <a href="https://www.python.org/downloads/" target="_blank" class="block p-3 bg-gh-card border border-gh-border rounded hover:border-gh-blue transition-colors">
                                <div class="font-medium text-sm text-gh-text">Python Download</div>
                                <div class="text-xs text-gh-text-secondary">Official Python 3.11+</div>
                            </a>
                            <a href="https://console.anthropic.com/" target="_blank" class="block p-3 bg-gh-card border border-gh-border rounded hover:border-gh-blue transition-colors">
                                <div class="font-medium text-sm text-gh-text">Claude API</div>
                                <div class="text-xs text-gh-text-secondary">Free $5 credit (Recommended)</div>
                            </a>
                        </div>
                    `
                },
                corePoints: [
                    {
                        zh: "VS Code 是最流行的免费编辑器，适合所有人",
                        en: "VS Code is the most popular free editor, suitable for everyone"
                    },
                    {
                        zh: "Python 3.10+ 是必需的，记得勾选 Add to PATH",
                        en: "Python 3.10+ is required, remember to check 'Add to PATH'"
                    },
                    {
                        zh: "Claude API 提供每月 $5 免费额度，足够学习使用",
                        en: "Claude API provides $5 monthly free credit, enough for learning"
                    }
                ],
                bestPractices: [
                    {
                        zh: "按顺序完成安装，每步都验证是否成功",
                        en: "Complete installations in order, verify each step"
                    },
                    {
                        zh: "把 API 密钥保存在密码管理器中",
                        en: "Store API keys in a password manager"
                    },
                    {
                        zh: "遇到问题先查看 DAY0-README.md 的常见问题部分",
                        en: "Check DAY0-README.md FAQ section for issues"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: {
                    zh: "DAY0-README.md 完整教程",
                    en: "DAY0-README.md Complete Guide"
                },
                url: "./DAY0-README.md",
                description: {
                    zh: "详细的安装步骤和常见问题解答",
                    en: "Detailed installation steps and FAQ"
                }
            },
            {
                title: {
                    zh: "VS Code 官方文档",
                    en: "VS Code Official Docs"
                },
                url: "https://code.visualstudio.com/docs",
                description: {
                    zh: "VS Code 使用指南",
                    en: "VS Code usage guide"
                }
            },
            {
                title: {
                    zh: "Python 官方教程",
                    en: "Python Official Tutorial"
                },
                url: "https://docs.python.org/zh-cn/3/tutorial/",
                description: {
                    zh: "Python 入门教程",
                    en: "Python getting started tutorial"
                }
            },
            {
                title: {
                    zh: "Claude API 文档",
                    en: "Claude API Documentation"
                },
                url: "https://docs.anthropic.com/",
                description: {
                    zh: "Anthropic 官方文档",
                    en: "Anthropic official documentation"
                }
            }
        ]
    },
    // Day 1: Agent 架构基础
    {
        day: 1,
        title: {
            zh: "Agent 架构基础",
            en: "Agent Architecture Fundamentals"
        },
        subtitle: {
            zh: "理解 Agent 的工作原理和架构模式",
            en: "Understanding Agent Mechanisms and Architecture Patterns"
        },
        duration: "2:00",
        videoUrl: "../lessons/DAY1-agent-architecture.mp4",
        icon: "🤖",
        chapters: [
            {
                id: "what-is-agent",
                title: {
                    zh: "什么是 Agent？",
                    en: "What is an Agent?"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">Agent（智能代理）的定义</h3>
                        <p class="mb-4">Agent 是一个能够<strong>自主决策</strong>、<strong>使用工具</strong>、<strong>完成复杂任务</strong>的 AI 系统。它不同于传统的聊天机器人或 API 调用。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2 text-blue-400">🔑 核心特征：</p>
                            <ul class="space-y-2 text-gh-text">
                                <li><strong class="text-gh-text">自主性</strong> - 根据环境变化自主调整策略，不需要每一步都由人类指导</li>
                                <li><strong class="text-gh-text">目标导向</strong> - 围绕用户目标进行多步推理和规划，而非简单的输入输出</li>
                                <li><strong class="text-gh-text">工具使用</strong> - 能够调用外部工具和 API 扩展能力（如搜索、计算、文件操作）</li>
                                <li><strong class="text-gh-text">记忆系统</strong> - 维护对话历史和任务状态，可以跨多轮对话工作</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2 text-gh-text">Agent vs 传统程序</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse bg-gh-card rounded overflow-hidden">
                                <thead>
                                    <tr class="bg-gh-hover">
                                        <th class="border border-gh-border px-4 py-2 text-left text-gh-text">维度</th>
                                        <th class="border border-gh-border px-4 py-2 text-left text-gh-text">传统程序</th>
                                        <th class="border border-gh-border px-4 py-2 text-left text-gh-text">Agent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-gh-card">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">决策方式</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">if-else 逻辑</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">LLM 推理决策</td>
                                    </tr>
                                    <tr class="bg-gh-hover">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">流程控制</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">固定流程</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">动态规划</td>
                                    </tr>
                                    <tr class="bg-gh-card">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">功能范围</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">单一功能</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">工具组合</td>
                                    </tr>
                                    <tr class="bg-gh-hover">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">适应性</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">需要修改代码</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">自动适应新场景</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">Definition of Agent (Intelligent Agent)</h3>
                        <p class="mb-4">An Agent is an AI system capable of <strong>autonomous decision-making</strong>, <strong>using tools</strong>, and <strong>completing complex tasks</strong>. It differs from traditional chatbots or API calls.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2 text-blue-400">🔑 Core Characteristics:</p>
                            <ul class="space-y-2 text-gh-text">
                                <li><strong class="text-gh-text">Autonomy</strong> - Autonomously adjusts strategies based on environmental changes without requiring human guidance at every step</li>
                                <li><strong class="text-gh-text">Goal-Oriented</strong> - Performs multi-step reasoning and planning around user goals, not just simple input-output</li>
                                <li><strong class="text-gh-text">Tool Usage</strong> - Can call external tools and APIs to extend capabilities (e.g., search, computation, file operations)</li>
                                <li><strong class="text-gh-text">Memory System</strong> - Maintains conversation history and task state, can work across multiple dialogue turns</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2 text-gh-text">Agent vs Traditional Programs</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse bg-gh-card rounded overflow-hidden">
                                <thead>
                                    <tr class="bg-gh-hover">
                                        <th class="border border-gh-border px-4 py-2 text-left text-gh-text">Dimension</th>
                                        <th class="border border-gh-border px-4 py-2 text-left text-gh-text">Traditional Programs</th>
                                        <th class="border border-gh-border px-4 py-2 text-left text-gh-text">Agent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-gh-card">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">Decision Making</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">if-else logic</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">LLM reasoning</td>
                                    </tr>
                                    <tr class="bg-gh-hover">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">Flow Control</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">Fixed flow</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">Dynamic planning</td>
                                    </tr>
                                    <tr class="bg-gh-card">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">Capability Scope</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">Single function</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">Tool composition</td>
                                    </tr>
                                    <tr class="bg-gh-hover">
                                        <td class="border border-gh-border px-4 py-2 font-medium text-gh-text">Adaptability</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">Requires code changes</td>
                                        <td class="border border-gh-border px-4 py-2 text-gh-text-secondary">Auto-adapts to new scenarios</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                },
                corePoints: [
                    {
                        zh: "Agent 能自主决策，不需要预定义所有路径",
                        en: "Agents can make autonomous decisions without predefining all paths"
                    },
                    {
                        zh: "通过工具扩展能力，突破 LLM 的限制",
                        en: "Extend capabilities through tools, breaking through LLM limitations"
                    },
                    {
                        zh: "适合处理复杂、多步骤的任务",
                        en: "Suitable for handling complex, multi-step tasks"
                    }
                ],
                codeExample: {
                    zh: `// Agent 伪代码示例
class Agent {
    constructor(llm, tools) {
        this.llm = llm;          // 大语言模型（大脑）
        this.tools = tools;      // 可用工具列表
        this.memory = [];        // 对话历史
    }

    async run(userGoal) {
        while (!taskCompleted) {
            // 1. 思考下一步
            const thought = await this.llm.think(userGoal, this.memory);

            // 2. 选择工具
            const action = this.selectTool(thought);

            // 3. 执行工具
            const result = await this.tools[action.name](action.params);

            // 4. 记录结果
            this.memory.push({ thought, action, result });

            // 5. 判断是否完成
            taskCompleted = this.llm.isGoalAchieved(userGoal, this.memory);
        }
        return this.memory;
    }
}`,
                    en: `// Agent Pseudocode Example
class Agent {
    constructor(llm, tools) {
        this.llm = llm;          // Large Language Model (brain)
        this.tools = tools;      // Available tool list
        this.memory = [];        // Conversation history
    }

    async run(userGoal) {
        while (!taskCompleted) {
            // 1. Think about next step
            const thought = await this.llm.think(userGoal, this.memory);

            // 2. Select tool
            const action = this.selectTool(thought);

            // 3. Execute tool
            const result = await this.tools[action.name](action.params);

            // 4. Record result
            this.memory.push({ thought, action, result });

            // 5. Check if completed
            taskCompleted = this.llm.isGoalAchieved(userGoal, this.memory);
        }
        return this.memory;
    }
}`
                },
                bestPractices: [
                    {
                        zh: "从简单的单工具 Agent 开始学习",
                        en: "Start learning with simple single-tool agents"
                    },
                    {
                        zh: "理解 Agent 的局限性：不是所有任务都适合用 Agent",
                        en: "Understand Agent limitations: not all tasks are suitable for Agents"
                    },
                    {
                        zh: "给 Agent 明确的目标和约束条件",
                        en: "Give Agents clear goals and constraints"
                    }
                ]
            },
            {
                id: "react-pattern",
                title: {
                    zh: "ReAct 工作模式",
                    en: "ReAct Working Pattern"
                },
                timestamp: 90,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">ReAct: Reasoning + Acting</h3>
                        <p class="mb-4">ReAct 是目前最常用的 Agent 工作模式，由 Google 和普林斯顿大学在 2022 年提出。它将<strong>推理（Reasoning）</strong>和<strong>行动（Acting）</strong>紧密结合。</p>

                        <div class="bg-indigo-950/20 border border-indigo-500/30 rounded-lg p-5 mb-4">
                            <h4 class="font-bold mb-3">🔄 ReAct 循环的四个步骤：</h4>
                            <ol class="space-y-3">
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                                    <div>
                                        <strong>Thought（思考）</strong><br>
                                        <span class="text-sm text-gh-text-secondary">分析当前情况，规划下一步行动。例如："我需要查找用户的订单信息"</span>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                                    <div>
                                        <strong>Action（行动）</strong><br>
                                        <span class="text-sm text-gh-text-secondary">选择并执行一个工具。例如：调用 <code class="bg-white px-1 rounded">search_orders(user_id=123)</code></span>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                                    <div>
                                        <strong>Observation（观察）</strong><br>
                                        <span class="text-sm text-gh-text-secondary">接收工具返回的结果。例如："找到 3 个订单，最新订单号为 #4567"</span>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                                    <div>
                                        <strong>Loop（循环）</strong><br>
                                        <span class="text-sm text-gh-text-secondary">根据观察结果，回到步骤 1 继续思考，直到完成目标</span>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <h4 class="font-bold mb-2">实际案例：文件整理 Agent</h4>
                        <div class="bg-gh-card border border-gh-border p-4 rounded-lg text-sm space-y-2">
                            <p><strong>用户目标：</strong>"整理我的下载文件夹"</p>
                            <hr class="my-2">
                            <p><strong>Thought 1:</strong> 我需要先看看下载文件夹里有什么文件</p>
                            <p><strong>Action 1:</strong> list_files("/Users/anker/Downloads")</p>
                            <p><strong>Observation 1:</strong> 找到 50 个文件，包括 PDF、图片、视频等</p>
                            <hr class="my-2">
                            <p><strong>Thought 2:</strong> 我应该按文件类型分类创建文件夹</p>
                            <p><strong>Action 2:</strong> create_folders(["文档", "图片", "视频"])</p>
                            <p><strong>Observation 2:</strong> 文件夹创建成功</p>
                            <hr class="my-2">
                            <p><strong>Thought 3:</strong> 现在把文件移动到对应文件夹</p>
                            <p><strong>Action 3:</strong> move_files_by_type()</p>
                            <p><strong>Observation 3:</strong> 已移动 50 个文件</p>
                            <hr class="my-2">
                            <p><strong>Thought 4:</strong> 任务完成，生成报告</p>
                            <p><strong>Action 4:</strong> generate_report()</p>
                            <p class="text-green-600 font-semibold">✅ 完成！</p>
                        </div>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">ReAct: Reasoning + Acting</h3>
                        <p class="mb-4">ReAct is the most commonly used Agent working pattern, proposed by Google and Princeton University in 2022. It tightly combines <strong>Reasoning</strong> and <strong>Acting</strong>.</p>

                        <div class="bg-indigo-950/20 border border-indigo-500/30 rounded-lg p-5 mb-4">
                            <h4 class="font-bold mb-3">🔄 Four Steps of ReAct Loop:</h4>
                            <ol class="space-y-3">
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                                    <div>
                                        <strong>Thought</strong><br>
                                        <span class="text-sm text-gh-text-secondary">Analyze the current situation and plan the next action. Example: "I need to search for the user's order information"</span>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                                    <div>
                                        <strong>Action</strong><br>
                                        <span class="text-sm text-gh-text-secondary">Select and execute a tool. Example: call <code class="bg-white px-1 rounded">search_orders(user_id=123)</code></span>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                                    <div>
                                        <strong>Observation</strong><br>
                                        <span class="text-sm text-gh-text-secondary">Receive the result returned by the tool. Example: "Found 3 orders, latest order number is #4567"</span>
                                    </div>
                                </li>
                                <li class="flex items-start">
                                    <span class="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                                    <div>
                                        <strong>Loop</strong><br>
                                        <span class="text-sm text-gh-text-secondary">Based on the observation, return to step 1 to continue thinking until the goal is achieved</span>
                                    </div>
                                </li>
                            </ol>
                        </div>

                        <h4 class="font-bold mb-2">Real Case: File Organization Agent</h4>
                        <div class="bg-gh-card border border-gh-border p-4 rounded-lg text-sm space-y-2">
                            <p><strong>User Goal:</strong> "Organize my Downloads folder"</p>
                            <hr class="my-2">
                            <p><strong>Thought 1:</strong> I need to first see what files are in the Downloads folder</p>
                            <p><strong>Action 1:</strong> list_files("/Users/anker/Downloads")</p>
                            <p><strong>Observation 1:</strong> Found 50 files, including PDFs, images, videos, etc.</p>
                            <hr class="my-2">
                            <p><strong>Thought 2:</strong> I should create folders by file type classification</p>
                            <p><strong>Action 2:</strong> create_folders(["Documents", "Images", "Videos"])</p>
                            <p><strong>Observation 2:</strong> Folders created successfully</p>
                            <hr class="my-2">
                            <p><strong>Thought 3:</strong> Now move files to corresponding folders</p>
                            <p><strong>Action 3:</strong> move_files_by_type()</p>
                            <p><strong>Observation 3:</strong> Moved 50 files</p>
                            <hr class="my-2">
                            <p><strong>Thought 4:</strong> Task completed, generate report</p>
                            <p><strong>Action 4:</strong> generate_report()</p>
                            <p class="text-green-600 font-semibold">✅ Done!</p>
                        </div>
                    `
                },
                corePoints: [
                    {
                        zh: "Thought 是 Agent 的'思考过程'，让决策透明可理解",
                        en: "Thought is the Agent's 'thinking process', making decisions transparent and understandable"
                    },
                    {
                        zh: "Action 必须是预定义的工具，不能是任意操作",
                        en: "Actions must be predefined tools, not arbitrary operations"
                    },
                    {
                        zh: "Observation 的质量直接影响下一步决策",
                        en: "The quality of Observation directly affects the next decision"
                    }
                ],
                codeExample: {
                    zh: `// ReAct 模式的 Python 实现示例
from anthropic import Anthropic

client = Anthropic(api_key="your-api-key")

def react_loop(user_goal, tools, max_iterations=10):
    conversation = [
        {"role": "user", "content": user_goal}
    ]

    for i in range(max_iterations):
        # Agent 思考并选择工具
        response = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=1024,
            tools=tools,
            messages=conversation
        )

        # 检查是否完成
        if response.stop_reason == "end_turn":
            return response.content[0].text

        # 执行工具调用
        if response.stop_reason == "tool_use":
            tool_use = response.content[-1]
            result = execute_tool(tool_use.name, tool_use.input)

            # 将结果反馈给 Agent
            conversation.append({
                "role": "assistant",
                "content": response.content
            })
            conversation.append({
                "role": "user",
                "content": [{
                    "type": "tool_result",
                    "tool_use_id": tool_use.id,
                    "content": result
                }]
            })

def execute_tool(name, params):
    # 实际执行工具逻辑
    tools_map = {
        "list_files": lambda p: os.listdir(p["path"]),
        "create_folder": lambda p: os.mkdir(p["path"]),
        # ... 更多工具
    }
    return tools_map[name](params)`,
                    en: `// ReAct Pattern Python Implementation Example
from anthropic import Anthropic

client = Anthropic(api_key="your-api-key")

def react_loop(user_goal, tools, max_iterations=10):
    conversation = [
        {"role": "user", "content": user_goal}
    ]

    for i in range(max_iterations):
        # Agent thinks and selects tool
        response = client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=1024,
            tools=tools,
            messages=conversation
        )

        # Check if completed
        if response.stop_reason == "end_turn":
            return response.content[0].text

        # Execute tool call
        if response.stop_reason == "tool_use":
            tool_use = response.content[-1]
            result = execute_tool(tool_use.name, tool_use.input)

            # Feedback result to Agent
            conversation.append({
                "role": "assistant",
                "content": response.content
            })
            conversation.append({
                "role": "user",
                "content": [{
                    "type": "tool_result",
                    "tool_use_id": tool_use.id,
                    "content": result
                }]
            })

def execute_tool(name, params):
    # Actual tool execution logic
    tools_map = {
        "list_files": lambda p: os.listdir(p["path"]),
        "create_folder": lambda p: os.mkdir(p["path"]),
        # ... more tools
    }
    return tools_map[name](params)`
                },
                bestPractices: [
                    {
                        zh: "限制最大循环次数，防止 Agent 陷入死循环",
                        en: "Limit maximum loop iterations to prevent Agent from getting stuck in infinite loops"
                    },
                    {
                        zh: "记录每一步的 Thought，方便调试和优化",
                        en: "Log each Thought step for easier debugging and optimization"
                    },
                    {
                        zh: "为工具返回清晰的结果描述，帮助 Agent 理解",
                        en: "Provide clear result descriptions for tools to help Agent understand"
                    }
                ]
            },
            {
                id: "tool-calling",
                title: {
                    zh: "工具调用机制",
                    en: "Tool Calling Mechanism"
                },
                timestamp: 180,
                content: {
                    zh: `
                    <h3 class="text-lg font-bold mb-3">Function Calling：Agent 的手和脚</h3>
                    <p class="mb-4">工具调用（Function Calling / Tool Use）是 Agent 与外部世界交互的桥梁。LLM 本身只能生成文本，但通过工具调用，它可以：</p>

                    <ul class="space-y-2 mb-4">
                        <li>✅ 读写文件</li>
                        <li>✅ 访问数据库</li>
                        <li>✅ 调用 API</li>
                        <li>✅ 执行代码</li>
                        <li>✅ 控制硬件设备</li>
                    </ul>

                    <h4 class="font-bold mb-2">工具定义：JSON Schema</h4>
                    <p class="mb-3 text-sm text-gh-text-secondary">Agent 需要知道'有哪些工具可用'以及'每个工具的参数'。这通过 JSON Schema 来描述：</p>

                    <div class="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 text-sm overflow-x-auto">
<pre>{
  "name": "search_files",
  "description": "在指定目录中搜索文件。支持按文件名、扩展名、修改日期过滤。",
  "input_schema": {
    "type": "object",
    "properties": {
      "directory": {
        "type": "string",
        "description": "要搜索的目录路径"
      },
      "pattern": {
        "type": "string",
        "description": "文件名匹配模式，支持通配符"
      },
      "file_type": {
        "type": "string",
        "enum": ["all", "file", "directory"],
        "description": "文件类型过滤"
      }
    },
    "required": ["directory", "pattern"]
  }
}</pre>
                    </div>

                    <div class="bg-yellow-900/20 border border-yellow-600/50 rounded p-4 mb-4">
                        <p class="font-semibold mb-2 text-yellow-200">⚠️ 工具设计的黄金法则：</p>
                        <ol class="list-decimal list-inside space-y-1 text-sm text-yellow-100">
                            <li><strong class="text-yellow-100">单一职责</strong> - 一个工具只做一件事</li>
                            <li><strong class="text-yellow-100">清晰命名</strong> - 从名字就能看出功能</li>
                            <li><strong class="text-yellow-100">详细描述</strong> - description 要写清楚使用场景</li>
                            <li><strong class="text-yellow-100">参数明确</strong> - 必填/可选参数要标注清楚</li>
                            <li><strong class="text-yellow-100">错误友好</strong> - 返回可读的错误信息</li>
                        </ol>
                    </div>

                    <h4 class="font-bold mb-2">工具调用流程</h4>
                    <div class="space-y-3 text-sm">
                        <div class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                            <div>
                                <strong>工具注册</strong><br>
                                开发者将工具列表和 Schema 提供给 LLM
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                            <div>
                                <strong>任务理解</strong><br>
                                LLM 分析用户需求，判断需要使用哪个工具
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                            <div>
                                <strong>参数生成</strong><br>
                                LLM 生成符合 Schema 的参数 JSON
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                            <div>
                                <strong>工具执行</strong><br>
                                系统执行工具函数，获取返回结果
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs">5</span>
                            <div>
                                <strong>结果反馈</strong><br>
                                将结果返回给 LLM，LLM 继续推理或给出最终答案
                            </div>
                        </div>
                    </div>
                `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">Function Calling: The Agent's Hands and Feet</h3>
                        <p class="mb-4">Tool calling (Function Calling / Tool Use) is the bridge for Agents to interact with the external world. LLMs can only generate text by themselves, but through tool calling, they can:</p>

                        <ul class="space-y-2 mb-4">
                            <li>✅ Read and write files</li>
                            <li>✅ Access databases</li>
                            <li>✅ Call APIs</li>
                            <li>✅ Execute code</li>
                            <li>✅ Control hardware devices</li>
                        </ul>

                        <h4 class="font-bold mb-2">Tool Definition: JSON Schema</h4>
                        <p class="mb-3 text-sm text-gh-text-secondary">Agents need to know 'what tools are available' and 'the parameters of each tool'. This is described through JSON Schema:</p>

                        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 text-sm overflow-x-auto">
<pre>{
  "name": "search_files",
  "description": "Search for files in a specified directory. Supports filtering by filename, extension, modification date.",
  "input_schema": {
    "type": "object",
    "properties": {
      "directory": {
        "type": "string",
        "description": "Directory path to search"
      },
      "pattern": {
        "type": "string",
        "description": "Filename matching pattern, supports wildcards"
      },
      "file_type": {
        "type": "string",
        "enum": ["all", "file", "directory"],
        "description": "File type filter"
      }
    },
    "required": ["directory", "pattern"]
  }
}</pre>
                        </div>

                        <div class="bg-yellow-900/20 border border-yellow-600/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2 text-yellow-200">⚠️ Golden Rules of Tool Design:</p>
                            <ol class="list-decimal list-inside space-y-1 text-sm text-yellow-100">
                                <li><strong class="text-yellow-100">Single Responsibility</strong> - One tool does one thing</li>
                                <li><strong class="text-yellow-100">Clear Naming</strong> - Function should be obvious from the name</li>
                                <li><strong class="text-yellow-100">Detailed Description</strong> - The description should clearly explain use cases</li>
                                <li><strong class="text-yellow-100">Explicit Parameters</strong> - Clearly mark required/optional parameters</li>
                                <li><strong class="text-yellow-100">Error Friendly</strong> - Return readable error messages</li>
                            </ol>
                        </div>

                        <h4 class="font-bold mb-2">Tool Calling Flow</h4>
                        <div class="space-y-3 text-sm">
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                                <div>
                                    <strong>Tool Registration</strong><br>
                                    Developers provide tool list and Schema to the LLM
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                                <div>
                                    <strong>Task Understanding</strong><br>
                                    LLM analyzes user needs and determines which tool to use
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                                <div>
                                    <strong>Parameter Generation</strong><br>
                                    LLM generates parameter JSON that conforms to Schema
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                                <div>
                                    <strong>Tool Execution</strong><br>
                                    System executes the tool function and gets return result
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs">5</span>
                                <div>
                                    <strong>Result Feedback</strong><br>
                                    Return result to LLM, which continues reasoning or gives final answer
                                </div>
                            </div>
                        </div>
                    `
                },
                corePoints: [
                    {
                        zh: "工具的 description 是 LLM 选择工具的关键依据",
                        en: "The tool's description is the key basis for LLM tool selection"
                    },
                    {
                        zh: "参数验证要严格，防止生成无效的调用",
                        en: "Parameter validation should be strict to prevent invalid calls"
                    },
                    {
                        zh: "工具返回的信息要对 LLM 友好，便于理解",
                        en: "Tool return information should be LLM-friendly for easy understanding"
                    }
                ],
                codeExample: {
                    zh: `// Anthropic Claude 工具调用示例
const tools = [
    {
        name: "get_weather",
        description: "获取指定城市的当前天气信息，包括温度、湿度、天气状况",
        input_schema: {
            type: "object",
            properties: {
                city: {
                    type: "string",
                    description: "城市名称，例如：北京、上海"
                },
                unit: {
                    type: "string",
                    enum: ["celsius", "fahrenheit"],
                    description: "温度单位"
                }
            },
            required: ["city"]
        }
    }
];

// 调用 Claude
const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    tools: tools,
    messages: [
        { role: "user", content: "北京现在天气怎么样？" }
    ]
});

// Claude 会返回 tool_use
if (response.stop_reason === "tool_use") {
    const toolUse = response.content.find(c => c.type === "tool_use");
    console.log(toolUse.name);   // "get_weather"
    console.log(toolUse.input);  // { city: "北京", unit: "celsius" }

    // 执行工具
    const result = await getWeather(toolUse.input.city, toolUse.input.unit);

    // 将结果反馈给 Claude
    const finalResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        tools: tools,
        messages: [
            { role: "user", content: "北京现在天气怎么样？" },
            { role: "assistant", content: response.content },
            {
                role: "user",
                content: [{
                    type: "tool_result",
                    tool_use_id: toolUse.id,
                    content: JSON.stringify(result)
                }]
            }
        ]
    });
}`,
                    en: `// Anthropic Claude Tool Calling Example
const tools = [
    {
        name: "get_weather",
        description: "Get current weather information for a specified city, including temperature, humidity, weather conditions",
        input_schema: {
            type: "object",
            properties: {
                city: {
                    type: "string",
                    description: "City name, e.g.: Beijing, Shanghai"
                },
                unit: {
                    type: "string",
                    enum: ["celsius", "fahrenheit"],
                    description: "Temperature unit"
                }
            },
            required: ["city"]
        }
    }
];

// Call Claude
const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    tools: tools,
    messages: [
        { role: "user", content: "What's the weather like in Beijing?" }
    ]
});

// Claude returns tool_use
if (response.stop_reason === "tool_use") {
    const toolUse = response.content.find(c => c.type === "tool_use");
    console.log(toolUse.name);   // "get_weather"
    console.log(toolUse.input);  // { city: "Beijing", unit: "celsius" }

    // Execute tool
    const result = await getWeather(toolUse.input.city, toolUse.input.unit);

    // Feedback result to Claude
    const finalResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        tools: tools,
        messages: [
            { role: "user", content: "What's the weather like in Beijing?" },
            { role: "assistant", content: response.content },
            {
                role: "user",
                content: [{
                    type: "tool_result",
                    tool_use_id: toolUse.id,
                    content: JSON.stringify(result)
                }]
            }
        ]
    });
}`
                },
                bestPractices: [
                    {
                        zh: "先从 3-5 个简单工具开始，不要一次性定义太多",
                        en: "Start with 3-5 simple tools, don't define too many at once"
                    },
                    {
                        zh: "工具名使用动词开头：get_、create_、update_、delete_",
                        en: "Tool names should start with verbs: get_, create_, update_, delete_"
                    },
                    {
                        zh: "测试时记录 LLM 的工具选择日志，发现问题及时优化描述",
                        en: "Log LLM's tool selection during testing, optimize descriptions when issues are found"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: "Anthropic Tool Use 官方文档",
                url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
                description: "Claude 工具调用的完整指南"
            },
            {
                title: "LangChain Agents 教程",
                url: "https://python.langchain.com/docs/tutorials/agents/",
                description: "Agent 的理论基础和实现模式"
            },
            {
                title: "ReAct 论文",
                url: "https://arxiv.org/abs/2210.03629",
                description: "Reasoning and Acting 的原始研究论文"
            }
        ]
    },
    // Day 2: Prompt 工程与优化
    {
        day: 2,
        title: {
            zh: "Prompt 工程与优化",
            en: "Prompt Engineering & Optimization"
        },
        subtitle: {
            zh: "掌握提示工程技巧",
            en: "Master Prompt Engineering Techniques"
        },
        duration: "待制作",
        videoUrl: null,
        icon: "📝",
        chapters: [
            {
                id: "prompt-basics",
                title: {
                    zh: "Prompt 工程基础",
                    en: "Prompt Engineering Basics"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">什么是 Prompt 工程？</h3>
                        <p class="mb-4">Prompt 工程是设计和优化输入提示词的技术，用于引导 AI 模型生成期望的输出。对于 Agent 来说，优秀的 Prompt 设计直接影响决策质量。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🎯 核心原则：</p>
                            <ul class="space-y-2">
                                <li><strong>清晰明确</strong> - 避免歧义，具体描述任务目标</li>
                                <li><strong>提供上下文</strong> - 给出背景信息和约束条件</li>
                                <li><strong>结构化输出</strong> - 指定期望的输出格式</li>
                                <li><strong>示例引导</strong> - 使用 Few-shot Learning 提供示例</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">Agent Prompt 模板结构</h4>
                        <div class="bg-gh-card border border-gh-border p-4 rounded-lg mb-4">
                            <p class="font-mono text-sm">[系统角色] + [任务目标] + [可用工具] + [输出格式] + [约束条件]</p>
                        </div>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">What is Prompt Engineering?</h3>
                        <p class="mb-4">Prompt engineering is the technique of designing and optimizing input prompts to guide AI models toward desired outputs. For Agents, excellent Prompt design directly affects decision quality.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🎯 Core Principles:</p>
                            <ul class="space-y-2">
                                <li><strong>Clear and Specific</strong> - Avoid ambiguity, specifically describe task goals</li>
                                <li><strong>Provide Context</strong> - Give background information and constraints</li>
                                <li><strong>Structured Output</strong> - Specify expected output format</li>
                                <li><strong>Example Guidance</strong> - Use Few-shot Learning to provide examples</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">Agent Prompt Template Structure</h4>
                        <div class="bg-gh-card border border-gh-border p-4 rounded-lg mb-4">
                            <p class="font-mono text-sm">[System Role] + [Task Goal] + [Available Tools] + [Output Format] + [Constraints]</p>
                        </div>
                    `
                },
                corePoints: [
                    {
                        zh: "清晰的角色定义帮助 Agent 理解自己的职责范围",
                        en: "Clear role definitions help Agents understand their scope of responsibility"
                    },
                    {
                        zh: "明确的输出格式（如 JSON）让工具调用更可靠",
                        en: "Explicit output formats (like JSON) make tool calls more reliable"
                    },
                    {
                        zh: "约束条件防止 Agent 做出不恰当的决策",
                        en: "Constraints prevent Agents from making inappropriate decisions"
                    }
                ],
                codeExample: {
                    zh: `// Agent Prompt 模板示例
const agentPrompt = \`
你是一个专业的文件管理助手。

任务目标：
帮助用户整理和管理文件，提供搜索、分类、归档等功能。

可用工具：
1. list_files(directory) - 列出目录中的文件
2. search_files(pattern) - 搜索匹配的文件
3. move_file(source, destination) - 移动文件
4. create_folder(path) - 创建文件夹

输出格式：
每一步思考后，以 JSON 格式输出你的决策：
{
  "thought": "你的思考过程",
  "action": "工具名称",
  "params": { "参数名": "参数值" }
}

约束条件：
- 不要删除用户文件
- 移动文件前先确认目标位置存在
- 遇到重名文件要询问用户
\`;`,
                    en: `// Agent Prompt Template Example
const agentPrompt = \`
You are a professional file management assistant.

Task Goal:
Help users organize and manage files, providing search, classification, and archiving functions.

Available Tools:
1. list_files(directory) - List files in directory
2. search_files(pattern) - Search for matching files
3. move_file(source, destination) - Move file
4. create_folder(path) - Create folder

Output Format:
After each thought, output your decision in JSON format:
{
  "thought": "Your thought process",
  "action": "Tool name",
  "params": { "param_name": "param_value" }
}

Constraints:
- Do not delete user files
- Confirm destination exists before moving files
- Ask user when encountering duplicate filenames
\`;`
                },
                bestPractices: [
                    {
                        zh: "使用系统提示词（System Prompt）设置 Agent 角色",
                        en: "Use System Prompt to set Agent role"
                    },
                    {
                        zh: "在 Prompt 中提供工具使用示例（Few-shot）",
                        en: "Provide tool usage examples in Prompt (Few-shot)"
                    },
                    {
                        zh: "定期测试和优化 Prompt 的表现",
                        en: "Regularly test and optimize Prompt performance"
                    }
                ]
            },
            {
                id: "prompt-optimization",
                title: {
                    zh: "Prompt 优化技巧",
                    en: "Prompt Optimization Techniques"
                },
                timestamp: 120,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">提升 Agent 表现的优化方法</h3>

                        <div class="space-y-4 mb-4">
                            <div class="border-l-4 border-purple-500 pl-4">
                                <h4 class="font-bold text-purple-900 mb-2">1. 思维链（Chain of Thought）</h4>
                                <p class="text-sm">引导 Agent 逐步推理，而不是直接给出答案</p>
                                <p class="text-xs text-gh-text-secondary mt-1">示例："让我们一步步思考这个问题..."</p>
                            </div>

                            <div class="border-l-4 border-green-500 pl-4">
                                <h4 class="font-bold text-green-900 mb-2">2. 自我批判（Self-Critique）</h4>
                                <p class="text-sm">让 Agent 评估自己的输出并改进</p>
                                <p class="text-xs text-gh-text-secondary mt-1">示例："检查你的答案是否合理，如有问题请修正"</p>
                            </div>

                            <div class="border-l-4 border-orange-500 pl-4">
                                <h4 class="font-bold text-orange-900 mb-2">3. 角色扮演（Role Playing）</h4>
                                <p class="text-sm">赋予 Agent 专业角色身份</p>
                                <p class="text-xs text-gh-text-secondary mt-1">示例："你是一位资深的软件架构师..."</p>
                            </div>
                        </div>

                        <div class="bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-4">
                            <p class="font-semibold mb-2 text-yellow-200">⚠️ 常见陷阱：</p>
                            <ul class="text-sm space-y-1 text-yellow-100">
                                <li>• Prompt 过长导致上下文丢失</li>
                                <li>• 指令冲突导致行为不一致</li>
                                <li>• 缺少错误处理指引</li>
                            </ul>
                        </div>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">Optimization Methods to Improve Agent Performance</h3>

                        <div class="space-y-4 mb-4">
                            <div class="border-l-4 border-purple-500 pl-4">
                                <h4 class="font-bold text-purple-900 mb-2">1. Chain of Thought</h4>
                                <p class="text-sm">Guide Agent to reason step by step, rather than giving direct answers</p>
                                <p class="text-xs text-gh-text-secondary mt-1">Example: "Let's think about this problem step by step..."</p>
                            </div>

                            <div class="border-l-4 border-green-500 pl-4">
                                <h4 class="font-bold text-green-900 mb-2">2. Self-Critique</h4>
                                <p class="text-sm">Let Agent evaluate its own output and improve</p>
                                <p class="text-xs text-gh-text-secondary mt-1">Example: "Check if your answer is reasonable, correct if there are issues"</p>
                            </div>

                            <div class="border-l-4 border-orange-500 pl-4">
                                <h4 class="font-bold text-orange-900 mb-2">3. Role Playing</h4>
                                <p class="text-sm">Give Agent a professional role identity</p>
                                <p class="text-xs text-gh-text-secondary mt-1">Example: "You are an experienced software architect..."</p>
                            </div>
                        </div>

                        <div class="bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-4">
                            <p class="font-semibold mb-2 text-yellow-200">⚠️ Common Pitfalls:</p>
                            <ul class="text-sm space-y-1 text-yellow-100">
                                <li>• Prompt too long causing context loss</li>
                                <li>• Conflicting instructions causing inconsistent behavior</li>
                                <li>• Lack of error handling guidance</li>
                            </ul>
                        </div>
                    `
                },
                corePoints: [
                    {
                        zh: "思维链能显著提升复杂任务的准确率",
                        en: "Chain of Thought significantly improves accuracy for complex tasks"
                    },
                    {
                        zh: "自我批判减少幻觉和错误输出",
                        en: "Self-Critique reduces hallucinations and erroneous outputs"
                    },
                    {
                        zh: "定期评估 Prompt 在实际场景中的表现",
                        en: "Regularly evaluate Prompt performance in real scenarios"
                    }
                ],
                codeExample: {
                    zh: `// 思维链 Prompt 示例
const cotPrompt = \`
分析以下问题并给出解决方案。

问题：{user_question}

请按以下步骤思考：
1. 理解问题：这个问题的核心是什么？
2. 分析条件：有哪些已知信息和约束？
3. 制定方案：可能的解决路径有哪些？
4. 评估方案：哪个方案最合适？为什么？
5. 给出结论：最终的解决方案是什么？

让我们开始逐步分析：
\`;`,
                    en: `// Chain of Thought Prompt Example
const cotPrompt = \`
Analyze the following problem and provide a solution.

Problem: {user_question}

Please think through these steps:
1. Understand the problem: What is the core issue?
2. Analyze conditions: What known information and constraints exist?
3. Formulate solutions: What are the possible solution paths?
4. Evaluate solutions: Which solution is most appropriate? Why?
5. Provide conclusion: What is the final solution?

Let's begin the step-by-step analysis:
\`;`
                },
                bestPractices: [
                    {
                        zh: "A/B 测试不同的 Prompt 版本",
                        en: "A/B test different Prompt versions"
                    },
                    {
                        zh: "收集用户反馈，持续优化提示词",
                        en: "Collect user feedback and continuously optimize prompts"
                    },
                    {
                        zh: "为不同场景准备专门的 Prompt 模板",
                        en: "Prepare specialized Prompt templates for different scenarios"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: {
                    zh: "OpenAI Prompt Engineering",
                    en: "OpenAI Prompt Engineering"
                },
                url: "https://platform.openai.com/docs/guides/prompt-engineering",
                description: {
                    zh: "OpenAI 官方 Prompt 工程指南",
                    en: "OpenAI official Prompt Engineering guide"
                }
            },
            {
                title: {
                    zh: "Anthropic Prompt Library",
                    en: "Anthropic Prompt Library"
                },
                url: "https://docs.anthropic.com/claude/prompt-library",
                description: {
                    zh: "Claude 提示词库和最佳实践",
                    en: "Claude prompt library and best practices"
                }
            }
        ]
    },
    // Day 3: MCP 协议深入
    {
        day: 3,
        title: {
            zh: "MCP 协议深入",
            en: "Deep Dive into MCP Protocol"
        },
        subtitle: {
            zh: "理解模型上下文协议",
            en: "Understanding Model Context Protocol"
        },
        duration: "待制作",
        videoUrl: null,
        icon: "🔌",
        chapters: [
            {
                id: "mcp-intro",
                title: {
                    zh: "MCP 协议简介",
                    en: "Introduction to MCP Protocol"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">什么是 MCP？</h3>
                        <p class="mb-4">Model Context Protocol（MCP）是一个开放协议，用于 AI 模型与外部系统之间的标准化通信。它让 Agent 能够安全、可控地访问各种数据源和工具。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🔑 MCP 核心概念：</p>
                            <ul class="space-y-2">
                                <li><strong>Resources</strong> - 可访问的数据资源（文件、数据库、API等）</li>
                                <li><strong>Tools</strong> - 可执行的操作（函数、命令等）</li>
                                <li><strong>Prompts</strong> - 预定义的提示词模板</li>
                                <li><strong>Context</strong> - 会话上下文和状态管理</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">MCP vs 直接 API 调用</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse">
                                <thead>
                                    <tr class="bg-gh-hover">
                                        <th class="border border-gh-border px-4 py-2 text-left">特性</th>
                                        <th class="border border-gh-border px-4 py-2 text-left">直接 API</th>
                                        <th class="border border-gh-border px-4 py-2 text-left">MCP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gh-border px-4 py-2 font-medium">标准化</td>
                                        <td class="border border-gh-border px-4 py-2">各有各的接口</td>
                                        <td class="border border-gh-border px-4 py-2">统一协议</td>
                                    </tr>
                                    <tr class="bg-gh-hover">
                                        <td class="border border-gh-border px-4 py-2 font-medium">安全性</td>
                                        <td class="border border-gh-border px-4 py-2">需自行实现</td>
                                        <td class="border border-gh-border px-4 py-2">内置权限控制</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gh-border px-4 py-2 font-medium">可扩展性</td>
                                        <td class="border border-gh-border px-4 py-2">耦合度高</td>
                                        <td class="border border-gh-border px-4 py-2">插件化架构</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">What is MCP?</h3>
                        <p class="mb-4">Model Context Protocol (MCP) is an open protocol for standardized communication between AI models and external systems. It allows Agents to access various data sources and tools safely and controllably.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🔑 MCP Core Concepts:</p>
                            <ul class="space-y-2">
                                <li><strong>Resources</strong> - Accessible data resources (files, databases, APIs, etc.)</li>
                                <li><strong>Tools</strong> - Executable operations (functions, commands, etc.)</li>
                                <li><strong>Prompts</strong> - Predefined prompt templates</li>
                                <li><strong>Context</strong> - Session context and state management</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">MCP vs Direct API Calls</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm border-collapse">
                                <thead>
                                    <tr class="bg-gh-hover">
                                        <th class="border border-gh-border px-4 py-2 text-left">Feature</th>
                                        <th class="border border-gh-border px-4 py-2 text-left">Direct API</th>
                                        <th class="border border-gh-border px-4 py-2 text-left">MCP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gh-border px-4 py-2 font-medium">Standardization</td>
                                        <td class="border border-gh-border px-4 py-2">Each has own interface</td>
                                        <td class="border border-gh-border px-4 py-2">Unified protocol</td>
                                    </tr>
                                    <tr class="bg-gh-hover">
                                        <td class="border border-gh-border px-4 py-2 font-medium">Security</td>
                                        <td class="border border-gh-border px-4 py-2">Need self-implementation</td>
                                        <td class="border border-gh-border px-4 py-2">Built-in permission control</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gh-border px-4 py-2 font-medium">Scalability</td>
                                        <td class="border border-gh-border px-4 py-2">High coupling</td>
                                        <td class="border border-gh-border px-4 py-2">Plugin architecture</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                },
                corePoints: [
                    {
                        zh: "MCP 提供了 Agent 与外部系统交互的标准接口",
                        en: "MCP provides a standard interface for Agents to interact with external systems"
                    },
                    {
                        zh: "通过 MCP 可以安全地扩展 Agent 的能力",
                        en: "MCP enables safe extension of Agent capabilities"
                    },
                    {
                        zh: "MCP 支持动态发现和组合多个数据源",
                        en: "MCP supports dynamic discovery and composition of multiple data sources"
                    }
                ],
                codeExample: {
                    zh: `// MCP 服务器示例（Python）
from mcp.server import MCPServer
from mcp.types import Tool, Resource

server = MCPServer("file-manager")

# 注册工具
@server.tool()
def search_files(pattern: str, directory: str = ".") -> list:
    """搜索文件"""
    import glob
    return glob.glob(f"{directory}/**/{pattern}", recursive=True)

# 注册资源
@server.resource("file://{path}")
def read_file(path: str) -> str:
    """读取文件内容"""
    with open(path, 'r') as f:
        return f.read()

# 启动服务器
if __name__ == "__main__":
    server.run()`,
                    en: `// MCP Server Example (Python)
from mcp.server import MCPServer
from mcp.types import Tool, Resource

server = MCPServer("file-manager")

# Register tool
@server.tool()
def search_files(pattern: str, directory: str = ".") -> list:
    """Search files"""
    import glob
    return glob.glob(f"{directory}/**/{pattern}", recursive=True)

# Register resource
@server.resource("file://{path}")
def read_file(path: str) -> str:
    """Read file content"""
    with open(path, 'r') as f:
        return f.read()

# Start server
if __name__ == "__main__":
    server.run()`
                },
                bestPractices: [
                    {
                        zh: "为每个 MCP 服务器设置明确的权限范围",
                        en: "Set clear permission scopes for each MCP server"
                    },
                    {
                        zh: "使用环境变量管理敏感配置",
                        en: "Use environment variables to manage sensitive configurations"
                    },
                    {
                        zh: "提供清晰的工具描述，帮助 Agent 正确使用",
                        en: "Provide clear tool descriptions to help Agents use them correctly"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: {
                    zh: "MCP 官方文档",
                    en: "MCP Official Documentation"
                },
                url: "https://modelcontextprotocol.io/",
                description: {
                    zh: "Model Context Protocol 官方网站",
                    en: "Model Context Protocol official website"
                }
            },
            {
                title: {
                    zh: "MCP SDK GitHub",
                    en: "MCP SDK GitHub"
                },
                url: "https://github.com/modelcontextprotocol",
                description: {
                    zh: "MCP SDK 源代码和示例",
                    en: "MCP SDK source code and examples"
                }
            }
        ]
    },
    // Day 4: 记忆系统设计
    {
        day: 4,
        title: {
            zh: "记忆系统设计",
            en: "Memory System Design"
        },
        subtitle: {
            zh: "构建长期记忆能力",
            en: "Building Long-term Memory Capabilities"
        },
        duration: "待制作",
        videoUrl: null,
        icon: "💾",
        chapters: [
            {
                id: "memory-types",
                title: {
                    zh: "记忆类型与设计",
                    en: "Memory Types and Design"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">Agent 的记忆系统</h3>
                        <p class="mb-4">记忆系统让 Agent 能够记住历史信息，进行跨会话的任务。良好的记忆设计是构建实用 Agent 的关键。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">📝 记忆类型：</p>
                            <ul class="space-y-2">
                                <li><strong>短期记忆</strong> - 当前对话的上下文，存储在消息历史中</li>
                                <li><strong>工作记忆</strong> - 任务执行过程中的中间状态和结果</li>
                                <li><strong>长期记忆</strong> - 持久化的知识和经验，通常使用向量数据库</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">记忆检索策略</h4>
                        <p class="text-sm text-gh-text-secondary">使用向量相似度搜索相关记忆，结合时间衰减和重要性评分，确保检索的记忆既相关又新鲜。</p>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">Agent Memory System</h3>
                        <p class="mb-4">Memory systems allow Agents to remember historical information and perform cross-session tasks. Good memory design is key to building practical Agents.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">📝 Memory Types:</p>
                            <ul class="space-y-2">
                                <li><strong>Short-term Memory</strong> - Current conversation context, stored in message history</li>
                                <li><strong>Working Memory</strong> - Intermediate states and results during task execution</li>
                                <li><strong>Long-term Memory</strong> - Persistent knowledge and experience, typically using vector databases</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">Memory Retrieval Strategy</h4>
                        <p class="text-sm text-gh-text-secondary">Use vector similarity search for relevant memories, combined with time decay and importance scoring to ensure retrieved memories are both relevant and fresh.</p>
                    `
                },
                corePoints: [
                    {
                        zh: "短期记忆使用对话历史，长期记忆需要向量检索",
                        en: "Short-term memory uses conversation history, long-term memory requires vector retrieval"
                    },
                    {
                        zh: "记忆检索要精准，避免引入无关信息",
                        en: "Memory retrieval should be precise to avoid introducing irrelevant information"
                    },
                    {
                        zh: "定期清理和更新记忆库，保持信息新鲜度",
                        en: "Regularly clean and update memory database to maintain information freshness"
                    }
                ],
                codeExample: {
                    zh: `// 简单的记忆系统
class Memory {
    constructor() {
        this.shortTerm = [];  // 对话历史
        this.longTerm = new VectorDB();  // 向量库
    }

    async remember(text) {
        this.shortTerm.push(text);
        const embedding = await getEmbedding(text);
        await this.longTerm.store(embedding, text);
    }

    async recall(query, limit=5) {
        const results = await this.longTerm.search(query, limit);
        return results;
    }

    clearShortTerm() {
        this.shortTerm = [];
    }
}`,
                    en: `// Simple Memory System
class Memory {
    constructor() {
        this.shortTerm = [];  // Conversation history
        this.longTerm = new VectorDB();  // Vector database
    }

    async remember(text) {
        this.shortTerm.push(text);
        const embedding = await getEmbedding(text);
        await this.longTerm.store(embedding, text);
    }

    async recall(query, limit=5) {
        const results = await this.longTerm.search(query, limit);
        return results;
    }

    clearShortTerm() {
        this.shortTerm = [];
    }
}`
                },
                bestPractices: [
                    {
                        zh: "限制短期记忆长度，避免上下文过长",
                        en: "Limit short-term memory length to avoid overly long context"
                    },
                    {
                        zh: "为长期记忆添加时间戳和元数据",
                        en: "Add timestamps and metadata to long-term memory"
                    },
                    {
                        zh: "实现记忆的优先级管理",
                        en: "Implement priority management for memories"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: {
                    zh: "Vector Databases",
                    en: "Vector Databases"
                },
                url: "https://www.pinecone.io/learn/vector-database/",
                description: {
                    zh: "向量数据库入门指南",
                    en: "Introduction guide to vector databases"
                }
            }
        ]
    },
    // Day 5: Agent 编排
    {
        day: 5,
        title: {
            zh: "Agent 编排",
            en: "Agent Orchestration"
        },
        subtitle: {
            zh: "多Agent协作模式",
            en: "Multi-Agent Collaboration Patterns"
        },
        duration: "待制作",
        videoUrl: null,
        icon: "🎭",
        chapters: [
            {
                id: "multi-agent",
                title: {
                    zh: "多 Agent 协作",
                    en: "Multi-Agent Collaboration"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">多 Agent 系统</h3>
                        <p class="mb-4">复杂任务往往需要多个专业 Agent 协作完成。多 Agent 系统通过分工合作，提高整体效率和准确性。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🤝 协作模式：</p>
                            <ul class="space-y-2">
                                <li><strong>层级模式</strong> - Manager Agent 分配任务给 Worker Agents</li>
                                <li><strong>流水线模式</strong> - Agent 按顺序处理，每个负责一个阶段</li>
                                <li><strong>辩论模式</strong> - 多个 Agent 讨论，最终达成共识</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">协作示例</h4>
                        <p class="text-sm text-gh-text-secondary">Manager Agent 分析任务，分配给 Researcher、Writer、Reviewer 三个专业 Agent 依次完成。</p>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">Multi-Agent Systems</h3>
                        <p class="mb-4">Complex tasks often require multiple specialized Agents working together. Multi-Agent systems improve overall efficiency and accuracy through division of labor.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🤝 Collaboration Patterns:</p>
                            <ul class="space-y-2">
                                <li><strong>Hierarchical Pattern</strong> - Manager Agent assigns tasks to Worker Agents</li>
                                <li><strong>Pipeline Pattern</strong> - Agents process sequentially, each responsible for a stage</li>
                                <li><strong>Debate Pattern</strong> - Multiple Agents discuss and reach consensus</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">Collaboration Example</h4>
                        <p class="text-sm text-gh-text-secondary">Manager Agent analyzes tasks and assigns them to Researcher, Writer, and Reviewer Agents to complete sequentially.</p>
                    `
                },
                corePoints: [
                    {
                        zh: "每个 Agent 应该有明确的职责和专长",
                        en: "Each Agent should have clear responsibilities and expertise"
                    },
                    {
                        zh: "Agent 间通信需要规范的消息格式",
                        en: "Communication between Agents requires standardized message formats"
                    },
                    {
                        zh: "需要协调机制避免 Agent 间冲突",
                        en: "Coordination mechanisms needed to avoid conflicts between Agents"
                    }
                ],
                codeExample: {
                    zh: `// 多 Agent 协作示例
class MultiAgentSystem {
    constructor() {
        this.manager = new ManagerAgent();
        this.workers = {
            researcher: new ResearchAgent(),
            writer: new WriteAgent(),
            reviewer: new ReviewAgent()
        };
    }

    async run(task) {
        // Manager 分解任务
        const subtasks = await this.manager.decompose(task);

        // Worker 依次执行
        for (const subtask of subtasks) {
            const agent = this.workers[subtask.type];
            const result = await agent.execute(subtask);
            subtask.result = result;
        }

        // Manager 整合结果
        return await this.manager.synthesize(subtasks);
    }
}`,
                    en: `// Multi-Agent Collaboration Example
class MultiAgentSystem {
    constructor() {
        this.manager = new ManagerAgent();
        this.workers = {
            researcher: new ResearchAgent(),
            writer: new WriteAgent(),
            reviewer: new ReviewAgent()
        };
    }

    async run(task) {
        // Manager decomposes task
        const subtasks = await this.manager.decompose(task);

        // Workers execute sequentially
        for (const subtask of subtasks) {
            const agent = this.workers[subtask.type];
            const result = await agent.execute(subtask);
            subtask.result = result;
        }

        // Manager synthesizes results
        return await this.manager.synthesize(subtasks);
    }
}`
                },
                bestPractices: [
                    {
                        zh: "定义清晰的 Agent 间通信协议",
                        en: "Define clear communication protocols between Agents"
                    },
                    {
                        zh: "实现任务队列和状态管理",
                        en: "Implement task queues and state management"
                    },
                    {
                        zh: "为每个 Agent 设置超时和重试机制",
                        en: "Set timeout and retry mechanisms for each Agent"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: {
                    zh: "AutoGen Framework",
                    en: "AutoGen Framework"
                },
                url: "https://microsoft.github.io/autogen/",
                description: {
                    zh: "微软的多 Agent 框架",
                    en: "Microsoft's multi-Agent framework"
                }
            }
        ]
    },
    // Day 6: 实战项目
    {
        day: 6,
        title: {
            zh: "实战项目",
            en: "Hands-on Project"
        },
        subtitle: {
            zh: "完整Agent应用开发",
            en: "Complete Agent Application Development"
        },
        duration: "待制作",
        videoUrl: null,
        icon: "🛠️",
        chapters: [
            {
                id: "project-planning",
                title: {
                    zh: "项目规划与实现",
                    en: "Project Planning and Implementation"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">从零构建 Agent 应用</h3>
                        <p class="mb-4">综合运用前面学到的知识，构建一个完整的 Agent 应用。项目实战是检验学习效果的最好方式。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🎯 项目建议：</p>
                            <ul class="space-y-2">
                                <li><strong>个人助理</strong> - 日程管理、邮件处理、提醒</li>
                                <li><strong>代码助手</strong> - 代码审查、文档生成、测试编写</li>
                                <li><strong>数据分析师</strong> - 自动化数据处理和可视化</li>
                                <li><strong>客服机器人</strong> - 多轮对话、知识检索、问题解决</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">开发步骤</h4>
                        <ol class="list-decimal list-inside space-y-1 text-sm">
                            <li>明确需求和目标用户</li>
                            <li>设计工具集和数据流</li>
                            <li>实现核心功能 MVP</li>
                            <li>测试和优化</li>
                            <li>部署上线</li>
                        </ol>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">Building Agent Applications from Scratch</h3>
                        <p class="mb-4">Apply the knowledge learned previously to build a complete Agent application. Project practice is the best way to test learning outcomes.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">🎯 Project Ideas:</p>
                            <ul class="space-y-2">
                                <li><strong>Personal Assistant</strong> - Schedule management, email processing, reminders</li>
                                <li><strong>Code Assistant</strong> - Code review, documentation generation, test writing</li>
                                <li><strong>Data Analyst</strong> - Automated data processing and visualization</li>
                                <li><strong>Customer Service Bot</strong> - Multi-turn dialogue, knowledge retrieval, problem solving</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">Development Steps</h4>
                        <ol class="list-decimal list-inside space-y-1 text-sm">
                            <li>Define requirements and target users</li>
                            <li>Design toolset and data flow</li>
                            <li>Implement core MVP functionality</li>
                            <li>Test and optimize</li>
                            <li>Deploy to production</li>
                        </ol>
                    `
                },
                corePoints: [
                    {
                        zh: "从简单的 MVP 开始，逐步迭代完善",
                        en: "Start with a simple MVP and iterate gradually"
                    },
                    {
                        zh: "重视错误处理和异常恢复",
                        en: "Focus on error handling and exception recovery"
                    },
                    {
                        zh: "收集用户反馈，持续优化体验",
                        en: "Collect user feedback and continuously optimize experience"
                    }
                ],
                codeExample: {
                    zh: `// Agent 项目结构示例
project/
├── agent/
│   ├── core.py          # Agent 核心逻辑
│   ├── tools/           # 工具定义
│   │   ├── file.py
│   │   ├── search.py
│   │   └── api.py
│   ├── memory/          # 记忆系统
│   └── prompts/         # Prompt 模板
├── server/
│   └── api.py           # API 服务器
├── tests/               # 测试用例
└── config/              # 配置文件`,
                    en: `// Agent Project Structure Example
project/
├── agent/
│   ├── core.py          # Agent core logic
│   ├── tools/           # Tool definitions
│   │   ├── file.py
│   │   ├── search.py
│   │   └── api.py
│   ├── memory/          # Memory system
│   └── prompts/         # Prompt templates
├── server/
│   └── api.py           # API server
├── tests/               # Test cases
└── config/              # Configuration files`
                },
                bestPractices: [
                    {
                        zh: "编写单元测试覆盖核心逻辑",
                        en: "Write unit tests to cover core logic"
                    },
                    {
                        zh: "使用配置文件管理不同环境",
                        en: "Use configuration files to manage different environments"
                    },
                    {
                        zh: "实现完善的日志系统",
                        en: "Implement comprehensive logging system"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: {
                    zh: "LangChain Templates",
                    en: "LangChain Templates"
                },
                url: "https://python.langchain.com/docs/templates/",
                description: {
                    zh: "LangChain 官方项目模板集合",
                    en: "LangChain official project template collection"
                }
            },
            {
                title: {
                    zh: "LangGraph Examples",
                    en: "LangGraph Examples"
                },
                url: "https://github.com/langchain-ai/langgraph/tree/main/examples",
                description: {
                    zh: "LangGraph Agent 实战示例",
                    en: "LangGraph Agent hands-on examples"
                }
            }
        ]
    },
    // Day 7: 部署与优化
    {
        day: 7,
        title: {
            zh: "部署与优化",
            en: "Deployment & Optimization"
        },
        subtitle: {
            zh: "生产环境最佳实践",
            en: "Production Environment Best Practices"
        },
        duration: "待制作",
        videoUrl: null,
        icon: "🚀",
        chapters: [
            {
                id: "deployment",
                title: {
                    zh: "部署与监控",
                    en: "Deployment and Monitoring"
                },
                timestamp: 0,
                content: {
                    zh: `
                        <h3 class="text-lg font-bold mb-3">将 Agent 部署到生产环境</h3>
                        <p class="mb-4">开发完成后，需要考虑如何稳定、安全地部署 Agent，并持续监控其运行状态。</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">📊 关键指标：</p>
                            <ul class="space-y-2">
                                <li><strong>响应时间</strong> - Agent 完成任务的平均时长</li>
                                <li><strong>成功率</strong> - 任务成功完成的比例</li>
                                <li><strong>成本</strong> - API 调用费用和计算资源消耗</li>
                                <li><strong>用户满意度</strong> - 用户反馈和评分</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">部署Checklist</h4>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li>设置环境变量和密钥管理</li>
                            <li>配置日志收集和监控告警</li>
                            <li>实现健康检查接口</li>
                            <li>准备回滚方案</li>
                        </ul>
                    `,
                    en: `
                        <h3 class="text-lg font-bold mb-3">Deploying Agents to Production</h3>
                        <p class="mb-4">After development, consider how to deploy Agents stably and securely, and continuously monitor their operational status.</p>

                        <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                            <p class="font-semibold mb-2">📊 Key Metrics:</p>
                            <ul class="space-y-2">
                                <li><strong>Response Time</strong> - Average time for Agent to complete tasks</li>
                                <li><strong>Success Rate</strong> - Proportion of successfully completed tasks</li>
                                <li><strong>Cost</strong> - API call fees and compute resource consumption</li>
                                <li><strong>User Satisfaction</strong> - User feedback and ratings</li>
                            </ul>
                        </div>

                        <h4 class="font-bold mb-2">Deployment Checklist</h4>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li>Set up environment variables and secret management</li>
                            <li>Configure log collection and monitoring alerts</li>
                            <li>Implement health check endpoints</li>
                            <li>Prepare rollback plan</li>
                        </ul>
                    `
                },
                corePoints: [
                    {
                        zh: "实现完善的日志和监控系统",
                        en: "Implement comprehensive logging and monitoring systems"
                    },
                    {
                        zh: "设置 API 调用频率限制和成本预警",
                        en: "Set API call rate limits and cost alerts"
                    },
                    {
                        zh: "准备降级方案应对服务故障",
                        en: "Prepare degradation plans for service failures"
                    }
                ],
                codeExample: {
                    zh: `// 监控和告警示例
class AgentMonitor {
    constructor() {
        this.metrics = {
            totalCalls: 0,
            successCalls: 0,
            avgResponseTime: 0,
            totalCost: 0
        };
    }

    trackCall(duration, success, cost) {
        this.metrics.totalCalls++;
        if (success) this.metrics.successCalls++;
        this.metrics.avgResponseTime =
            (this.metrics.avgResponseTime * (this.metrics.totalCalls - 1) + duration)
            / this.metrics.totalCalls;
        this.metrics.totalCost += cost;

        // 检查告警阈值
        if (this.metrics.totalCost > 100) {
            this.alert("成本超限！");
        }
    }

    getReport() {
        return {
            successRate: this.metrics.successCalls / this.metrics.totalCalls,
            ...this.metrics
        };
    }
}`,
                    en: `// Monitoring and Alerting Example
class AgentMonitor {
    constructor() {
        this.metrics = {
            totalCalls: 0,
            successCalls: 0,
            avgResponseTime: 0,
            totalCost: 0
        };
    }

    trackCall(duration, success, cost) {
        this.metrics.totalCalls++;
        if (success) this.metrics.successCalls++;
        this.metrics.avgResponseTime =
            (this.metrics.avgResponseTime * (this.metrics.totalCalls - 1) + duration)
            / this.metrics.totalCalls;
        this.metrics.totalCost += cost;

        // Check alert threshold
        if (this.metrics.totalCost > 100) {
            this.alert("Cost limit exceeded!");
        }
    }

    getReport() {
        return {
            successRate: this.metrics.successCalls / this.metrics.totalCalls,
            ...this.metrics
        };
    }
}`
                },
                bestPractices: [
                    {
                        zh: "使用 Docker 容器化部署",
                        en: "Use Docker for containerized deployment"
                    },
                    {
                        zh: "实现灰度发布和 A/B 测试",
                        en: "Implement canary releases and A/B testing"
                    },
                    {
                        zh: "定期备份数据和配置",
                        en: "Regularly backup data and configurations"
                    }
                ]
            }
        ],
        externalLinks: [
            {
                title: {
                    zh: "LLM Observability",
                    en: "LLM Observability"
                },
                url: "https://www.langchain.com/langsmith",
                description: {
                    zh: "LangSmith 监控平台",
                    en: "LangSmith monitoring platform"
                }
            }
        ]
    }
];

// 导出数据
window.courseData = courseData;
