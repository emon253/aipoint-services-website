import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, LineChart, Laugh, ShieldCheck, Headphones } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface HeroProps {
  onContactClick: () => void;
}

/** Count-up when in view (integers) */
function AnimatedNumber({ to, duration = 1.2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(anchorRef, { once: true, margin: "0px 0px -20% 0px" });

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 100, damping: 20, mass: 0.6 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      // animate to target
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / (duration * 1000));
        mv.set(p * to);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, [inView, to, duration, mv]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = Number(v).toLocaleString();
    });
    return () => unsub();
  }, [rounded]);

  return (
      <>
        <span ref={anchorRef} className="sr-only">counter anchor</span>
        <span ref={ref}>0</span>
      </>
  );
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
      <section
          id="home"
          className="relative min-h-[calc(50svh)] scroll-mt-24 isolate overflow-hidden bg-[#08090B] py-24 sm:pt-28 lg:pt-40"
      >
        {/* decorative gradient auras (muted on mobile for readability/perf) */}
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"
        >
          <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-fuchsia-500/25 blur-3xl md:h-[32rem] md:w-[32rem] lg:h-[36rem] lg:w-[36rem]" />
        </div>

        {/* subtle noise / dots — lighter on mobile */}
        <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.04)_1px,_transparent_1px)] [background-size:18px_18px] md:opacity-100 opacity-80"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4"/>
              AI-Powered Solutions
            </div>

            <h1 className="mt-5 text-[clamp(28px,6vw,44px)] font-bold leading-[1.15] text-white md:text-6xl">
              AI Solutions that{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              power your business
            </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
              Transform with cutting-edge software, intelligent marketing, and automation.
              We turn ideas into measurable growth—fast.
            </p>

            {/* CTAs */}
            <div
                className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Button
                  onClick={onContactClick}
                  size="lg"
                  className="group bg-white text-black hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({behavior: "smooth"})}
                  className="border-white/40 text-white bg-white/10 w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats with count-up */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {[
                {Icon: LineChart, value: 50, suffix: "+", label: "Projects"},
                {Icon: Laugh, value: 25, suffix: "+", label: "Happy Clients"},
                {Icon: ShieldCheck, value: 100, suffix: "%", label: "Success Rate"},
                {Icon: Headphones, value: 24, suffix: "/7", label: "Support"},
              ].map(({Icon, value, suffix, label}) => (
                  <div key={label}
                       className="rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10">
                    <div
                        className="group rounded-2xl bg-white/5 px-3 py-4 sm:px-4 sm:py-5 text-center shadow-sm backdrop-blur-lg transition hover:shadow-lg">
                      <Icon className="mx-auto mb-1.5 h-5 w-5 text-white/75"/>
                      <div className="text-xl sm:text-3xl font-bold text-white">
                        <AnimatedNumber to={value}/>
                        <span>{suffix}</span>
                      </div>
                      <div className="text-[11px] sm:text-xs uppercase tracking-wide text-white/70">{label}</div>
                    </div>
                  </div>
              ))}
            </div>

            <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                style={{
                  backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.35) 0%,   /* soft black at the top */
        rgba(0,0,0,0.15) 20%,  /* gently reducing shadow */
        rgba(0,0,0,0.05) 40%,  /* almost gone */
        rgba(251,251,251,0.7) 75%, /* light tint for smooth handoff */
        rgba(251,251,251,1) 100%   /* pure off-white bottom */
      )
    `,
                }}
            />


          </div>

          {/* Right: visual — hidden on mobile as requested */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto aspect-square w-4/5 max-w-[520px]">
              <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-violet-400 to-fuchsia-400 opacity-80 blur-2xl"/>
              <div className="absolute inset-[6%] rounded-full border border-white/20 bg-black/40 backdrop-blur-md"/>
              <div className="absolute inset-[6%] rounded-full border border-white/10">
                <div
                    className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-white/80 motion-safe:animate-[spin_7s_linear_infinite]"/>
              </div>
              <div
                  className="absolute inset-[14%] rounded-full border border-dashed border-white/15 motion-safe:animate-[spin_20s_linear_infinite]"/>
            </div>
          </div>

        </div>
      </section>
  );
};

export default Hero;
