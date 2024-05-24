'use server';

import { redirect } from 'next/navigation';

import {
  SearchFormSchemaProps,
  searchFormSchema,
} from '@/validations/SearchFormValidation';

export const searchAction = async (formData: SearchFormSchemaProps) => {
  const result = searchFormSchema.safeParse(formData);
  if (!result.success) {
    const error = result.error.flatten();
    return {
      error: error.fieldErrors,
    };
  }

  const keyword = result.data.query.toLowerCase().replaceAll(' ', '-');

  redirect(`/search/${keyword}`);
};
