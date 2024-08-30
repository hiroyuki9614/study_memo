'use client';
import React, { useRef, forwardRef } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twJoin, twMerge } from 'tailwind-merge';
import InputText from '../inputText/index';
import Button from '../button/index';
import { useForm } from 'react-hook-form';

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

export const ICON_POSITION: Record<'left' | 'right' | 'top', string> = {
	left: '',
	right: 'flex-row-reverse',
	top: 'flex-col',
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

type DialogSampleProps = ButtonHTMLAttributes<HTMLButtonElement> &
	(MaybeIcon | OnlyIcon) & {
		size?: Size;
		variant?: string;
	};

export const DialogSample = forwardRef<HTMLButtonElement, DialogSampleProps>(({ children, className, icon, iconPosition = 'left', size = 'base', type = 'button', variant = 'primary', ...props }, ref) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm(); // 追加

	const handleShowModal = () => dialogRef.current?.showModal();
	const handleCloseModal = () => dialogRef.current?.close();
	const iconComponent = icon ? <FontAwesomeIcon className={twJoin(children && 'flex-none')} fixedWidth={true} icon={icon} size='xl' /> : null;

	const onSubmit = (data) => {
		console.log(data);
		// ここでフォームデータの処理を行う
		handleCloseModal();
	};
	return (
		<>
			<button ref={ref} type={type} className={twMerge('', icon && (children ? `${ICON_SIZES[size]} ${ICON_POSITION[iconPosition]}` : ICON_SIZES[size]), className)} onClick={handleShowModal} {...props}>
				{iconComponent}
				<p className='text-xs mt-1'>{children}</p>
			</button>
			<dialog ref={dialogRef} className='w-10/12 h-4/5'>
				<div className='flex justify-center mt-5'>
					<h1>HELLO MODAL !!</h1>
				</div>
				<Button className='h-[1px]' type='button' onClick={handleCloseModal}>
					Close Modal
				</Button>
				<form onSubmit={handleSubmit(onSubmit)}>
					<InputText id='title' title='Title' name='title' register={register} errors={errors} required={true} type='text' />
					<Button type='submit'>Submit</Button> {/* 追加 */}
				</form>
				<Button type='button' onClick={handleCloseModal}>
					Close Modal
				</Button>
			</dialog>
		</>
	);
});

DialogSample.displayName = 'DialogSample';

export default DialogSample;
