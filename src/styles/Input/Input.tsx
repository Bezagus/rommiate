import { InputProps } from '@/styles/Input/types';
import classNames from 'classnames';
import { P } from '@/styles';

const Input = ({
  placeholder,
  containerClassName,
  required,
  label,
  error,
  ...props
}: InputProps) => {
  return (
    <div className={classNames('w-full', containerClassName)}>
      {label && (
        <div className="mb-1 pl-1 flex gap-1">
          <P>{label}</P>
          {required && <span className="text-error">*</span>}
        </div>
      )}

      <input
        placeholder={placeholder}
        className="w-full text-black px-3.5 py-3.5 border-primary border rounded-[14px] active:border-primary-700 focus:outline-none focus:shadow-none focus:border-2"
        {...props}
      />
      {error && (
        <P size="small" className="pl-2 text-error">
          {error as string}
        </P>
      )}
    </div>
  );
};

export default Input;
