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

type SearchCollectionsProps = {
  userCollections: Array<UserCollection>;
};

function SearchCollections({ userCollections }: SearchCollectionsProps) {
  const form = useForm({
    defaultValues: {
      searchKeyword: '',
    },
  });

  const searchValue = form.watch('searchKeyword');
  const latestCollections = getLatestCollections(userCollections);
  const foundCollections = searchCollections(userCollections, searchValue);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {userCollections.length === 0 ? (
        <div
          className='flex flex-col gap-y-4 py-6 text-center text-secondary-foreground'
          data-testid='no-collections'
        >
          <h2>No Collections Yet</h2>
          <p className='text-sm font-light'>
            You don&apos;t have any collections yet. Start a new collection to
            add and organize your beautiful photos.
          </p>
        </div>
      ) : (
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
        </>
      )}
      <CreateCollectionForm />
    </>
  );
}

export default SearchCollections;
