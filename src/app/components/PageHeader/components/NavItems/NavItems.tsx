import { NavItem } from './components';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Collections',
    href: '/collections',
  },
];

function NavItems() {
  return (
    <nav className='ml-auto hidden sm:block'>
      <ul className='flex items-center space-x-2'>
        {navItems.map((item, i) => (
          <li className='text-secondary-foreground' key={i}>
            <NavItem href={item.href} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavItems;
