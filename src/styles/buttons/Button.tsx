import React, { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import { ButtonProps, Variant } from '@/styles/buttons/type';
import { IconProps } from '@/styles/icons/types';

const styleDefault = {
  text: 'hover:font-bold active:font-black text-center',
  small: 'text-mobile-small md:text-desktop-small',
  medium: 'text-mobile-p md:text-desktop-p',
  padding: {
    small: 'py-[8px] px-[20px] md:px-[32px]',
    medium: 'px-[28px] md:px-[42px] py-[10px]',
  },
};

const HASH_STYLE: Record<Variant, { className: string; iconColor: string }> = {
  'primary-fill': {
    className: 'bg-primary text-white hover:bg-primary-600 active:bg-primary-700 hover:shadow-lg',
    iconColor: '#FFFFFF',
  },
  'primary-stoke': {
    className: 'border border-primary hover:bg-primary-50 active:bg-primary-100 text-primary',
    iconColor: '#ff6f3c',
  },
  'primary-text': { className: 'text-primary ' + styleDefault.text, iconColor: '#ff6f3c' },
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
  className,
  href,
  padding = true,
  ...props
}: ButtonProps & { href?: string }) => {
  const styles = HASH_STYLE[variant];
  const commonClasses = classNames(
    'font-gold font-medium rounded-full',
    'flex items-center justify-center gap-2.5',
    disabled && 'opacity-50 pointer-events-none',
    padding ? styleDefault.padding[size] : '',
    styles.className,
    styleDefault[size],
    className
  );

  const iconProps = (icon: IconProps) => ({
    ...icon,
    size: size === 'small' ? 12 : 16,
    color: styles.iconColor,
  });

  if (href) {
    const {
      type,
      onClick,
      onDoubleClick,
      onMouseDown,
      onMouseUp,
      onKeyDown,
      onKeyUp,
      onKeyPress,
      ...anchorProps
    } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        className={commonClasses}
        tabIndex={disabled ? -1 : undefined}
        aria-disabled={disabled}
        {...anchorProps}
      >
        {leftIcon ? <leftIcon.icon {...iconProps(leftIcon)} /> : null}
        {children}
        {rightIcon ? <rightIcon.icon {...iconProps(rightIcon)} /> : null}
      </a>
    );
  }

  return (
    <button disabled={disabled} className={commonClasses} {...props}>
      {leftIcon ? <leftIcon.icon {...iconProps(leftIcon)} /> : null}
      {children}
      {rightIcon ? <rightIcon.icon {...iconProps(rightIcon)} /> : null}
    </button>
  );
};

export default Button;
