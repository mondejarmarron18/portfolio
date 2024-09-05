import GeneralLayout from "@/components/layouts/GeneralLayout";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import { Metadata } from "next";
import images from "@/constants/images";

export const metadata: Metadata = {
  title: "Contact - iForgeTech",
  description:
    "Reach out through the contact page for inquiries, opportunities, or collaborations. Find all the details needed to get in touch.",
  openGraph: {
    title: "Contact",
    description:
      "Reach out through the contact page for inquiries, opportunities, or collaborations",
    images: [images.openGraph.contact],
    siteName: "Contact - iForgeTech",
  },
  twitter: {
    title: "Contact - iForgeTech",
    description:
      "Reach out through the contact page for inquiries, opportunities, or collaborations",
    images: [images.openGraph.contact],
    site: "@iForgeTech",
  },
};

const ContactPage = () => {
  return (
    <GeneralLayout>
      <div className="flex h-full w-full flex-col justify-center">
        <div className="scrollbar-thin flex max-w-xl flex-col gap-2 overflow-y-auto sm:gap-4 md:gap-8">
          <div>
            <Heading variant="h1">
              Get in{" "}
              <span className="text-secondary dark:text-primary">Touch</span>
            </Heading>
            <Paragraph className="text-sm opacity-70 lg:text-base">
              {`For any inquiries, feel free to send me a message.`}
            </Paragraph>
          </div>
          <ContactForm />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default ContactPage;
