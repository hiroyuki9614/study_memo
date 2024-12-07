'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

type InputProps = {
	id: string;
	title: string;
	name: string;
	register: UseFormRegister<any>;
	errors: FieldErrors;
	required?: boolean;
	maxLength?: number;
	className?: string;
	children?: string;
	placeholder?: string;
};

export const InputTextArea = ({
	id,
	title,
	name,
	register,
	errors,
	required,
	maxLength,
	className,
	children,
	placeholder,
}: InputProps) => {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<textarea
				id={id}
				placeholder={placeholder}
				className={twMerge(
					'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
					className
				)}
				{...register(name, {
					required,
					maxLength: maxLength
						? {
								value: maxLength as number,
								message: `${maxLength}文字以内で入力してください。`,
						  }
						: undefined,
				})}
				name={name}
			>
				{children}
			</textarea>
			{errors[name] && <span className='text-red-700'>必須項目です。</span>}
		</div>
	);
};

export default InputTextArea;
