export const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);

    return formattedDate;
  } catch (error) {
    return null;
  }
};
