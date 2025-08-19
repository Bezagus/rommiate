import { Logo } from '@/components';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-2 md:px-10 py-4 absolute top-0 w-svw">
      <Logo />
      <button className="text-desktop-p border-[1px] px-6 md:px-10 py-2 max-h-[42px] rounded-full border-primary text-primary">
        Contacto
      </button>
    </header>
  );
};

export default Header;
