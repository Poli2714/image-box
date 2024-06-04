export type UserCollection = {
  id: string;
  name: string;
  updatedAt: Date;
  collectionsToPhotos: Array<{
    photo: {
      id: string;
      altDescription: string;
      slug: string;
      regular: string;
      thumb: string;
    };
  }>;
};
