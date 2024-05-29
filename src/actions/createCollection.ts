'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { revalidateTag } from 'next/cache';

import { collections } from '@/db/schema';
import { db } from '@/db/db';
import {
  CreateCollectionFormSchemaProps,
  createCollectionFormSchema,
} from '@/validations/CreateCollectionFormValidation';

export const createCollection = async (
  formData: CreateCollectionFormSchemaProps
) => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUserSignedIn = await isAuthenticated();
  const user = await getUser();

  if (!isUserSignedIn || !user) return;

  const result = createCollectionFormSchema.safeParse(formData);
  if (!result.success) {
    throw new Error(result.error.name);
  }

  try {
    await db.insert(collections).values({
      name: formData.name,
      userId: user.id,
    });
  } catch (error) {
    throw new Error('Unable to create a collection. Please try again');
  }

  revalidateTag('collection');
};
