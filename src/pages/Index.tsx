import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Timeline from "@/components/Timeline";
import EventsSection from "@/components/EventsSection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/timeline') {
      document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/partners') {
      document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background scroll-snap-y-mandatory">
      <Navbar />
      <Hero />
      <AboutSection />
      <EventsSection />
      {/* Timeline — Coming Soon */}
      <section
        id="timeline"
        className="py-24 md:py-36 relative overflow-hidden cyber-grid"
        style={{ background: "hsl(0 0% 4%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(78 100% 50% / 0.04) 0%, transparent 55%)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-xl mx-auto">
          <div className="section-tag mb-5 mx-auto">May 8–10, 2026</div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-5">
            Event <span className="neon-text">Timeline</span>
          </h2>
          <div
            className="rounded-2xl p-10 mx-auto max-w-lg"
            style={{
              background: "hsl(0 0% 6%)",
              border: "1px solid hsl(78 100% 50% / 0.15)",
              boxShadow: "0 0 40px hsl(78 100% 50% / 0.05)",
            }}
          >
            {/* Animated dots */}
            <div className="flex justify-center gap-2 mb-6">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "hsl(78 100% 50%)",
                    boxShadow: "0 0 8px hsl(78 100% 50% / 0.6)",
                    animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
            <p
              className="font-heading font-bold text-xl mb-2"
              style={{ color: "hsl(78 100% 50%)" }}
            >
              Coming Soon
            </p>
            <p className="text-muted-foreground font-display text-sm">
              The detailed day-wise event schedule will be updated here shortly.
              Stay tuned!
            </p>
          </div>
        </div>
      </section>
      <Partners />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
