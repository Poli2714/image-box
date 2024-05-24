export type Photo = {
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
