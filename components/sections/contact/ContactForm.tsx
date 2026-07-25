"use client";

import { useActionState } from "react";
import { sendEmail } from "@/actions/email";
import { ContactFormView } from "./ContactFormView";

const initialState = {
  status: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return <ContactFormView state={state} formAction={formAction} />;
}
