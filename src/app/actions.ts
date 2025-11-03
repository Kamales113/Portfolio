"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const firstErrorMessage = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstErrorMessage || 'Invalid form data.',
      status: "error",
    };
  }
  
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just simulate a successful submission.
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    status: "success",
  };
}
