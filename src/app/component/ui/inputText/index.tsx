'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';

type FormType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'date' | 'checkbox' | 'radio' | 'file' | 'submit';

type NameType = 'title' | 'duration' | 'description';

type InputProps = {
	id: string;
	title: string;
	name: NameType;
	register: UseFormRegister<any>;
	errors: FieldErrors;
	required?: boolean;
	onChange?: () => void;
	type: FormType;
};

export const InputText = ({ id, title, name, register, errors, required, onChange, type }: InputProps) => {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<input
				id={id}
				{...register(name, { required })}
				className='border flex flex-col'
				onChange={(e) => {
					register(name).onChange(e); // React Hook Form の onChange を呼び出す
					onChange && onChange(); // カスタムの onChange を呼び出す
				}}
				type={type}
			/>
			{errors[name] && <span>This field is required</span>}
		</div>
	);
};

export default InputText;
