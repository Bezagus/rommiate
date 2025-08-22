import React from 'react';

export interface DefaultProps {
  weight?: 'font-medium' | 'font-bold' | 'font-black';
  font?: 'font-nunito' | 'font-gold';
  className?: string;
  children: React.ReactNode;
}

export interface TextProps extends DefaultProps {
  size?: 'p' | 'small';
}
