import customTheme from "@/constants/customTheme";
import { toast } from "react-toastify";

const { colors } = customTheme;

const notify = (message: string, theme: "light" | "dark") => {
  toast(message, {
    position: "top-left",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    theme: "dark",
    progressStyle: {
      background: theme === "light" ? colors.secondary : colors.primary,
    },
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default notify;
