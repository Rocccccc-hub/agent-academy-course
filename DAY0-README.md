# Day 0: 开发环境准备 - 完全指南

## 📋 本章节内容

在开始学习 Agent 开发之前，你需要准备好开发环境。本章将**保姆级指导**你安装所有必要的工具和软件。

### ✅ 完成后你将拥有：

- ✅ 一个专业的代码编辑器（VS Code 或 Cursor）
- ✅ Python 3.10+ 运行环境
- ✅ 免费的 Claude API 访问权限（或其他 AI 模型）
- ✅ 所有必需的 Python 库
- ✅ 一个可以运行的 Hello World Agent

---

## 🎯 核心章节

### 1. IDE 编辑器安装（10分钟）

**推荐方案 1：VS Code**
- 💰 完全免费
- 🌟 最流行，社区支持最好
- 📚 插件生态丰富
- 👉 [下载地址](https://code.visualstudio.com/)

**推荐方案 2：Cursor**
- 🤖 内置 AI 助手
- ⚡ AI 代码补全
- 🆓 免费试用
- 👉 [下载地址](https://cursor.sh/)

#### 必装 VS Code 插件：
1. **Python** - 微软官方
2. **Pylance** - 智能补全
3. **GitHub Copilot**（可选，付费）

---

### 2. Python 环境安装（15分钟）

#### Windows 用户：
1. 访问 https://www.python.org/downloads/
2. 下载最新版 Python
3. ⚠️ **重要**：安装时勾选 "Add Python to PATH"
4. 验证：打开 CMD，输入 `python --version`

#### macOS 用户：
```bash
# 方法1：官网下载（推荐新手）
访问 https://www.python.org/downloads/

# 方法2：使用 Homebrew
brew install python@3.11
```

#### Linux 用户：
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3.11 python3-pip

# 验证安装
python3 --version
pip3 --version
```

---

### 3. 获取免费 AI 模型（10分钟）

#### 🏆 推荐：Claude API（最佳选择）

**优势：**
- ✅ Agent 能力最强
- ✅ 每月 $5 免费额度（约 200 万 tokens）
- ✅ 中文支持优秀
- ✅ 工具调用功能完善

**获取步骤：**
1. 访问 https://console.anthropic.com/
2. 点击 "Sign Up" 注册（可用 Google 账号）
3. 进入控制台 → "API Keys"
4. 点击 "Create Key"
5. 复制密钥（格式：`sk-ant-api03-...`）
6. ⚠️ **立即保存到安全的地方！**

**配置密钥：**
```bash
# Mac/Linux
export ANTHROPIC_API_KEY="你的密钥"

# Windows CMD
set ANTHROPIC_API_KEY=你的密钥

# Windows PowerShell
$env:ANTHROPIC_API_KEY="你的密钥"
```

#### 💡 备选：OpenAI API
- 新用户 $5 免费额度（3个月）
- 需要国外手机号验证
- 👉 https://platform.openai.com/

#### 🆓 备选：本地模型（完全免费）
- 使用 Ollama 运行本地模型
- 推荐模型：llama3.2, qwen2.5
- 👉 https://ollama.ai/

---

### 4. 安装 Python 库（5分钟）

#### 一键安装所有依赖：
```bash
pip install anthropic python-dotenv requests rich
```

#### 各库的作用：
| 库名 | 用途 |
|-----|------|
| `anthropic` | Claude API 官方客户端 |
| `python-dotenv` | 管理环境变量和密钥 |
| `requests` | HTTP 请求（调用外部 API） |
| `rich` | 美化命令行输出 |

#### 验证安装：
```bash
python -c "import anthropic; import dotenv; import requests; import rich; print('✅ 所有库安装成功！')"
```

---

### 5. 第一个 Agent 程序（10分钟）

#### 项目结构：
```
my-first-agent/
├── .env                # 存放 API 密钥
├── hello_agent.py      # 主程序
└── requirements.txt    # 依赖列表（可选）
```

#### .env 文件内容：
```
ANTHROPIC_API_KEY=sk-ant-你的实际密钥
```

#### hello_agent.py 完整代码：
```python
from anthropic import Anthropic
from dotenv import load_dotenv
from rich.console import Console

# 加载环境变量
load_dotenv()

# 初始化
client = Anthropic()  # 自动从环境变量读取密钥
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
    simple_agent("你好，介绍一下你自己")
```

#### 运行程序：
```bash
python hello_agent.py
```

#### 成功标志：
如果看到 Agent 的回复，恭喜你！🎉 环境配置完成，可以开始 Day 1 的学习了！

---

## ❓ 常见问题

### Q1: pip 命令找不到？
**A:** Python 没有正确添加到 PATH。重新安装 Python，勾选 "Add to PATH"。

### Q2: 提示 "ModuleNotFoundError"？
**A:** 库没有安装成功。重新运行 `pip install anthropic python-dotenv requests rich`

### Q3: API 密钥无效？
**A:** 检查：
1. 密钥是否正确复制（包含 `sk-ant-` 前缀）
2. .env 文件是否在正确目录
3. load_dotenv() 是否被调用

### Q4: VS Code 找不到 Python 解释器？
**A:** 按 Ctrl+Shift+P（Mac: Cmd+Shift+P），输入 "Python: Select Interpreter"，选择刚安装的 Python 版本。

### Q5: 我的电脑配置低，能运行吗？
**A:** 可以！使用云端 API（Claude/OpenAI）不需要本地算力。只有运行本地模型（Ollama）才需要好的显卡。

---

## 📚 延伸阅读

- [VS Code 官方文档](https://code.visualstudio.com/docs)
- [Python 官方教程](https://docs.python.org/zh-cn/3/tutorial/)
- [Claude API 文档](https://docs.anthropic.com/)
- [Git 入门教程](https://git-scm.com/book/zh/v2)（可选，但推荐学习）

---

## 🎓 下一步

环境准备完成后，你可以开始学习：

👉 **Day 1: Agent 架构基础**
- 理解 Agent 的工作原理
- ReAct 工作模式
- 工具调用机制

---

**💪 加油！你已经完成了最枯燥的部分，接下来会越来越有趣！**
