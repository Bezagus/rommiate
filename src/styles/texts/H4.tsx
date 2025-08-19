import { DefaultProps } from '@/styles/texts/types';
import classNames from 'classnames';

const H4 = ({ font = 'gold', weight = 'regular', ...props }: DefaultProps) => {
  return (
    <h4
      className={classNames(
        `text-mobile-h4 md:text-desktop-h4 font-${font} font-${weight}`,
        props.className
      )}
    >
      {props.children}
    </h4>
  );
};

export default H4;
