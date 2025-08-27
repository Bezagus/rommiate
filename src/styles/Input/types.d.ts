import React from 'react';
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  containerClassName?: string;
  error?: string;
  label?: string;
  required?: boolean;
}
