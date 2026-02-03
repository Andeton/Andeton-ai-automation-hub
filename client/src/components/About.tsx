import {
  Workflow,
  Palette,
  Bot,
  Database,
  Code2,
  Cpu
} from "lucide-react";

const skills = [
  { name: "n8n", icon: Workflow, category: "Automation" },
  { name: "ComfyUI", icon: Palette, category: "Visual" },
  { name: "MidJourney", icon: Palette, category: "Visual" },
  { name: "Custom GPTs", icon: Bot, category: "AI" },
  { name: "RAG Systems", icon: Database, category: "AI" },
  { name: "Python", icon: Code2, category: "Code" },
  { name: "LLM APIs", icon: Cpu, category: "AI" },
  { name: "Telegram Bots", icon: Bot, category: "Automation" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-8 bg-muted/30" data-testid="section-about">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* About text */}
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">About</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Немного обо мне
          </h2>
          <div className="text-base md:text-lg leading-relaxed text-foreground/90 max-w-2xl mx-auto space-y-4">
            <p>
              Привет! Я — независимый AI-creator. Специализируюсь на автоматизации,
              визуальных пайплайнах и создании кастомных GPT-решений.
            </p>
            <p>
              Работаю напрямую с клиентами без агентского оверхеда — это значит
              быстрая доставка, гибкость и прозрачное ценообразование.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-foreground text-center">
            Технологии и инструменты
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 bg-background hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values - simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl border border-border/60 bg-background">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-foreground mb-1">Результат</h4>
            <p className="text-sm text-muted-foreground">Фокус на бизнес-результате, а не на технологиях ради технологий</p>
          </div>
          <div className="p-6 rounded-xl border border-border/60 bg-background">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-foreground mb-1">Скорость</h4>
            <p className="text-sm text-muted-foreground">Быстрые итерации и MVP за дни, а не месяцы</p>
          </div>
          <div className="p-6 rounded-xl border border-border/60 bg-background">
            <div className="text-2xl mb-2">🤝</div>
            <h4 className="font-semibold text-foreground mb-1">Прозрачность</h4>
            <p className="text-sm text-muted-foreground">Честная коммуникация и понятное ценообразование</p>
          </div>
        </div>
      </div>
    </section>
  );
}
