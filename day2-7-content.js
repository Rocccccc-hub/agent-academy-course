// Day 2-7 完整课程内容

const day2Data = {
    day: 2,
    title: "Prompt 工程与优化",
    subtitle: "掌握提示工程技巧",
    duration: "待制作",
    videoUrl: null,
    icon: "📝",
    chapters: [
        {
            id: "prompt-basics",
            title: "Prompt 工程基础",
            timestamp: 0,
            content: `
                <h3 class="text-lg font-bold mb-3">什么是 Prompt 工程？</h3>
                <p class="mb-4">Prompt 工程是设计和优化输入提示词的技术，用于引导 AI 模型生成期望的输出。对于 Agent 来说，优秀的 Prompt 设计直接影响决策质量。</p>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <p class="font-semibold mb-2">🎯 核心原则：</p>
                    <ul class="space-y-2">
                        <li><strong>清晰明确</strong> - 避免歧义，具体描述任务目标</li>
                        <li><strong>提供上下文</strong> - 给出背景信息和约束条件</li>
                        <li><strong>结构化输出</strong> - 指定期望的输出格式</li>
                        <li><strong>示例引导</strong> - 使用 Few-shot Learning 提供示例</li>
                    </ul>
                </div>

                <h4 class="font-bold mb-2">Agent Prompt 模板结构</h4>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="font-mono text-sm">
                        [系统角色] + [任务目标] + [可用工具] + [输出格式] + [约束条件]
                    </p>
                </div>
            `,
            corePoints: [
                "清晰的角色定义帮助 Agent 理解自己的职责范围",
                "明确的输出格式（如 JSON）让工具调用更可靠",
                "约束条件防止 Agent 做出不恰当的决策"
            ],
            codeExample: `// Agent Prompt 模板示例
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
            bestPractices: [
                "使用系统提示词（System Prompt）设置 Agent 角色",
                "在 Prompt 中提供工具使用示例（Few-shot）",
                "定期测试和优化 Prompt 的表现"
            ]
        },
        {
            id: "prompt-optimization",
            title: "Prompt 优化技巧",
            timestamp: 120,
            content: `
                <h3 class="text-lg font-bold mb-3">提升 Agent 表现的优化方法</h3>

                <div class="space-y-4 mb-4">
                    <div class="border-l-4 border-purple-500 pl-4">
                        <h4 class="font-bold text-purple-900 mb-2">1. 思维链（Chain of Thought）</h4>
                        <p class="text-sm">引导 Agent 逐步推理，而不是直接给出答案</p>
                        <p class="text-xs text-gray-600 mt-1">示例："让我们一步步思考这个问题..."</p>
                    </div>

                    <div class="border-l-4 border-green-500 pl-4">
                        <h4 class="font-bold text-green-900 mb-2">2. 自我批判（Self-Critique）</h4>
                        <p class="text-sm">让 Agent 评估自己的输出并改进</p>
                        <p class="text-xs text-gray-600 mt-1">示例："检查你的答案是否合理，如有问题请修正"</p>
                    </div>

                    <div class="border-l-4 border-orange-500 pl-4">
                        <h4 class="font-bold text-orange-900 mb-2">3. 角色扮演（Role Playing）</h4>
                        <p class="text-sm">赋予 Agent 专业角色身份</p>
                        <p class="text-xs text-gray-600 mt-1">示例："你是一位资深的软件架构师..."</p>
                    </div>
                </div>

                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p class="font-semibold mb-2">⚠️ 常见陷阱：</p>
                    <ul class="text-sm space-y-1">
                        <li>• Prompt 过长导致上下文丢失</li>
                        <li>• 指令冲突导致行为不一致</li>
                        <li>• 缺少错误处理指引</li>
                    </ul>
                </div>
            `,
            corePoints: [
                "思维链能显著提升复杂任务的准确率",
                "自我批判减少幻觉和错误输出",
                "定期评估 Prompt 在实际场景中的表现"
            ],
            codeExample: `// 思维链 Prompt 示例
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
\`;

// 自我批判 Prompt
const selfCritiquePrompt = \`
完成任务后，请自我检查：

✓ 输出是否完整回答了问题？
✓ 是否有明显的逻辑错误？
✓ 是否符合给定的约束条件？
✓ 是否需要补充或修正？

如发现问题，请说明并提供改进版本。
\`;`,
            bestPractices: [
                "A/B 测试不同的 Prompt 版本",
                "收集用户反馈，持续优化提示词",
                "为不同场景准备专门的 Prompt 模板"
            ]
        }
    ],
    externalLinks: [
        {
            title: "OpenAI Prompt Engineering Guide",
            url: "https://platform.openai.com/docs/guides/prompt-engineering",
            description: "OpenAI 官方 Prompt 工程指南"
        },
        {
            title: "Anthropic Prompt Library",
            url: "https://docs.anthropic.com/claude/prompt-library",
            description: "Claude 提示词库和最佳实践"
        }
    ]
};

const day3Data = {
    day: 3,
    title: "MCP 协议深入",
    subtitle: "理解模型上下文协议",
    duration: "待制作",
    videoUrl: null,
    icon: "🔌",
    chapters: [
        {
            id: "mcp-intro",
            title: "MCP 协议简介",
            timestamp: 0,
            content: `
                <h3 class="text-lg font-bold mb-3">什么是 MCP？</h3>
                <p class="mb-4">Model Context Protocol（MCP）是一个开放协议，用于 AI 模型与外部系统之间的标准化通信。它让 Agent 能够安全、可控地访问各种数据源和工具。</p>

                <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
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
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 px-4 py-2 text-left">特性</th>
                                <th class="border border-gray-300 px-4 py-2 text-left">直接 API</th>
                                <th class="border border-gray-300 px-4 py-2 text-left">MCP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2 font-medium">标准化</td>
                                <td class="border border-gray-300 px-4 py-2">各有各的接口</td>
                                <td class="border border-gray-300 px-4 py-2">统一协议</td>
                            </tr>
                            <tr class="bg-gray-50">
                                <td class="border border-gray-300 px-4 py-2 font-medium">安全性</td>
                                <td class="border border-gray-300 px-4 py-2">需自行实现</td>
                                <td class="border border-gray-300 px-4 py-2">内置权限控制</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2 font-medium">可扩展性</td>
                                <td class="border border-gray-300 px-4 py-2">耦合度高</td>
                                <td class="border border-gray-300 px-4 py-2">插件化架构</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,
            corePoints: [
                "MCP 提供了 Agent 与外部系统交互的标准接口",
                "通过 MCP 可以安全地扩展 Agent 的能力",
                "MCP 支持动态发现和组合多个数据源"
            ],
            codeExample: `// MCP 服务器示例（Python）
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
            bestPractices: [
                "为每个 MCP 服务器设置明确的权限范围",
                "使用环境变量管理敏感配置",
                "提供清晰的工具描述，帮助 Agent 正确使用"
            ]
        },
        {
            id: "mcp-integration",
            title: "MCP 集成实战",
            timestamp: 150,
            content: `
                <h3 class="text-lg font-bold mb-3">将 MCP 集成到 Agent 系统</h3>

                <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-5 mb-4">
                    <h4 class="font-bold mb-3">🔧 集成步骤：</h4>
                    <ol class="space-y-3">
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                            <div>
                                <strong>选择或创建 MCP 服务器</strong><br>
                                <span class="text-sm text-gray-600">可以使用现有的服务器，或根据需求开发自定义服务器</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                            <div>
                                <strong>配置 MCP 客户端</strong><br>
                                <span class="text-sm text-gray-600">在 Agent 中初始化 MCP 客户端并连接服务器</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                            <div>
                                <strong>发现可用工具</strong><br>
                                <span class="text-sm text-gray-600">通过 MCP 协议获取服务器提供的工具列表</span>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <span class="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                            <div>
                                <strong>转换为 LLM 工具格式</strong><br>
                                <span class="text-sm text-gray-600">将 MCP 工具转换为 LLM 可理解的 JSON Schema</span>
                            </div>
                        </li>
                    </ol>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p class="font-semibold mb-2">💡 实用技巧：</p>
                    <ul class="text-sm space-y-1">
                        <li>• 使用 MCP Inspector 工具调试服务器</li>
                        <li>• 为不同环境配置不同的 MCP 服务器组合</li>
                        <li>• 实现 MCP 工具的错误重试机制</li>
                    </ul>
                </div>
            `,
            corePoints: [
                "MCP 客户端负责发现和调用远程工具",
                "工具描述需要转换为 LLM 的 Function Calling 格式",
                "MCP 支持多个服务器同时工作"
            ],
            codeExample: `// MCP 客户端集成示例
import { MCPClient } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

class AgentWithMCP {
    constructor() {
        this.mcpClients = [];
    }

    async connectMCPServer(serverCommand) {
        const transport = new StdioClientTransport({
            command: serverCommand.command,
            args: serverCommand.args
        });

        const client = new MCPClient({
            name: "my-agent",
            version: "1.0.0"
        });

        await client.connect(transport);
        this.mcpClients.push(client);

        // 获取可用工具
        const tools = await client.listTools();
        return tools;
    }

    async callMCPTool(toolName, params) {
        // 查找对应的 MCP 客户端并调用工具
        for (const client of this.mcpClients) {
            const result = await client.callTool({
                name: toolName,
                arguments: params
            });
            return result;
        }
    }
}

// 使用示例
const agent = new AgentWithMCP();
await agent.connectMCPServer({
    command: "python",
    args: ["mcp_server.py"]
});`,
            bestPractices: [
                "为 MCP 连接实现健康检查和自动重连",
                "缓存工具列表，避免重复查询",
                "记录 MCP 调用日志，便于调试和监控"
            ]
        }
    ],
    externalLinks: [
        {
            title: "MCP 官方文档",
            url: "https://modelcontextprotocol.io/",
            description: "Model Context Protocol 官方网站"
        },
        {
            title: "MCP SDK GitHub",
            url: "https://github.com/modelcontextprotocol",
            description: "MCP SDK 源代码和示例"
        }
    ]
};

// 导出所有数据
window.day2Data = day2Data;
window.day3Data = day3Data;
