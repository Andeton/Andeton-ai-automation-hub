import { ExternalLink, MessageCircle, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  const links = [
    {
      name: "Telegram",
      description: "Быстрая связь",
      url: "https://t.me/TonyDerry",
      icon: MessageCircle,
    },
    {
      name: "LinkedIn",
      description: "Профессиональная сеть",
      url: "https://www.linkedin.com/in/ai-gen-td/",
      icon: Linkedin,
    },
    {
      name: "Email",
      description: "Для деловых запросов",
      url: "mailto:hello@tonyderry.com",
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8" data-testid="section-social">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Давай пообщаемся
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Выбери удобный способ связи — отвечаю в течение дня.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 text-base hover-elevate px-6 py-4 rounded-xl border border-border/70 bg-background transition-all duration-200 w-full sm:w-auto"
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                <Icon className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{link.name}</div>
                  <div className="text-sm text-muted-foreground">{link.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
