'use client';
import { Logo } from '@/components';
import { MessageIcon, BellIcon } from '@/styles/icons';
import { Button, Link, MenuIcon, P } from '@/styles';

const Header = () => {
  return (
    <header className="w-svw h-[70px]">
      <div className="container mx-auto flex justify-between items-center px-2  py-4">
        <Logo />
        <div className="hidden md:flex gap-8 items-center">
          <Link>
            <MessageIcon />
          </Link>
          <Link>
            <BellIcon />
          </Link>
          <div className="flex items-center gap-2">
            <P className="text-primary">User_name</P>
            <div className="h-11 w-11 aspect-square bg-gray rounded-full" />
          </div>
        </div>
        <Button
          variant="secondary-text"
          className="px-0 active:scale-90 justify-end md:hidden -mr-2"
        >
          <MenuIcon size={34} className="-mr-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
