"use client";

import cn from "@/utils/cn";
import {
  InputHTMLAttributes,
  LegacyRef,
  TextareaHTMLAttributes,
  useRef,
} from "react";
import { usePopper } from "react-popper";

type TextareaPropsType = TextareaHTMLAttributes<HTMLTextAreaElement>;
type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

type TextBoxPropsType = (TextareaPropsType | InputPropsType) & {
  type?: "email" | "password" | "text" | "textarea";
  error?: boolean | string;
};

const TextBox = ({ error, type, ...props }: TextBoxPropsType) => {
  const errorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const { styles, attributes } = usePopper(inputRef.current, errorRef.current, {
    placement: "bottom-start",
    modifiers: [{ name: "offset", options: { offset: [0, 5] } }],
  });
  const textBoxClassName =
    "rounded-lg border border-customGray/50 bg-transparent px-5 py-3 placeholder:text-customGray/50 focus:outline-none dark:border-customDirtyWhite/50 placeholder:dark:text-customDirtyWhite/50";

  const renderTextBox = () => {
    if (type === "textarea") {
      return (
        <textarea
          ref={inputRef as LegacyRef<HTMLTextAreaElement>}
          rows={4}
          {...(props as TextareaPropsType)}
          className={cn(
            textBoxClassName,
            {
              "border-red-500": error,
            },
            props.className,
          )}
        ></textarea>
      );
    }

    return (
      <input
        ref={inputRef as LegacyRef<HTMLInputElement>}
        {...(props as InputPropsType)}
        className={cn(
          textBoxClassName,
          {
            "border-red-500": error,
          },
          props.className,
        )}
      />
    );
  };

  return (
    <>
      {renderTextBox()}
      <div
        ref={errorRef}
        className={cn("pointer-events-none text-sm font-medium text-red-500", {
          hidden: typeof error !== "string",
        })}
        style={styles.popper}
        {...attributes.popper}
      >
        {error}
      </div>
    </>
  );
};

export default TextBox;
