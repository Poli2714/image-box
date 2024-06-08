'use server';

import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

import { collections } from '@/db/schema';
import { db } from '@/db/db';
import {
  EditCollectionNameFormSchemaProps,
  editCollectionNameFormSchema,
} from '@/validations/EditCollectionNameFormValidation';

export const editCollectionName = async (
  formData: EditCollectionNameFormSchemaProps,
  collectionId: string
) => {
  const result = editCollectionNameFormSchema.safeParse(formData);
  if (!result.success) {
    const errors = result.error.flatten();
    return {
      error: errors.fieldErrors.name?.join('. ') ?? '',
      success: false,
    };
  }

  try {
    await db
      .update(collections)
      .set({
        name: result.data.name,
      })
      .where(eq(collections.id, collectionId));
  } catch (err) {
    if (err instanceof Error) {
      return {
        error: err.message,
        success: false,
      };
    } else {
      return {
        error: String(err),
        success: false,
      };
    }
  }

  revalidateTag('collection');
  return { error: '', success: true };
};
