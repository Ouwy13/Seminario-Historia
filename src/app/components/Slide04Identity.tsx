import { motion } from "motion/react";

const timelinePoints = [
  { year: "1500", label: "Chegada\nPortuguesa" },
  { year: "1549", label: "Capitanias\nHereditárias" },
  { year: "1888", label: "Abolição\nda Escravidão" },
  { year: "Séc. XX", label: "Constituição\n& Direitos" },
  { year: "2022", label: "Censo\nIndígena" },
];

export function Slide04Identity() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A] flex flex-col justify-between px-4 py-6 sm:px-10 sm:py-10 md:px-20 md:py-14">
      {/* Watermark word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(48px, 11vw, 180px)",
          color: "#E5E5E5",
          opacity: 0.05,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        DIVERSIDADE
      </div>

      {/* Top section */}
      <div className="flex relative z-10">
        {/* Tag */}
        <div className="flex-1">
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
            {'04 -- IDENTIDADE EM CONSTRUCAO'}
          </motion.div>

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4.5vw, 72px)",
              color: "#E5E5E5",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            IDENTIDADE<br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #2EBD6B",
              }}
            >
              BRASILEIRA
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(11px, 1.6vw, 14px)",
              lineHeight: 1.7,
              color: "#E5E5E5",
              maxWidth: 480,
              marginBottom: 16,
            }}
          >
            {'A identidade sociocultural do Brasil e resultado de um processo historico complexo e tenso, marcado pela mistura, mas tambem pelo apagamento e resistencia. Cada povo trouxe contribuicoes que moldaram lingua, culinaria, religiosidade, musica e visao de mundo.'}
          </motion.p>

          {/* Tension pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,77,0,0.12)",
                border: "1px solid rgba(255,77,0,0.4)",
                borderRadius: 999,
                padding: "6px 14px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(9px, 1.3vw, 11px)",
                color: "#FF4D00",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Desigualdade Estrutural
            </span>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10" style={{ paddingBottom: 8 }}>
        {/* Line */}
        <div className="relative flex items-center" style={{ height: 80 }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(46,189,107,0.35)",
              transformOrigin: "left",
            }}
          />

          {/* Points */}
          <div className="absolute inset-0 flex items-center justify-between">
            {timelinePoints.map((pt, i) => (
              <motion.div
                key={pt.year}
                className="flex flex-col items-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.4, type: "spring" }}
              >
                {/* Label above */}
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(8px, 1.3vw, 11px)",
                    color: "#E5E5E5",
                    opacity: 0.55,
                    textAlign: "center",
                    lineHeight: 1.4,
                    marginBottom: 6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {pt.label}
                </div>
                {/* Dot */}
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#2EBD6B",
                  }}
                />
                {/* Year below */}
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(9px, 1.4vw, 13px)",
                    color: "#2EBD6B",
                    marginTop: 4,
                    letterSpacing: "0.05em",
                  }}
                >
                  {pt.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
