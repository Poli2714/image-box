export const getUserInitials = (
  firstName: string | null,
  lastName: string | null
) => {
  let userInitials = '';
  if (!!firstName) {
    userInitials += firstName[0].toUpperCase();
  }
  if (!!lastName) {
    userInitials += lastName[0].toUpperCase();
  }

  return userInitials;
};
