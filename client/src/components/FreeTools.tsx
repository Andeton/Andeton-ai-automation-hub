import { ExternalLink, Cpu, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Tool {
  icon: typeof Cpu;
  title: string;
  description: string;
  category: string;
  url: string;
}

const tools: Tool[] = [
  {
    icon: Rocket,
    title: "Product Delivery Architect",
    description: "Превращает идеи в готовые MVP быстро. Фокус на доставку, бюджет и чёткие шаги сборки.",
    category: "Custom GPT",
    url: "https://chatgpt.com/g/g-6942e8ddcfe48191bbea408e47b2ac52-product-delivery-architect",
  },
  {
    icon: Palette,
    title: "Designer v3.0",
    description: "Генератор визуальных концепций и MidJourney промптов. Эстетика: Luxury Minimalism × Cinema × Experimenta.",
    category: "Custom GPT",
    url: "https://chatgpt.com/g/g-691676bb5e8c81919aee36b8ed28900c-designer-v3-0",
  },
  {
    icon: Cpu,
    title: "NOOS Core v7.0",
    description: "Автономный оркестратор идей и продуктов. Фильтрует ценность, проверяет факты, выдаёт структурированные решения.",
    category: "Custom GPT",
    url: "https://chatgpt.com/g/g-68bb0c7e1ca88191a8434c27cf39476b-noos-core-v7-0",
  },
];

export default function FreeTools() {
  return (
    <section id="tools" className="py-24 md:py-32 px-6 md:px-8" data-testid="section-tools">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Free Tools</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Попробуй мои инструменты
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Бесплатные Custom GPT для продуктовой работы, дизайна и принятия решений.
            Используй без ограничений.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.title}
                className="group hover-elevate transition-all duration-200 rounded-2xl overflow-hidden border-border/70"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-[hsl(var(--primary)/1)] to-[hsl(var(--accent)/1)] shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <span className="mb-3 inline-flex self-start items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tool.category}
                  </span>

                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {tool.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                    {tool.description}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      Попробовать
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
