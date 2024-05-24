import 'server-only';

import { Photo } from '@/types/Images';

const BASE_URL = 'https://api.unsplash.com/search/photos?';
const NUMBER_OF_PHOTOS_PER_PAGE = 21;

export async function getPhotos(query: string): Promise<Array<Photo>> {
  try {
    const response = await fetch(
      `${BASE_URL}query=${query}&per_page=${NUMBER_OF_PHOTOS_PER_PAGE}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    const data = await response.json();
    return data.results;
    // Better error handling needed!
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
}
