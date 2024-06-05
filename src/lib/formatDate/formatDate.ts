export const formatDate = (dateValue: string | Date) => {
  try {
    const date =
      typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
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
