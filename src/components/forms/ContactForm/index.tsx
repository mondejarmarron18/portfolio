"use client";

import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import TextBox from "@/components/ui/TextBox";
import useContactForm, { ContactFormType } from "@/hooks/forms/useContactForm";
import api from "@/utils/api";
import cn from "@/utils/cn";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useContactForm();
  const { mutate, isPending, isSuccess, reset } = useMutation({
    mutationFn: (data: ContactFormType) => api.post("/api/contact", data),
  });

  useEffect(() => {
    if (isSuccess) {
      resetField("fullName");
      resetField("email");
      resetField("message");
      setTimeout(() => reset(), 3000);
    }
  }, [isSuccess]);

  const handleOnSubmit = handleSubmit((data) => mutate(data));

  return (
    <form
      onSubmit={handleOnSubmit}
      className={cn("flex w-full flex-col gap-2 md:gap-5")}
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
        contacting you. We prioritize your privacy and ensure that your data is
        not saved or utilized for any other purposes.
      </Paragraph>
      <div className="flex flex-col gap-2">
        {isSuccess && (
          <Paragraph className="text-sm font-medium text-secondary dark:text-primary lg:text-base">
            Message sent. Thank you!
          </Paragraph>
        )}
        <Button
          variant="primary"
          icon={{
            name: isPending ? "LoadingIcon" : "SendIcon",
          }}
          className="w-fit"
        >
          {isPending ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
