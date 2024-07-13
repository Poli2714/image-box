import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { getUserInitials } from '@/lib/getUserInitials/getUserInitials';

export async function getSessionUserInfo() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const [isUserLoggedIn, user] = await Promise.all([
    isAuthenticated(),
    getUser(),
  ]);

  let userInitials = '';
  if (!!user) {
    userInitials = getUserInitials(user.given_name, user.family_name);
  }

  const userPicture = user?.picture ?? undefined;

  return { isUserLoggedIn, userInitials, userPicture };
}
