import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const timelineData = {
  day1: [
    { time: "09:00 AM", event: "GreenHack: Code for Impact", venue: "TBD" },
    { time: "09:00 AM", event: "ElectroManiac: PCB", venue: "TBD" },
    { time: "10:00 AM", event: "TechScape Hunt", venue: "TBD" },
    { time: "11:00 AM", event: "ElectroManiac: Breadboard", venue: "TBD" },
    { time: "12:30 PM", event: "Wiki Run (Round 1)", venue: "TBD" },
    { time: "02:15 PM", event: "Wiki Run (Round 2)", venue: "TBD" },
    { time: "03:00 PM", event: "Circuit Chase", venue: "TBD" },
    { time: "04:30 PM", event: "DesignForge", venue: "TBD" },
  ],
  day2: [
    { time: "09:00 AM", event: "BridgeIt", venue: "TBD" },
    { time: "09:30 AM", event: "AI Foresight (ML BOT)", venue: "TBD" },
    { time: "11:00 AM", event: "EcoInnovate", venue: "TBD" },
    { time: "11:30 AM", event: "NetRunnerz (Prefinals)", venue: "TBD" },
    { time: "02:00 PM", event: "NetRunnerz (Finals)", venue: "TBD" },
    { time: "02:30 PM", event: "AlgoRhythm (DSA)", venue: "TBD" },
    { time: "03:00 PM", event: "ElectroManiac: RC Racing", venue: "TBD" },
  ],
  day3: [
    { time: "10:00 AM", event: "AbsurdUX", venue: "TBD" },
    { time: "10:00 AM", event: "GeoCraft Arena", venue: "TBD" },
  ],
};

type DayKey = "day1" | "day2" | "day3";

const days: { key: DayKey; label: string; date: string }[] = [
  { key: "day1", label: "Day 01", date: "May 8" },
  { key: "day2", label: "Day 02", date: "May 9" },
  { key: "day3", label: "Day 03", date: "May 10" },
];

const LIME = "hsl(78 100% 50%)";

const Timeline = () => {
  const [activeDay, setActiveDay] = useState<DayKey>("day1");

  const items = timelineData[activeDay];

  return (
    <section
      id="timeline"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "hsl(0 0% 4%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(78 100% 50% / 0.04) 0%, transparent 55%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-5 mx-auto">May 8–10, 2026</div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-5">
            Event <span className="neon-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground font-display max-w-xl mx-auto text-lg">
            Three days packed with innovation, competition, and unforgettable experiences.
          </p>
        </motion.div>

        {/* ── Day Tabs ── */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {days.map(({ key, label, date }) => {
            const active = activeDay === key;
            return (
              <button
                key={key}
                onClick={() => setActiveDay(key)}
                className="flex flex-col items-center gap-0.5 px-6 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 min-w-[100px]"
                style={{
                  background: active ? "var(--gradient-neon)" : "hsl(0 0% 8%)",
                  color: active ? "hsl(0 0% 4%)" : "hsl(0 0% 60%)",
                  border: active ? "none" : "1px solid hsl(0 0% 16%)",
                  boxShadow: active ? `0 0 24px ${LIME}55` : "none",
                }}
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {label}
                </span>
                <span className="text-[10px] font-display font-semibold" style={{ opacity: active ? 0.7 : 0.45 }}>
                  {date}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Timeline ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto"
          >
            {/* ── Desktop: true center spine ── */}
            <div className="hidden md:block relative">

              {/* ── Spine line ── */}
              <div
                className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
                style={{ width: "1px", background: "hsl(78 100% 50% / 0.12)" }}
              />
              {/* Glowing version on top */}
              <div
                className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
                style={{
                  width: "2px",
                  background: `linear-gradient(to bottom, transparent 0%, ${LIME} 15%, ${LIME} 85%, transparent 100%)`,
                  filter: "blur(1px)",
                  opacity: 0.4,
                  marginLeft: "-0.5px",
                }}
              />

              {items.map((item, index) => {
                const isLeft = index % 2 === 0; // even → card on left, odd → card on right

                return (
                  <motion.div
                    key={item.event}
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="relative grid grid-cols-2 gap-0 mb-10 items-center"
                  >
                    {/* Left slot */}
                    <div className={`pr-10 ${isLeft ? "flex justify-end" : ""}`}>
                      {isLeft && <TimelineCard item={item} align="right" />}
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 400, damping: 20, delay: index * 0.07 }}
                        className="w-4 h-4 rounded-full"
                        style={{
                          background: LIME,
                          border: "3px solid hsl(0 0% 4%)",
                          boxShadow: `0 0 0 1px ${LIME}60, 0 0 16px ${LIME}60`,
                        }}
                      />
                    </div>

                    {/* Right slot */}
                    <div className={`pl-10 ${!isLeft ? "flex justify-start" : ""}`}>
                      {!isLeft && <TimelineCard item={item} align="left" />}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Mobile: left-spine single column ── */}
            <div className="md:hidden relative pl-8">
              {/* Spine */}
              <div
                className="absolute left-3 top-2 bottom-2"
                style={{ width: "1px", background: "hsl(78 100% 50% / 0.15)" }}
              />
              <div
                className="absolute left-3 top-2 bottom-2"
                style={{
                  width: "2px",
                  background: `linear-gradient(to bottom, transparent 0%, ${LIME} 10%, ${LIME} 90%, transparent 100%)`,
                  filter: "blur(1px)",
                  opacity: 0.35,
                  marginLeft: "-0.5px",
                }}
              />

              {items.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="relative mb-6"
                >
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="absolute -left-8 top-1/2 -translate-y-1/2 -translate-x-[5px] w-3.5 h-3.5 rounded-full z-10"
                    style={{
                      background: LIME,
                      border: "2px solid hsl(0 0% 4%)",
                      boxShadow: `0 0 0 1px ${LIME}60, 0 0 10px ${LIME}60`,
                    }}
                  />

                  <TimelineCard item={item} align="left" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* ── Shared Card Component ── */
function TimelineCard({
  item,
  align,
}: {
  item: { time: string; event: string; venue: string };
  align: "left" | "right";
}) {
  return (
    <motion.div
      className="group relative rounded-xl p-5 hover-lift w-full max-w-sm"
      style={{
        background: "hsl(0 0% 6%)",
        border: "1px solid hsl(0 0% 14%)",
        borderLeft: align === "left" ? `3px solid ${LIME}80` : undefined,
        borderRight: align === "right" ? `3px solid ${LIME}80` : undefined,
        transition: "all 0.3s ease",
      }}
      whileHover={{
        borderColor: LIME,
        boxShadow: `0 0 20px hsl(78 100% 50% / 0.1)`,
      }}
    >
      {/* Time */}
      <div className={`flex items-center gap-2 mb-2 ${align === "right" ? "justify-end" : ""}`}>
        <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: LIME }} />
        <span
          className="font-display font-bold text-xs uppercase tracking-wider"
          style={{ color: LIME }}
        >
          {item.time}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-heading font-bold text-base mb-2 leading-snug group-hover:text-primary transition-colors ${align === "right" ? "text-right" : ""}`}
      >
        {item.event}
      </h3>

      {/* Venue */}
      <div className={`flex items-center gap-1.5 text-muted-foreground text-xs ${align === "right" ? "justify-end" : ""}`}>
        <MapPin className="w-3 h-3 shrink-0" />
        <span className="font-body">{item.venue}</span>
      </div>
    </motion.div>
  );
}

export default Timeline;
