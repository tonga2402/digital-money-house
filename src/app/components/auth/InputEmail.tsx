'use client'

import { useRouter } from "next/navigation"
import { yupResolver } from "@hookform/resolvers/yup"
import SubmitButton from './SubmitButton';

import InputText from "./InputText"
import { FormProvider, useForm } from "react-hook-form"
import inputEmailSchema from "@/app/schemes/inputEmail.scheme";
import { useState } from "react";


type InputEmailProps = {
  email: string
}

const InputEmail = () => {
  const router = useRouter();
  const goToLink = (href: string) => {
    router.push(href);
  };


  const methods = useForm<InputEmailProps>({
    resolver: yupResolver(inputEmailSchema),
  })
  const { handleSubmit ,formState: {errors} } = methods;

  const onSubmit = (data: InputEmailProps) => {
    console.log(data);
    const inputEmail = data.email;
    localStorage.setItem("email", inputEmail);
    goToLink("/login/password");
  };

  return (
    <FormProvider {...methods}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_container">
            <h2>¡Hola! Ingresá tu e-mail</h2>
            <InputText
              fieldName={"email"}
              type={"email"}
              placeholder={"Correo electrónico"}
            />

            <SubmitButton
              label={"Continuar"}
              styles={"button_responsive"}
              onSubmit={onSubmit}
            />
            <button
              className="button_input_grey"
              onClick={() => goToLink("/register")}
            >
              Crear Cuenta
            </button>
            {errors && 
              <span style={{ color: "red", fontStyle: "italic" , fontSize: '14px' }}>
              {errors.email?.message}
            </span>}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default InputEmail
