"use client"

// TypeScriptの型
import type { ButtonHTMLAttributes, ReactNode } from 'react';
// refを受け取るためのライブラリ
import { forwardRef } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twJoin, twMerge } from 'tailwind-merge';

// クライアントサイドで大きさを制限
type Size = 'base' | 'lg' | 'sm' | 'xl' | 'xs';
// 大きさをこの型だけ許可する
const SIZES: Record<Size, string> = {
  base: 'px-3 py-2 text-base',
  lg: 'px-4 py-2 text-lg',
  sm: 'px-3 py-1.5 text-sm',
  xl: 'px-4 py-2.5 text-xl',
  xs: 'px-1.5 py-1 text-xs',
};

export const ICON_SIZES: Record<Size, string> = {
  base: 'px-2.5',
  lg: 'px-2.5',
  sm: 'px-2',
  xl: 'px-2.5',
  xs: 'px-1.5',
};

export const ICON_POSITION: Record<'left' | 'right', string> = {
  left: '',
  right: 'flex-row-reverse',
};

type Variant =
  | 'custom'
  | 'primary'
  | 'secondary'
  | 'tertiary';

// ボタンの見た目を定義
const VARIANTS: Record<Variant, string> = {
  custom: '',
  primary:
    'border border-blue-400 bg-blue-500 text-white',
  secondary:
    'border border-blue-500 bg-white text-blue-500',
  tertiary:
    'border border-grey-600 bg-grey-500 text-white',
};

type MaybeIcon = {
  children: ReactNode;
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
};

type OnlyIcon = {
  children?: never;
  icon: IconProp;
  iconPosition?: never;
};

// 親で定義できるパターンを定義
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  variant?: Variant;
} & (MaybeIcon | OnlyIcon);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      icon,
      iconPosition = 'left',
      size = 'base',
      type = 'button',
      variant = 'primary',
      ...props
    },
    ref
  ) => {
    const iconComponent =
      icon ?
        <FontAwesomeIcon
          className={twJoin(children && 'flex-none')}
          fixedWidth={true}
          icon={icon}
          size="1x"
        />
        : null;

    return (
      <button
        ref={ref}
        className={twMerge(
          'select-none whitespace-nowrap text-center',
          VARIANTS[variant],
          SIZES[size],
          icon &&
          (children ?
            `flex justify-around items-center gap-2 text-left ${ICON_SIZES[size]} ${ICON_POSITION[iconPosition]}`
            : ICON_SIZES[size]),
          className
        )}
        type={type}
        {...props}
      >
        {iconComponent}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;