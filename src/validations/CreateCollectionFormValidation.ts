import { z } from 'zod';

export const createCollectionFormSchema = z.object({
  name: z.string().trim().min(1, {
    message:
      'Please enter a name with at least one character to create a collection.',
  }),
});

export type CreateCollectionFormSchemaProps = z.infer<
  typeof createCollectionFormSchema
>;
