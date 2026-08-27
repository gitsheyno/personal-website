"use client";

import { useActionState } from "react";
import { sendEmail } from "../actions/send-email";
import type { ContactFormState } from "../contact.types";
import { ContactFormView } from "./ContactFormView";

const initialState: ContactFormState = {
  status: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return <ContactFormView state={state} formAction={formAction} />;
}
