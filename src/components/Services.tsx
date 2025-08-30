import { Code, Megaphone, Brain, Database, Smartphone, Cloud, BarChart, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom web applications, mobile apps, and enterprise software solutions built with cutting-edge technologies.',
      features: ['Full-Stack Development', 'Mobile App Development', 'Enterprise Solutions', 'API Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive meaningful engagement.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI & Emerging Tech',
      description: 'Harness the power of artificial intelligence and emerging technologies to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Automation Solutions'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const additionalServices = [
    { icon: Database, title: 'Data Analytics', description: 'Transform raw data into actionable business insights' },
    { icon: Smartphone, title: 'Mobile Solutions', description: 'Native and cross-platform mobile applications' },
    { icon: Cloud, title: 'Cloud Services', description: 'Scalable cloud infrastructure and migration services' },
    { icon: BarChart, title: 'Business Intelligence', description: 'Advanced reporting and dashboard solutions' },
    { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive security audits and protection systems' }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to propel your business into the future
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card group">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Additional Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-hover group text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Development Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a comprehensive project roadmap' },
              { step: '03', title: 'Development', description: 'Building your solution with agile methodologies' },
              { step: '04', title: 'Launch', description: 'Deploying and supporting your finished product' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;