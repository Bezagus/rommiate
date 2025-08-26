import React from 'react';
import { IconProps } from '@/styles/icons/types';

export type Variant =
  | 'primary-stoke'
  | 'primary-fill'
  | 'primary-text'
  | 'secondary-stroke'
  | 'secondary-fill'
  | 'secondary-text';

interface IconsProps extends Omit<IconProps, 'ref'> {
  icon: React.ElementType<IconProps>;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  variant?: Variant;
  size?: 'small' | 'medium';
  leftIcon?: IconsProps;
  rightIcon?: IconsProps;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}
