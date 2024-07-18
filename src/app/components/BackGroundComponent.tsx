import React from "react";
import { motion } from "framer-motion";

interface BackgroundComponentProps {
  scrollPosition: number;
}

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({
  scrollPosition,
}) => {
  const renderSlideContent = () => {
    switch (scrollPosition) {
      case 0:
        return (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-100 backdrop-blur-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-custom-fuchsia bg-opacity-40 "></div>
            <div className="absolute top-0 -left-20 top-1/2 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-100 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-30 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-20 -right-20 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-100 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20  backdrop-blur-[50px]"></div>
          </>
        );
      case 1:
        return (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-100 backdrop-blur-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-custom-fuchsia bg-opacity-40 "></div>
            <div className="absolute top-0 -left-20 top-1/2 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-100 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-30 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-20 -right-20 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-100 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20  backdrop-blur-[50px]"></div>
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[200px] bg-custom-fuchsia bg-opacity-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </>
        );
      case 2:
        return (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-100 backdrop-blur-lg"></div>
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-custom-fuchsia bg-opacity-100 backdrop-blur-[50px] "
              initial={{ opacity: 1, scale: 0.1, left: "40%" }}
              animate={{ opacity: 1, scale: 1, left: 0 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            <div className="absolute  -bottom-20 -left-20 w-[400px] h-[400px] bg-white bg-opacity-50 rounded-full backdrop-blur-md"></div>
            <div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-white bg-opacity-50 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-custom-fuchsia bg-opacity-20  backdrop-blur-[50px]"></div>
          </>
        );
      case 3:
        return (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-100 backdrop-blur-lg"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-custom-fuchsia bg-opacity-40 "></div>
            <div className="absolute top-0 -left-20 top-1/2 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-100 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-30 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-20 -right-20 w-[400px] h-[400px] bg-custom-fuchsia bg-opacity-100 rounded-full backdrop-blur-md"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20  backdrop-blur-[50px]"></div>
            <motion.div
              className="absolute left-0 bottom-0 w-full h-[200px] bg-custom-fuchsia bg-opacity-10"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: -1,
      }}
    >
      {renderSlideContent()}
    </div>
  );
};

export default BackgroundComponent;
