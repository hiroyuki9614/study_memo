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
					...registerOptions,
					onChange: (e) => {
						if (onChange) onChange(e);
					},
				})}
				className='border flex flex-col'
				type={type}
				name={name}
			/>
			{errors[name] && <span>This field is required</span>}
		</div>
	);
};

export default InputText;
