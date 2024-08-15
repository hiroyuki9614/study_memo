"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form"

type InputProps = {
  id: string;
  title: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  required?: boolean;
}

export const InputText = ({ id, title, name, register, errors, required }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input 
        id={id}
        {...register(name, { required })} 
        className="border" 
      />
      {errors[name] && <span>This field is required</span>}
    </div>
  )
}

export default InputText;