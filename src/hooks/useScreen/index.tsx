import { useEffect, useLayoutEffect, useState } from "react";

const useScreen = () => {
  const [screen, setScreen] = useState({
    width: 0,
    height: 0,
  });

  const handleScreen = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setScreen({
      width,
      height,
    });
  };

  useLayoutEffect(() => {
    handleScreen();
    window.addEventListener("resize", handleScreen);
  }, []);

  return screen;
};

export default useScreen;
