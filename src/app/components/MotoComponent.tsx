// components/MotoComponent.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MotoComponentProps {
  scrollPosition: number;
}

const MotoComponent: React.FC<MotoComponentProps> = ({ scrollPosition }) => {
  const variantsMoto1: {
    [key: number]: { scale?: number; y?: number; x?: number; top?: string;  opacity?: number; };
  } = {
    0: { scale: 35.5, y: 650, x: 2880, opacity: 0 },
    1: { scale: 2, y: 70, opacity: 1 },
    2: { scale: 35.5, y: 650, x: 2880, opacity: 0 },
    3: { scale: 35.5, y: 650, x: 2880 },
  };

  const variantsMoto2: {
    [key: number]: { scale?: number; y?: number; x?: number; top?: string;  opacity?: number; };
  }  = {
    0: { scale: 35.5, y: 650, x: 2880, opacity: 0 },
    1: { scale: 0.5, y: 70, opacity: 0 },
    2: { scale: 1.8, y: 90, opacity: 1 },
    3: { scale: 35.5, y: 650, x: 2880 },
  };

  const variantsMoto3  : {
    [key: number]: { scale?: number; y?: number; x?: number; top?: string;  opacity?: number; };
  } ={
    0: { scale: 35.5, y: 650, x: 2880, opacity: 0 },
    1: { scale: 2, y: 70, opacity: 0 },
    2: { scale: 0.5, y: 70, opacity: 0 },
    3: { scale: 1.8, y: 90, opacity: 1 },
  };

  return (
    <>
      <motion.div
        style={{
          position: "absolute",
        }}
        initial={{ opacity: 0 }}
        animate={variantsMoto1[scrollPosition]}
        transition={{ duration: 1.5 }}
      >
        <Image src="/m1.png" alt="Moto" width={500} height={500} unoptimized />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
        }}
        initial={{ opacity: 0 }}
        animate={variantsMoto2[scrollPosition]}
        transition={{ duration: 1.5 }}
      >
        <Image src="/m2.png" alt="Moto" width={500} height={500} unoptimized />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
        }}
        initial={{ opacity: 0 }}
        animate={variantsMoto3[scrollPosition]}
        transition={{ duration: 1.5 }}
      >
        <Image src="/m3.png" alt="Moto" width={500} height={500} unoptimized />
      </motion.div>
    </>
  );
};

export default MotoComponent;
