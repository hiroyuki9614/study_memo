"use client"

import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Size = 'base' | 'lg' | 'sm' | 'xl' | 'xs';

const SIZES: Record<Size, string> = {
  base: 'px-3 py-2 text-base',
  lg: 'px-4 py-2 text-lg',
  sm: 'px-3 py-1.5 text-sm',
  xl: 'px-4 py-2.5 text-xl',
  xs: 'px-1.5 py-1 text-xs',
};

type Variant =
  | 'custom'
  | 'primary'
  | 'secondary'
  | 'tertiary';

const VARIANTS: Record<Variant, string> = {
  custom: '',
  primary:
    'border border-blue-400 bg-blue-500 text-white',
  secondary:
    'border border-blue-500 bg-white text-blue-500',
  tertiary:
    'border border-grey-600 bg-grey-500 text-white',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  variant?: Variant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      size = 'base',
      type = 'button',
      variant = 'primary',
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={twMerge(
        'select-none whitespace-nowrap text-center',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;