import { GraduationCap, Sparkles, ShoppingBag } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      icon: GraduationCap,
      title: "Образовательная платформа",
      tag: "EdTech",
      details: [
        { label: "Стек", value: "OpenAI + RAG + Notion AI" },
        { label: "Результат", value: "+58% конверсия в демо" },
      ],
    },
    {
      icon: Sparkles,
      title: "Контент для креаторов",
      tag: "Creator Economy",
      details: [
        { label: "Стек", value: "Llama 3.2 + MidJourney + Telegram" },
        { label: "Результат", value: "Экономия 20 часов в неделю" },
      ],
    },
    {
      icon: ShoppingBag,
      title: "E-commerce автоматизация",
      tag: "E-commerce",
      details: [
        { label: "Стек", value: "Runway Gen-3 + ComfyUI" },
        { label: "Результат", value: "37% быстрее вывод на рынок" },
      ],
    },
  ];

  return (
    <section id="cases" className="py-24 md:py-32 px-6 md:px-8 bg-muted/30" data-testid="section-projects">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Реализованные проекты
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры автоматизаций и AI-решений с измеримыми результатами.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              tag={project.tag}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
