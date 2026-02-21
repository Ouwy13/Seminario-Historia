import { motion } from "motion/react";
import logoImg from "../../assets/logo-institucional.png";

import FOREST_IMG from "../../assets/floresta-amazonia.jpg";

const words1 = "A TECNOLOGIA NÃO SUBSTITUI A CULTURA —".split(" ");
const words2 = "ELA A AMPLIFICA E PROTEGE.".split(" ");

function RotatingCircle({
  size,
  style,
  duration,
}: {
  size: number;
  style?: React.CSSProperties;
  duration: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1px solid rgba(46,189,107,0.2)",
        position: "absolute",
        ...style,
      }}
    />
  );
}

/* ── Tech Logo SVGs ── */
function ReactLogo() {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" width="32" height="32" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function ViteLogo() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
      <defs>
        <linearGradient id="vg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
      <polygon points="16,2 29,27 21,22 16,31 3,27 11,22" fill="url(#vg1)" />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg viewBox="0 0 54 33" width="54" height="20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.756 33.808 16 40.5 16c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C37.256 3.244 34.192 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.744 28.956 19.808 32.2 26.5 32.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.756 19.444 20.692 16.2 13.5 16.2Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

function MotionLogo() {
  return (
    <svg viewBox="0 0 90 34" width="72" height="22" fill="none">
      <text
        x="2"
        y="27"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#A78BFA"
      >
        motion
      </text>
    </svg>
  );
}

function UnsplashLogo() {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28">
      <rect width="32" height="32" rx="6" fill="#1A1A1A" />
      <path
        d="M11 8h4v5.5h-4zM15 13.5h6v9H11v-9h4"
        fill="white"
      />
    </svg>
  );
}

const techStack = [
  { label: "React", logo: <ReactLogo /> },
  { label: "Vite", logo: <ViteLogo /> },
  { label: "Tailwind", logo: <TailwindLogo /> },
  { label: "Motion", logo: <MotionLogo /> },
  { label: "Unsplash", logo: <UnsplashLogo /> },
];

export function Slide06Closing() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A] flex flex-col">
      {/* ── Forest background (full bleed) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={FOREST_IMG}
          alt="Floresta Amazônica"
          className="w-full h-full object-cover"
          style={{
            filter: "grayscale(40%) brightness(0.28) contrast(1.1)",
            transform: "scale(1.05)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.35) 30%, rgba(10,10,10,0.35) 65%, #0A0A0A 100%)",
          }}
        />
      </div>

      {/* Decorative rotating circles */}
      <RotatingCircle size={380} duration={32} style={{ right: -80, top: "50%", transform: "translateY(-50%)" }} />
      <RotatingCircle size={220} duration={22} style={{ right: 50, top: "50%", transform: "translateY(-25%)" }} />
      <RotatingCircle size={110} duration={15} style={{ right: 140, bottom: 100 }} />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-20">
        {/* Phrase line 1 */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(16px, 1.8vw, 22px)",
            color: "#E5E5E5",
            letterSpacing: "0.06em",
            marginBottom: 6,
            lineHeight: 1.6,
          }}
        >
          {words1.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 0.75, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
              style={{ display: "inline-block", marginRight: "0.3em" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Phrase line 2 */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(16px, 1.8vw, 22px)",
            color: "#E5E5E5",
            letterSpacing: "0.06em",
            lineHeight: 1.6,
            marginBottom: 28,
          }}
        >
          {words2.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
              style={{ display: "inline-block", marginRight: "0.3em" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Green divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.7, ease: "easeInOut" }}
          style={{
            height: 1,
            width: 160,
            background: "linear-gradient(to right, transparent, #2EBD6B, transparent)",
            transformOrigin: "center",
            marginBottom: 22,
          }}
        />

        {/* Group info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 2.0, duration: 0.7 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: "0.15em",
            color: "#E5E5E5",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          GRUPO 4 · FEV 2026 · TÉC. INFORMÁTICA PARA INTERNET
        </motion.div>

        {/* Tech stack logos */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.45 + i * 0.09, duration: 0.4, type: "spring", stiffness: 200 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
              title={tech.label}
            >
              <div style={{ opacity: 0.8 }}>{tech.logo}</div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  color: "#E5E5E5",
                  opacity: 0.3,
                  textTransform: "uppercase",
                }}
              >
                {tech.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9, duration: 0.5 }}
          style={{
            height: 1,
            width: 80,
            background: "rgba(46,189,107,0.15)",
            marginBottom: 14,
          }}
        />

        {/* Desenvolvido por José */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 16, /* ← espaço compacto antes da logo */
          }}
        >
          <span
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
            Desenvolvido por
          </span>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.12em",
              color: "#2EBD6B",
              textTransform: "uppercase",
            }}
          >
            José
          </span>
          <span
            style={{
              display: "inline-block",
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#2EBD6B",
              opacity: 0.7,
            }}
          />
        </motion.div>

        {/* ── Institutional Logo — colada logo abaixo do "Desenvolvido por José" ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          {/* Label */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 9,
              letterSpacing: "0.35em",
              color: "#2EBD6B",
              opacity: 0.6,
              textTransform: "uppercase",
            }}
          >
            REALIZAÇÃO INSTITUCIONAL
          </span>

          {/* Logo card — menor e compacto */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 8,
              padding: "8px 24px",      /* padding reduzido */
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.08), 0 6px 24px rgba(0,0,0,0.5), 0 0 40px rgba(46,189,107,0.07)",
              maxWidth: 480,            /* largura menor que antes */
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logoImg}
              alt="Governo do Maranhão · SEDUC · IEMA · UNESCO"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 44,          /* altura reduzida */
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>
        </motion.div>
        {/* ── fim logo institucional ── */}

      </div>

      {/* ── Bottom bar — altura reduzida ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "8px 40px",          /* altura bem menor */
          borderTop: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(8,8,8,0.85)",
          backdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 9,
            letterSpacing: "0.25em",
            color: "#E5E5E5",
            opacity: 0.2,
            textTransform: "uppercase",
          }}
        >

        </span>
      </div>
    </div>
  );
}
