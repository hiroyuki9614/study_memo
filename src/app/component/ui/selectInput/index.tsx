'use client';

import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form';

type NameType = 'title' | 'duration' | 'description';

type InputProps = {
	id: string;
	title: string;
	name: NameType;
	register: UseFormRegister<any>;
	errors: FieldErrors;
	required?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	registerOptions?: RegisterOptions;
};

export const selectInput = ({ id, title, name, register, errors, required, onChange, registerOptions }: InputProps) => {
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
				<option value='female'>female</option>
				<option value='male'>male</option>
				<option value='other'>other</option>
			</select>
			{errors[name] && <span>This field is required</span>}
		</div>
	);
};

export default selectInput;
