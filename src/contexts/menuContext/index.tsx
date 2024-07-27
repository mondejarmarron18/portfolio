import Menu from "@/components/common/Menu";
import { createContext, FC, ReactNode, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

const MenuContext = createContext({
  visible: false,
  toggle: () => {},
});

const AnimatedMenu = motion(Menu);

const animationVariants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <MenuContext.Provider value={{ visible, toggle }}>
      {children}
      <AnimatePresence>
        {visible && (
          <AnimatedMenu
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>
    </MenuContext.Provider>
  );
};

export default MenuContext;
