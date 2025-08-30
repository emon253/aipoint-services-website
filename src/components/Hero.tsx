import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="text-cyan-300/60 w-8 h-8 drop-shadow-lg" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="text-purple-300/60 w-6 h-6 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Target className="text-blue-300/60 w-10 h-10 drop-shadow-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border border-primary/30 text-white mb-8 shadow-xl shadow-primary/10">
            <Sparkles className="w-4 h-4 mr-2 text-cyan-300" />
            <span className="text-sm font-medium">AI-Powered Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Businesses with{' '}
            <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI-driven Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge software development, digital marketing strategies, 
            and emerging technologies. We build the future, today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onContactClick}
              size="lg"
              className="bg-gradient-to-r from-white to-gray-50 text-primary hover:from-white/95 hover:to-gray-50/95 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl glow-on-hover group shadow-xl"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/50 text-white hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 backdrop-blur-md px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;