"use server";

import * as z from "zod";
import { Resend } from "resend";
import { formSchema } from "@/components/contactForm";
import WelcomeEmail from "@/emails/contactReactEmail";

type ContactFormInputs = z.infer<typeof formSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  result: z.SafeParseReturnType<ContactFormInputs, ContactFormInputs>
) {
  if (result.success) {
    const { name, email, message, phone } = result.data;
    try {
      const data = await resend.emails.send({
        from: "Olá <renanzanin@rzanindev.com.br>",
        to: email,
        subject: "Contato inicial",
        text: `Nome: ${name}\nEmail: ${email}\nMessage: ${message}\nTelefone: ${phone} `,
        react: WelcomeEmail({ name }),
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
