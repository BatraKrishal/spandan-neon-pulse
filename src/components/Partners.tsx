import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo?: string;
  logoImage?: string;
  color: string;
  website: string;
}

const partners: Partner[] = [
  {
    name: "PETA India",
    logoImage: "/sponsors/PetaIndia.png",
    color: "hsl(78 100% 50%)",
    website: "https://www.petaindia.com/",
  },
];

// Repeat enough times so the marquee looks full even with few sponsors
const filled = Array.from({ length: Math.ceil(8 / partners.length) }, () => partners).flat();
// Duplicate for seamless infinite loop
const allPartners = [...filled, ...filled];

const Partners = () => {
  return (
    <section id="partners" className="py-24 md:py-36 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 60%, hsl(185 100% 50% / 0.04) 0%, transparent 55%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-5 mx-auto">Sponsors & Partners</div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-5">
            Our <span className="neon-text">Partners</span>
          </h2>
          <p className="text-muted-foreground font-display max-w-xl mx-auto text-lg">
            Proudly supported by leading tech companies and organizations who share our vision.
          </p>
        </motion.div>

        {/* Marquee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="marquee-wrapper mb-12"
        >
          <div className="marquee-track">
            {allPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 flex items-center gap-4 px-5 py-3.5 rounded-xl"
                style={{
                  background: "hsl(0 0% 6%)",
                  border: "1px solid hsl(0 0% 14%)",
                  minWidth: "200px",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = partner.color + "40";
                  e.currentTarget.style.boxShadow = `0 0 20px ${partner.color}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(0 0% 14%)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden"
                  style={{ background: "hsl(0 0% 10%)", border: `1px solid ${partner.color}25` }}
                >
                  {partner.logoImage ? (
                    <img
                      src={partner.logoImage}
                      alt={partner.name}
                      className="w-full h-full object-contain p-1.5"
                    />
                  ) : (
                    <span className="text-sm font-heading font-bold" style={{ color: partner.color }}>
                      {partner.logo}
                    </span>
                  )}
                </div>
                <span className="font-display font-semibold text-sm text-foreground/80 whitespace-nowrap group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground font-display mb-4">
            Interested in partnering with us?
          </p>
          <a
            href="mailto:gbpietspandan@gmail.com"
            className="inline-flex items-center gap-2 font-display font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300"
            style={{
              background: "hsl(78 100% 50% / 0.08)",
              border: "1px solid hsl(78 100% 50% / 0.2)",
              color: "hsl(78 100% 50%)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "hsl(78 100% 50% / 0.15)";
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(78 100% 50% / 0.5)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px hsl(78 100% 50% / 0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "hsl(78 100% 50% / 0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(78 100% 50% / 0.2)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Become a Partner →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
