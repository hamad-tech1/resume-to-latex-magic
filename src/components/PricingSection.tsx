import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const PricingSection = () => {
  const { t } = useTranslation();
  const plans = [
    {
      name: "Basic",
      price: "$4.99",
      description: "Perfect for individual use",
      features: [
        "1 Resume Conversion",
        "PDF Output",
        "Basic LaTeX Template",
        "Email Support",
        "24-hour Processing"
      ],
      recommended: false
    },
    {
      name: "Professional", 
      price: "$9.99",
      description: "Most popular choice",
      features: [
        "3 Resume Conversions",
        "Premium LaTeX Templates",
        "High-Quality PDF Output",
        "Priority Processing (1 hour)",
        "Email & Chat Support",
        "Revision Support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "$14.99", 
      description: "For teams and businesses",
      features: [
        "Unlimited Conversions",
        "All Premium Templates",
        "Bulk Processing",
        "Instant Processing",
        "Dedicated Support",
        "Custom Templates",
        "API Access"
      ],
      recommended: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose Your Magic Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your resume with our AI-powered LaTeX conversion. Choose the plan that fits your needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.recommended 
                    ? "border-primary-magic shadow-magic bg-gradient-to-b from-card to-accent/30 scale-105" 
                    : "border-border hover:border-primary-magic/50"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-magic text-primary-magic-foreground text-sm font-medium py-2 px-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center space-y-4 ${plan.recommended ? 'pt-16' : 'pt-8'}`}>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {plan.name}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      per conversion
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.recommended ? "magic" : "outline"}
                    size="lg" 
                    className="w-full"
                  >
                    {plan.recommended && <Sparkles className="w-4 h-4 mr-2" />}
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 space-y-4">
            <p className="text-muted-foreground">
              Not sure which plan to choose? Start with our Basic plan and upgrade anytime.
            </p>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <span>✅ Secure Payment</span>
              <span>✅ Instant Download</span>
              <span>✅ Money-back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;