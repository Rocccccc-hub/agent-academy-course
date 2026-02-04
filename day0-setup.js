// Day 0: 开发环境准备（保姆级教程）
const day0Data = {
    day: 0,
    title: "开发环境准备",
    subtitle: "工具安装与配置完全指南",
    duration: "30分钟",
    videoUrl: null,
    icon: "⚙️",
    chapters: [
        {
            id: "ide-setup",
            title: "IDE 编辑器安装",
            timestamp: 0,
            content: `
                <h3 class="text-lg font-bold mb-3 text-gh-text">选择和安装代码编辑器</h3>
                <p class="mb-4 text-gh-text">好的编辑器能大幅提升开发效率。我们推荐以下两款，任选其一即可：</p>

                <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-6">
                    <h4 class="font-semibold mb-3 text-blue-200">🏆 推荐方案 1：VS Code（最流行）</h4>
                    <div class="space-y-3 text-gh-text">
                        <p><strong class="text-gh-text">优点</strong>：免费、开源、插件丰富、社区庞大</p>
                        <p><strong class="text-gh-text">适合</strong>：所有人，尤其是初学者</p>

                        <div class="mt-4">
                            <p class="font-semibold mb-2 text-gh-text">📥 下载安装步骤：</p>
                            <ol class="list-decimal list-inside space-y-2 text-sm text-gh-text-secondary">
                                <li>访问官网：<a href="https://code.visualstudio.com/" target="_blank" class="text-gh-blue hover:underline">https://code.visualstudio.com/</a></li>
                                <li>点击 "Download" 按钮，根据系统选择：
                                    <ul class="ml-6 mt-1 space-y-1">
                                        <li>• Windows：下载 .exe 安装包</li>
                                        <li>• macOS：下载 .dmg 文件</li>
                                        <li>• Linux：下载 .deb 或 .rpm 包</li>
                                    </ul>
                                </li>
                                <li>运行安装程序，一路点击 "Next"（建议勾选 "Add to PATH"）</li>
                                <li>安装完成后，打开 VS Code</li>
                            </ol>
                        </div>

                        <div class="mt-4 bg-gh-card border border-gh-border p-3 rounded">
                            <p class="font-semibold mb-2 text-gh-text">🔌 必装插件（在 VS Code 内搜索安装）：</p>
                            <ul class="space-y-1 text-sm text-gh-text-secondary">
                                <li>• <strong class="text-gh-text">Python</strong> - Python 语言支持</li>
                                <li>• <strong class="text-gh-text">Pylance</strong> - 智能代码补全</li>
                                <li>• <strong class="text-gh-text">GitHub Copilot</strong>（可选，需付费）- AI 代码助手</li>
                            </ul>
                            <p class="text-xs mt-2 text-gh-text-secondary">安装方法：按 Ctrl+Shift+X (Mac: Cmd+Shift+X) 打开扩展市场，搜索插件名称点击安装</p>
                        </div>
                    </div>
                </div>

                <div class="bg-indigo-950/20 border border-indigo-500/30 rounded p-4 mb-4">
                    <h4 class="font-semibold mb-3 text-indigo-200">🚀 推荐方案 2：Cursor（AI 原生编辑器）</h4>
                    <div class="space-y-3 text-gh-text">
                        <p><strong class="text-gh-text">优点</strong>：内置 AI 助手、自动补全、对话式编程</p>
                        <p><strong class="text-gh-text">适合</strong>：想体验 AI 编程的开发者</p>

                        <div class="mt-4">
                            <p class="font-semibold mb-2 text-gh-text">📥 下载安装步骤：</p>
                            <ol class="list-decimal list-inside space-y-2 text-sm text-gh-text-secondary">
                                <li>访问官网：<a href="https://cursor.sh/" target="_blank" class="text-gh-blue hover:underline">https://cursor.sh/</a></li>
                                <li>点击 "Download" 按钮（免费试用）</li>
                                <li>根据系统下载对应版本</li>
                                <li>运行安装程序</li>
                                <li>首次打开时，可以选择导入 VS Code 设置</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div class="bg-gh-card border border-gh-border p-4 rounded">
                    <p class="text-sm text-gh-text-secondary"><strong class="text-gh-text">💡 提示</strong>：两款编辑器功能类似，选择你喜欢的即可。VS Code 更稳定成熟，Cursor 更智能但较新。</p>
                </div>
            `,
            corePoints: [
                "VS Code 是最流行的免费编辑器，适合所有人",
                "Cursor 内置 AI 功能，适合想体验 AI 辅助编程的用户",
                "安装后记得装 Python 插件以获得最佳体验"
            ]
        },
        {
            id: "python-setup",
            title: "Python 环境安装",
            timestamp: 180,
            content: `
                <h3 class="text-lg font-bold mb-3 text-gh-text">安装 Python 运行环境</h3>
                <p class="mb-4 text-gh-text">Python 是构建 Agent 最常用的语言。我们需要安装 Python 3.10 或更高版本。</p>

                <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                    <h4 class="font-semibold mb-3 text-blue-200">📦 方法 1：官网下载（推荐新手）</h4>
                    <ol class="list-decimal list-inside space-y-3 text-sm text-gh-text">
                        <li>
                            <strong class="text-gh-text">访问 Python 官网</strong><br>
                            <span class="text-gh-text-secondary">网址：<a href="https://www.python.org/downloads/" target="_blank" class="text-gh-blue hover:underline">https://www.python.org/downloads/</a></span>
                        </li>
                        <li>
                            <strong class="text-gh-text">下载最新稳定版</strong><br>
                            <span class="text-gh-text-secondary">点击黄色的 "Download Python 3.x.x" 按钮</span>
                        </li>
                        <li>
                            <strong class="text-gh-text">运行安装程序</strong><br>
                            <span class="text-gh-text-secondary">⚠️ 重要：勾选 "Add Python to PATH"（第一个选项）</span><br>
                            <span class="text-gh-text-secondary">然后点击 "Install Now"</span>
                        </li>
                        <li>
                            <strong class="text-gh-text">验证安装</strong><br>
                            <span class="text-gh-text-secondary">打开命令行（Windows: Win+R 输入 cmd，Mac: 打开 Terminal）</span><br>
                            <span class="text-gh-text-secondary">输入：<code class="bg-black px-2 py-0.5 rounded text-xs font-mono">python --version</code></span><br>
                            <span class="text-gh-text-secondary">应该显示：Python 3.x.x</span>
                        </li>
                    </ol>
                </div>

                <div class="bg-gh-card border border-gh-border p-4 rounded mb-4">
                    <h4 class="font-semibold mb-3 text-gh-text">🍺 方法 2：包管理器安装（推荐有经验者）</h4>
                    <div class="space-y-3">
                        <div>
                            <p class="font-medium text-gh-text mb-1">macOS（使用 Homebrew）：</p>
                            <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>brew install python@3.11</code></pre>
                        </div>
                        <div>
                            <p class="font-medium text-gh-text mb-1">Ubuntu/Debian：</p>
                            <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>sudo apt update
sudo apt install python3.11 python3-pip</code></pre>
                        </div>
                        <div>
                            <p class="font-medium text-gh-text mb-1">Windows（使用 Chocolatey）：</p>
                            <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>choco install python</code></pre>
                        </div>
                    </div>
                </div>

                <div class="bg-green-950/20 border-l-2 border-gh-green p-4 rounded-r">
                    <h4 class="font-semibold text-gh-text mb-2.5 flex items-center text-sm">
                        <span class="mr-2">✅</span>
                        <span class="font-mono">验证安装成功</span>
                    </h4>
                    <p class="text-sm text-gh-text-secondary mb-2">在命令行中运行以下命令：</p>
                    <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>python --version
pip --version</code></pre>
                    <p class="text-xs text-gh-text-secondary mt-2">如果都能显示版本号，说明安装成功！</p>
                </div>
            `,
            corePoints: [
                "推荐安装 Python 3.10 或更高版本",
                "安装时务必勾选 'Add to PATH'，否则无法在命令行使用",
                "验证 python 和 pip 都能正常运行"
            ],
            codeExample: `# 验证 Python 安装
# 在命令行运行：
python --version
pip --version

# 测试 Python 是否工作
python -c "print('Hello, Agent!')"

# 应该输出：Hello, Agent!`,
            bestPractices: [
                "新手推荐官网下载安装包，简单直接",
                "有经验者可用包管理器，方便版本管理",
                "安装完成后立即验证，避免后续问题"
            ]
        },
        {
            id: "ai-models-free",
            title: "免费 AI 模型获取",
            timestamp: 360,
            content: `
                <h3 class="text-lg font-bold mb-3 text-gh-text">获取免费的 AI 模型访问</h3>
                <p class="mb-4 text-gh-text">开发 Agent 需要调用 AI 模型。以下是几种免费或低成本的方案：</p>

                <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                    <h4 class="font-semibold mb-3 text-blue-200">🏆 方案 1：Claude API（推荐）</h4>
                    <div class="space-y-3 text-gh-text">
                        <p><strong class="text-gh-text">优点</strong>：最强大的 Agent 能力、免费额度充足、中文支持好</p>
                        <p><strong class="text-gh-text">免费额度</strong>：每月 $5 免费额度（约 200 万 tokens）</p>

                        <div class="mt-4">
                            <p class="font-semibold mb-2 text-gh-text">📝 获取步骤：</p>
                            <ol class="list-decimal list-inside space-y-2 text-sm text-gh-text-secondary">
                                <li>访问：<a href="https://console.anthropic.com/" target="_blank" class="text-gh-blue hover:underline">https://console.anthropic.com/</a></li>
                                <li>点击 "Sign Up" 注册账号（可用 Google 账号快速登录）</li>
                                <li>进入控制台后，点击 "API Keys"</li>
                                <li>点击 "Create Key"，复制生成的密钥（格式：sk-ant-...）</li>
                                <li>⚠️ 重要：立即保存密钥到安全的地方，关闭后无法再次查看</li>
                            </ol>
                        </div>

                        <div class="mt-4 bg-gh-card border border-gh-border p-3 rounded">
                            <p class="font-semibold mb-2 text-gh-text">🔐 配置密钥（选择一种方式）：</p>
                            <div class="space-y-2 text-sm">
                                <div>
                                    <p class="text-gh-text-secondary"><strong class="text-gh-text">方法 1</strong>：环境变量（推荐）</p>
                                    <pre class="bg-black p-2 rounded text-xs font-mono text-gh-text overflow-x-auto mt-1"><code># Mac/Linux
export ANTHROPIC_API_KEY="sk-ant-你的密钥"

# Windows CMD
set ANTHROPIC_API_KEY=sk-ant-你的密钥

# Windows PowerShell
$env:ANTHROPIC_API_KEY="sk-ant-你的密钥"</code></pre>
                                </div>
                                <div>
                                    <p class="text-gh-text-secondary"><strong class="text-gh-text">方法 2</strong>：在代码中配置</p>
                                    <pre class="bg-black p-2 rounded text-xs font-mono text-gh-text overflow-x-auto mt-1"><code>from anthropic import Anthropic
client = Anthropic(api_key="sk-ant-你的密钥")</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-indigo-950/20 border border-indigo-500/30 rounded p-4 mb-4">
                    <h4 class="font-semibold mb-3 text-indigo-200">💡 方案 2：OpenAI API</h4>
                    <div class="space-y-3 text-gh-text">
                        <p><strong class="text-gh-text">优点</strong>：生态最成熟、文档最全、社区最大</p>
                        <p><strong class="text-gh-text">免费额度</strong>：新用户 $5 免费额度（3个月有效）</p>

                        <div class="mt-4">
                            <p class="font-semibold mb-2 text-gh-text">📝 获取步骤：</p>
                            <ol class="list-decimal list-inside space-y-2 text-sm text-gh-text-secondary">
                                <li>访问：<a href="https://platform.openai.com/" target="_blank" class="text-gh-blue hover:underline">https://platform.openai.com/</a></li>
                                <li>注册账号（需要国外手机号验证）</li>
                                <li>进入 API Keys 页面创建密钥</li>
                                <li>配置环境变量：<code class="bg-black px-2 py-0.5 rounded text-xs font-mono">OPENAI_API_KEY</code></li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div class="bg-green-950/20 border border-green-600/30 rounded p-4">
                    <h4 class="font-semibold mb-3 text-green-200">🆓 方案 3：本地模型（完全免费）</h4>
                    <div class="space-y-3 text-gh-text">
                        <p><strong class="text-gh-text">优点</strong>：完全免费、无需网络、隐私保护</p>
                        <p><strong class="text-gh-text">缺点</strong>：需要好的电脑配置、效果弱于云端模型</p>

                        <div class="mt-4">
                            <p class="font-semibold mb-2 text-gh-text">🚀 使用 Ollama 运行本地模型：</p>
                            <ol class="list-decimal list-inside space-y-2 text-sm text-gh-text-secondary">
                                <li>访问：<a href="https://ollama.ai/" target="_blank" class="text-gh-blue hover:underline">https://ollama.ai/</a></li>
                                <li>下载并安装 Ollama</li>
                                <li>在命令行运行：<code class="bg-black px-2 py-0.5 rounded text-xs font-mono">ollama pull llama3.2</code></li>
                                <li>测试：<code class="bg-black px-2 py-0.5 rounded text-xs font-mono">ollama run llama3.2</code></li>
                            </ol>
                            <p class="text-xs mt-2 text-gh-text-secondary">推荐模型：llama3.2（中文好）、qwen2.5（国产）、mistral（速度快）</p>
                        </div>
                    </div>
                </div>
            `,
            corePoints: [
                "Claude API 是构建 Agent 的最佳选择，免费额度充足",
                "初学者建议先用云端 API，稳定且效果好",
                "本地模型适合实验和学习，但效果不如云端"
            ],
            codeExample: `# 测试 Claude API 是否工作
from anthropic import Anthropic

client = Anthropic(api_key="你的密钥")

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)

print(message.content[0].text)
# 如果能看到回复，说明配置成功！`,
            bestPractices: [
                "绝不要把 API 密钥写死在代码里，使用环境变量",
                "把密钥保存在密码管理器中，防止丢失",
                "免费额度用完后再考虑付费，先学会基础"
            ]
        },
        {
            id: "packages-install",
            title: "必要的 Python 库安装",
            timestamp: 540,
            content: `
                <h3 class="text-lg font-bold mb-3 text-gh-text">安装 Agent 开发必备库</h3>
                <p class="mb-4 text-gh-text">以下是构建 Agent 最常用的 Python 库，我们会逐一安装。</p>

                <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                    <h4 class="font-semibold mb-3 text-blue-200">📦 核心库清单</h4>
                    <div class="space-y-4">
                        <div>
                            <p class="font-medium text-gh-text mb-1">1️⃣ <strong>anthropic</strong> - Claude API 官方库</p>
                            <pre class="bg-black p-2 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>pip install anthropic</code></pre>
                            <p class="text-xs text-gh-text-secondary mt-1">用途：调用 Claude 模型进行对话和工具调用</p>
                        </div>

                        <div>
                            <p class="font-medium text-gh-text mb-1">2️⃣ <strong>python-dotenv</strong> - 环境变量管理</p>
                            <pre class="bg-black p-2 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>pip install python-dotenv</code></pre>
                            <p class="text-xs text-gh-text-secondary mt-1">用途：从 .env 文件加载 API 密钥，保护隐私</p>
                        </div>

                        <div>
                            <p class="font-medium text-gh-text mb-1">3️⃣ <strong>requests</strong> - HTTP 请求库</p>
                            <pre class="bg-black p-2 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>pip install requests</code></pre>
                            <p class="text-xs text-gh-text-secondary mt-1">用途：Agent 调用外部 API 获取数据</p>
                        </div>

                        <div>
                            <p class="font-medium text-gh-text mb-1">4️⃣ <strong>rich</strong> - 终端美化输出</p>
                            <pre class="bg-black p-2 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>pip install rich</code></pre>
                            <p class="text-xs text-gh-text-secondary mt-1">用途：让命令行输出更美观，方便调试</p>
                        </div>
                    </div>
                </div>

                <div class="bg-green-950/20 border-l-2 border-gh-green p-4 rounded-r mb-4">
                    <h4 class="font-semibold text-gh-text mb-2.5 flex items-center text-sm">
                        <span class="mr-2">⚡</span>
                        <span class="font-mono">快速安装所有依赖</span>
                    </h4>
                    <p class="text-sm text-gh-text-secondary mb-2">一次性安装所有必需库：</p>
                    <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>pip install anthropic python-dotenv requests rich</code></pre>
                </div>

                <div class="bg-gh-card border border-gh-border p-4 rounded">
                    <h4 class="font-semibold mb-3 text-gh-text">🔍 验证安装</h4>
                    <p class="text-sm text-gh-text-secondary mb-2">在 Python 中测试：</p>
                    <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>python -c "import anthropic; import dotenv; import requests; import rich; print('✅ 所有库安装成功！')"</code></pre>
                    <p class="text-xs text-gh-text-secondary mt-2">如果没有报错，说明一切正常！</p>
                </div>
            `,
            corePoints: [
                "anthropic 是调用 Claude API 的官方库",
                "python-dotenv 帮助安全管理 API 密钥",
                "一次性安装所有库，避免遗漏"
            ],
            codeExample: `# 创建 .env 文件管理密钥
# 1. 在项目目录创建 .env 文件
# 2. 添加以下内容：
ANTHROPIC_API_KEY=sk-ant-你的密钥

# 3. 在代码中使用：
from dotenv import load_dotenv
import os

load_dotenv()  # 加载 .env 文件
api_key = os.getenv("ANTHROPIC_API_KEY")
print(f"密钥已加载: {api_key[:10]}...")`,
            bestPractices: [
                "使用虚拟环境（venv）隔离项目依赖",
                "把 .env 文件加入 .gitignore，避免泄露密钥",
                "定期更新库版本：pip install --upgrade anthropic"
            ]
        },
        {
            id: "hello-agent",
            title: "第一个 Agent 程序",
            timestamp: 720,
            content: `
                <h3 class="text-lg font-bold mb-3 text-gh-text">编写你的第一个 Agent</h3>
                <p class="mb-4 text-gh-text">让我们创建一个最简单的 Agent，验证环境配置正确。</p>

                <div class="bg-blue-950/30 border border-blue-500/50 rounded p-4 mb-4">
                    <h4 class="font-semibold mb-3 text-blue-200">📝 创建项目结构</h4>
                    <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>my-first-agent/
├── .env                # API 密钥配置
├── hello_agent.py      # 主程序
└── requirements.txt    # 依赖列表</code></pre>
                </div>

                <div class="bg-gh-card border border-gh-border p-4 rounded mb-4">
                    <h4 class="font-semibold mb-3 text-gh-text">步骤 1：创建 .env 文件</h4>
                    <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>ANTHROPIC_API_KEY=sk-ant-你的实际密钥</code></pre>
                </div>

                <div class="bg-gh-card border border-gh-border p-4 rounded mb-4">
                    <h4 class="font-semibold mb-3 text-gh-text">步骤 2：创建 hello_agent.py</h4>
                    <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>from anthropic import Anthropic
from dotenv import load_dotenv
from rich.console import Console

# 加载环境变量
load_dotenv()

# 初始化
client = Anthropic()
console = Console()

def simple_agent(user_input):
    """一个简单的对话 Agent"""
    console.print(f"[yellow]User:[/yellow] {user_input}")

    response = client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=1024,
        messages=[
            {"role": "user", "content": user_input}
        ]
    )

    answer = response.content[0].text
    console.print(f"[green]Agent:[/green] {answer}")
    return answer

if __name__ == "__main__":
    console.print("[bold blue]🤖 你的第一个 Agent 已启动！[/bold blue]")
    simple_agent("你好，介绍一下你自己")</code></pre>
                </div>

                <div class="bg-green-950/20 border-l-2 border-gh-green p-4 rounded-r">
                    <h4 class="font-semibold text-gh-text mb-2.5 flex items-center text-sm">
                        <span class="mr-2">▶️</span>
                        <span class="font-mono">运行程序</span>
                    </h4>
                    <pre class="bg-black p-3 rounded text-xs font-mono text-gh-text overflow-x-auto"><code>python hello_agent.py</code></pre>
                    <p class="text-xs text-gh-text-secondary mt-2">如果看到 Agent 的回复，恭喜你！环境配置完成 🎉</p>
                </div>
            `,
            corePoints: [
                "从最简单的程序开始，验证环境配置",
                "使用 .env 文件管理敏感信息",
                "rich 库让输出更美观，方便调试"
            ]
        }
    ],
    externalLinks: [
        {
            title: "VS Code 官方文档",
            url: "https://code.visualstudio.com/docs",
            description: "VS Code 完整使用指南"
        },
        {
            title: "Python 官方教程",
            url: "https://docs.python.org/zh-cn/3/tutorial/",
            description: "Python 入门到精通"
        },
        {
            title: "Claude API 文档",
            url: "https://docs.anthropic.com/",
            description: "Anthropic 官方 API 参考"
        },
        {
            title: "Ollama 模型库",
            url: "https://ollama.ai/library",
            description: "本地模型下载和使用"
        }
    ]
};
