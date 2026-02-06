import { ExternalLink, Cpu, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export default function FreeTools() {
  const { t } = useLanguage();

  const tools = [
    {
      icon: Rocket,
      titleKey: "toolProductTitle" as const,
      descKey: "toolProductDesc" as const,
      category: "Custom GPT",
      url: "https://chatgpt.com/g/g-6942e8ddcfe48191bbea408e47b2ac52-product-delivery-architect",
    },
    {
      icon: Palette,
      titleKey: "toolDesignerTitle" as const,
      descKey: "toolDesignerDesc" as const,
      category: "Custom GPT",
      url: "https://chatgpt.com/g/g-691676bb5e8c81919aee36b8ed28900c-designer-v3-0",
    },
    {
      icon: Cpu,
      titleKey: "toolNoosTitle" as const,
      descKey: "toolNoosDesc" as const,
      category: "Custom GPT",
      url: "https://chatgpt.com/g/g-68bb0c7e1ca88191a8434c27cf39476b-noos-core-v7-0",
    },
  ];

  return (
    <section id="tools" className="py-24 md:py-32 px-6 md:px-8" data-testid="section-tools">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">{t("toolsLabel")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {t("toolsTitle")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("toolsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.titleKey}
                className="group transition-all duration-300 rounded-2xl overflow-hidden bg-card/50 border-primary/10 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(201,169,98,0.1)]"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <span className="mb-3 inline-flex self-start items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tool.category}
                  </span>

                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {t(tool.titleKey)}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                    {t(tool.descKey)}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      {t("toolsTryButton")}
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
