import { http, HttpResponse } from 'msw';

const photo = {
  id: 'jskbvksjb',
  created_at: 'May 24 2001',
  height: 768,
  width: 1024,
  description: 'test description',
  alt_description: 'test alt description',
  urls: {
    regular: 'https://test1.com',
    thumb: 'https://test2.com',
  },
  links: {
    download: 'https://test3.com',
  },
  user: {
    name: 'Elgun',
    portfolio_url: 'https://test4.com',
    links: {
      html: 'https://test5.com',
    },
    profile_image: {
      small: 'https://test6.com',
    },
  },
  tags: ['test1', 'test2', 'test3', 'test4'],
};

export const handlers = [
  http.get('https://api.unsplash.com/photos/', () => HttpResponse.json(photo)),
  http.get('https://images.unsplash.com/', () =>
    HttpResponse.text('tvghhjjjjo')
  ),
];
