'use client';
import { Logo } from '@/components';
import { Button, ChevronIcon, CloseIcon, H4, Link, MenuIcon, P } from '@/styles';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { OptionsUser } from '@/components/Header/UserLogin/options';
import ReactDOM from 'react-dom';

const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    const handleScroll = () => setShowMenu(false);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMenu]);

  return (
    <header
      className={classNames(
        'w-svw block md:hidden px-2 md:px-4 xl:px-0',
        showMenu ? 'flex flex-col' : 'h-[70px]'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-2  py-4">
        <Logo />
        <Button
          variant="secondary-text"
          padding={false}
          onClick={() => setShowMenu(!showMenu)}
          className="px-0 active:scale-90 justify-end md:hidden -mr-2"
        >
          {!showMenu ? <MenuIcon size={34} /> : <CloseIcon />}
        </Button>
      </div>
      {showMenu &&
        ReactDOM.createPortal(
          <div
            style={{
              top: '70px',
            }}
            className="pb-6 fixed bg-white w-svw px-2 rounded-b-lg shadow-2xl"
          >
            <div className="bg-primary -mx-2 px-2 py-4 rounded-b-3xl">
              <Link className="flex justify-between px-2">
                <div className="flex gap-2">
                  <div className="h-12 w-12 bg-secondary rounded-full aspect-square" />
                  <div>
                    <H4 weight="font-bold">Nombre Usuario</H4>
                    <Link>
                      <P size="small" className="w-full text-start" weight="font-medium">
                        Ver perfil
                      </P>
                    </Link>
                  </div>
                </div>
                <Link>
                  <ChevronIcon color="black" />
                </Link>
              </Link>
            </div>
            <div className="mt-6 space-y-6">
              {OptionsUser.map((option, index) => {
                if (option.exclusive == 'desktop') return null;

                return (
                  <Link
                    href={option.href}
                    key={index}
                    className="flex items-start w-full"
                    hover={!option.linkDisabled}
                  >
                    <option.icon color="black" />
                    <P className="text-start w-full">{option.label}</P>
                    {option.custom && <option.custom />}
                  </Link>
                );
              })}
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default HeaderMobile;
