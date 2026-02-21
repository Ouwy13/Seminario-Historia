import { motion } from "motion/react";

import INDIGENOUS_IMG from "../../assets/indigena.jpeg";

const members = ["ALEX", "SOFIA", "EDUARDO", "MAIZA B.", "JOSE"];

export function Slide00Cover() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
      {/* Indigenous portrait — anchored right, gradient mask left */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={INDIGENOUS_IMG}
          alt="Indigena Brasileiro"
          className="absolute top-0 right-0 h-full w-full md:w-[62%] object-cover"
          style={{
            objectPosition: "55% 20%",
            filter: "grayscale(30%) contrast(1.1) brightness(0.75)",
            opacity: 0.92,
          }}
        />
        {/* Gradientes nas 4 bordas */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(to right, #0A0A0A 40%, rgba(10,10,10,0.55) 50%, transparent 80%)" }}
        />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(to left, #0A0A0A 0%, rgba(10,10,10,0.5) 12%, transparent 32%)" }}
        />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.45) 14%, transparent 36%)" }}
        />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.5) 18%, transparent 42%)" }}
        />
      </motion.div>

      {/* Decorative circles — right side (hidden on mobile) */}
      <div
        className="absolute rounded-full pointer-events-none hidden md:block"
        style={{
          width: 300,
          height: 300,
          right: 100,
          top: "50%",
          transform: "translateY(-60%)",
          border: "1px solid #2EBD6B",
          opacity: 0.1,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none hidden md:block"
        style={{
          width: 180,
          height: 180,
          right: 190,
          top: "50%",
          transform: "translateY(15%)",
          border: "1px solid #2EBD6B",
          opacity: 0.12,
        }}
      />

      {/* Top label */}
      <motion.div
        className="absolute top-6 left-5 sm:top-8 sm:left-10 md:top-10 md:left-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "#2EBD6B",
        }}
      >
        GRUPO 4 -- SEMINARIO
      </motion.div>

      {/* Main Title — left side */}
      <div
        className="absolute left-5 sm:left-10 md:left-20"
        style={{ top: "50%", transform: "translateY(-55%)" }}
      >
        {/* POVOS */}
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 9vw, 160px)",
              color: "#E5E5E5",
              letterSpacing: "0.04em",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            POVOS
          </motion.div>
        </div>

        {/* INDIGENAS — outline with green stroke */}
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 9vw, 160px)",
              color: "transparent",
              WebkitTextStroke: "2px #2EBD6B",
              letterSpacing: "0.04em",
              lineHeight: 1,
              textTransform: "uppercase",
            }}
          >
            INDIGENAS
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(11px, 2.2vw, 18px)",
            letterSpacing: "0.06em",
            color: "#E5E5E5",
            marginTop: 12,
          }}
        >
          {'& A FORMACAO SOCIOCULTURAL BRASILEIRA'}
        </motion.div>
      </div>

      {/* Member names — bottom right */}
      <div className="absolute bottom-8 right-5 sm:bottom-10 sm:right-10 md:right-20 flex flex-col items-end gap-1">
        {members.map((name, i) => (
          <motion.div
            key={name}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 0.45 }}
            transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(9px, 1.5vw, 12px)",
              letterSpacing: "0.12em",
              color: "#E5E5E5",
            }}
          >
            {name}
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.0, ease: "easeInOut" }}
        style={{
          height: 1,
          width: "100%",
          background: "linear-gradient(to right, rgba(46,189,107,0.4), transparent)",
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
