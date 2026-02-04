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
  },
};

export type Language = "zh" | "en";
