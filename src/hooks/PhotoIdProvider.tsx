'use client';

import { createContext, useContext, useState } from 'react';

type Photo = {
  altDescription: string;
  id: string;
  slug: string;
  regular: string;
  thumb: string;
};

type PhotoProviderProps = {
  children: React.ReactNode;
  photoForCollection: Photo;
};

export const PhotoContext = createContext({
  photo: {
    altDescription: '',
    id: '',
    slug: '',
    regular: '',
    thumb: '',
  },
  setPhoto: (photo: Photo) => {},
});

function PhotoProvider({ children, photoForCollection }: PhotoProviderProps) {
  const [photo, setPhoto] = useState(photoForCollection);

  return (
    <PhotoContext.Provider value={{ photo, setPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
}

function usePhotoContext() {
  const context = useContext(PhotoContext);

  return context;
}

export { PhotoProvider, usePhotoContext };
