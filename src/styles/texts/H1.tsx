import { DefaultProps } from '@/styles/texts/types';
import classNames from 'classnames';

const H1 = ({ font = 'gold', weight = 'black', ...props }: DefaultProps) => {
  return (
    <h1
      className={classNames(
        `text-mobile-h1 md:text-desktop-h1 font-${font} font-${weight}`,
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};

export default H1;
