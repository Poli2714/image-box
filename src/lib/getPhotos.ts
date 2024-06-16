import 'server-only';

import { Photo } from '@/types/Images';

const BASE_URL = 'https://api.unsplash.com/search/photos?';
const NUMBER_OF_PHOTOS_PER_PAGE = 21;

export async function getPhotos(
  query: string,
  page: number = 1
): Promise<{ totalPages: number; photos: Array<Photo> }> {
  try {
    const response = await fetch(
      `${BASE_URL}query=${query}&page=${page}&per_page=${NUMBER_OF_PHOTOS_PER_PAGE}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );

    const data: { total_pages: number; results: Array<Photo> } =
      await response.json();
    return {
      totalPages: data.total_pages,
      photos: data.results.map((result) => ({
        id: result.id,
        width: result.width,
        height: result.height,
        alt_description: result.alt_description,
        urls: {
          regular: result.urls.regular,
          thumb: result.urls.thumb,
        },
        links: {
          download: result.links.download,
        },
        user: {
          name: result.user.name,
          portfolio_url: result.user.portfolio_url,
          links: {
            html: result.user.links.html,
          },
          profile_image: {
            small: result.user.profile_image.small,
          },
        },
      })),
    };
    // Better error handling needed!
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
}
