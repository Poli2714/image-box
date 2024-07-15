'use client';

import { Loader2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components/forms';

import { useCreateCollectionForm } from '@/hooks/useCreateCollectionForm';

function CreateCollectionForm() {
  const { form, isPending, onSubmit } = useCreateCollectionForm();

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
