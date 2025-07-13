import { Button } from "@/components/ui/button";
import { Upload, Sparkles, FileText, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-image.jpg";
import LanguageSwitcher from "./LanguageSwitcher";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(222.2 47.4% 11.2% / 0.95), hsl(261 65% 25% / 0.9)), url(${heroImage})`
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary-magic/20 rounded-full animate-magic-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-primary-magic/30 rounded-full animate-magic-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary-magic/15 rounded-full animate-magic-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t('hero.title')}
              <span className="block text-transparent bg-gradient-to-r from-primary-magic to-accent-foreground bg-clip-text">
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto my-12">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary-magic/20 rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-6 h-6 text-primary-magic" />
              </div>
              <p className="text-sm text-white/80">{t('hero.upload')}</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary-magic/20 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary-magic animate-magic-glow" />
              </div>
              <p className="text-sm text-white/80">{t('hero.aiMagic')}</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary-magic/20 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary-magic" />
              </div>
              <p className="text-sm text-white/80">{t('hero.preview')}</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary-magic/20 rounded-full flex items-center justify-center mx-auto">
                <Download className="w-6 h-6 text-primary-magic" />
              </div>
              <p className="text-sm text-white/80">{t('hero.download')}</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="magic" size="lg" className="w-full sm:w-auto">
              <Upload className="w-5 h-5 mr-2" />
              {t('hero.startTransformation')}
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
              {t('hero.seeHowItWorks')}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 text-white/70">
            <p className="text-sm mb-4">{t('hero.trustedBy')}</p>
            <div className="flex justify-center items-center space-x-8 text-xs">
              <span>✨ {t('hero.aiPowered')}</span>
              <span>🔒 {t('hero.secure')}</span>
              <span>⚡ {t('hero.fast')}</span>
              <span>📄 {t('hero.professional')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;