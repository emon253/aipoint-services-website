import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To democratize AI technology and empower businesses of all sizes to leverage cutting-edge solutions for sustainable growth and competitive advantage.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the global leader in AI-driven business transformation, creating a future where technology seamlessly enhances human potential.',
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Innovation, integrity, excellence, and client success. We believe in building long-term partnerships based on trust and exceptional results.',
    },
  ];

  const achievements = [
    { icon: Award, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '25+', label: 'Satisfied Clients' },
    { icon: Lightbulb, number: '100+', label: 'AI Solutions' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">AI Point</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the digital transformation revolution with innovative AI solutions, 
            expert software development, and strategic digital marketing.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="card-hover group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, 
                AI Point has emerged as a trusted partner for companies seeking digital transformation.
              </p>
              <p>
                Our team of expert developers, AI specialists, and digital marketing professionals work collaboratively 
                to deliver solutions that not only meet current needs but anticipate future challenges.
              </p>
              <p>
                From Fortune 500 companies to innovative startups, we've helped businesses across industries 
                harness the power of AI and modern technology to achieve unprecedented growth.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose AI Point */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">Why Choose AI Point?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Cutting-edge AI Technology',
              'Expert Development Team',
              'Proven Track Record',
              '24/7 Support & Maintenance'
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white/50 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="text-lg font-semibold text-foreground">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;