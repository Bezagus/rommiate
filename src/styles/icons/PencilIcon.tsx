import { IconProps } from '@/styles/icons/types';

const PencilIcon = ({ size = 24, color = '#FF6F3C', strokeWidth = 1.5, ...props }: IconProps) => {
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
        d="M14.3249 3.56459L19.9354 9.17508M1 22.5H6.61049L21.338 7.77246C21.7064 7.40407 21.9986 6.96673 22.198 6.4854C22.3974 6.00408 22.5 5.4882 22.5 4.96722C22.5 4.44623 22.3974 3.93035 22.198 3.44903C21.9986 2.9677 21.7064 2.53036 21.338 2.16197C20.9696 1.79358 20.5323 1.50136 20.051 1.30199C19.5696 1.10262 19.0538 1 18.5328 1C18.0118 1 17.4959 1.10262 17.0146 1.30199C16.5333 1.50136 16.0959 1.79358 15.7275 2.16197L1 16.8895V22.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PencilIcon;
