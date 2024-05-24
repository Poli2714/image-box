export const formatSlug = (slug: string) =>
  slug.trim().replaceAll(/-|\s/g, ' ');
