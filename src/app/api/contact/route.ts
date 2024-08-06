import config from "@/utils/config";
import { createTransport } from "nodemailer";

type Post = {
  fullName: string;
  email: string;
  message: string;
};

const transporter = createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.contactEmail,
    pass: config.contactPassword,
  },
});

export const POST = async (req: Request) => {
  const { fullName, email, message }: Post = await req.json();

  try {
    await transporter.sendMail({
      from: email,
      to: config.contactEmail,
      subject: `Message from ${fullName}`,
      text: message,
    });

    return new Response("Message sent", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Message not sent", { status: 500 });
  }
};
