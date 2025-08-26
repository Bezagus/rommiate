import { InputProps } from '@/styles/Input/types';
import classNames from 'classnames';

const Input = ({ placeholder, containerClassName, ...props }: InputProps) => {
  return (
    <div className={classNames('w-full', containerClassName)}>
      <input
        placeholder={placeholder}
        className="w-full text-black px-3.5 py-3.5 border-primary border rounded-[14px] active:border-primary-700 focus:outline-none focus:shadow-none focus:border-2"
        {...props}
      />
    </div>
  );
};

export default Input;
