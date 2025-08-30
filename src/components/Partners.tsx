import { Card, CardContent } from '@/components/ui/card';

const Partners = () => {
  // Using placeholder company names for the demo
  const partners = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudTech', logo: 'CT' },
    { name: 'AI Systems', logo: 'AS' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'SmartSoft', logo: 'SS' },
    { name: 'FutureTech', logo: 'FT' }
  ];

  const testimonials = [
    {
      quote: "AI Point transformed our business processes with their innovative AI solutions. The ROI was evident within the first quarter.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp"
    },
    {
      quote: "Outstanding software development capabilities. They delivered our project on time and exceeded expectations.",
      author: "Michael Chen",
      position: "VP Engineering, InnovateLab",
      company: "InnovateLab"
    },
    {
      quote: "Their digital marketing strategies increased our online presence by 300%. Truly exceptional results.",
      author: "Emily Rodriguez",
      position: "Marketing Director, DataFlow",
      company: "DataFlow"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional results and drive innovation
          </p>
        </div>

        {/* Partners Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-primary font-bold text-lg hover:shadow-lg transition-shadow cursor-pointer">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Our Clients Say
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-white/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Active Clients</div>
              <p className="text-muted-foreground text-sm">
                Long-term partnerships with industry leaders
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Satisfaction Rate</div>
              <p className="text-muted-foreground text-sm">
                Consistently exceeding client expectations
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground mb-2">Projects Delivered</div>
              <p className="text-muted-foreground text-sm">
                Successfully completed across all industries
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg font-semibold text-foreground mb-2">Support</div>
              <p className="text-muted-foreground text-sm">
                Round-the-clock assistance and maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;