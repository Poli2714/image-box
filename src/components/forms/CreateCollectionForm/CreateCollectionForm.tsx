'use client';

import { Loader2Icon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components/forms';

import {
  createCollectionFormSchema,
  CreateCollectionFormSchemaProps,
} from '@/validations/CreateCollectionFormValidation';
import { createCollection } from '@/actions/createCollection';

function CreateCollectionForm() {
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

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-y-4'
        name='create-collection'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='h-12 px-6 font-light'
                  placeholder='Enter collection name...'
                  type='text'
                  {...field}
                />
              </FormControl>
              <FormMessage className='red text-red-400' />
            </FormItem>
          )}
        />
        <Button className='h-12 text-sm' disabled={isPending} type='submit'>
          {isPending ? (
            <Loader2Icon className='mr-2 animate-spin' size={16} />
          ) : null}
          Create Collection
        </Button>
      </form>
    </Form>
  );
}

export default CreateCollectionForm;
