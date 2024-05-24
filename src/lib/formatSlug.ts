export const formatSlug = (slug: string) =>
  slug.trim().replaceAll('-', ' ').replaceAll('%20', ' ');
