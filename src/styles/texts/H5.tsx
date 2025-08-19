import { DefaultProps } from '@/styles/texts/types';
import classNames from 'classnames';

const H5 = ({ font = 'gold', weight = 'regular', ...props }: DefaultProps) => {
  return (
    <h5
      className={classNames(
        `text-mobile-h5 md:text-desktop-h5 font-${font} font-${weight}`,
        props.className
      )}
    >
      {props.children}
    </h5>
  );
};

export default H5;
