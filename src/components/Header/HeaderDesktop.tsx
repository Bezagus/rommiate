'use client';
import { Logo } from '@/components';
import UserLogin from '@/components/Header/UserLogin/UserLogin';
import Notifications from '@/components/Header/Notifications/Notifications';
import Message from '@/components/Header/Message/Message';

const HeaderDesktop = () => {
  return (
    <header className="w-svw h-[70px] hidden md:block">
      <div className="container mx-auto flex justify-between items-center px-2  py-4">
        <Logo />
        <div className="hidden md:flex gap-8 items-center">
          <Message />
          <Notifications />
          <UserLogin />
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
