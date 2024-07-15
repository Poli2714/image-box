'use client';

import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { createCollection } from '@/actions/createCollection';
import {
  CreateCollectionFormSchemaProps,
  createCollectionFormSchema,
} from '@/validations/CreateCollectionFormValidation';

export function useCreateCollectionForm() {
  const form = useForm<CreateCollectionFormSchemaProps>({
    resolver: zodResolver(createCollectionFormSchema),
    defaultValues: {
      name: '',
    },
  });
  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: CreateCollectionFormSchemaProps) => {
    form.reset();
    startTransition(async () => await createCollection(data));
  };

  return {
    form,
    isPending,
    onSubmit,
  };
}
