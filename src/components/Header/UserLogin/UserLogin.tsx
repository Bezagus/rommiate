import ReactDOM from 'react-dom';
import { Link, P } from '@/styles';
import { useUserLogin } from '@/components/Header/UserLogin/useUserLogin';
import { OptionsUser } from '@/components/Header/UserLogin/options';

const UserLogin = () => {
  const { handleMouseEnter, handleMouseLeave, isHovered, menuPos, ref } = useUserLogin();

  return (
    <>
      <div
        ref={ref}
        className="flex items-center gap-2 hover:cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <P className="text-primary">User_name</P>
        <div className="h-10 w-10 aspect-square bg-gray rounded-full" />
      </div>
      {isHovered &&
        ReactDOM.createPortal(
          <div
            style={{
              top: menuPos.top,
              left: menuPos.left,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="flex flex-col gap-2 bg-white rounded-lg p-4 w-[240px] fixed z-[1000]"
          >
            {OptionsUser.map((option, index) => {
              if (option.exclusive == 'mobile') return null;

              return (
                <Link
                  href={option.href}
                  key={index}
                  className="flex items-start w-full"
                  hover={!option.linkDisabled}
                >
                  <option.icon size={18} color="black" />
                  <P className="text-start w-full">{option.label}</P>
                  {option.custom && <option.custom />}
                </Link>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
};

export default UserLogin;
