export const getUserInitials = (
  firstName: string | null | undefined,
  lastName: string | null | undefined
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
