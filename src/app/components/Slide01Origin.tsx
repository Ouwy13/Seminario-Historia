import { motion } from "motion/react";

import MAP_IMG from "../../assets/mapa-bering.webp";

export function Slide01Origin() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A] flex">
      {/* Left — content */}
      <div className="relative z-10 flex flex-col justify-center w-1/2 px-20 py-16">
        {/* Tag */}
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
            marginBottom: 24,
          }}
        >
          01 — ORIGEM
        </motion.div>

        {/* Watermark number */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: 160,
            color: "#E5E5E5",
            opacity: 0.05,
            left: 60,
            top: "40%",
            transform: "translateY(-50%)",
            letterSpacing: "-0.02em",
          }}
        >
        12.000
        </div>

        {/* Title */}
        <div>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 5.5vw, 96px)",
              color: "#E5E5E5",
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            DE ONDE
          </motion.div>
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 5.5vw, 96px)",
              color: "transparent",
              WebkitTextStroke: "2px #2EBD6B",
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            VIERAM?
          </motion.div>
        </div>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.75,
            color: "#E5E5E5",
            maxWidth: 480,
            marginTop: 28,
          }}
        >
          Há cerca de 12.000 anos, os primeiros habitantes chegaram ao continente
          americano atravessando o Estreito de Bering durante a Era Glacial,
          quando o nível do mar era mais baixo. Ao longo dos milênios, esses
          povos se espalharam e desenvolveram centenas de culturas, línguas e
          tradições distintas por todo o território que hoje conhecemos como
          Brasil.
        </motion.p>

        {/* Pill highlight */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          style={{ marginTop: 28 }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(46,189,107,0.15)",
              border: "1px solid rgba(46,189,107,0.4)",
              borderRadius: 999,
              padding: "8px 20px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 13,
              color: "#2EBD6B",
              letterSpacing: "0.08em",
            }}
          >
            Estreito de Bering — Era Glacial
          </span>
        </motion.div>
      </div>

      {/* Divider */}
      <div
        className="absolute h-full"
        style={{
          left: "50%",
          width: 1,
          background: "rgba(229,229,229,0.1)",
        }}
      />

      {/* Right — image */}
      <div className="relative w-1/2 overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
        >
          <img
            src={MAP_IMG}
            alt="Ancient map"
            className="w-full h-full"
            style={{
              objectFit: "contain",
              /* ══════════════════════════════════════════════
                 POSIÇÃO DA IMAGEM — ajuste aqui:
                 Primeiro valor  → horizontal: "left" | "center" | "right" | "10%" a "90%"
                 Segundo valor   → vertical:   "top"  | "center" | "bottom" | "10%" a "90%"
                 Quanto MENOR o % horizontal, mais a imagem vai para a ESQUERDA.
                 Ex: "10% center" = bem à esquerda | "50% center" = centralizado
                 ══════════════════════════════════════════════ */
              objectPosition: "200% center",
              filter: "grayscale(35%) brightness(0.7) contrast(1.05)",
              opacity: 0.85,
              padding: "10px 10px",
            }}
          />
          {/* Gradientes nas 4 bordas — mesmo estilo da intro */}
          {/* Esquerda — idêntico ao da intro: sólido 20% → semi 55% → transparente 80% */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(to right, #0A0A0A 12%, rgba(10,10,10,0.55) 30%, transparent 80%)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
