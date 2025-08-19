import { DefaultProps } from '@/styles/texts/types';
import classNames from 'classnames';

const H3 = ({ font = 'gold', weight = 'bold', ...props }: DefaultProps) => {
  return (
    <h3
      className={classNames(
        `text-mobile-h3 md:text-desktop-h3 font-${font} font-${weight}`,
        props.className
      )}
    >
      {props.children}
    </h3>
  );
};

export default H3;
