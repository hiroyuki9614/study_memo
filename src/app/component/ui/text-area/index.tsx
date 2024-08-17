"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form"
import { twMerge } from 'tailwind-merge';

type InputProps = {
    id: string;
    title: string;
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
    required?: boolean;
    className?: string;
	children?: string;
}

export const InputTextArea = ({ id, title, name, register, errors, required, className, children }: InputProps) => {
    return (
        <div>
            <label htmlFor={id}>{title}</label>
            <textarea
                id={id}
                className={twMerge(
                    'select-none whitespace-nowrap text-center',
                    className
                )}
                {...register(name, { required })}
            >
				{children}
			</textarea>
            {errors[name] && <span>This field is required</span>}
        </div>
    )
}

export default InputTextArea;