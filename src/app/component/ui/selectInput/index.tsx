'use client';

import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';

type NameType = 'category';

type InputProps = {
	id: string;
	title: string;
	name: NameType;
	register: UseFormRegister<any>;
	errors: FieldErrors;
	options: { value: string; option: string }[];
	required?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	registerOptions?: RegisterOptions;
};

export const selectInput = ({ id, title, name, register, errors, options, required, onChange, registerOptions }: InputProps) => {
	return (
		<div>
			<label htmlFor={id}>{title}</label>
			<select
				id={id}
				{...register(name, {
					required,
					...registerOptions,
					onChange: (e) => {
						if (onChange) onChange(e);
					},
				})}
				className='border flex flex-col'
				name={name}
			>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.option}
					</option>
				))}
			</select>
			{errors[name] && <span>This field is required</span>}
		</div>
	);
};

export default selectInput;
