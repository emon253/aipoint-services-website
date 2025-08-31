import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

// Count-up number when visible
function AnimatedNumber({ to = 0, duration = 1.2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { once: true, margin: "0px 0px -20% 0px" });

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 100, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return () => unsub();
  }, [rounded]);

  return (
      <span ref={inViewRef as any}>
      <span ref={ref}>0</span>
      +
    </span>
  );
}

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
          "To democratize AI technology and empower businesses of all sizes to leverage cutting-edge solutions for sustainable growth and competitive advantage.",
      color: "from-indigo-500/30 via-violet-500/25 to-fuchsia-500/30",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
          "To be the global leader in AI-driven business transformation, creating a future where technology seamlessly enhances human potential.",
      color: "from-emerald-500/30 via-teal-500/25 to-cyan-500/30",
    },
    {
      icon: Heart,
      title: "Values",
      description:
          "Innovation, integrity, excellence, and client success. We believe in building long-term partnerships based on trust and exceptional results.",
      color: "from-amber-500/30 via-orange-500/25 to-rose-500/30",
    },
  ];

  const achievements = [
    { icon: Award, number: 50, label: "Projects Completed" },
    { icon: Users, number: 25, label: "Satisfied Clients" },
    { icon: Lightbulb, number: 100, label: "AI Solutions" },
  ];

  return (
      <section id="about" className="relative py-20 bg-muted/30 scroll-mt-24">
        {/* subtle gradient mesh */}
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]"
        >
          <div className="absolute -top-24 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/15 via-fuchsia-500/10 to-emerald-500/15 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-gradient">AI Point</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the digital transformation revolution with innovative AI solutions, expert software development,
              and strategic digital marketing.
            </motion.p>
          </motion.div>

          {/* Mission / Vision / Values */}
          <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                  <motion.div key={v.title} custom={i} variants={fadeUp} whileHover={{ y: -6 }}>
                    <div className="relative">
                      {/* gradient border glow */}
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 opacity-60 blur-sm" />
                      <Card className="relative group overflow-hidden rounded-2xl border-white/10 bg-white/5 backdrop-blur">
                        {/* card aura */}
                        <div className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-tr ${v.color} blur-2xl opacity-20`} />
                        <CardContent className="p-8 text-center">
                          <div className="inline-grid place-items-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/15 transition-colors">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">{v.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
              );
            })}
          </motion.div>

          {/* Overview + Achievements */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Overview copy */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-4"
            >
              <motion.h3 variants={fadeUp} className="text-3xl font-bold text-foreground">
                Transforming Ideas into Digital Reality
              </motion.h3>
              <motion.p variants={fadeUp} className="text-muted-foreground">
                Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions,
                AI Point has emerged as a trusted partner for companies seeking digital transformation.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground">
                Our team of expert developers, AI specialists, and digital marketing professionals work collaboratively
                to deliver solutions that not only meet current needs but anticipate future challenges.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground">
                From Fortune 500 companies to innovative startups, we help businesses harness the power of AI and modern
                technology to achieve measurable growth.
              </motion.p>
            </motion.div>

            {/* Achievements cards with count-up */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-2 gap-6"
            >
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                    <motion.div key={a.label} custom={i} variants={fadeUp} whileHover={{ y: -4 }}>
                      <Card className="text-center border-white/10 bg-white/5 backdrop-blur">
                        <CardContent className="p-6">
                          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-3xl font-bold text-primary mb-2">
                            <AnimatedNumber to={a.number} />
                          </div>
                          <div className="text-sm text-muted-foreground">{a.label}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Why Choose */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h3 variants={fadeUp} className="text-3xl font-bold text-foreground mb-8">
              Why Choose AI Point?
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Cutting-edge AI Technology",
                "Expert Development Team",
                "Proven Track Record",
                "24/7 Support & Maintenance",
              ].map((feature, i) => (
                  <motion.div key={feature} custom={i} variants={fadeUp} whileHover={{ y: -3 }}>
                    <div className="p-6 rounded-lg border border-white/10 bg-white/50 backdrop-blur hover:border-primary/40 transition-colors">
                      <div className="text-lg font-semibold text-foreground">{feature}</div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;
