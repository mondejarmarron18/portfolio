import ArrowIcon from "@/components/icons/ArrowIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import FigmaIcon from "@/components/icons/FigmaIcon";
import FingerHeartIcon from "@/components/icons/FingerHeartIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import LoadingIcon from "@/components/icons/LoadingIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import PlanetIcon from "@/components/icons/PlanetIcon";
import SendIcon from "@/components/icons/SendIcon";
import StarIcon from "@/components/icons/StarIcon";
import SunIcon from "@/components/icons/SunIcon";
import TimeIcon from "@/components/icons/TimeIcon";

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
  GithubIcon,
  PlanetIcon,
  LinkedInIcon,
  FigmaIcon,
  FacebookIcon,
  TimeIcon,
  CalendarIcon,
  // Add more icons here
} as const;

export type IconNameType = keyof typeof icons;

export default icons;
