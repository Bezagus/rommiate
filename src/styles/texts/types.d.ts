import React from 'react';

export interface DefaultProps {
  weight?: 'regular' | 'bold' | 'black';
  font?: 'nunito' | 'gold';
  className?: string;
  children: React.ReactNode;
}

export interface TextProps extends DefaultProps {
  size?: 'p' | 'small';
}
