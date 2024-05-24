'use server';

import {
  SearchFormSchemaProps,
  searchFormSchema,
} from '@/validations/SearchFormValidation';
import { redirect } from 'next/navigation';

export const searchAction = async (formData: SearchFormSchemaProps) => {
  const result = searchFormSchema.safeParse(formData);
  if (!result.success) {
    const error = result.error.flatten();
    return {
      error: error.fieldErrors,
    };
  }

  redirect(`/search/${result.data.query}`);
};
