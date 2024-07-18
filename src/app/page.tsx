"use client";

import Image from "next/image";
import FullScreenScrollComponent from "./components/FullScreenScrollComponent";
import BackgroundComponent from "./components/BackGroundComponent";
import CustomNavbar from "./components/CustomNavBar";
import MotoComponent from "./components/MotoComponent";
import TextIchibanComponent from "./components/TitleComponent";
import NumberComponent from "./components/NumberComponent";
import CombustionComponent from "./components/CombustionComponent";
import { Card } from "@mui/material";
import CardComponent from "./components/CardComponent";
const ChildComponent: React.FC<{ scrollPosition: number }> = ({
  scrollPosition,
}) => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <BackgroundComponent scrollPosition={scrollPosition} />
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomNavbar scrollPosition={scrollPosition} />
        <TextIchibanComponent scrollPosition={scrollPosition} />
        <NumberComponent scrollPosition={scrollPosition} />
        <MotoComponent scrollPosition={scrollPosition} />
        <CombustionComponent scrollPosition={scrollPosition} />
        <CardComponent scrollPosition={scrollPosition} />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <FullScreenScrollComponent min={0} max={3}>
      {(scrollPosition) => <ChildComponent scrollPosition={scrollPosition} />}
    </FullScreenScrollComponent>
  );
}
