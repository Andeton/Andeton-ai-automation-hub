import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30"
      data-testid="section-hero"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="https://i.imgur.com/JVCns8m.jpeg"
                  alt="Tony Derry"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-4 border-background" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                AI Creator & Automation Specialist
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Tony Derry
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Создаю AI-инструменты и автоматизации, которые работают пока ты спишь.
              Custom GPT, визуальные пайплайны, агентные системы.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#tools">
                  <ArrowDown className="w-4 h-4 mr-2" />
                  Смотреть проекты
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="https://t.me/TonyDerry" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
