'use client';

import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';

type FormType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'date' | 'checkbox' | 'radio' | 'file' | 'submit';

type NameType = 'title' | 'duration' | 'description' | 'password';

type InputProps = {
	id: string;
	title: string;
	name: NameType;
	register: UseFormRegister<any>;
	errors: FieldErrors;
	required?: boolean;
	maxLength?: number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: FormType;
	registerOptions?: RegisterOptions;
};

export const InputText = ({
	id,
	title,
	name,
	register,
	errors,
	required,
	maxLength,
	onChange,
	type,
	registerOptions,
}: InputProps) => {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<input
				id={id}
				{...register(name, {
					required,
					maxLength: maxLength
						? {
								value: maxLength as number,
								message: `${maxLength}文字以内で入力してください。`,
						  }
						: undefined,
					...registerOptions,
					onChange: (e) => {
						if (onChange) onChange(e);
					},
				})}
				className='border flex flex-col'
				type={type}
				name={name}
			/>
			<div className='flex flex-col'>
				{errors[name] && <span className='text-red-700'>必須項目です。</span>}
				{errors[name]?.type === 'maxLength' && (
					<span className='text-red-700'>{errors[name]?.message?.toString()}</span>
				)}
			</div>
		</div>
	);
};

export default InputText;
