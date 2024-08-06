import CalendarIcon from "@/components/icons/CalendarIcon";
import Heading from "@/components/ui/Heading";
import customTheme from "@/constants/customTheme";
import cn from "@/utils/cn";
import {
  differenceInDays,
  formatDate,
  formatDistanceToNow,
  parseISO,
} from "date-fns";
import { useTheme } from "next-themes";
import React, { FC, HTMLAttributes } from "react";

type BlogHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  date: Date;
};

const { colors } = customTheme;

const BlogHeader: FC<BlogHeaderProps> = ({ title, date, ...props }) => {
  const { theme } = useTheme();

  const isRecent = differenceInDays(new Date(), date) < 7;

  const formattedDate = isRecent
    ? formatDistanceToNow(date, { addSuffix: true })
    : formatDate(date, "dd MMM yyyy");

  return (
    <div {...props} className={cn("flex flex-col gap-2", props.className)}>
      <Heading variant="h1">{title}</Heading>
      <div className="flex items-center gap-2">
        <CalendarIcon
          size="20"
          color={theme === "dark" ? colors.customWhite : colors.customGray}
        />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default BlogHeader;
