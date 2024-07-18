import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CombustionComponentProps {
  scrollPosition: number;
}

const CombustionComponent: React.FC<CombustionComponentProps> = ({
  scrollPosition,
}) => {
  const variants1: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string };
  } = {
    0: { opacity: 0, color: "#ffffff", left: "-20%", top: "81%" },
    1: { scale: 1, top: "81%", left: "6%", opacity: 1, color: "#ffffff" },
    2: { opacity: 0, color: "#ffffff", left: "-20%", top: "81%" },
    3: { opacity: 0, color: "#ffffff", left: "-20%", top: "81%" },
  };
  const variants2: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string };
  } = {
    0: { opacity: 0, color: "#B220E5", left: "-20%", top: "81%" },
    1: { opacity: 0, color: "#B220E5", left: "-20%", top: "81%" },
    2: { scale: 1, top: "81%", left: "6%", opacity: 1, color: "#B220E5" },
    3: { opacity: 0, color: "#B220E5", left: "-20%", top: "81%" },
  };
  const variants3: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string };
  } = {
    0: { opacity: 0, color: "#ffffff", left: "-20%", top: "81%" },
    1: { opacity: 0, color: "#ffffff", left: "-20%", top: "81%" },
    2: { opacity: 0, color: "#ffffff", left: "-20%", top: "81%" },
    3: { scale: 1, top: "81%", left: "6%", opacity: 1, color: "#ffffff" },
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
          className="nuku text-black"
          style={{ lineHeight: 1.2, fontSize: "20px" }}
        >
          01
        </h1>
        <div className="relative mb-3">
          <div
            style={{ height: "2px", width: "80px" }}
            className="absolute top-1/2 transform   bg-gray-600"
          ></div>
          <div
            style={{ height: "4px", width: "40px" }}
            className="absolute top-1/2 transform -translate-y-1/2 bg-fuchsia-700"
          ></div>
        </div>
        <h1
          className="nuku text-black"
          style={{ lineHeight: 0.3, fontSize: "30px" }}
        >
          Modern
        </h1>
        <h1 className="nuku text-black" style={{ fontSize: "30px" }}>
          Tires
        </h1>
      </motion.div>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ left: "-20%" }}
        animate={variants2[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className="nuku text-white"
          style={{ lineHeight: 1.2, fontSize: "20px" }}
        >
          03
        </h1>
        <div className="relative mb-3">
          <div
            style={{ height: "2px", width: "80px" }}
            className="absolute top-1/2 transform   bg-gray-600"
          ></div>
          <div
            style={{ height: "4px", width: "40px" }}
            className="absolute top-1/2 transform -translate-y-1/2 bg-fuchsia-700"
          ></div>
        </div>
        <h1
          className="nuku text-white"
          style={{ lineHeight: 0.3, fontSize: "30px" }}
        >
          Electric
        </h1>
        <h1 className="nuku text-white" style={{ fontSize: "30px" }}>
          Combustion
        </h1>
      </motion.div>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ left: "-20%" }}
        animate={variants3[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1
          className="nuku text-black"
          style={{ lineHeight: 1.2, fontSize: "20px" }}
        >
          05
        </h1>
        <div className="relative mb-3">
          <div
            style={{ height: "2px", width: "80px" }}
            className="absolute top-1/2 transform   bg-gray-600"
          ></div>
          <div
            style={{ height: "4px", width: "40px" }}
            className="absolute top-1/2 transform -translate-y-1/2 bg-fuchsia-700"
          ></div>
        </div>
        <h1
          className="nuku text-black "
          style={{ lineHeight: 0.3, fontSize: "30px" }}
        >
          Modern
        </h1>
        <h1 className="nuku text-black" style={{ fontSize: "30px" }}>
          Design
        </h1>
      </motion.div>
    </>
  );
};

export default CombustionComponent;
