import { motion } from "framer-motion";
import { ExternalLink, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sponsors, Sponsor } from "@/data/sponsors";

// ── Sponsor Card ──
const SponsorCard = ({ sponsor, index }: { sponsor: Sponsor; index: number }) => (
  <motion.a
    href={sponsor.website}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
    className="group relative rounded-xl p-6 flex flex-col items-center text-center hover-lift cursor-pointer"
    style={{
      background: "hsl(0 0% 6%)",
      border: "1px solid hsl(0 0% 14%)",
      transition: "all 0.35s ease",
    }}
    whileHover={{
      borderColor: "hsl(78 100% 50% / 0.35)",
      boxShadow: "0 0 30px hsl(78 100% 50% / 0.08)",
    }}
  >
    {/* Top accent on hover */}
    <div
      className="absolute top-0 inset-x-4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: "linear-gradient(90deg, transparent, hsl(78 100% 50% / 0.6), transparent)" }}
    />

    {/* Logo box */}
    <div
      className="w-28 h-20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 overflow-hidden"
      style={{
        background: "hsl(0 0% 10%)",
        border: "1px solid hsl(78 100% 50% / 0.15)",
      }}
    >
      {sponsor.logoImage ? (
        <img
          src={sponsor.logoImage}
          alt={sponsor.name}
          className="w-full h-full object-contain p-3"
          style={{ filter: "brightness(1.05)" }}
        />
      ) : (
        <span className="text-3xl font-heading font-black" style={{ color: "hsl(78 100% 50%)" }}>
          {sponsor.logo}
        </span>
      )}
    </div>

    <h3 className="font-heading font-bold text-base mb-1.5 group-hover:text-primary transition-colors">
      {sponsor.name}
    </h3>
    <p className="text-muted-foreground font-body text-xs mb-4 leading-relaxed line-clamp-2">
      {sponsor.tagline}
    </p>
    <div
      className="flex items-center gap-1.5 text-xs font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
      style={{ color: "hsl(78 100% 50%)" }}
    >
      <ExternalLink className="w-3 h-3" />
      Visit Website
    </div>
  </motion.a>
);

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-28 md:pt-36 pb-16 relative cyber-grid overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, hsl(0 0% 3% / 0.5), hsl(0 0% 3%))," +
              "radial-gradient(ellipse 70% 50% at 50% 40%, hsl(78 100% 50% / 0.05) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -top-20 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "hsl(78 100% 50%)", filter: "blur(120px)", opacity: 0.05 }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-tag mb-5 mx-auto">
              <Handshake className="w-3 h-3" /> Powering Spandan 3.0
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-5">
              Our{" "}
              <span
                className="neon-text"
                style={{ filter: "drop-shadow(0 0 20px hsl(78 100% 50% / 0.4))" }}
              >
                Sponsors
              </span>
            </h1>
            <p className="text-muted-foreground font-display text-lg max-w-xl mx-auto mb-8">
              Visionary companies making Spandan 3.0 possible. We thank every partner who believes
              in the power of student innovation.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: `${sponsors.length}+`, label: "Sponsors" },
                { value: "₹50K+",               label: "Prize Pool" },
                { value: "2000+",               label: "Participants Reached" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-heading font-black neon-text">{s.value}</div>
                  <div className="text-xs font-display text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sponsors Grid ── */}
      <div className="container mx-auto px-4 pb-24">
        {sponsors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
            {sponsors.map((sponsor, i) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} index={i} />
            ))}
          </div>
        ) : (
          /* No sponsors yet — placeholder */
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-24"
          >
            <div
              className="inline-block rounded-2xl px-10 py-14 mb-6"
              style={{
                background: "hsl(0 0% 6%)",
                border: "1px solid hsl(78 100% 50% / 0.15)",
              }}
            >
              <div className="flex justify-center gap-2 mb-5">
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
              <p className="font-heading font-bold text-xl mb-2" style={{ color: "hsl(78 100% 50%)" }}>
                Sponsors Coming Soon
              </p>
              <p className="text-muted-foreground font-display text-sm">
                Exciting partnerships are being finalised. Check back soon!
              </p>
            </div>
          </motion.div>
        )}

        {/* ── Become a Sponsor CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden text-center py-16 px-8"
          style={{
            background: "hsl(0 0% 5%)",
            border: "1px solid hsl(78 100% 50% / 0.15)",
          }}
        >
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "hsl(78 100% 50%)", filter: "blur(80px)", opacity: 0.06 }}
          />
          <div
            className="absolute top-0 inset-x-0 h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, hsl(78 100% 50% / 0.4), transparent)" }}
          />

          <div className="relative z-10">
            <div className="section-tag mb-5 mx-auto">Partner With Us</div>
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              Become a <span className="neon-text">Sponsor</span>
            </h2>
            <p className="text-muted-foreground font-display text-lg max-w-xl mx-auto mb-8">
              Reach 2000+ of India's brightest tech students and position your brand at the
              forefront of innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:gbpietspandan@gmail.com"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-bold text-sm transition-all duration-300"
                style={{ background: "var(--gradient-neon)", color: "hsl(0 0% 4%)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px hsl(78 100% 50% / 0.4)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              >
                <Handshake className="w-4 h-4" />
                Partner With Us
              </a>
              <a
                href="mailto:gbpietspandan@gmail.com"
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-300"
                style={{ background: "hsl(0 0% 8%)", border: "1px solid hsl(0 0% 18%)", color: "hsl(0 0% 70%)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "hsl(78 100% 50% / 0.3)";
                  el.style.color = "hsl(78 100% 50%)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "hsl(0 0% 18%)";
                  el.style.color = "hsl(0 0% 70%)";
                }}
              >
                Download Brochure
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;
