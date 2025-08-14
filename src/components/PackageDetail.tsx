import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Rocket, 
  Zap, 
  Code, 
  Database, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Heart, 
  Target,
  Calendar,
  CheckCircle,
  Sparkles,
  Dumbbell
} from 'lucide-react';

interface PackageDetailProps {
  type: 'developer' | 'marketing';
  onBack: () => void;
  onGetStarted: () => void;
}

export const PackageDetail = ({ type, onBack, onGetStarted }: PackageDetailProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const packageData = {
    developer: {
      title: 'DEVELOPER PACKAGE',
      subtitle: 'FAST and ELITE App Development\n+ Launch Your Product With Our Social Pages',
      price: '$12,000',
      duration: '15 Days',
      icon: Rocket,
      gradient: 'from-primary to-primary-glow',
      process: [
        {
          day: 'Days 1-3',
          title: 'Planning & Architecture',
          description: 'Technical specification, database design, and project roadmap creation.',
          icon: Target,
          features: ['Technical Architecture', 'Database Planning', 'UI/UX Wireframes', 'Project Timeline']
        },
        {
          day: 'Days 4-8', 
          title: 'Frontend Design',
          description: 'Design the complete frontend to the app.',
          icon: Database,
          features: ['Complete Design in v0', 'Design Every Component', 'Fully Working Prototype', 'Branding Applied']
        },
        {
          day: 'Days 9-12',
          title: 'Backend Development',
          description: 'Complete backend design and integration.',
          icon: Code,
          features: ['Database Schema Creation', 'API Integration', 'Login and Auth', 'Complete Logic']
        },
        {
          day: 'Days 13-15',
          title: 'Testing & Deployment',
          description: 'Quality assurance, performance optimization, and production deployment.',
          icon: CheckCircle,
          features: ['Quality Testing', 'Performance Optimization', 'Production Deployment', 'Documentation']
        }
      ],
      portfolio: [
        { 
          name: 'thiccr', 
          icon: Dumbbell,
          description: 'A simple workout to-do-list app',
          bgImage: '/thiccrbackground.png',
          category: 'Fitness'
        }
      ]
    },
    marketing: {
      title: 'MARKETING PACKAGE',
      subtitle: 'OWN A Viral Tik Tok & Instagram Account', 
      price: '$20,000',
      duration: '2 Months',
      icon: Zap,
      gradient: 'from-accent to-accent-glow',
      process: [
        {
          day: 'Week 1-2',
          title: 'Begin Testing Content',
          description: 'Start testing content to see what works.',
          icon: Target,
          features: ['Begin Posting', 'Content Strategy', 'Audience Analysis', 'Competitor Research']
        },
        {
          day: 'Week 3-4',
          title: 'Focus On What Works',
          description: 'High-speed & high-quality content creation.',
          icon: Sparkles,
          features: ['2-5 Posts Per Day', 'Repeat What Works', 'Community Engagement', 'Trend Analysis']
        },
        {
          day: 'Week 5-6',
          title: 'Viral Optimization',
          description: 'Take what works and aim for pure VIRALITY.',
          icon: TrendingUp,
          features: ['Algorithm Optimization', 'Viral Content Push', 'Remix HUGE Posts', 'Growth Hacking']
        },
        {
          day: 'Week 7-8',
          title: 'Scale & Sustain',
          description: 'Community scaling and sustainable growth system implementation',
          icon: Users,
          features: ['Community Growth', 'Automation Setup', 'Create Viral Content Templates', 'Create Growth System']
        }
      ],
      portfolio: [
        { 
          name: 'SinaGPT', 
          socialStats: {
            instagram: '70K followers',
            tiktok: '120K followers', 
            youtube: '4.2K subscribers'
          },
          icon: TrendingUp,
          description: 'My Personal Brand',
          bgImage: '/sinafairy.png',
          category: 'AI'
        },
        { 
          name: 'Dr. Boxing', 
          socialStats: {
            instagram: '35K followers',
            tiktok: '19K followers', 
            youtube: '19K subscribers'
          },
          icon: Dumbbell,
          description: '@therealdrboxing',
          bgImage: '/dr-boxing-bg.png',
          category: 'Sports'
        },
        { 
          name: 'The Politiclipper', 
          socialStats: {
            tiktok: '20K followers', 
            youtube: '50K subscribers'
          },
          icon: Users,
          description: '16 million views in 7 days',
          bgImage: '/POLITCICS.png',
          category: 'Politics'
        },
        { 
          name: 'AI UGC Account', 
          socialStats: {
            instagram: '10K followers'
          },
          icon: Sparkles,
          description: 'Generated 1100 user sign ups for AI Apply within 1 months via around 1.8 million UGC views',
          bgImage: '/aiugc.jpeg',
          category: 'UGC and AI UGC'
        }
      ]
    }
  };

  const data = packageData[type];
  const Icon = data.icon;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4">
      {/* Header */}
      <div className="text-center space-y-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="glass border-muted/30 hover:border-primary/30 cyber-text mb-4 sm:mb-6 text-sm"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Return to Mission Select
        </Button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary animate-pulse-glow" />
          <Badge variant="outline" className="glass text-primary border-primary/30 text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2">
            {data.duration}
          </Badge>
        </div>

        <h1 className="cyber-title text-2xl sm:text-3xl md:text-4xl text-primary mb-2">
          {data.title}
        </h1>
        <p className="cyber-text text-base sm:text-lg md:text-xl text-muted-foreground mb-4 whitespace-pre-line">
          {data.subtitle}
        </p>
        <div className="cyber-title text-xl sm:text-2xl md:text-3xl text-foreground">
          {data.price}
        </div>
      </div>

      {/* Process Timeline */}
      <Card className="glass border-primary/30">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <h2 className="cyber-title text-lg sm:text-xl md:text-2xl text-primary mb-4 sm:mb-6 text-center">
            MISSION TIMELINE
          </h2>
          
          <div className="space-y-4 sm:space-y-6">
            {data.process.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index <= currentStep;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-start space-x-3 sm:space-x-4 md:space-x-6 p-3 sm:p-4 md:p-6 rounded-lg transition-all duration-500 cursor-pointer ${
                    isActive ? 'glass-hover' : 'opacity-60'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  {/* Timeline line */}
                  {index < data.process.length - 1 && (
                    <div className="absolute left-6 sm:left-8 top-12 sm:top-16 w-px h-16 sm:h-20 bg-gradient-to-b from-primary to-transparent opacity-30" />
                  )}
                  
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass flex items-center justify-center ${
                    isActive ? 'neon-cyan' : ''
                  }`}>
                    <StepIcon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <Badge variant="outline" className="glass text-xs w-fit">
                        {step.day}
                      </Badge>
                      <h3 className="cyber-title text-sm sm:text-base md:text-lg text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="cyber-text text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span className="cyber-text text-xs text-foreground leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="cyber-text text-sm text-muted-foreground">Mission Progress</span>
              <span className="cyber-text text-sm text-primary">{Math.round(((currentStep + 1) / data.process.length) * 100)}%</span>
            </div>
            <Progress value={((currentStep + 1) / data.process.length) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Button
          onClick={onGetStarted}
          className={`bg-gradient-to-r ${data.gradient} hover:scale-105 transition-all duration-300 cyber-title text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6`}
          size="lg"
        >
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" />
          BEGIN MISSION
        </Button>
      </div>

      {/* Portfolio Showcase */}
      <Card className="glass border-primary/30 overflow-hidden">
        <CardContent className="p-6 sm:p-8 md:p-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="cyber-title text-2xl sm:text-3xl md:text-4xl text-primary mb-3">
              PROVEN RESULTS
            </h2>
            <p className="cyber-text text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Our portfolio speaks for itself. Each project represents excellence in execution and measurable success.
            </p>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {data.portfolio.map((project, index) => {
              const ProjectIcon = project.icon;
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background/20 to-background/5 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
                  onClick={() => {
                    let url = '';
                    if (project.name === 'thiccr') {
                      url = 'https://www.thiccr.online';
                    } else if (project.name === 'SinaGPT') {
                      url = 'https://www.instagram.com/sina.growthtech/';
                    } else if (project.name === 'Dr. Boxing') {
                      url = 'https://www.instagram.com/therealdrboxing/';
                    }
                    if (url) {
                      window.open(url, '_blank');
                    }
                  }}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.bgImage}
                      alt={project.name}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between min-h-[280px]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
                          <ProjectIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="glass text-xs border-primary/30 text-primary mb-2">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="flex-1">
                      <h3 className="cyber-title text-xl sm:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="cyber-text text-sm text-muted-foreground mb-4 opacity-80">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Custom Title Section - Only show for developer package */}
                    {type === 'developer' && (
                      <div className="pt-4 border-t border-primary/20">
                        <span className="cyber-text text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                          App Performance
                        </span>
                        <h4 className="cyber-title text-xl text-primary">
                          COMING SOON
                        </h4>
                      </div>
                    )}
                    
                    {/* Social Media Stats - Only show for marketing package */}
                    {project.socialStats && (
                      <div className="pt-4 border-t border-primary/20">
                        <div className="flex items-center justify-between mb-3">
                          <span className="cyber-text text-xs text-muted-foreground uppercase tracking-wider">
                            Social Media Reach
                          </span>
                          <div className="flex items-center space-x-2">
                            {project.name === 'The Politiclipper' ? (
                              <>
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="cyber-text text-sm text-red-500">Dead</span>
                              </>
                            ) : (
                              <>
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="cyber-text text-sm text-primary">Live</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="space-y-1">
                          {project.socialStats.instagram && (
                            <div className="flex justify-between items-center">
                              <span className="cyber-text text-xs text-muted-foreground">Instagram:</span>
                              <span className="cyber-text text-sm text-primary font-semibold">{project.socialStats.instagram}</span>
                            </div>
                          )}
                          {project.socialStats.tiktok && (
                            <div className="flex justify-between items-center">
                              <span className="cyber-text text-xs text-muted-foreground">TikTok:</span>
                              <span className="cyber-text text-sm text-primary font-semibold">{project.socialStats.tiktok}</span>
                            </div>
                          )}
                          {project.socialStats.youtube && (
                            <div className="flex justify-between items-center">
                              <span className="cyber-text text-xs text-muted-foreground">YouTube:</span>
                              <span className="cyber-text text-sm text-primary font-semibold">{project.socialStats.youtube}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-500 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="cyber-text text-sm text-foreground">
                Your project could be next in our portfolio
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};