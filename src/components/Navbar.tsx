import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Menu, X} from "lucide-react";
import clsx from "clsx";

interface NavbarProps {
    onContactClick: () => void;
}

const SECTIONS = ["home", "about", "services", "industries", "portfolio"];

const Navbar = ({onContactClick}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string>("home");
    const menuRef = useRef<HTMLDivElement>(null);

    // Scroll style + scrollspy
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 6);

            let current = "home";
            for (const id of SECTIONS) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.4) current = id;
            }
            setActive(current);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile on ESC and click outside + lock scroll when open
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
        const onClick = (e: MouseEvent) => {
            if (!menuRef.current) return;
            if (isOpen && !menuRef.current.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClick);

        const {style} = document.body;
        const prev = style.overflow;
        style.overflow = isOpen ? "hidden" : prev || "";
        if (!isOpen) style.overflow = prev;

        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClick);
            style.overflow = prev;
        };
    }, [isOpen]);

    const scrollTo = (hash: string) => {
        const el = document.querySelector(hash);
        if (!el) return;
        const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({top: y, behavior: "smooth"});
        setIsOpen(false);
    };

    return (
        <nav
            className={clsx(
                "fixed inset-x-0 top-0 z-50 transition-all duration-300 pt-[calc(env(safe-area-inset-top,0px))]",
                scrolled
                    ? "bg-black/70 supports-[backdrop-filter]:bg-black/55 backdrop-blur-md border-b border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.25)]"
                    : "bg-transparent"
            )}
            aria-label="Primary"
        >
            {/* skip link */}
            <a
                href="#home"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-white text-black px-3 py-1 rounded"
            >
                Skip to content
            </a>

            {/* container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Brand */}
                    <button
                        onClick={() => scrollTo("#home")}
                        className="group flex items-center gap-2"
                        aria-label="AI Point - go to home"
                    >
<span className="text-2xl brightness-200 contrast-125">
  🧠
</span>


                        <span className="text-xl font-bold tracking-tight text-white">
    AI{" "}
                            <span className="text-white/70 group-hover:text-white transition-colors">
      Point
    </span>
  </span>
                    </button>


                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {SECTIONS.map((id) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(`#${id}`)}
                                className={clsx(
                                    "relative px-1.5 py-2 text-sm font-medium transition-colors",
                                    "text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 rounded",
                                    active === id && "text-white"
                                )}
                            >
                                {id[0].toUpperCase() + id.slice(1)}
                                <span
                                    className={clsx(
                                        "absolute left-0 -bottom-0.5 h-0.5 w-full scale-x-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 transition-transform origin-left",
                                        active === id && "scale-x-100"
                                    )}
                                />
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Button
                            onClick={onContactClick}
                            className="font-semibold shadow-lg hover:shadow-xl transition-all
                         bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white
                         hover:from-indigo-400 hover:to-fuchsia-400 focus-visible:ring-violet-400"
                        >
                            Get Free Consultation
                        </Button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen((s) => !s)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle menu"
                        className={clsx(
                            "md:hidden inline-flex items-center justify-center",
                            "p-2 rounded-md ring-1 ring-white/15 bg-white/10 hover:bg-white/15",
                            "text-white transition",
                            "pr-[calc(0.5rem+env(safe-area-inset-right,0px))]"
                        )}
                    >
                        {isOpen ? <X size={22}/> : <Menu size={22}/>}
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    ref={menuRef}
                    className={clsx(
                        "md:hidden transition-[max-height,opacity] duration-300 overflow-hidden",
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div
                        className="mt-2 rounded-lg border border-white/10 bg-black/80 supports-[backdrop-filter]:bg-black/60 backdrop-blur-md p-2">
                        {SECTIONS.map((id) => (
                            <button
                                key={id}
                                onClick={() => scrollTo(`#${id}`)}
                                className={clsx(
                                    "w-full rounded-md px-3 py-2 text-left text-base font-medium transition",
                                    "text-white/90 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70",
                                    active === id && "text-white"
                                )}
                            >
                                {id[0].toUpperCase() + id.slice(1)}
                            </button>
                        ))}

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
