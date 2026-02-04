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
  },
};

export type Language = "zh" | "en";
