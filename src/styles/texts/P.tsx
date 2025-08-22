import { TextProps } from '@/styles/texts/types';
import classNames from 'classnames';

const P = ({ font = 'font-gold', weight = 'font-medium', size = 'p', ...props }: TextProps) => {
  return (
    <p
      className={classNames(
        weight,
        font,
        size === 'p'
          ? 'text-mobile-p md:text-desktop-p'
          : 'text-mobile-small md:text-desktop-small',
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export default P;
