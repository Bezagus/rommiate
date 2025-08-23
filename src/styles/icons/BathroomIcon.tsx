import { IconProps } from '@/styles/icons/types';

const BathroomIcon = ({ size = 24, color = '#FF6F3C', ...props }: IconProps) => {
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
        d="M22.3684 12.3158V15.7105C22.3684 16.911 21.8915 18.0623 21.0427 18.9111C20.1938 19.76 19.0426 20.2368 17.8421 20.2368H6.52632C5.32586 20.2368 4.17458 19.76 3.32573 18.9111C2.47688 18.0623 2 16.911 2 15.7105V12.9947C2 12.8147 2.07153 12.642 2.19886 12.5146C2.32619 12.3873 2.49888 12.3158 2.67895 12.3158H22.3684ZM22.3684 12.3158V5.52632C22.3684 4.32586 21.8915 3.17458 21.0427 2.32573C20.1938 1.47688 19.0426 1 17.8421 1H12.1842M16.7105 20.2368L17.8421 22.5M7.65789 20.2368L6.52632 22.5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0316 6.65789H8.33686C7.96231 6.65789 7.66244 6.35463 7.70318 5.98121C7.86839 4.47961 8.63447 1 12.1842 1C15.734 1 16.5001 4.47961 16.6653 5.98121C16.706 6.35463 16.4061 6.65789 16.0316 6.65789Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BathroomIcon;
