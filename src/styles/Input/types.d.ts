import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  containerClassName?: string;
}
