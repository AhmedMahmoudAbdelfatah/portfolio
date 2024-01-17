"use server";

import ContactFormEmail from "@/email/ContactFormEmail";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("email");
  if (!validateString(message, 5000)) return { data: null, error: "Invalid message" };
  if (!validateString(email, 500)) return { data: null, error: "Invalid Email" };

  try {
    const res = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ahmedmahmoud1999y@gmail.com",
      reply_to: email as string,
      subject: "Message from contact form",
      react: React.createElement(ContactFormEmail, { message: message as string, email: email as string})
    });

    return { data: res.data, error: res.error?.message };

  } catch (error) {
    return {
      data: null,
      error: getErrorMessage(error)
    }
  }
}