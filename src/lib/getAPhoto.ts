import 'server-only';

import { ImageForPhotoPage } from '@/types/Images';

const BASE_URL = 'https://api.unsplash.com/photos/';

export const getAPhoto = async (id: string): Promise<ImageForPhotoPage> => {
  try {
    const response = await fetch(
      `${BASE_URL}${id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};
