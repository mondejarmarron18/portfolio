import Cursor from "@/components/common/Cursor";
import { ThemeProvider } from "next-themes";
import cursor from "@/utils/cursor";

type RootLayoutPropsType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Cursor />
      {children}
    </ThemeProvider>
  );
};

export default RootLayout;
