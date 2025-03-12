"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);

export const sendEmail = async (
  _state: { status: boolean; message: string },
  formData: FormData
) => {
  try {
    const fullName = formData.get("fullName") as string;
    const senderEmail = formData.get("email") as string;
    const message = formData.get("message") as string;

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hdrydeveloper@gmail.com",
      subject: `Email address : ${senderEmail} and email from ${fullName}`,
      text: message,
    });
    const { data, error } = response;

    if (error) {
      console.error("Error sending email:", error);
      return { status: false, message: "Failed to send email" };
    }

    return { status: true, message: "Message is sent" };
  } catch (e) {
    console.error("Exception sending email:", e);
    return { status: false, message: "An unexpected error occurred" };
  }
};
