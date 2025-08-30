import { ExternalLink, Github, Star, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinTech Trading Platform',
      category: 'Finance',
      description: 'AI-powered trading platform with real-time analytics and automated portfolio management',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
      stats: [
        { label: 'Active Users', value: '10K+' },
        { label: 'Transactions/Day', value: '50K+' },
        { label: 'Success Rate', value: '99.9%' }
      ],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format',
      featured: true
    },
    {
      title: 'Healthcare Management System',
      category: 'Healthcare',
      description: 'HIPAA-compliant patient management system with AI-assisted diagnostics',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'OpenAI API'],
      stats: [
        { label: 'Patients Managed', value: '25K+' },
        { label: 'Hospitals', value: '15' },
        { label: 'Accuracy Rate', value: '98%' }
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format',
      featured: true
    },
    {
      title: 'E-commerce AI Recommender',
      category: 'E-commerce',
      description: 'Machine learning recommendation engine that increased sales by 40%',
      technologies: ['React', 'Django', 'PostgreSQL', 'Scikit-learn'],
      stats: [
        { label: 'Sales Increase', value: '40%' },
        { label: 'Products', value: '100K+' },
        { label: 'Conversion Rate', value: '15%' }
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format',
      featured: false
    }
  ];

  const achievements = [
    {
      icon: Star,
      number: '50+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across multiple industries'
    },
    {
      icon: Users,
      number: '25+',
      label: 'Happy Clients',
      description: 'Long-term partnerships with satisfied customers'
    },
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Average ROI',
      description: 'Return on investment for our clients'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing successful projects that have transformed businesses and delivered exceptional results
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
                </div>
                
                {/* Content */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 w-fit">
                    {project.category}
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="card-hover">
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-primary text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex}>
                        <div className="text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-xl font-semibold text-foreground mb-3">{achievement.label}</div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
