import { z } from 'zod';

export const editCollectionNameFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, {
      message:
        'Please enter a name with at least one character to create a collection.',
    })
    .max(50, {
      message:
        'The collection name cannot exceed 50 characters. Please enter a shorter name.',
    }),
});

export type EditCollectionNameFormSchemaProps = z.infer<
  typeof editCollectionNameFormSchema
>;
