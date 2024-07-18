// components/TextIchibanComponent.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TextIchibanComponentProps {
  scrollPosition: number;
}

const TextIchibanComponent: React.FC<TextIchibanComponentProps> = ({
  scrollPosition,
}) => {
  const variants1: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string };
  } = {
    0: { color: "#B220E5" },
    1: { scale: 1, top: "4%", left: "6%", color: "#B220E5" },
    2: { scale: 1, top: "150%", left: "6%", color: "#B220E5" },
    3: { scale: 1, top: "200%", left: "6%", color: "#B220E5" },
  };

  const variants2: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string };
  } = {
    0: { top: "-200%", color: "#ffffff" },
    1: { scale: 1, top: "-200%", left: "6%", color: "#ffffff" },
    2: { scale: 1, top: "4%", left: "6%", color: "#ffffff" },
    3: { scale: 1, top: "200%", left: "6%", color: "#ffffff" },
  };

  const variants3: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string };
  } = {
    0: { top: "-200%", color: "#B220E5" },
    1: { scale: 1, top: "-200%", left: "6%", color: "#B220E5" },
    2: { scale: 1, top: "-200%", left: "6%", color: "#B220E5" },
    3: { scale: 1, top: "4%", left: "6%", color: "#B220E5" },
  };

  return (
    <>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ scale: 1, color: "#B220E5" }}
        animate={variants1[scrollPosition]}
        transition={{ duration: 1.5 }}
      >
        <h1 className="nuku " style={{ fontSize: "220px" }}>
          ICHIBAN
        </h1>
      </motion.div>

      <motion.div
        style={{ position: "absolute" }}
        initial={{ top: "-200%", scale: 1, color: "#ffffff" }}
        animate={variants2[scrollPosition]}
        transition={{ duration: 1.5, delay: 0 }}
      >
        <h1 className="nuku " style={{ fontSize: "220px" }}>
          ICHIBAN
        </h1>
      </motion.div>

      <motion.div
        style={{ position: "absolute" }}
        initial={{ top: "-200%", scale: 1, color: "#ffffff" }}
        animate={variants3[scrollPosition]}
        transition={{ duration: 1.5 }}
      >
        <h1 className="nuku " style={{ fontSize: "220px" }}>
          ICHIBAN
        </h1>
      </motion.div>
    </>
  );
};

export default TextIchibanComponent;
