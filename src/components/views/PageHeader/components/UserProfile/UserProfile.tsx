import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';

type UserProfileProps = {
  userInitials: string;
  userPicture: string | undefined;
};

function UserProfile({ userInitials, userPicture }: UserProfileProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={userPicture} />
          <AvatarFallback className='font-light'>{userInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button asChild className='h-auto p-0' variant={null}>
            <LogoutLink>Sign out</LogoutLink>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserProfile;
