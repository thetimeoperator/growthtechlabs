import React, { useState } from 'react';
import { SpaceBackground } from '@/components/SpaceBackground';
import { PackageCard } from '@/components/PackageCard';
import { PackageDetail } from '@/components/PackageDetail';
import { LeadForm } from '@/components/LeadForm';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Rocket, Zap, Sparkles, Globe } from 'lucide-react';

type ViewState = 'landing' | 'developer-detail' | 'marketing-detail' | 'developer-form' | 'marketing-form';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [selectedPackage, setSelectedPackage] = useState<'developer' | 'marketing' | null>(null);
  const [isBuildMode, setIsBuildMode] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);

  // Animation for Build/Blow Up text
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsBuildMode(prev => !prev);
        setTimeout(() => {
          setIsGlitching(false);
        }, 300);
      }, 150);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePackageSelect = (packageType: 'developer' | 'marketing') => {
    setSelectedPackage(packageType);
    setCurrentView(`${packageType}-detail` as ViewState);
  };

  const handleGetStarted = (packageType: 'developer' | 'marketing') => {
    setCurrentView(`${packageType}-form` as ViewState);
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setSelectedPackage(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'developer-detail':
        return (
          <PackageDetail
            type="developer"
            onBack={handleBackToLanding}
            onGetStarted={() => handleGetStarted('developer')}
          />
        );
      
      case 'marketing-detail':
        return (
          <PackageDetail
            type="marketing"
            onBack={handleBackToLanding}
            onGetStarted={() => handleGetStarted('marketing')}
          />
        );
      
      case 'developer-form':
        return <LeadForm packageType="developer" onClose={handleBackToLanding} />;
      
      case 'marketing-form':
        return <LeadForm packageType="marketing" onClose={handleBackToLanding} />;
      
      default:
        return (
          <div className="w-full max-w-7xl mx-auto space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center mb-8">
                <Badge variant="outline" className="glass text-primary border-primary/30 text-lg px-6 py-2">
                  GROWTHTECH LABS
                </Badge>
              </div>
              
              <h1 className="cyber-title text-6xl sm:text-7xl md:text-8xl mb-6 animate-float text-center">
                <div className="text-left inline-block">
                  <span className="text-primary">WE</span>
                  <br />
                  <span className={`text-accent transition-all duration-500 ${isGlitching ? 'animate-static-glitch' : ''}`}>
                    {isBuildMode ? 'BUILD' : 'BLOW UP'}
                  </span>
                  <br />
                  <span className="text-primary">TECH</span>
                </div>
              </h1>
              
              <p className="cyber-text text-xl sm:text-2xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                We build apps and make them go viral.
                <br />
                <span className="text-primary">Choose your mission path.</span>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg text-muted-foreground px-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="cyber-text">Precision Engineering</span>
                <span className="hidden sm:inline">•</span>
                <span className="cyber-text">Viral Growth</span>
                <span className="hidden sm:inline">•</span>
                <span className="cyber-text">Results Guaranteed</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
            </div>

            {/* Mission Selection */}
            <div className="space-y-8">
              <div className="text-center px-4">
                <h2 className="cyber-title text-3xl sm:text-4xl md:text-4xl text-primary mb-4">
                  SELECT YOUR MISSION
                </h2>
                <p className="cyber-text text-lg sm:text-xl md:text-xl text-muted-foreground">
                  Two paths. One destination: Success.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <PackageCard
                  type="developer"
                  onClick={() => handlePackageSelect('developer')}
                  isSelected={selectedPackage === 'developer'}
                />
                <PackageCard
                  type="marketing"
                  onClick={() => handlePackageSelect('marketing')}
                  isSelected={selectedPackage === 'marketing'}
                />
              </div>
            </div>

            {/* Call to Action */}
              <div className="text-center space-y-6 px-4">
                <div className="glass p-6 sm:p-8 rounded-lg max-w-3xl mx-auto">
                  <h3 className="cyber-title text-2xl sm:text-3xl md:text-3xl text-primary mb-4">
                    READY TO LAUNCH?
                  </h3>
                  <p className="cyber-text text-lg sm:text-xl md:text-xl text-muted-foreground mb-6">
                    Join the elite operators who chose excellence. 
                    Transform your vision into reality with GrowthTech Labs.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg">
                    <div className="flex items-center space-x-2">
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="cyber-text text-foreground">Rapid Deployment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      <span className="cyber-text text-foreground">Viral Growth</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Space Background */}
      <SpaceBackground />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full">
          {renderContent()}
        </div>
      </div>


    </div>
  );
};

export default Index;
