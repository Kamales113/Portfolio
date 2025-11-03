// src/ai/flows/personalized-greeting.ts
'use server';

/**
 * @fileOverview Generates a personalized greeting for website visitors based on their inferred role.
 *
 * - generatePersonalizedGreeting - A function that generates a personalized greeting.
 * - PersonalizedGreetingInput - The input type for the generatePersonalizedGreeting function.
 * - PersonalizedGreetingOutput - The return type for the generatePersonalizedGreeting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGreetingInputSchema = z.object({
  inferredRole: z
    .string()
    .describe("The inferred role of the website visitor (e.g., 'potential employer', 'fellow engineer')."),
});
export type PersonalizedGreetingInput = z.infer<typeof PersonalizedGreetingInputSchema>;

const PersonalizedGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting message.'),
});
export type PersonalizedGreetingOutput = z.infer<typeof PersonalizedGreetingOutputSchema>;

export async function generatePersonalizedGreeting(
  input: PersonalizedGreetingInput
): Promise<PersonalizedGreetingOutput> {
  return personalizedGreetingFlow(input);
}

const personalizedGreetingPrompt = ai.definePrompt({
  name: 'personalizedGreetingPrompt',
  input: {schema: PersonalizedGreetingInputSchema},
  output: {schema: PersonalizedGreetingOutputSchema},
  prompt: `You are a personalized greeting generator for a portfolio website.

  Based on the inferred role of the visitor, generate a short, engaging, and professional greeting.

  Inferred Role: {{{inferredRole}}}

  Greeting: `,
});

const personalizedGreetingFlow = ai.defineFlow(
  {
    name: 'personalizedGreetingFlow',
    inputSchema: PersonalizedGreetingInputSchema,
    outputSchema: PersonalizedGreetingOutputSchema,
  },
  async input => {
    const {output} = await personalizedGreetingPrompt(input);
    return output!;
  }
);
