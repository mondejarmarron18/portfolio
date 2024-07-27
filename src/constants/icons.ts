import ArrowIcon from "@/components/icons/ArrowIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";
import FingerHeartIcon from "@/components/icons/FingerHeartIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import LoadingIcon from "@/components/icons/LoadingIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import SendIcon from "@/components/icons/SendIcon";
import StarIcon from "@/components/icons/StarIcon";
import SunIcon from "@/components/icons/SunIcon";

const icons = {
  MoonIcon,
  MenuIcon,
  StarIcon,
  ArrowIcon,
  FingerHeartIcon,
  SunIcon,
  LoadingIcon,
  HomeIcon,
  SendIcon,
  DownloadIcon,
  CloseIcon,
  // Add more icons here
} as const;

export type IconNameType = keyof typeof icons;

export default icons;
