import Link from 'next/link';

import { Button } from '../button';

function ReturnHome() {
  return (
    <Button asChild>
      <Link href='/'>Return Home</Link>
    </Button>
  );
}

export default ReturnHome;
