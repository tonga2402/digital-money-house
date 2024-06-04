'use client'
import { POST } from '@/app/api/send/route';
import InputText from '@/app/components/auth/InputText';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import * as yup from "yup"

type ForgotPasswordProps = {
    email : string
}

const forgotPasswordShema = yup.object({
    email: yup.string().email().trim().required('El email es requerido'),
});

const InputForgotPassword = () => {
  const methods = useForm<ForgotPasswordProps>({
    resolver: yupResolver(forgotPasswordShema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  
  const notify = () => toast.success('Se te envio un email para recuperar la contraseña')
  
  const onSubmit = async (email: ForgotPasswordProps) => {
    const res =  await fetch('/api/send', {method:'POST'} );
    notify()
  };

  return (
    <FormProvider {...methods}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_container">
            <InputText
              type="text"
              fieldName={"email"}
              placeholder={"Correo electrónico*"}
            />
            <button
              className={"button_responsive"}
              onClick={handleSubmit(onSubmit)}
            >
              {isSubmitting ? (
                <BeatLoader color="black" size={10} />
              ) : (
                "Continuar"
              )}
            </button>
            {errors && (
              <span
                style={{ color: "red", fontStyle: "italic", fontSize: "14px" }}
              >
                {errors.email?.message}
              </span>
            )}
             <Toaster position="top-center" toastOptions={{duration:5000}}/>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default InputForgotPassword;