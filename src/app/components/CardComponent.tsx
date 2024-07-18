import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardComponentProps {
  scrollPosition: number;
}

const CardComponent: React.FC<CardComponentProps> = ({ scrollPosition }) => {
  const variants1: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string; opacity?: number; left?: string; top?: string };
  } = {
    0: { opacity: 0, color: "#ffffff", left: "82%", top: "100%" },
    1: { scale: 1, left: "82%", top: "28%", opacity: 1, color: "#ffffff" },
    2: { opacity: 0, color: "#ffffff", left: "82%", top: "0%" },
    3: { opacity: 0, color: "#ffffff",  top: "81%" },
  };
  const variants2: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string  ,opacity?: number; left?: string; top?: string };
  } = {
    0: { opacity: 0, color: "#ffffff", left: "82%", top: "100%" },
    1: { opacity: 0, color: "#ffffff", left: "82%", top: "100%" },
    2: { scale: 1, left: "82%", top: "28%", opacity: 1, color: "#ffffff" },
    3: { opacity: 0, color: "#ffffff", left: "82%", top: "0%" },
  };
  const variants3: {
    [key: number]: { scale?: number; y?: number; x?: string; color?: string , opacity?: number; left?: string; top?: string };
  } = {
    0: { opacity: 0, color: "#ffffff", left: "82%", top: "100%" },
    1: { opacity: 0, color: "#ffffff", left: "82%", top: "100%" },
    2: { opacity: 0, color: "#ffffff", left: "82%", top: "100%" },
    3: { scale: 1, left: "82%", top: "28%", opacity: 1, color: "#ffffff" },
  };

  return (
    <>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ opacity: 0 }}
        animate={variants1[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="absolute flex flex-col text-black items-right w-[160px]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(25px)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div className="relative rounded-lg bg-black object-fill">
            <img
              src="m4.png"
              alt="Small Image"
              className="object-fill"
              style={{ borderRadius: "10px", width: "50px", height: "50px" }}
            />
          </div>
          <h1 className="nuku text-2xl text-right">sky-06</h1>
          <p className="text-xs text-right" style={{}}>
            Vestibulum ante lectus, facilisis id erat convallis, tempus
            vestibulum ipsum. Cras congue rhoncus tellus.
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ opacity: 0 }}
        animate={variants2[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="absolute flex flex-col text-black items-right w-[160px]"
          style={{
            left: "90%",
            top: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(25px)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div className="rounded-lg bg-black object-fill">
            <img
              src="m4.png"
              alt="Small Image"
              className="object-fill"
              style={{ borderRadius: "10px", width: "50px", height: "50px" }}
            />
          </div>
          <h1 className="nuku text-2xl text-right">sky-03</h1>
          <p className="text-xs text-right" style={{}}>
            Vestibulum ante lectus, facilisis id erat convallis, tempus
            vestibulum ipsum. Cras congue rhoncus tellus.
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{ position: "absolute" }}
        initial={{ opacity: 0 }}
        animate={variants3[scrollPosition]}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="absolute flex flex-col text-black items-right w-[160px]"
          style={{
            left: "90%",
            top: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(25px)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <div className="rounded-lg bg-black object-fill">
            <img
              src="m4.png"
              alt="Small Image"
              className="object-fill"
              style={{ borderRadius: "10px", width: "50px", height: "50px" }}
            />
          </div>
          <h1 className="nuku text-2xl text-right">sky-04</h1>
          <p className="text-xs text-right" style={{}}>
            Vestibulum ante lectus, facilisis id erat convallis, tempus
            vestibulum ipsum. Cras congue rhoncus tellus.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default CardComponent;
