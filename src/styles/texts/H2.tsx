import { DefaultProps } from '@/styles/texts/types';
import classNames from 'classnames';

const H2 = ({ font = 'gold', weight = 'bold', ...props }: DefaultProps) => {
  return (
    <h2
      className={classNames(
        `text-mobile-h2 md:text-desktop-h2 font-${font} font-${weight}`,
        props.className
      )}
    >
      {props.children}
    </h2>
  );
};

export default H2;
