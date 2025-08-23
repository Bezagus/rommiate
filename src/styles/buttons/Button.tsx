import React from 'react';
import classNames from 'classnames';
import { ButtonProps, Variant } from '@/styles/buttons/type';

const styleDefault = {
  text: 'hover:font-bold active:font-black',
  small: 'py-[8px] px-[32px] text-mobile-small md:text-desktop-small',
  medium: 'px-[42px] py-[10px] text-mobile-p md:text-desktop-p',
};

const HASH_STYLE: Record<Variant, { className: string; iconColor: string }> = {
  'primary-fill': {
    className: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700',
    iconColor: '#FFFFFF',
  },
  'primary-stoke': {
    className: 'border border-primary hover:bg-primary-50 active:bg-primary-100 text-primary',
    iconColor: '#ff6f3c',
  },
  'primary-text': { className: 'text-primary' + styleDefault.text, iconColor: '#ff6f3c' },
  'secondary-stroke': {
    className:
      'border border-secondary hover:bg-secondary-50 active:bg-secondary-100 text-secondary',
    iconColor: '#FFFFFF',
  },
  'secondary-fill': {
    className: 'bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700',
    iconColor: '#b23a48',
  },
  'secondary-text': { className: 'text-secondary ' + styleDefault.text, iconColor: '#FFFFFF' },
};

const Button = ({
  variant = 'primary-fill',
  size = 'medium',
  disabled,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const styles = HASH_STYLE[variant];

  return (
    <button
      disabled={disabled}
      className={classNames(
        'font-gold font-medium rounded-full',
        'flex items-center gap-2.5',
        disabled && 'opacity-50',
        styles.className,
        styleDefault[size]
      )}
      {...props}
    >
      {leftIcon ? <leftIcon.icon {...{ ...leftIcon, color: styles.iconColor }} /> : null}
      {children}
      {rightIcon ? <rightIcon.icon {...{ ...rightIcon, color: styles.iconColor }} /> : null}
    </button>
  );
};

export default Button;
