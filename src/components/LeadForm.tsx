import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Send, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LeadFormProps {
  packageType: 'developer' | 'marketing';
  onClose: () => void;
}

export const LeadForm = ({ packageType, onClose }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const packageData = {
    developer: {
      title: 'DEVELOPER PACKAGE',
      price: '$12,000',
      duration: '15 Days',
      color: 'primary'
    },
    marketing: {
      title: 'MARKETING PACKAGE', 
      price: '$20,000',
      duration: '2 Months',
      color: 'accent'
    }
  };

  const data = packageData[packageType];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for Formspree submission
      const form = new FormData();
      form.append('email', formData.email);
      form.append('project_title', formData.title);
      form.append('message', formData.description);
      form.append('package_type', packageType);
      form.append('package_price', data.price);
      form.append('package_duration', data.duration);

      const response = await fetch('https://formspree.io/f/xdkdpnry', {
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);

        toast({
          title: "Mission Brief Received!",
          description: "We'll contact you within 24 hours to discuss your project.",
        });

        // Auto close after success
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ email: '', title: '', description: '' });
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Transmission Failed",
        description: "Please try again. If the problem persists, contact support.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="glass border-primary/30 w-full max-w-md mx-auto">
        <CardContent className="p-4 sm:p-6 md:p-8 text-center">
          <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto mb-4 animate-pulse-glow" />
          <h3 className="cyber-title text-lg sm:text-xl text-primary mb-2">
            MISSION ACCEPTED
          </h3>
          <p className="cyber-text text-sm sm:text-base text-muted-foreground px-2">
            Your request has been transmitted to our command center.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass border-primary/30 w-full max-w-md mx-auto">
      <CardHeader className="text-center p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
          <Badge variant="outline" className={`glass text-${data.color} border-${data.color}/30 text-xs sm:text-sm`}>
            {data.duration}
          </Badge>
          <Badge variant="outline" className={`glass text-${data.color} border-${data.color}/30 text-xs sm:text-sm`}>
            {data.price}
          </Badge>
        </div>
        <CardTitle className="cyber-title text-lg sm:text-xl text-primary">
          {data.title}
        </CardTitle>
        <p className="cyber-text text-xs sm:text-sm text-muted-foreground px-2">
          Ready to begin your mission? Provide your details below.
        </p>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xdkdpnry" method="POST" className="space-y-4 sm:space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="cyber-text text-xs sm:text-sm text-foreground">
              Command Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              className="glass border-primary/30 focus:border-primary cyber-text text-sm"
            />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="cyber-text text-xs sm:text-sm text-foreground">
              Project Title *
            </Label>
            <Input
              id="title"
              name="project_title"
              placeholder="Enter your project name"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
              className="glass border-primary/30 focus:border-primary cyber-text text-sm"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="cyber-text text-xs sm:text-sm text-foreground">
              Mission Brief *
            </Label>
            <Textarea
              id="description"
              name="message"
              placeholder="Describe your vision, goals, and any specific requirements..."
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              required
              className="glass border-primary/30 focus:border-primary cyber-text text-sm min-h-[80px] sm:min-h-[100px] resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-${data.color} to-${data.color}-glow hover:scale-105 transition-all duration-300 cyber-title text-sm sm:text-base`}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                TRANSMITTING...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                LAUNCH MISSION
              </>
            )}
          </Button>
        </form>

        {/* Back button */}
        <Button
          variant="outline"
          onClick={onClose}
          className="w-full mt-3 sm:mt-4 glass border-muted/30 hover:border-primary/30 cyber-text text-sm"
        >
          Return to Mission Select
        </Button>
      </CardContent>
    </Card>
  );
};