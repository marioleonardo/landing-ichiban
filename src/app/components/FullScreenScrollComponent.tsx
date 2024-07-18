// components/FullScreenScrollComponent.tsx
import React, { useState, useEffect, useRef, ReactNode } from "react";

interface FullScreenScrollComponentProps {
  min: number;
  max: number;
  children: (scrollPosition: number) => ReactNode;
}

const FullScreenScrollComponent: React.FC<FullScreenScrollComponentProps> = ({
  min,
  max,
  children,
}) => {
  const [scrollPosition, setScrollPosition] = useState(min);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "down" | "up") => {
    const currentTime = new Date().getTime();
    if (currentTime - lastScrollTime < 500) {
      return;
    }

    setLastScrollTime(currentTime);

    setScrollPosition((prevPosition) => {
      if (direction === "down") {
        return Math.min(prevPosition + 1, max);
      } else {
        return Math.max(prevPosition - 1, min);
      }
    });
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        handleScroll("down");
      } else {
        handleScroll("up");
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        handleScroll("down");
      } else if (event.key === "ArrowUp") {
        handleScroll("up");
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        handleScroll("down");
      } else if (touchEndY - touchStartY > 50) {
        handleScroll("up");
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel);
      container.addEventListener("keydown", handleKeyDown);
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("keydown", handleKeyDown);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [lastScrollTime, touchStartY]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        outline: "none",
      }}
    >
      {children(scrollPosition)}
    </div>
  );
};

export default FullScreenScrollComponent;
