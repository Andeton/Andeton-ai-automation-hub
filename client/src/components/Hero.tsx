import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useState } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center"
      data-testid="section-hero"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_rgba(201,169,98,0.15)]">
                {!imgError ? (
                  <img
                    src="https://i.imgur.com/JVCns8m.jpeg"
                    alt="Tony Derry"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-primary">TD</span>
                  </div>
                )}
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-4 border-background shadow-lg" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
                {t("heroSubtitle")}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Tony Derry
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href="#tools">
                  <ArrowDown className="w-4 h-4 mr-2" />
                  {t("heroCtaProjects")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                <a href="https://t.me/TonyDerry" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("heroCtaTelegram")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
