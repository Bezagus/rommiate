import { IconProps } from '@/styles/icons/types';

const ChevronIcon = ({ size = 24, color = '#FF6F3C', ...props }: IconProps) => {
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
        d="M6.17425 2.25713L7.93304 0.5L17.5127 10.0764C17.6671 10.2298 17.7897 10.4123 17.8733 10.6133C17.9569 10.8143 18 11.0298 18 11.2475C18 11.4652 17.9569 11.6808 17.8733 11.8817C17.7897 12.0827 17.6671 12.2652 17.5127 12.4187L7.93304 22L6.17591 20.2429L15.1671 11.25L6.17425 2.25713Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronIcon;
