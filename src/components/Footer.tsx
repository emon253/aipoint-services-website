import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const services = [
    'Software Development',
    'Digital Marketing',
    'AI Solutions',
    'Cloud Services',
  ];

  const industries = [
    'Finance',
    'Healthcare',
    'E-commerce',
    'Education',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AI Point
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering businesses with AI-driven solutions. We transform ideas into digital reality 
              through innovative software development and strategic digital marketing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Mail className="w-4 h-4 mr-3" />
                <span>contact@aipoint.com</span>
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-background/80">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-background/80">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/80 mb-4 md:mb-0">
              © {currentYear} AI Point. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center text-background/80 hover:bg-background/20 hover:text-background transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;