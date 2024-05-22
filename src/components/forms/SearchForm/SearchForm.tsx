'use client';

import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components/forms';
import {
  searchFormSchema,
  SearchFormSchemaProps,
} from '@/validations/SearchFormValidation';

function SearchForm() {
  const form = useForm<SearchFormSchemaProps>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  });

  const onSubmit = (data: SearchFormSchemaProps) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        name='search-form'
        className='relative'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='query'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='pl-12 font-light shadow'
                  type='search'
                  placeholder='Enter your keywords...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='absolute left-0 top-0 h-14 pl-4'
          size={null}
          type='submit'
          variant={null}
        >
          <Search
            data-testid='search-icon'
            className='text-secondary'
            size={20}
          />
        </Button>
      </form>
    </Form>
  );
}

export default SearchForm;
