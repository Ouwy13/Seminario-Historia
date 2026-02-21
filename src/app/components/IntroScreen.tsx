import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

import INDIGENOUS_IMG from "../../assets/indigena.jpeg";

const TITLE = "POVOS INDÍGENAS".split("");

const TOTAL_MS = 15000;    // 15 segundos
const FADE_START = 13500;  // escurece em 13.5s
const SKIP_MS = 500;       // fade ao clicar

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [skipping, setSkipping] = useState(false);

  useEffect(() => {
    const t = setTimeout(onComplete, TOTAL_MS);
    return () => clearTimeout(t);
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    if (skipping) return;
    setSkipping(true);
    setTimeout(onComplete, SKIP_MS);
  }, [skipping, onComplete]);

  return (
    <div
      onClick={handleSkip}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0A0A0A",
        overflow: "hidden",
        cursor: "pointer",
        pointerEvents: "auto",
      }}
    >
      {/* ── Imagem do indígena: wipe + zoom-out + desaturação → cor ── */}
      <motion.div
        style={{ position: "absolute", inset: 0 }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ delay: 0.3, duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      >
        <motion.img
          src={INDIGENOUS_IMG}
          alt="Indígena Brasileiro"
          initial={{
            scale: 1.08,
            filter: "grayscale(100%) contrast(1.15) brightness(0.6)",
          }}
          animate={{
            scale: 1.0,
            filter: "grayscale(30%) contrast(1.1) brightness(0.75)",
          }}
          transition={{ delay: 0.3, duration: 1.8, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "55% 20%",
            opacity: 0.92,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0A0A0A 20%, rgba(10,10,10,0.55) 55%, transparent 80%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0A0A0A 0%, transparent 40%)",
          }}
        />
      </motion.div>

      {/* ── Texto central ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          gap: 16,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 16,
            letterSpacing: "0.4em",
            color: "#E5E5E5",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          ANTES DE 1500 · ANTES DE TUDO
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.4, ease: "easeOut" }}
          style={{ height: 1, background: "#2EBD6B", alignSelf: "center" }}
        />

        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(42px, 6vw, 80px)",
            color: "#E5E5E5",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {TITLE.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.9 + i * 0.04,
                duration: 0.35,
                ease: "easeOut",
              }}
              style={{
                display: "inline-block",
                color: char === " " ? "transparent" : "#E5E5E5",
                minWidth: char === " " ? "0.4em" : undefined,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>

        {/* Hint pulsante "clique para continuar" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0.15, 0.4, 0.15] }}
          transition={{
            delay: 3.5,
            duration: 2.5,
            times: [0, 0.25, 0.5, 0.75, 1.0],
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            marginTop: 32,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.35em",
            color: "#E5E5E5",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          CLIQUE PARA CONTINUAR
        </motion.div>
      </div>

      {/* ── Barra de progresso ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: TOTAL_MS / 1000, ease: "linear" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 2,
          background: "linear-gradient(to right, #2EBD6B, rgba(46,189,107,0.3))",
          transformOrigin: "left",
          zIndex: 5,
        }}
      />

      {/* ── Fade automático para preto nos últimos 1.5s ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "#0A0A0A",
          zIndex: 10,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{
          duration: TOTAL_MS / 1000,
          times: [0, FADE_START / TOTAL_MS, 0.99, 1.0],
          ease: "linear",
        }}
      />

      {/* ── Fade imediato ao clicar ── */}
      <AnimatePresence>
        {skipping && (
          <motion.div
            key="skip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: SKIP_MS / 1000, ease: "easeIn" }}
            style={{
              position: "absolute",
              inset: 0,
              background: "#0A0A0A",
              zIndex: 20,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
