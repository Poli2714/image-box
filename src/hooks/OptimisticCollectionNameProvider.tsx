'use client';

import { createContext, useContext, useOptimistic } from 'react';

type OptimisticCollectionNameProps = {
  optimisticCollectionName: {
    name: string;
  };
  setOptimisticCollectionName: (newCollectionName: string) => void;
};

const OptimisticCollectionNameContext = createContext<
  OptimisticCollectionNameProps | undefined
>(undefined);

type OptimisticCollectionNameContextProviderProps = {
  children: React.ReactNode;
  collectionName: {
    name: string;
  };
};

function OptimisticCollectionNameContextProvider({
  children,
  collectionName,
}: OptimisticCollectionNameContextProviderProps) {
  const [optimisticCollectionName, setOptimisticCollectionName] = useOptimistic(
    collectionName,
    (currentState, newCollectionName: string) => ({
      ...currentState,
      name: newCollectionName,
    })
  );

  return (
    <OptimisticCollectionNameContext.Provider
      value={{ optimisticCollectionName, setOptimisticCollectionName }}
    >
      {children}
    </OptimisticCollectionNameContext.Provider>
  );
}

function useOptimisticCollectionNameContext() {
  const context = useContext(OptimisticCollectionNameContext);

  if (context === undefined) {
    throw new Error('Not valid use of useOptimisticCollectionNameContext');
  }

  return context;
}

export {
  OptimisticCollectionNameContextProvider,
  useOptimisticCollectionNameContext,
};
