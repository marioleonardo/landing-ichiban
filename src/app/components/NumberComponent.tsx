import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface NumberComponentProps {
  scrollPosition: number;
}

const NumberComponent: React.FC<NumberComponentProps> = ({
  scrollPosition,
}) => {
  const variants1: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string, opacity?: number; left?: string; top?: string  };
  } = {
    0: { opacity: 0, color: "#ffffff", left: "-20%", top: "27%" },
    1: { scale: 1, top: "25%", left: "6%", opacity: 1, color: "#ffffff" },
    2: { opacity: 0, color: "#ffffff", left: "-20%", top: "25%" },
    3: { opacity: 0, color: "#ffffff", left: "-20%", top: "25%" },
  };
  const variants2: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string, opacity?: number; left?: string; top?: string  };
  } = {
    0: { opacity: 0, color: "#B220E5", left: "-20%", top: "25%" },
    1: { opacity: 0, color: "#B220E5", left: "-20%", top: "25%" },
    2: { scale: 1, top: "25%", left: "6%", opacity: 1, color: "#B220E5" },
    3: { opacity: 0, color: "#B220E5", left: "-20%", top: "25%" },
  };
  const variants3: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string, opacity?: number; left?: string; top?: string  };
  } = {
    0: { opacity: 0, color: "#ffffff", left: "-20%", top: "25%" },
    1: { opacity: 0, color: "#ffffff", left: "-20%", top: "25%" },
    2: { opacity: 0, color: "#ffffff", left: "-20%", top: "25%" },
    3: { scale: 1, top: "25%", left: "6%", opacity: 1, color: "#ffffff" },
  };

  return (
    <>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ left: "-20%" }}
        animate={variants1[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className="nuku "
          style={{
            textShadow:
              "    -5px -5px 0 #B220E5, 0   -5px 0 #B220E5, 5px -5px 0 #B220E5,5px  0   0 #B220E5,5px  5px 0 #B220E5, 5px 0 #B220E5, -5px  5px 0 #B220E5, -5px  0   0 #B220E5",
            fontSize: "200px",
          }}
        >
          09
        </h1>
      </motion.div>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ left: "-20%" }}
        animate={variants2[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className="nuku "
          style={{
            textShadow:
              "    -5px -5px 0 #ffffff, 0   -5px 0 #ffffff, 5px -5px 0 #ffffff,5px  0   0 #ffffff,5px  5px 0 #ffffff, 5px 0 #ffffff, -5px  5px 0 #ffffff, -5px  0   0 #ffffff",
            fontSize: "200px",
          }}
        >
          03
        </h1>
      </motion.div>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ left: "-20%" }}
        animate={variants3[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className="nuku "
          style={{
            textShadow:
              "    -5px -5px 0 #B220E5, 0   -5px 0 #B220E5, 5px -5px 0 #B220E5,5px  0   0 #B220E5,5px  5px 0 #B220E5, 5px 0 #B220E5, -5px  5px 0 #B220E5, -5px  0   0 #B220E5",
            fontSize: "200px",
          }}
        >
          05
        </h1>
      </motion.div>
    </>
  );
};

export default NumberComponent;
