import { TextProps } from '@/styles/texts/types';
import classNames from 'classnames';

const P = ({ font = 'gold', weight = 'regular', size = 'p', ...props }: TextProps) => {
  return (
    <p
      className={classNames(
        `text-mobile-${size} md:text-desktop-${size} font-${font} font-${weight}`,
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export default P;
