import { motion } from "motion/react";

import TECH_IMG from "../../assets/teclado.jpg";

const cards = [
  {
    title: "Museu do Índio",
    subtitle: "Acervo Digital",
    desc: "Digitalização de 400+ acervos etnográficos, fotografias históricas e documentos audiovisuais.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M7 21h10M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Portal Apina",
    subtitle: "Wajãpi",
    desc: "Plataforma digital para registro e difusão da cultura Wajãpi — patrimônio cultural imaterial da humanidade.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 1 0 18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Redes Sociais",
    subtitle: "Indígenas",
    desc: "Jovens indígenas usam Instagram, TikTok e YouTube para decolonizar narrativas e combater desinformação.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
  },
];

export function Slide05Technology() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={TECH_IMG}
          alt="Technology"
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "luminosity", opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-60" />
      </div>

      {/* Decorative circles (hidden on small screens) */}
      <div
        className="absolute rounded-full pointer-events-none hidden sm:block"
        style={{
          width: 500,
          height: 500,
          right: -100,
          bottom: -150,
          border: "1px solid rgba(46,189,107,0.08)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none hidden sm:block"
        style={{
          width: 280,
          height: 280,
          right: 60,
          bottom: 60,
          border: "1px solid rgba(46,189,107,0.1)",
          borderRadius: "50%",
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-4 py-6 sm:px-10 sm:py-10 md:px-20 md:py-14 justify-between">
        {/* Title */}
        <div>
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 11,
              letterSpacing: "0.18em",
              color: "#2EBD6B",
              marginBottom: 12,
            }}
          >
            {'05 -- TECNOLOGIA & PRESERVACAO'}
          </motion.div>

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 6vw, 100px)",
              color: "#E5E5E5",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            TECNOLOGIA
          </motion.div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 6vw, 100px)",
              color: "transparent",
              WebkitTextStroke: "2px #2EBD6B",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            COMO ALIADA
          </motion.div>
        </div>

        {/* Cards — stack on mobile */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative">
          {/* Connection lines SVG (hidden on mobile) */}
          <svg
            className="absolute inset-0 pointer-events-none hidden sm:block"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            {[33, 66].map((pct, i) => (
              <motion.line
                key={i}
                x1={`${pct}%`}
                y1="0%"
                x2={`${pct}%`}
                y2="100%"
                stroke="rgba(200,169,110,0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.6 + i * 0.2, duration: 0.6 }}
              />
            ))}
          </svg>

          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: "16px 20px",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{ color: "#2EBD6B", marginBottom: 10, opacity: 0.9 }}
              >
                {card.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 1.8vw, 16px)",
                  color: "#E5E5E5",
                  letterSpacing: "0.04em",
                  marginBottom: 2,
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(11px, 1.4vw, 13px)",
                  color: "#2EBD6B",
                  marginBottom: 10,
                  opacity: 0.8,
                }}
              >
                {card.subtitle}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(11px, 1.4vw, 13px)",
                  lineHeight: 1.6,
                  color: "#E5E5E5",
                  opacity: 0.6,
                }}
              >
                {card.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
