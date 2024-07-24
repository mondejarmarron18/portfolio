"use client";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import TextBox from "@/components/ui/TextBox";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="flex max-w-xl flex-col gap-8">
        <div>
          <Heading variant="h1">
            Get in{" "}
            <span className="text-secondary dark:text-primary">Touch</span>
          </Heading>
          <Paragraph>
            {`For any inquiries, feel free to send me a message.`}
          </Paragraph>
        </div>

        <form className="flex w-full flex-col gap-5">
          <TextBox type="text" placeholder="Full Name" className="w-full" />
          <TextBox placeholder="Email Address" className="w-full" />
          <TextBox
            placeholder="Your Message"
            type="textarea"
            className="w-full"
          />
          <Paragraph className="text-sm opacity-70 lg:text-base">
            Your information is kept confidential and will solely be used for
            contacting you. We prioritize your privacy and ensure that your data
            is not saved or utilized for any other purposes.
          </Paragraph>
          <Button
            variant="primary"
            icon={{
              name: "SendIcon",
            }}
            className="w-fit"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
