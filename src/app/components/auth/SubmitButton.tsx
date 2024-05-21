import React from 'react'
import { FieldValues, useFormContext } from 'react-hook-form';

type SubmitButtonProps<T> = {
    label: string;
    styles: string;
    onSubmit: (data: T) => void
}

const SubmitButton = <T extends FieldValues>({
  label,
  styles,
  onSubmit,
}: SubmitButtonProps<T>) => {
  const { handleSubmit } = useFormContext<T>();

  return (
    <button className={styles} onClick={handleSubmit(onSubmit)}>
      {label}
    </button>
  );
};

export default SubmitButton
