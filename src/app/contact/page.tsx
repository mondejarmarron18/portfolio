"use client";

import GeneralLayout from "@/components/layouts/GeneralLayout";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import TextBox from "@/components/ui/TextBox";
import useContactForm, { ContactFormType } from "@/hooks/forms/useContactForm";
import api from "@/utils/api";
import cn from "@/utils/cn";
import notify from "@/utils/notify";
import { useMutation } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const ContactPage = () => {
  const { theme } = useTheme();
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useContactForm();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: ContactFormType) => api.post("/api/contact", data),
  });

  useEffect(() => {
    if (isSuccess) {
      resetField("fullName");
      resetField("email");
      resetField("message");
      notify("Thanks for reaching out!", (theme as "dark" | "light") || "dark");
    }
  }, [isSuccess]);

  const handleOnSubmit = handleSubmit((data) => mutate(data));

  return (
    <GeneralLayout>
      <div className="flex h-full w-full flex-col justify-center">
        <div className="flex max-w-xl flex-col gap-8">
          <div>
            <Heading variant="h1">
              Get in{" "}
              <span className="text-secondary dark:text-primary">Touch</span>
            </Heading>
            <Paragraph className="text-sm opacity-70 lg:text-base">
              {`For any inquiries, feel free to send me a message.`}
            </Paragraph>
          </div>

          <form
            onSubmit={handleOnSubmit}
            className={cn("flex w-full flex-col gap-5")}
          >
            <TextBox
              type="text"
              placeholder="Full Name"
              error={errors.fullName?.message}
              {...register("fullName")}
            />

            <TextBox
              placeholder="Email Address"
              error={errors.email?.message}
              {...register("email")}
            />
            <TextBox
              placeholder="Your Message"
              type="textarea"
              error={errors.message?.message}
              {...register("message")}
            />
            <Paragraph className="text-sm opacity-70 lg:text-base">
              Your information is kept confidential and will solely be used for
              contacting you. We prioritize your privacy and ensure that your
              data is not saved or utilized for any other purposes.
            </Paragraph>
            <Button
              variant="primary"
              icon={{
                name: isPending ? "LoadingIcon" : "SendIcon",
              }}
              className="w-fit"
            >
              {isPending ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </GeneralLayout>
  );
};

export default ContactPage;
