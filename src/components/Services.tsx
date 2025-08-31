import { Code, Megaphone, Brain, Database, Smartphone, Cloud, BarChart, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/** TS-safe variant factory */
const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
          "Custom web applications, mobile apps, and enterprise software solutions built with cutting-edge technologies.",
      features: ["Full-Stack Development", "Mobile App Development", "Enterprise Solutions", "API Integration"],
      color: "from-blue-500 via-cyan-500 to-sky-400",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description:
          "Comprehensive digital marketing strategies to boost your online presence and drive meaningful engagement.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
      color: "from-purple-500 via-fuchsia-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "AI & Emerging Tech",
      description:
          "Harness the power of AI to automate, predict, and optimize—from ML models to NLP, vision, and workflows.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Automation Solutions"],
      color: "from-emerald-500 via-teal-500 to-cyan-500",
    },
  ];

  const additionalServices = [
    { icon: Database, title: "Data Analytics", description: "Transform raw data into actionable insights" },
    { icon: Smartphone, title: "Mobile Solutions", description: "Native & cross-platform applications" },
    { icon: Cloud, title: "Cloud Services", description: "Scalable infra & cloud migrations" },
    { icon: BarChart, title: "Business Intelligence", description: "Dashboards & advanced reporting" },
    { icon: Shield, title: "Security & Compliance", description: "Hardening, audits, and best practices" },
  ];

  return (
      <section id="services" className="pt-10 bg-background scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              variants={stagger}
              className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp(0)} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p variants={fadeUp(0.08)} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to propel your business into the future
            </motion.p>
          </motion.div>

          {/* Main Services */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              variants={stagger}
              className="grid gap-8 lg:grid-cols-3 mb-20"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                  <motion.div
                      key={service.title}
                      variants={fadeUp(i * 0.08)}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="relative"
                  >
                    {/* gradient border */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-60 blur-sm" />
                    <Card className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-white/10">
                      {/* subtle background glow */}
                      <div
                          className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-tr ${service.color} opacity-20 blur-2xl`}
                      />
                      <CardHeader className="text-center pb-2">
                        <div
                            className={`mx-auto mb-6 inline-grid h-20 w-20 place-items-center rounded-full bg-gradient-to-tr ${service.color} shadow-lg ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110`}
                        >
                          <Icon className="h-10 w-10 text-white drop-shadow" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-8 pb-8 text-center">
                        <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>

                        {/* features with tick-in stagger */}
                        <motion.ul
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-2"
                        >
                          {service.features.map((f, idx) => (
                              <motion.li
                                  key={f}
                                  variants={fadeUp(idx * 0.06)}
                                  className="mx-auto flex max-w-xs items-center justify-center text-sm text-foreground/90"
                              >
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
                                {f}
                              </motion.li>
                          ))}
                        </motion.ul>
                      </CardContent>
                    </Card>
                  </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Expertise */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-20"
          >
            <motion.h3 variants={fadeUp(0)} className="text-3xl font-bold text-center text-foreground mb-12">
              Additional Expertise
            </motion.h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {additionalServices.map((s, i) => {
                const Icon = s.icon;
                return (
                    <motion.div key={s.title} variants={fadeUp(i * 0.08)} whileHover={{ y: -4 }}>
                      <Card className="group text-center border-white/10 bg-white/5 backdrop-blur">
                        <CardContent className="p-6">
                          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="mb-1 font-semibold text-foreground">{s.title}</h4>
                          <p className="text-sm text-muted-foreground">{s.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-10">
            <motion.h3 variants={fadeUp(0)} className="text-3xl font-bold text-center text-foreground mb-12">
              Our Development Process
            </motion.h3>

            <div className="relative">
              <div className="pointer-events-none absolute left-1/2 top-10 hidden h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
              <div className="grid gap-8 md:grid-cols-4">
                {[
                  { step: "01", title: "Discovery", description: "Understanding your business needs and requirements" },
                  { step: "02", title: "Strategy", description: "Developing a comprehensive project roadmap" },
                  { step: "03", title: "Development", description: "Building your solution with agile methodologies" },
                  { step: "04", title: "Launch", description: "Deploying and supporting your finished product" },
                ].map((p, i) => (
                    <motion.div key={p.step} variants={fadeUp(i * 0.08)} className="text-center group relative">
                      <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg ring-1 ring-white/20 transition-transform group-hover:scale-110">
                        {p.step}
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">{p.title}</h4>
                      <p className="text-muted-foreground">{p.description}</p>
                    </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Services;
