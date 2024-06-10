"use server";

import * as z from "zod";
import { Resend } from "resend";
import ContactFormEmail from "@/emails/contactFormEmail";
import { formSchema } from "@/components/contactForm";

type ContactFormInputs = z.infer<typeof formSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  result: z.SafeParseReturnType<ContactFormInputs, ContactFormInputs>
) {
  if (result.success) {
    const { name, email, message, phone } = result.data;
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Contato inicial",
        text: `Nome: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message, phone }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }
  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
