import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Rocket, Zap, Star, Target } from 'lucide-react';

interface PackageCardProps {
  type: 'developer' | 'marketing';
  onClick: () => void;
  isSelected: boolean;
}

export const PackageCard = ({ type, onClick, isSelected }: PackageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const packageData = {
    developer: {
      title: 'TECH PACKAGE',
      subtitle: 'We build your idea in 15 days',
      price: '$12,000',
      duration: '15 Days',
      icon: Rocket,
      gradient: 'from-primary to-primary-glow',
      features: [
        'Complete MVP Development',
        'Backend Infrastructure',
        'Authentication System',
        'Professional Landing Page',
        'Core Feature Implementation',
        'You OWN The Code'
      ],
      description: 'Transform your idea into a fully functional application in 15 days.',
      glowColor: 'hsl(177 70% 60% / 0.3)'
    },
    marketing: {
      title: 'MARKETING PACKAGE',
      subtitle: 'We build you a viral Tik Tok & Instagram account',
      price: '$20,000',
      duration: '2 Months',
      icon: Zap,
      gradient: 'from-accent to-accent-glow',
      features: [
        'Organically Go Viral',
        '2-5 Posts Daily Minimum',
        'OWN Accounts That Bring In Users',
        'Community Development',
        'OWN VIRAL TikTok & Instagram Pages',
        'What Your CMO Should Be Doing'
      ],
      description: 'Build a viral brand from scratch in 2 months, organically with HIGH-QUALITY content.',
      glowColor: 'hsl(270 95% 75% / 0.3)'
    }
  };

  const data = packageData[type];
  const Icon = data.icon;

  return (
    <Card 
      className={`relative h-full transition-all duration-500 cursor-pointer glass glass-hover group ${
        isSelected ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `0 0 30px ${data.glowColor}` : undefined
      }}
    >
      {/* Animated border */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${data.gradient} opacity-20 blur-sm transition-opacity duration-300 ${
        isHovered ? 'opacity-40' : ''
      }`} />
      
      <CardContent className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Badge variant="outline" className="glass text-primary border-primary/30">
            {data.duration}
          </Badge>
          <Icon className={`w-8 h-8 transition-all duration-300 ${
            isHovered ? 'text-primary scale-110 animate-pulse-glow' : 'text-muted-foreground'
          }`} />
        </div>

        {/* Title */}
        <div className="mb-4 sm:mb-6">
          <h3 className="cyber-title text-lg sm:text-xl md:text-2xl text-primary mb-2">
            {data.title}
          </h3>
          <p className="cyber-text text-sm sm:text-base md:text-lg text-muted-foreground">
            {data.subtitle}
          </p>
        </div>

        {/* Price */}
        <div className="mb-4 sm:mb-6">
          <div className="cyber-title text-2xl sm:text-3xl md:text-4xl text-foreground mb-2">
            {data.price}
          </div>
          <p className="cyber-text text-xs sm:text-sm text-muted-foreground">
            {data.description}
          </p>
        </div>

        {/* Features */}
        <div className="flex-1 mb-4 sm:mb-6">
          <div className="space-y-2 sm:space-y-3">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="cyber-text text-xs sm:text-sm text-foreground leading-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className={`w-full bg-gradient-to-r ${data.gradient} hover:scale-105 transition-all duration-300 cyber-title text-sm sm:text-base`}
          size="lg"
        >
          <span>CHOOSE MISSION</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
        </Button>

        {/* Hover effect overlay */}
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${data.gradient} opacity-0 transition-opacity duration-300 pointer-events-none ${
          isSelected ? 'opacity-10' : ''
        }`} />
      </CardContent>
    </Card>
  );
};