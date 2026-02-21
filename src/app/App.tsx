import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Slide00Cover } from "./components/Slide00Cover";
import { Slide01Origin } from "./components/Slide01Origin";
import { Slide02Colonization } from "./components/Slide02Colonization";
import { Slide03Peoples } from "./components/Slide03Peoples";
import { Slide04Identity } from "./components/Slide04Identity";
import { Slide05Technology } from "./components/Slide05Technology";
import { Slide06Closing } from "./components/Slide06Closing";
import { IntroScreen } from "./components/IntroScreen";

const staticSlides = [
  { id: 1, label: "ORIGEM" },
  { id: 2, label: "COLONIZAÇÃO" },
  { id: 3, label: "POVOS FORMADORES" },
  { id: 4, label: "IDENTIDADE" },
  { id: 5, label: "TECNOLOGIA" },
  { id: 6, label: "ENCERRAMENTO" },
];

const staticComponents: Record<number, React.ReactNode> = {
  1: <Slide01Origin />,
  2: <Slide02Colonization />,
  3: <Slide03Peoples />,
  4: <Slide04Identity />,
  5: <Slide05Technology />,
  6: <Slide06Closing />,
};

const ALL_LABELS = ["CAPA", ...staticSlides.map((s) => s.label)];
const TOTAL_SLIDES = ALL_LABELS.length; // 7

const wipeSlides = new Set([2, 5]);

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  // introComplete: dispara DEPOIS que a tela preta está sólida
  // garante que Slide00Cover monte fresh e as animações ocorram de verdade
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    // Aguarda 80ms enquanto o preto ainda cobre tudo,
    // depois remonta o Slide00Cover com animações frescas
    setTimeout(() => setIntroComplete(true), 80);
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === current || isTransitioning) return;
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current, isTransitioning]
  );

  const goNext = useCallback(() => {
    if (current < TOTAL_SLIDES - 1) goTo(current + 1);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (showIntro) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, showIntro]);

  const isWipe = wipeSlides.has(current);
  const transitionDuration = isWipe ? 0.4 : 0.8;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: "0%", opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const progress = (current / (TOTAL_SLIDES - 1)) * 100;

  // Decide qual componente renderizar no slide 0:
  // A key muda quando introComplete vira true → Slide00Cover remonta
  // e suas animações internas disparam do zero (correto)
  const slide0 = (
    <Slide00Cover key={introComplete ? "ready" : "waiting"} />
  );

  const currentComponent =
    current === 0 ? slide0 : staticComponents[current];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] select-none"
      style={{ fontFamily: "'Inter', 'Space Grotesk', sans-serif" }}
    >
      {/* ── Intro cinemática ── */}
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      {/* ── Progress bar ── */}
      <div
        className="absolute top-0 left-0 z-40"
        style={{ height: 2, width: "100%", background: "rgba(46,189,107,0.1)" }}
      >
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            height: "100%",
            background: "#2EBD6B",
            boxShadow: "0 0 8px rgba(46,189,107,0.7)",
          }}
        />
      </div>

      {/* ── Slides ── */}
      <AnimatePresence
        mode="wait"
        custom={direction}
        onExitComplete={() => setIsTransitioning(false)}
      >
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: transitionDuration,
            ease: isWipe ? [0.4, 0, 0.2, 1] : [0.77, 0, 0.175, 1],
          }}
          onAnimationStart={() => setIsTransitioning(true)}
          onAnimationComplete={() => setIsTransitioning(false)}
          className="absolute inset-0"
        >
          {currentComponent}
        </motion.div>
      </AnimatePresence>

      {/* ── Nav arrows ── */}
      <button
        onClick={goPrev}
        disabled={current === 0 || showIntro}
        className="absolute left-6 top-1/2 z-40 -translate-y-1/2 flex items-center justify-center transition-all duration-300"
        style={{
          width: 40,
          height: 40,
          border: "1px solid rgba(46,189,107,0.3)",
          borderRadius: "50%",
          background: "rgba(10,10,10,0.6)",
          cursor: current === 0 || showIntro ? "default" : "pointer",
          opacity: current === 0 || showIntro ? 0.15 : 0.7,
          backdropFilter: "blur(8px)",
          color: "#2EBD6B",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={goNext}
        disabled={current === TOTAL_SLIDES - 1 || showIntro}
        className="absolute right-6 top-1/2 z-40 -translate-y-1/2 flex items-center justify-center transition-all duration-300"
        style={{
          width: 40,
          height: 40,
          border: "1px solid rgba(46,189,107,0.3)",
          borderRadius: "50%",
          background: "rgba(10,10,10,0.6)",
          cursor: current === TOTAL_SLIDES - 1 || showIntro ? "default" : "pointer",
          opacity: current === TOTAL_SLIDES - 1 || showIntro ? 0.15 : 0.7,
          backdropFilter: "blur(8px)",
          color: "#2EBD6B",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Dots ── */}
      <div
        className="absolute bottom-6 left-1/2 z-40 flex items-center gap-3"
        style={{ transform: "translateX(-50%)" }}
      >
        {ALL_LABELS.map((label, i) => (
          <button
            key={i}
            onClick={() => !showIntro && goTo(i)}
            title={label}
            style={{
              width: i === current ? 24 : 6,
              height: 6,
              borderRadius: 999,
              background: i === current ? "#2EBD6B" : "rgba(46,189,107,0.22)",
              border: "none",
              cursor: showIntro ? "default" : "pointer",
              padding: 0,
              transition: "all 0.3s ease",
              boxShadow: i === current ? "0 0 6px rgba(46,189,107,0.5)" : "none",
            }}
          />
        ))}
      </div>

      {/* ── Counter ── */}
      <div
        className="absolute bottom-6 right-8 z-40"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "#2EBD6B",
          opacity: 0.5,
        }}
      >
        0{current} / 0{TOTAL_SLIDES - 1}
      </div>

      {/* ── Label ── */}
      <div
        className="absolute bottom-6 left-8 z-40"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 11,
          letterSpacing: "0.14em",
          color: "#E5E5E5",
          opacity: 0.3,
          textTransform: "uppercase",
        }}
      >
        {ALL_LABELS[current]}
      </div>
    </div>
  );
}