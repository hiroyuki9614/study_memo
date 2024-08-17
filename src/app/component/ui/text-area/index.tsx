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
                    "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
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