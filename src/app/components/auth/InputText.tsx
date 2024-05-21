import React from 'react'
import { FieldValues, useFormContext } from 'react-hook-form';


type InputTextProps = {
    type: 'text' | 'password' | 'number' | 'email';
    placeholder?: string;
    fieldName: string
}
const InputText = ({ type, placeholder, fieldName }: InputTextProps) => {
  const {register}= useFormContext()

  return <input type={type} placeholder={placeholder}  {...register(fieldName)}/>;
};

export default InputText
