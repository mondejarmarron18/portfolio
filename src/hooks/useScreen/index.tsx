import { useEffect, useLayoutEffect, useState } from "react";

const useScreen = () => {
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
    orientation: "portrait",
  });

  const handleScreen = (orientation?: "landscape" | "portrait") => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setScreen((prev) => ({
      width,
      height,
      orientation: orientation || prev.orientation,
    }));
  };

  const handleScreenOrientation = () => {
    const angle = window.screen.orientation.angle;

    setScreen((prev) => ({
      ...prev,
      orientation: angle === 0 ? "portrait" : "landscape",
    }));
  };

  useLayoutEffect(() => {
    handleScreen();
    window.addEventListener("resize", () => handleScreen());

    return () => window.removeEventListener("resize", () => handleScreen());
  }, []);

  useLayoutEffect(() => {
    handleScreenOrientation();
    window.screen.orientation.addEventListener(
      "change",
      handleScreenOrientation,
    );
  }, []);

  return screen;
};

export default useScreen;
