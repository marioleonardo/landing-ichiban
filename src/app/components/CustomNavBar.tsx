import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
interface CustomNavbarProps {
  scrollPosition: number;
}

export default function CustomNavbar({ scrollPosition }: CustomNavbarProps) {
  const variants: {
    [key: number]: { scale?: number; y?: number; x?: string; top?: string };
  } = {
    0: { top: "-15%" },
    1: { top: "2%" },
    2: { top: "2%" },
    3: { top: "2%" },
  };

  return (
    <motion.nav
      initial={{ top: "-10%" }}
      animate={variants[scrollPosition]}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(34px)",
      }}
      className="absolute z-10   left-30 right-30  py-2 px-8 flex justify-between items-center rounded-lg "
    >
      <h2 className="nuku pl-3 pr-8 text-4xl font-medium text-black">
        ICH1BAN
      </h2>
      <div className="flex space-x-4">
        <button className="px-4 py-1 font-medium  bg-gray-200 rounded-full text-black hover:bg-gray-300">
          ABOUT
        </button>
        <button className="px-4 py-1 font-medium bg-gray-200 rounded-full text-black hover:bg-gray-300">
          SERVICES
        </button>
        <button className="px-4 py-1 font-medium bg-gray-200 rounded-full text-black hover:bg-gray-300">
          MODELS
        </button>
        <button className="px-4 py-1 font-medium bg-gray-200 rounded-full text-black hover:bg-gray-300">
          META
        </button>
        <button className="px-4 py-1 font-medium bg-purple-500 rounded-full text-white flex items-center space-x-2 hover:bg-purple-600">
          <span>CART</span>
          <div className="bg-white p-1 rounded-full flex items-center justify-center">
            <ShoppingCartOutlinedIcon
              style={{ color: "#000000", fontSize: "16px" }}
            />
          </div>
        </button>
      </div>
    </motion.nav>
  );
}
