import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  message: z.string().min(1, "Message is required"),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

const useContactForm = () => {
  return useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
  });
};

export default useContactForm;
