'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, DialogClose, DialogFooter } from '@/components/ui';
import { DeleteCollectionAlert } from './components';
import { DrawerClose, DrawerFooter } from '@/components/ui/shadcn';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/forms';

import { editCollectionName } from '@/actions/editCollectionName';
import {
  editCollectionNameFormSchema,
  EditCollectionNameFormSchemaProps,
} from '@/validations/EditCollectionNameFormValidation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useOptimisticCollectionNameContext } from '@/hooks/OptimisticCollectionNameProvider';

type EditCollectionNameFormProps = {
  collectionId: string;
};

type ErrorProps = {
  error: string;
  success: boolean;
};

const initialResponse = {
  error: '',
  success: true,
};

function EditCollectionNameForm({ collectionId }: EditCollectionNameFormProps) {
  const { optimisticCollectionName, setOptimisticCollectionName } =
    useOptimisticCollectionNameContext();
  const [response, setResponse] = useState<ErrorProps>(initialResponse);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const form = useForm<EditCollectionNameFormSchemaProps>({
    resolver: zodResolver(editCollectionNameFormSchema),
    defaultValues: {
      name: optimisticCollectionName.name,
    },
  });

  const formValue = form.watch('name');

  const onSubmit = async (formData: EditCollectionNameFormSchemaProps) => {
    setOptimisticCollectionName(formData.name);
    const actionResult = await editCollectionName(formData, collectionId);
    if (!actionResult.success) {
      setResponse({
        error: actionResult.error,
        success: false,
      });
    } else {
      setResponse(initialResponse);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-y-6'
          name='edit-collection-name'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-foreground'>Name</FormLabel>
                <FormControl>
                  <Input
                    className='h-10 font-light'
                    placeholder='Name here...'
                    type='text'
                    {...field}
                  />
                </FormControl>
                {!response.success ? (
                  <p className='text-sm font-light text-red-500'>
                    {response.error}
                  </p>
                ) : (
                  <FormMessage className='text-red-500' />
                )}
              </FormItem>
            )}
          />
          {!response.success ||
          (formValue.length > 0 && formValue.length < 51) ? (
            isDesktop ? (
              <DialogFooter>
                <DialogClose asChild>
                  <Button type='submit'>Save</Button>
                </DialogClose>
              </DialogFooter>
            ) : (
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button className='self-end' type='submit'>
                    Save
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            )
          ) : (
            <Button className='self-end' type='submit'>
              Save
            </Button>
          )}
        </form>
      </Form>
      <DeleteCollectionAlert collectionId={collectionId} />
    </>
  );
}

export default EditCollectionNameForm;
