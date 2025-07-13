import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <UploadSection />
      <PricingSection />
    </div>
  );
};

export default Index;
