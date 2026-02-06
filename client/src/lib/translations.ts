export const translations = {
  en: {
    // Hero
    heroSubtitle: "AI Creator & Automation Specialist",
    heroDescription: "I build AI tools and automations that work while you sleep. Custom GPTs, visual pipelines, agentic systems.",
    heroCtaProjects: "View Projects",
    heroCtaTelegram: "Message on Telegram",

    // Free Tools
    toolsLabel: "Free Tools",
    toolsTitle: "Try My Tools",
    toolsDescription: "Free Custom GPTs for product work, design, and decision-making. Use without limits.",
    toolsTryButton: "Try It",

    // Tool descriptions
    toolProductTitle: "Product Delivery Architect",
    toolProductDesc: "Turns ideas into shippable MVPs fast. Focus on delivery, budget, and clear build steps.",
    toolDesignerTitle: "Designer v3.0",
    toolDesignerDesc: "Visual concept and MidJourney prompt generator. Aesthetic: Luxury Minimalism × Cinema × Experimenta.",
    toolNoosTitle: "NOOS Core v7.0",
    toolNoosDesc: "Autonomous orchestrator of ideas and products. Filters value, verifies facts, delivers structured decisions.",

    // Projects
    projectsLabel: "Case Studies",
    projectsTitle: "Completed Projects",
    projectsDescription: "Examples of automations and AI solutions with measurable results.",

    projectEduTitle: "Education Platform",
    projectEduStack: "OpenAI + RAG + Notion AI",
    projectEduResult: "+58% demo conversion",

    projectCreatorTitle: "Creator Content",
    projectCreatorStack: "Llama 3.2 + MidJourney + Telegram",
    projectCreatorResult: "20 hours saved per week",

    projectEcomTitle: "E-commerce Automation",
    projectEcomStack: "Runway Gen-3 + ComfyUI",
    projectEcomResult: "37% faster time-to-market",

    stackLabel: "Stack",
    resultLabel: "Result",

    // About
    aboutLabel: "About",
    aboutTitle: "A Bit About Me",
    aboutText1: "Hi! I'm an independent AI creator. I specialize in automation, visual pipelines, and custom GPT solutions.",
    aboutText2: "I work directly with clients without agency overhead — meaning faster delivery, flexibility, and transparent pricing.",
    skillsTitle: "Technologies & Tools",

    valueResultTitle: "Results",
    valueResultDesc: "Focus on business outcomes, not technology for technology's sake",
    valueSpeedTitle: "Speed",
    valueSpeedDesc: "Fast iterations and MVPs in days, not months",
    valueTransparencyTitle: "Transparency",
    valueTransparencyDesc: "Honest communication and clear pricing",

    // Contact
    contactLabel: "Contact",
    contactTitle: "Let's Talk",
    contactDescription: "Choose a convenient way to reach out — I respond within a day.",
    telegramDesc: "Quick contact",
    linkedinDesc: "Professional network",
    emailDesc: "For business inquiries",

    // Footer
    copyright: "© Tony Derry",

    // Language
    switchLang: "RU",
  },
  ru: {
    // Hero
    heroSubtitle: "AI Creator & Automation Specialist",
    heroDescription: "Создаю AI-инструменты и автоматизации, которые работают пока ты спишь. Custom GPT, визуальные пайплайны, агентные системы.",
    heroCtaProjects: "Смотреть проекты",
    heroCtaTelegram: "Написать в Telegram",

    // Free Tools
    toolsLabel: "Free Tools",
    toolsTitle: "Попробуй мои инструменты",
    toolsDescription: "Бесплатные Custom GPT для продуктовой работы, дизайна и принятия решений. Используй без ограничений.",
    toolsTryButton: "Попробовать",

    // Tool descriptions
    toolProductTitle: "Product Delivery Architect",
    toolProductDesc: "Превращает идеи в готовые MVP быстро. Фокус на доставку, бюджет и чёткие шаги сборки.",
    toolDesignerTitle: "Designer v3.0",
    toolDesignerDesc: "Генератор визуальных концепций и MidJourney промптов. Эстетика: Luxury Minimalism × Cinema × Experimenta.",
    toolNoosTitle: "NOOS Core v7.0",
    toolNoosDesc: "Автономный оркестратор идей и продуктов. Фильтрует ценность, проверяет факты, выдаёт структурированные решения.",

    // Projects
    projectsLabel: "Case Studies",
    projectsTitle: "Реализованные проекты",
    projectsDescription: "Примеры автоматизаций и AI-решений с измеримыми результатами.",

    projectEduTitle: "Образовательная платформа",
    projectEduStack: "OpenAI + RAG + Notion AI",
    projectEduResult: "+58% конверсия в демо",

    projectCreatorTitle: "Контент для креаторов",
    projectCreatorStack: "Llama 3.2 + MidJourney + Telegram",
    projectCreatorResult: "Экономия 20 часов в неделю",

    projectEcomTitle: "E-commerce автоматизация",
    projectEcomStack: "Runway Gen-3 + ComfyUI",
    projectEcomResult: "37% быстрее вывод на рынок",

    stackLabel: "Стек",
    resultLabel: "Результат",

    // About
    aboutLabel: "About",
    aboutTitle: "Немного обо мне",
    aboutText1: "Привет! Я — независимый AI-creator. Специализируюсь на автоматизации, визуальных пайплайнах и создании кастомных GPT-решений.",
    aboutText2: "Работаю напрямую с клиентами без агентского оверхеда — это значит быстрая доставка, гибкость и прозрачное ценообразование.",
    skillsTitle: "Технологии и инструменты",

    valueResultTitle: "Результат",
    valueResultDesc: "Фокус на бизнес-результате, а не на технологиях ради технологий",
    valueSpeedTitle: "Скорость",
    valueSpeedDesc: "Быстрые итерации и MVP за дни, а не месяцы",
    valueTransparencyTitle: "Прозрачность",
    valueTransparencyDesc: "Честная коммуникация и понятное ценообразование",

    // Contact
    contactLabel: "Contact",
    contactTitle: "Давай пообщаемся",
    contactDescription: "Выбери удобный способ связи — отвечаю в течение дня.",
    telegramDesc: "Быстрая связь",
    linkedinDesc: "Профессиональная сеть",
    emailDesc: "Для деловых запросов",

    // Footer
    copyright: "© Tony Derry",

    // Language
    switchLang: "EN",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
