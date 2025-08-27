import { IconProps } from '@/styles/icons/types';

const SunIcon = ({ size = 24, color = 'black', strokeWidth = 1.5, ...props }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="mask0_134_1130" maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
        <path d="M0 0H24V24H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_134_1130)">
        <path
          d="M12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18Z"
          stroke="black"
          strokeWidth={strokeWidth}
          strokeMiterlimit="10"
        />
        <path
          d="M3 12H1M23 12H21M12 21V23M12 1V3M5.636 18.364L4.222 19.778M19.778 4.222L18.364 5.636M5.636 5.636L4.222 4.222M19.778 19.778L18.364 18.364M18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12Z"
          stroke="black"
          strokeWidth={strokeWidth}
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default SunIcon;
