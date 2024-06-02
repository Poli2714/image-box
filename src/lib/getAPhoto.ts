import 'server-only';

import { ImageForPhotoPage } from '@/types/Images';

const BASE_URL = 'https://api.unsplash.com/photos/';

export const getAPhoto = async (id: string): Promise<ImageForPhotoPage> => {
  try {
    const response = await fetch(
      `${BASE_URL}${id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const data: ImageForPhotoPage = await response.json();

    return {
      slug: data.slug,
      id: data.id,
      created_at: data.created_at,
      height: data.height,
      width: data.width,
      alt_description: data.alt_description,
      urls: {
        regular: data.urls.regular,
        thumb: data.urls.thumb,
      },
      links: {
        download: data.links.download,
      },
      user: {
        name: data.user.name,
        portfolio_url: data.user.portfolio_url,
        links: {
          html: data.user.links.html,
        },
        profile_image: {
          small: data.user.profile_image.small,
        },
      },
      tags: data.tags.map((tag) => ({ title: tag.title })),
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};
