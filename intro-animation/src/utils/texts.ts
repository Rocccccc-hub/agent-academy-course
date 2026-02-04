// Multi-language text configuration for all scenes

export const texts = {
  zh: {
    // Scene 1: Title
    title: "智能餐厅：理解 AI Agent",
    subtitle: "通过餐厅类比理解 Agent 工作原理",

    // Scene 2: Intro
    introTitle: "AI Agent 就像一个智能餐厅",
    customer: "顾客",
    chef: "厨师",
    recipe: "菜谱",
    tools: "厨具",
    notebook: "记录本",

    // Scene 3: Customer Order
    orderTitle: "顾客点餐",
    orderQuestion: "我想吃拉面",
    orderAnnotation: "顾客 = 用户 | 点菜单 = Prompt",

    // Scene 4: Chef Receives
    chefTitle: "厨师接单",
    chefThought: "顾客想吃拉面，我需要查看菜谱",
    chefAnnotation: "厨师 = Agent | 大脑 = LLM",

    // Scene 5: Recipe Tools
    recipeTitle: "查阅菜谱获取工具",
    recipeChapter: "拉面",
    recipeDish1: "拉面",
    recipeDish2: "炒饭",
    recipeDish3: "麻婆豆腐",
    recipeAnnotation: "菜谱 = MCP | 厨具 = Tools",

    // Scene 6: Cooking
    cookingTitle: "烹饪过程",
    cookingNote: "此顾客喜欢拉面",
    cookingAnnotation: "记录本 = Memory",

    // Scene 7: Serve
    serveMessage: "这就是您要的拉面！",
    serveSuccess: "Agent 成功处理请求",

    // Scene 8: Summary
    summaryTitle: "智能餐厅：完整协作流程",
    summaryUser: "顾客",
    summaryPrompt: "点菜单",
    summaryLLM: "大脑",
    summaryMCP: "菜谱",
    summaryTools: "厨具",
    summaryMemory: "记录本",
    summaryResult: "菜品",
    summaryMessage: "这些组件协同工作，完成智能服务",

    // DAY 0: Environment Setup
    day0Label: "DAY 0 - 准备阶段",
    day0Title: "搭建你的 Agent 工作台",
    day0Subtitle: "准备工作，让学习事半功倍",

    // Scene 2: Why Need
    day0WhyTitle: "为什么需要开发环境？",
    day0WithoutTitle: "没有准备",
    day0WithoutItem1: "😰 不知道在哪里写代码",
    day0WithoutItem2: "🤷 代码写了无法运行",
    day0WithoutItem3: "⏰ 每次都要重新配置",
    day0WithTitle: "准备就绪",
    day0WithItem1: "💻 专业工具随时可用",
    day0WithItem2: "⚡ 写完代码立即测试",
    day0WithItem3: "🎯 专注学习不分心",
    day0WhyAnalogy: "💡 就像做菜前要准备好厨房，开发 Agent 也需要搭建工作环境",

    // Scene 3: Three Tools
    day0ThreeToolsTitle: "三大核心工具",
    day0Tool1Title: "代码编辑器",
    day0Tool1Subtitle: "VS Code / Cursor",
    day0Tool1Analogy: "厨师的操作台",
    day0Tool1Desc: "写代码的地方",
    day0Tool2Title: "Python 环境",
    day0Tool2Subtitle: "Python 3.10+",
    day0Tool2Analogy: "厨房的炉灶",
    day0Tool2Desc: "运行程序的引擎",
    day0Tool3Title: "AI API 密钥",
    day0Tool3Subtitle: "Claude / GPT",
    day0Tool3Analogy: "食材供应商",
    day0Tool3Desc: "连接 AI 大脑的钥匙",
    day0ThreeToolsNote: "🎯 三个工具协同工作，打造完整的开发环境",

    // Scene 4: Install Flow
    day0InstallTitle: "快速安装流程",
    day0Step1Title: "下载安装编辑器",
    day0Step1Desc: "访问官网，点击下载",
    day0Step2Title: "安装 Python",
    day0Step2Desc: "版本 3.10 或更高",
    day0Step3Title: "获取 API 密钥",
    day0Step3Desc: "注册账号，复制密钥",
    day0InstallProgress: "安装进度",
    day0InstallMessage: "⏱️ 只需 30 分钟，一次配置，终身受用",

    // Scene 5: Hello World
    day0HelloTitle: "第一个 Agent 程序",
    day0HelloFilename: "hello_agent.py",
    day0HelloRunButton: "▶️ 运行程序",
    day0HelloTerminal: "终端输出",
    day0HelloOutput: "Hello, I'm your first Agent! 👋",
    day0HelloSuccess: "运行成功！",
    day0HelloMessage: "🎉 恭喜！你的开发环境已经准备就绪",

    // Scene 6: Value Summary
    day0ValueTitle: "开发环境的三大价值",
    day0Value1Title: "即学即用",
    day0Value1Desc: "写完代码立即运行\n实时看到效果",
    day0Value2Title: "反复练习",
    day0Value2Desc: "本地环境随时可用\n不受次数限制",
    day0Value3Title: "自由探索",
    day0Value3Desc: "不受在线平台限制\n可以深度定制",
    day0ValueMessage: "🎯 现在开始，让我们一起探索 Agent 的世界！",
  },
  en: {
    // Scene 1: Title
    title: "Smart Restaurant: Understanding AI Agents",
    subtitle: "Learn Agent Workflow Through Restaurant Analogy",

    // Scene 2: Intro
    introTitle: "AI Agent is Like a Smart Restaurant",
    customer: "Customer",
    chef: "Chef",
    recipe: "Recipe",
    tools: "Utensils",
    notebook: "Notebook",

    // Scene 3: Customer Order
    orderTitle: "Customer Orders",
    orderQuestion: "I'd like ramen",
    orderAnnotation: "Customer = User | Order = Prompt",

    // Scene 4: Chef Receives
    chefTitle: "Chef Receives Order",
    chefThought: "Customer wants ramen, I need to check the recipe",
    chefAnnotation: "Chef = Agent | Brain = LLM",

    // Scene 5: Recipe Tools
    recipeTitle: "Consulting Recipe for Tools",
    recipeChapter: "Ramen",
    recipeDish1: "Ramen",
    recipeDish2: "Fried Rice",
    recipeDish3: "Mapo Tofu",
    recipeAnnotation: "Recipe = MCP | Utensils = Tools",

    // Scene 6: Cooking
    cookingTitle: "Cooking Process",
    cookingNote: "Customer likes ramen",
    cookingAnnotation: "Notebook = Memory",

    // Scene 7: Serve
    serveMessage: "Here's your ramen!",
    serveSuccess: "Agent successfully handled request",

    // Scene 8: Summary
    summaryTitle: "Smart Restaurant: Complete Workflow",
    summaryUser: "Customer",
    summaryPrompt: "Order",
    summaryLLM: "Brain",
    summaryMCP: "Recipe",
    summaryTools: "Utensils",
    summaryMemory: "Notebook",
    summaryResult: "Dish",
    summaryMessage: "These components work together to provide intelligent service",

    // DAY 0: Environment Setup
    day0Label: "DAY 0 - Preparation",
    day0Title: "Build Your Agent Workbench",
    day0Subtitle: "Preparation makes learning twice as effective",

    // Scene 2: Why Need
    day0WhyTitle: "Why Need a Development Environment?",
    day0WithoutTitle: "Without Preparation",
    day0WithoutItem1: "😰 Don't know where to write code",
    day0WithoutItem2: "🤷 Code won't run after writing",
    day0WithoutItem3: "⏰ Must reconfigure every time",
    day0WithTitle: "Ready to Go",
    day0WithItem1: "💻 Professional tools always available",
    day0WithItem2: "⚡ Test immediately after writing",
    day0WithItem3: "🎯 Focus on learning without distractions",
    day0WhyAnalogy: "💡 Just like preparing a kitchen before cooking, developing Agents requires setting up a work environment",

    // Scene 3: Three Tools
    day0ThreeToolsTitle: "Three Core Tools",
    day0Tool1Title: "Code Editor",
    day0Tool1Subtitle: "VS Code / Cursor",
    day0Tool1Analogy: "Chef's Workstation",
    day0Tool1Desc: "Where you write code",
    day0Tool2Title: "Python Environment",
    day0Tool2Subtitle: "Python 3.10+",
    day0Tool2Analogy: "Kitchen Stove",
    day0Tool2Desc: "Engine to run programs",
    day0Tool3Title: "AI API Key",
    day0Tool3Subtitle: "Claude / GPT",
    day0Tool3Analogy: "Ingredient Supplier",
    day0Tool3Desc: "Key to connect to AI brain",
    day0ThreeToolsNote: "🎯 Three tools work together to create a complete development environment",

    // Scene 4: Install Flow
    day0InstallTitle: "Quick Installation Process",
    day0Step1Title: "Download & Install Editor",
    day0Step1Desc: "Visit official site, click download",
    day0Step2Title: "Install Python",
    day0Step2Desc: "Version 3.10 or higher",
    day0Step3Title: "Get API Key",
    day0Step3Desc: "Register account, copy key",
    day0InstallProgress: "Installation Progress",
    day0InstallMessage: "⏱️ Just 30 minutes, configure once, use forever",

    // Scene 5: Hello World
    day0HelloTitle: "Your First Agent Program",
    day0HelloFilename: "hello_agent.py",
    day0HelloRunButton: "▶️ Run Program",
    day0HelloTerminal: "Terminal Output",
    day0HelloOutput: "Hello, I'm your first Agent! 👋",
    day0HelloSuccess: "Run Successful!",
    day0HelloMessage: "🎉 Congratulations! Your development environment is ready",

    // Scene 6: Value Summary
    day0ValueTitle: "Three Key Values of Dev Environment",
    day0Value1Title: "Learn & Apply Instantly",
    day0Value1Desc: "Run code immediately after writing\nSee results in real-time",
    day0Value2Title: "Practice Repeatedly",
    day0Value2Desc: "Local environment always available\nNo usage limits",
    day0Value3Title: "Explore Freely",
    day0Value3Desc: "No online platform restrictions\nFull customization possible",
    day0ValueMessage: "🎯 Now let's explore the world of Agents together!",

    // ===== DAY 2: Prompt Engineering =====
    // Scene 1: Title
    day2Label: "DAY 2 - Prompt 工程",
    day2Title: "Prompt 工程与优化",
    day2Subtitle: "掌握与 Agent 对话的艺术",

    // Scene 2: What is Prompt
    day2WhatTitle: "什么是 Prompt？",
    day2WhatDesc: "Prompt 是与 AI 对话的输入指令\n决定了 Agent 的理解和输出质量",
    day2WhatExample: "你好，请帮我查询天气",
    day2WhatFlow: "用户输入 → Agent 理解 → 执行任务",

    // Scene 3: Bad vs Good
    day2CompareTitle: "差劲的 Prompt vs 优秀的 Prompt",
    day2BadPrompt: "查天气",
    day2BadResult: "❌ 哪个城市？什么时间？",
    day2BadLabel: "❌ 模糊不清",
    day2GoodPrompt: "请查询北京市明天的天气预报，\n包括温度、降水概率和空气质量",
    day2GoodResult: "✅ 明天北京：15-22°C\n降水概率20%，空气质量良好",
    day2GoodLabel: "✅ 清晰明确",

    // Scene 4-7: Four Principles
    day2PrinciplesTitle: "Prompt 工程四大核心原则",

    day2P1Title: "原则 1：清晰明确",
    day2P1Desc: "避免歧义，具体描述任务目标",
    day2P1Before: "帮我写代码",
    day2P1After: "用 Python 写一个函数，\n输入城市名，返回天气数据",
    day2P1Tip: "💡 从模糊到具体",

    day2P2Title: "原则 2：提供上下文",
    day2P2Desc: "给出背景信息和约束条件",
    day2P2Before: "查询数据库",
    day2P2After: "在用户表中查询 ID=123 的用户信息，\n字段包括姓名、邮箱、注册时间",
    day2P2Tip: "💡 提供必要信息",

    day2P3Title: "原则 3：结构化输出",
    day2P3Desc: "指定期望的输出格式",
    day2P3Before: "分析这段代码",
    day2P3After: "分析这段代码，按以下格式输出：\n1. 功能说明\n2. 潜在问题\n3. 改进建议",
    day2P3Tip: "💡 规范输出格式",

    day2P4Title: "原则 4：示例引导",
    day2P4Desc: "使用 Few-shot Learning 提供示例",
    day2P4Before: "提取关键词",
    day2P4After: "提取文本关键词，示例：\n输入：\"Python 很强大\"\n输出：[\"Python\", \"强大\"]",
    day2P4Tip: "💡 用例子说明",

    // Scene 8: Template Structure
    day2TemplateTitle: "Agent Prompt 模板结构",
    day2TemplateFormula: "[系统角色] + [任务目标] + [可用工具] + [输出格式] + [约束条件]",
    day2TemplateExample: "你是一个天气助手 Agent。\n任务：查询指定城市的天气。\n工具：get_weather(city, date)\n输出：{city, date, temperature, desc}\n约束：日期不超过7天",
    day2TemplateLabel: "完整 Prompt 示例",

    // Scene 9: Summary
    day2SummaryTitle: "Prompt 工程总结",
    day2SummaryPoint1: "📝 清晰明确的指令",
    day2SummaryPoint2: "🎯 充足的上下文",
    day2SummaryPoint3: "📐 结构化输出",
    day2SummaryPoint4: "📖 示例引导",
    day2SummaryMessage: "掌握 Prompt 工程，让 Agent 更懂你的需求",
  },
  en: {
    // Scene 1: Title
    title: "Smart Restaurant: Understanding AI Agents",
    subtitle: "Understanding Agent Working Principles Through Restaurant Analogy",

    // Scene 2: Intro
    introTitle: "AI Agent is Like a Smart Restaurant",
    customer: "Customer",
    chef: "Chef",
    recipe: "Recipe",
    tools: "Utensils",
    notebook: "Notebook",

    // Scene 3: Customer Order
    orderTitle: "Customer Orders",
    orderQuestion: "I want ramen",
    orderAnnotation: "Customer = User | Order = Prompt",

    // Scene 4: Chef Receives
    chefTitle: "Chef Receives Order",
    chefThought: "Customer wants ramen, I need to check the recipe",
    chefAnnotation: "Chef = Agent | Brain = LLM",

    // Scene 5: Recipe Tools
    recipeTitle: "Consult Recipe to Get Tools",
    recipeChapter: "Ramen",
    recipeDish1: "Ramen",
    recipeDish2: "Fried Rice",
    recipeDish3: "Mapo Tofu",
    recipeAnnotation: "Recipe = MCP | Utensils = Tools",

    // Scene 6: Cooking
    cookingTitle: "Cooking Process",
    cookingNote: "This customer likes ramen",
    cookingAnnotation: "Notebook = Memory",

    // Scene 7: Serve
    serveMessage: "Here's your ramen!",
    serveSuccess: "Agent Successfully Handled Request",

    // Scene 8: Summary
    summaryTitle: "Smart Restaurant: Complete Collaboration Flow",
    summaryUser: "Customer",
    summaryPrompt: "Order",
    summaryLLM: "Brain",
    summaryMCP: "Recipe",
    summaryTools: "Utensils",
    summaryMemory: "Notebook",
    summaryResult: "Dish",
    summaryMessage: "These components work together to complete intelligent service",

    // ===== DAY 0: Environment Setup =====
    day0Label: "DAY 0 - Preparation",
    day0Title: "Build Your Agent Workbench",
    day0Subtitle: "Prepare development environment before starting",

    // Scene 2: Why Need Dev Environment
    day0WhyTitle: "Why Do We Need a Development Environment?",
    day0Analogy: "Just like a chef needs a kitchen 👨‍🍳",
    day0WhyPoint1: "Writing & running code (like a stove 🔥)",
    day0WhyPoint2: "Testing results immediately (like tasting 👅)",
    day0WhyPoint3: "Adjusting and optimizing (like seasoning 🧂)",
    day0WhyConclusion: "Local environment = Your exclusive Agent lab",

    // Scene 3: Three Tools
    day0ThreeToolsTitle: "Three Essential Tools",
    day0Tool1Title: "Code Editor",
    day0Tool1Subtitle: "VS Code / Cursor",
    day0Tool1Analogy: "Chef's workstation",
    day0Tool1Desc: "Write, edit, and debug code",
    day0Tool2Title: "Python Environment",
    day0Tool2Subtitle: "Python 3.10+",
    day0Tool2Analogy: "Ingredients and recipes",
    day0Tool2Desc: "Run Agent program foundation",
    day0Tool3Title: "API Key",
    day0Tool3Subtitle: "Claude / OpenAI",
    day0Tool3Analogy: "Premium ingredients",
    day0Tool3Desc: "Access LLM capabilities",
    day0ThreeToolsNote: "🎯 Three tools work together to create a complete development environment",

    // Scene 4: Install Flow
    day0InstallTitle: "Quick Installation Process",
    day0Step1Title: "Download & Install Editor",
    day0Step1Desc: "Visit official site, click download",
    day0Step2Title: "Install Python",
    day0Step2Desc: "Version 3.10 or higher",
    day0Step3Title: "Get API Key",
    day0Step3Desc: "Register account, copy key",
    day0InstallProgress: "Installation Progress",
    day0InstallMessage: "⏱️ Just 30 minutes, configure once, use forever",

    // Scene 5: Hello World
    day0HelloTitle: "Your First Agent Program",
    day0HelloFilename: "hello_agent.py",
    day0HelloRunButton: "▶️ Run Program",
    day0HelloTerminal: "Terminal Output",
    day0HelloOutput: "Hello, I'm your first Agent! 👋",
    day0HelloSuccess: "Run Successful!",
    day0HelloMessage: "🎉 Congratulations! Your development environment is ready",

    // Scene 6: Value Summary
    day0ValueTitle: "Three Key Values of Dev Environment",
    day0Value1Title: "Learn & Apply Instantly",
    day0Value1Desc: "Run code immediately after writing\nSee results in real-time",
    day0Value2Title: "Practice Repeatedly",
    day0Value2Desc: "Local environment always available\nNo usage limits",
    day0Value3Title: "Explore Freely",
    day0Value3Desc: "No online platform restrictions\nFull customization possible",
    day0ValueMessage: "🎯 Now let's explore the world of Agents together!",

    // ===== DAY 2: Prompt Engineering =====
    // Scene 1: Title
    day2Label: "DAY 2 - Prompt Engineering",
    day2Title: "Prompt Engineering & Optimization",
    day2Subtitle: "Master the Art of Talking to Agents",

    // Scene 2: What is Prompt
    day2WhatTitle: "What is a Prompt?",
    day2WhatDesc: "Prompt is the input instruction for AI conversation\nDetermines Agent's understanding and output quality",
    day2WhatExample: "Hello, please check the weather for me",
    day2WhatFlow: "User Input → Agent Understanding → Execute Task",

    // Scene 3: Bad vs Good
    day2CompareTitle: "Bad Prompt vs Good Prompt",
    day2BadPrompt: "Check weather",
    day2BadResult: "❌ Which city? What time?",
    day2BadLabel: "❌ Vague",
    day2GoodPrompt: "Please check tomorrow's weather forecast for Beijing,\nincluding temperature, precipitation probability, and air quality",
    day2GoodResult: "✅ Tomorrow Beijing: 15-22°C\nPrecipitation 20%, Air quality good",
    day2GoodLabel: "✅ Clear & Specific",

    // Scene 4-7: Four Principles
    day2PrinciplesTitle: "Four Core Principles of Prompt Engineering",

    day2P1Title: "Principle 1: Be Clear & Specific",
    day2P1Desc: "Avoid ambiguity, specifically describe task goals",
    day2P1Before: "Help me write code",
    day2P1After: "Write a Python function that\ntakes a city name and returns weather data",
    day2P1Tip: "💡 From vague to specific",

    day2P2Title: "Principle 2: Provide Context",
    day2P2Desc: "Give background information and constraints",
    day2P2Before: "Query database",
    day2P2After: "Query user info with ID=123 in user table,\nfields include name, email, registration time",
    day2P2Tip: "💡 Provide necessary info",

    day2P3Title: "Principle 3: Structured Output",
    day2P3Desc: "Specify expected output format",
    day2P3Before: "Analyze this code",
    day2P3After: "Analyze this code in this format:\n1. Function description\n2. Potential issues\n3. Improvement suggestions",
    day2P3Tip: "💡 Standardize output",

    day2P4Title: "Principle 4: Example Guidance",
    day2P4Desc: "Use Few-shot Learning with examples",
    day2P4Before: "Extract keywords",
    day2P4After: "Extract keywords from text, example:\nInput: \"Python is powerful\"\nOutput: [\"Python\", \"powerful\"]",
    day2P4Tip: "💡 Show by example",

    // Scene 8: Template Structure
    day2TemplateTitle: "Agent Prompt Template Structure",
    day2TemplateFormula: "[System Role] + [Task Goal] + [Available Tools] + [Output Format] + [Constraints]",
    day2TemplateExample: "You are a weather assistant Agent.\nTask: Query weather for specified city.\nTool: get_weather(city, date)\nOutput: {city, date, temperature, desc}\nConstraint: Date within 7 days",
    day2TemplateLabel: "Complete Prompt Example",

    // Scene 9: Summary
    day2SummaryTitle: "Prompt Engineering Summary",
    day2SummaryPoint1: "📝 Clear & specific instructions",
    day2SummaryPoint2: "🎯 Sufficient context",
    day2SummaryPoint3: "📐 Structured output",
    day2SummaryPoint4: "📖 Example guidance",
    day2SummaryMessage: "Master Prompt engineering to make Agent better understand your needs",
  },
};

export type Language = "zh" | "en";
