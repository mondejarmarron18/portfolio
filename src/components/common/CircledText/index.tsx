import cn from "@/utils/cn";
import { forwardRef, HTMLAttributes } from "react";

type CircledTextPropsType = HTMLAttributes<HTMLDivElement> & {
  text: string;
  size?: string;
  gap?: number;
};

const CircledText = forwardRef<HTMLDivElement, CircledTextPropsType>(
  ({ text, gap = 15, size = "200px", ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "pointer-events-none relative flex h-2 w-2 animate-spin-slow items-center justify-center text-xl font-bold uppercase text-secondary dark:text-primary",
          props.className,
        )}
      >
        {text.split("").map((char, index) => (
          <div
            key={index}
            className="absolute"
            style={{ transform: `rotate(${index * gap}deg)`, height: size }}
          >
            {char}
          </div>
        ))}
      </div>
    );
  },
);

CircledText.displayName = "CircledText";

export default CircledText;
