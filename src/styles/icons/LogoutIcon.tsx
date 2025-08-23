import { IconProps } from '@/styles/icons/types';

const LogoutIcon = ({ size = 24, color = '#FF6F3C', strokeWidth = 1.5, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.77778 1H18.3333C18.9669 1 19.5745 1.25169 20.0225 1.69969C20.4705 2.14769 20.7222 2.75532 20.7222 3.38889V20.1111C20.7222 20.7447 20.4705 21.3523 20.0225 21.8003C19.5745 22.2483 18.9669 22.5 18.3333 22.5H8.77778M15.9444 11.75L11.1667 6.97222M15.9444 11.75L11.1667 16.5278M15.9444 11.75H4"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
