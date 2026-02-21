import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";

const factors = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12,3 22,21 2,21" stroke="#2EBD6B" strokeWidth="1.5" />
      </svg>
    ),
    title: "GUERRAS",
    desc: "Conflitos armados contra povos nativos que resistiram à invasão colonial europeia.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="2" x2="12" y2="22" stroke="#2EBD6B" strokeWidth="1.5" />
        <line x1="4" y1="12" x2="20" y2="12" stroke="#2EBD6B" strokeWidth="1.5" />
      </svg>
    ),
    title: "ESCRAVIDÃO",
    desc: "Exploração do trabalho indígena nas fazendas, missões e extração de recursos naturais.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2EBD6B" strokeWidth="1.5" />
      </svg>
    ),
    title: "DOENÇAS",
    desc: "Epidemias de varíola, sarampo e gripe dizimaram populações sem imunidade prévia.",
  },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1.8;
    const start = performance.now();
    const update = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.floor(eased * target));
      if (t < 1) requestAnimationFrame(update);
      else setDisplay(target);
    };
    const id = requestAnimationFrame(update);
    return () => cancelAnimationFrame(id);
  }, [target]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Slide02Colonization() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A] flex flex-col items-center justify-center">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }}
      />

      {/* Big number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(80px, 12vw, 200px)",
          color: "#E5E5E5",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        <CountUp target={5} suffix=" MI" />
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 20,
          color: "#E5E5E5",
          letterSpacing: "0.06em",
          marginTop: 8,
          textTransform: "uppercase",
        }}
      >
        indígenas estimados antes da colonização
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeInOut" }}
        style={{
          height: 1,
          width: "60%",
          background: "rgba(229,229,229,0.15)",
          marginTop: 32,
          marginBottom: 32,
          transformOrigin: "center",
        }}
      />

      {/* Three columns */}
      <div className="flex gap-12 px-20" style={{ width: "100%" }}>
        {factors.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 0.15, duration: 0.6 }}
            style={{ flex: 1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div>{f.icon}</div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.14em",
                color: "#2EBD6B",
              }}
            >
              {f.title}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                lineHeight: 1.65,
                color: "#E5E5E5",
                opacity: 0.65,
              }}
            >
              {f.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer pill */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{ marginTop: 36 }}
      >
        <span
          style={{
            display: "inline-block",
            background: "rgba(255,77,0,0.15)",
            border: "1px solid rgba(255,77,0,0.4)",
            borderRadius: 999,
            padding: "8px 24px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 13,
            color: "#FF4D00",
            letterSpacing: "0.1em",
          }}
        >
          1,7 MILHÕES HOJE — CENSO 2022
        </span>
      </motion.div>
    </div>
  );
}