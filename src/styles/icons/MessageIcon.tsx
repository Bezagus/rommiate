import { IconProps } from '@/styles/icons/types';

const MessageIcon = ({ size = 24, color = '#FF6F3C', strokeWidth = 1.2, ...props }: IconProps) => {
  return (
    <svg
      width={size * (24 / 26)}
      height={size}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.74867 17.5168C1 16.1181 1 15.0598 1 10.5556C1 6.05131 1 3.79858 2.74867 2.39989C4.49972 1 7.31383 1 12.9444 1C18.5751 1 21.3904 1 23.139 2.39989C24.8877 3.79978 24.8889 6.05131 24.8889 10.5556C24.8889 15.0598 24.8889 16.1181 23.139 17.5168C21.3916 18.9167 18.5751 18.9167 12.9444 18.9167C9.94639 18.9167 8.40556 20.9926 5.77778 22.5V18.6634C4.47106 18.4687 3.50953 18.1259 2.74867 17.5168Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessageIcon;
