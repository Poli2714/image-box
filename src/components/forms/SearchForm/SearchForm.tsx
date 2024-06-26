'use client';

import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
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

type SearchFormProps = {
  size?: 'sm' | 'lg';
};

function SearchForm({ size = 'lg' }: SearchFormProps) {
  const form = useForm<SearchFormSchemaProps>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  });

  const router = useRouter();

  const onSubmit = (data: SearchFormSchemaProps) => {
    form.reset();
    const keyword = data.query.toLowerCase().replaceAll(' ', '-');
    router.push(`/search/${keyword}`);
  };

  return (
    <Form {...form}>
      <form
        name='search-form'
        className={`relative ${size === 'sm' ? 'hidden min-w-[clamp(21rem,32.5dvw,28rem)] lg:block' : null}`}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='query'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={`pl-12 font-light shadow ${size === 'sm' ? 'h-10' : null}`}
                  type='search'
                  placeholder={`${size === 'lg' ? 'Enter your keywords...' : 'Search high-resolution images'}`}
                  {...field}
                />
              </FormControl>
              {size === 'lg' ? <FormMessage /> : null}
            </FormItem>
          )}
        />
        <Button
          className={`absolute left-0 top-0 pl-4 ${size === 'lg' ? 'h-14' : 'h-10'}`}
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
