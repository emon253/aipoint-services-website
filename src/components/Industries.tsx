import { 
  Building2, 
  Heart, 
  ShoppingCart, 
  GraduationCap, 
  Shield, 
  Banknote,
  Factory,
  Truck
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      icon: Banknote,
      title: 'Finance',
      description: 'Secure fintech solutions, trading platforms, and blockchain applications',
      projects: '15+ Projects',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'HIPAA-compliant systems, telemedicine platforms, and AI diagnostics',
      projects: '12+ Projects',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Custom e-commerce platforms, inventory management, and AI recommendations',
      projects: '20+ Projects',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Learning management systems, online courses, and educational AI tools',
      projects: '8+ Projects',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Government',
      description: 'Secure government portals, citizen services, and compliance solutions',
      projects: '5+ Projects',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'IoT solutions, supply chain management, and predictive maintenance',
      projects: '10+ Projects',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Property management systems, virtual tours, and market analytics',
      projects: '7+ Projects',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Fleet management, route optimization, and warehouse automation',
      projects: '6+ Projects',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering tailored solutions across diverse industries with deep domain expertise 
            and cutting-edge technology
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="card-hover group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${industry.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {industry.projects}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industry Focus Areas */}
        <div className="bg-white/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Industry Focus
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Compliance Rate</div>
              <p className="text-muted-foreground">
                All solutions meet industry-specific regulations and standards
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Industries Served</div>
              <p className="text-muted-foreground">
                Deep expertise across multiple industry verticals
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Domain Experts</div>
              <p className="text-muted-foreground">
                Specialized knowledge in industry-specific challenges
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Teaser */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Success Stories Across Industries
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From healthcare platforms processing millions of patient records to fintech solutions 
            handling billions in transactions, we've delivered impactful results across every sector.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Process Efficiency Gain</div>
            </div>
            <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;