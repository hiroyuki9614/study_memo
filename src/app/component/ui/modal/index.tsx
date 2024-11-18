'use client';
import React, { useRef, forwardRef, useEffect } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { POST } from '../../../api/studies-memo/route';
import { twJoin, twMerge } from 'tailwind-merge';
import InputText from '../inputText/index';
import InputTextArea from '../text-area';
import Button from '../button/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import SelectInput from '../selectInput';

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

type Inputs = {
	title: string;
	duration: number;
	description: string;
	category: string;
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

export const DialogSample = forwardRef<HTMLButtonElement, DialogSampleProps>(
	(
		{ children, className, icon, iconPosition = 'left', size = 'base', type = 'button', variant = 'primary', ...props },
		ref
	) => {
		const formRef = useRef<HTMLFormElement>(null);
		const dialogRef = useRef<HTMLDialogElement>(null);
		const options = [
			{ value: 'JavaScript', option: 'JavaScript' },
			{ value: 'TypeScript', option: 'TypeScript' },
			{ value: 'Python', option: 'Python' },
		];
		const {
			register,
			handleSubmit,
			reset,
			formState: { errors },
		} = useForm<Inputs>();
		const handleShowModal = () => dialogRef.current?.showModal();
		const handleCloseModal = () => dialogRef.current?.close();
		const iconComponent = icon ? (
			<FontAwesomeIcon className={twJoin(children && 'flex-none')} fixedWidth={true} icon={icon} size='xl' />
		) : null;
		const onSubmit: SubmitHandler<Inputs> = async (data) => {
			if (formRef.current) {
				const formData = new FormData(formRef.current);
				const result = await POST(formData);
				if (result.message === 'success') {
					dialogRef.current?.close();
					reset();
				}
			}
		};
		useEffect(() => {
			const dialogElement = dialogRef.current;

			const handleClickOutside = (e: MouseEvent) => {
				const dialog = dialogRef.current;
				if (dialog) {
					const dialogDimensions = dialog.getBoundingClientRect();
					if (
						e.clientX < dialogDimensions.left ||
						e.clientX > dialogDimensions.right ||
						e.clientY < dialogDimensions.top ||
						e.clientY > dialogDimensions.bottom
					) {
						handleCloseModal();
					}
				}
			};

			if (dialogElement) {
				dialogElement.addEventListener('click', handleClickOutside);
			}

			return () => {
				if (dialogElement) {
					dialogElement.removeEventListener('click', handleClickOutside);
				}
			};
		}, []);

		return (
			<>
				<button
					ref={ref}
					type={type}
					className={twMerge(
						'',
						icon && (children ? `${ICON_SIZES[size]} ${ICON_POSITION[iconPosition]}` : ICON_SIZES[size]),
						className
					)}
					onClick={handleShowModal}
					{...props}
				>
					{iconComponent}
					<p className='text-xs mt-1'>{children}</p>
				</button>
				<dialog ref={dialogRef} className='w-4/5 h-4/5 rounded-xl' onClick={(e) => e.stopPropagation()}>
					<div className='flex justify-center mt-10'>
						<h1 className='font-semibold text-lg'>学習内容を保存する</h1>
					</div>
					<form ref={formRef} action={POST} onSubmit={handleSubmit(onSubmit)}>
						<div className='flex flex-col w-4/5 mx-auto mt-8'>
							<InputText
								id='studyTitle'
								title='タイトル'
								name='title'
								register={register}
								errors={errors}
								type='text'
								required
							/>
							<InputText
								id='studyDuration'
								title='学習時間'
								name='duration'
								register={register}
								errors={errors}
								type='number'
								required
							/>
							<InputTextArea
								id='studyDescription'
								title='学習内容'
								name='description'
								register={register}
								errors={errors}
								required
							/>
							<SelectInput
								id='studyTitle'
								title='カテゴリー'
								name='category'
								register={register}
								errors={errors}
								options={options}
								required
								multiple
							/>
						</div>
						<div className='flex justify-center pt-10'>
							<Button type='button' onClick={handleCloseModal} className='mr-5'>
								閉じる
							</Button>
							<Button type='submit' variant='primary' className='ml-5'>
								保存
							</Button>
						</div>
					</form>
				</dialog>
			</>
		);
	}
);

DialogSample.displayName = 'DialogSample';

export default DialogSample;
