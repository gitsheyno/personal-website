"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Send");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("fullName") as string;
  console.log("Send", message);

  // simple server-side validation
  //   if (!validateString(senderEmail, 500)) {
  //     return {
  //       error: "Invalid sender email",
  //     };
  //   }
  //   if (!validateString(message, 5000)) {
  //     return {
  //       error: "Invalid message",
  //     };
  //   }
  try {
    resend.emails.send({
      from: "nonumber@resend.dev",
      to: "hdrydeveloper@gmail.com",
      subject: "",
      html: "<p>When You Cook ?!</p>",
    });
  } catch (e) {
    console.log(e);
  }

  // const { data, error } = await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'hdrydeveloper@gmail.com',
  //     subject: 'Hello world',
  //     react: ContactFormEmail({ message: message }),
  //   });

  //   return {
  //     data,
  //   };
};
