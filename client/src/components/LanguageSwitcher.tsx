import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "en" ? "ru" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLang}
      className="fixed top-4 right-4 z-50 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card"
    >
      <Globe className="w-4 h-4 mr-2" />
      {t("switchLang")}
    </Button>
  );
}
