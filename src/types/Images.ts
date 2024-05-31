export type Photo = {
  slug: string;
  id: string;
  width: number;
  height: number;
  alt_description: string;
  urls: {
    regular: string;
    thumb: string;
  };
  links: {
    download: string;
  };
  user: {
    name: string;
    portfolio_url: string | null;
    links: {
      html: string;
    };
    profile_image: {
      small: string;
    };
  };
};

export type ImageForPhotoPage = {
  slug: string;
  id: string;
  created_at: string;
  height: number;
  width: number;
  alt_description: string;
  urls: {
    regular: string;
    thumb: string;
  };
  links: {
    download: string;
  };
  user: {
    name: string;
    portfolio_url: string;
    links: {
      html: string;
    };
    profile_image: {
      small: string;
    };
  };
  tags: Array<{
    title: string;
  }>;
};
