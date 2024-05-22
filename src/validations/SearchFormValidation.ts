import { z } from 'zod';

export const searchFormSchema = z.object({
  query: z
    .string()
    .trim()
    .min(1, { message: 'Please enter at least one character' }),
});

export type SearchFormSchemaProps = z.infer<typeof searchFormSchema>;
