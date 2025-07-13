import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, FileText, Download, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Upload,
      title: t('process.steps.upload.title'),
      description: t('process.steps.upload.description'),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Brain,
      title: t('process.steps.analyze.title'),
      description: t('process.steps.analyze.description'),
      color: "text-primary-magic",
      bgColor: "bg-primary-magic/10"
    },
    {
      icon: FileText,
      title: t('process.steps.generate.title'),
      description: t('process.steps.generate.description'),
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Download,
      title: t('process.steps.enjoy.title'),
      description: t('process.steps.enjoy.description'),
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('process.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('process.description')}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full transition-all duration-300 hover:shadow-lg border-border hover:border-primary-magic/50">
                  <CardContent className="p-6 text-center space-y-4">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-magic text-primary-magic-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-magic" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary-magic/10 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-primary-magic" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">{t('process.features.aiPowered.title')}</h4>
              <p className="text-muted-foreground">
                {t('process.features.aiPowered.description')}
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary-magic/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary-magic" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">{t('process.features.latexQuality.title')}</h4>
              <p className="text-muted-foreground">
                {t('process.features.latexQuality.description')}
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary-magic/10 rounded-full flex items-center justify-center mx-auto">
                <Download className="w-6 h-6 text-primary-magic" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">{t('process.features.instantResults.title')}</h4>
              <p className="text-muted-foreground">
                {t('process.features.instantResults.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;