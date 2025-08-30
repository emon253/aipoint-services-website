import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { X, Send, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log('Form Data:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    
    setIsSubmitting(false);
    onClose();
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+889-2351233'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@aipoint.com',
      href: 'mailto:contact@aipoint.com'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Dhaka, Bangladesh',
      href: '#'
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-foreground pr-8">
            Get Your Free Consultation
          </DialogTitle>
          <p className="text-muted-foreground">
            Ready to transform your business? Let's discuss your project and explore how we can help.
          </p>
          {/*<Button*/}
          {/*  variant="ghost"*/}
          {/*  size="sm"*/}
          {/*  onClick={onClose}*/}
          {/*  className="absolute right-0 top-0 rounded-full p-2"*/}
          {/*>*/}
          {/*  <X className="h-4 w-4" />*/}
          {/*</Button>*/}
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project, requirements, and goals..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of experts is standing by to discuss your project and provide you with a 
                customized solution that meets your unique business needs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <a 
                          href={info.href}
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-white/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">What Happens Next?</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• We'll review your requirements within 24 hours</li>
                  <li>• Schedule a free consultation call</li>
                  <li>• Provide a detailed project proposal</li>
                  <li>• Start building your solution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;