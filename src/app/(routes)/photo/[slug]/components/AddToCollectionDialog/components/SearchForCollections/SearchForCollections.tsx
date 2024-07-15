'use client';

import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

import { CollectionSearchResults } from './components';
import {
  CreateCollectionForm,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
} from '@/components/forms';
import { LatestCollections } from '@/components/ui';

import { getLatestCollections } from '@/lib/getLatestCollections/getLatestCollections';
import { searchCollections } from '@/lib/searchCollections/searchCollections';
import { UserCollection } from '@/types/collections';

type SearchForCollectionsProps = {
  userCollections: Array<UserCollection>;
};

function SearchForCollections({ userCollections }: SearchForCollectionsProps) {
  const form = useForm({
    defaultValues: {
      searchKeyword: '',
    },
  });

  const searchValue = form.watch('searchKeyword');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const latestCollections = getLatestCollections(userCollections);
  const foundCollections = searchCollections(userCollections, searchValue);

  return (
    <>
      <Form {...form}>
        <form name='collection-search-form' onSubmit={onSubmit}>
          <FormField
            control={form.control}
            name='searchKeyword'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='h-auto px-4 py-3 font-light'
                    placeholder='Search for your collections...'
                    type='search'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      {searchValue.trimStart().length === 0 ? (
        <LatestCollections latestCollections={latestCollections} />
      ) : (
        <CollectionSearchResults collections={foundCollections} />
      )}
      <CreateCollectionForm />
    </>
  );
}

export default SearchForCollections;
