import { motion } from "motion/react";

import FOREST_IMG from "../../assets/floresta-tropical.jpg";
import TILE_IMG from "../../assets/azulejo.jpg";
import FABRIC_IMG from "../../assets/tecido-africano.jpg";

const panels = [
  {
    num: "01",
    name: "INDÍGENAS",
    accent: "#2EBD6B",
    img: FOREST_IMG,
    items: [
      "Manejo sustentável da floresta",
      "Diversidade linguística (180+ línguas)",
      "Conhecimento medicinal e etnobotânico",
    ],
  },
  {
    num: "02",
    name: "PORTUGUESES",
    accent: "#E5E5E5",
    img: TILE_IMG,
    items: [
      "Língua portuguesa como unidade nacional",
      "Arquitetura colonial e barroca",
      "Sistema jurídico e religioso europeu",
    ],
  },
  {
    num: "03",
    name: "AFRICANOS",
    accent: "#FF4D00",
    img: FABRIC_IMG,
    items: [
      "Candomblé, capoeira e cultura afro-brasileira",
      "Gastronomia: acarajé, moqueca, dendê",
      "Influência rítmica no samba e forró",
    ],
  },
];

export function Slide03Peoples() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A] flex">
      {/* Tag */}
      <motion.div
        className="absolute top-10 left-10 z-20"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: 11,
          letterSpacing: "0.18em",
          color: "#2EBD6B",
        }}
      >
        03 — OS TRÊS POVOS FORMADORES
      </motion.div>

      {panels.map((p, i) => (
        <motion.div
          key={p.num}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 flex flex-col justify-end overflow-hidden"
          style={{
            borderRight: i < 2 ? "1px solid rgba(229,229,229,0.12)" : "none",
          }}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover"
              style={{ mixBlendMode: "luminosity", opacity: 0.3 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${p.accent}22 0%, transparent 60%)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-10 pt-20">
            {/* Number watermark */}
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.15em",
                color: "#E5E5E5",
                opacity: 0.3,
                marginBottom: 12,
              }}
            >
              {p.num}
            </div>

            {/* Name */}
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: "0.06em",
                color: p.accent,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {p.name}
            </div>

            {/* Items */}
            <ul className="flex flex-col gap-3">
              {p.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "#E5E5E5",
                    opacity: 0.75,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: p.accent,
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
