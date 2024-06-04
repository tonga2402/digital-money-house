'use client'
import React, { useEffect, useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from 'react-hook-form';
import inputPasswordSchema from '@/app/schemes/inputPassword.scheme';
import { authLogin } from '@/app/services/auth/auth.api';
import { AccessDeniedError } from '@/app/services/common/errors';
import { useRouter } from 'next/navigation';
import { BeatLoader } from 'react-spinners';
import { useAuthContext } from '@/app/contexts/authContext';
import InputPassword from './InputPassword';

type InputPasswordProps = {
  email?: string
  password: string
}

const FormPassword = () => {
  const router = useRouter();
  const { login } = useAuthContext()
  const [localEmail , setLocalEmail] = useState<string>('')
  const [serverError, setServerError] = useState<string | null>(null);

  const methods = useForm<InputPasswordProps>({
    resolver: yupResolver(inputPasswordSchema),
  });

  const {
    handleSubmit,
    formState: { errors , isSubmitting},
  } = methods;

  useEffect(() => {
    setLocalEmail(localStorage.getItem('email') ?? '') 
  },[])

  const onSubmit = async (data: InputPasswordProps) => {

    setServerError(null);
    data = ({...data, email: localEmail})
    try {
      const loginResponse = await authLogin(data)
      // console.log(loginResponse.token)
      login(loginResponse),
      localStorage.removeItem('email')
      router.push('/')
      
    } catch (e) {
        if (e instanceof AccessDeniedError){
          setServerError('Contraseña incorrecta. Vuelva a intentarlo')
        } else{
          setServerError("Ha ocurrido un error. Intente mas tarde");
        } 
    }
  }


  return (
    <FormProvider {...methods}>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_container">
              <h2>Ingresá tu contraseña</h2>
              <InputPassword fieldName="password" />
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
            </div>
            {errors && (
              <div style={{ margin: "20px", textAlign: "center" }}>
                <span
                  style={{
                    color: "red",
                    fontStyle: "italic",
                    fontSize: "14px",
                  }}
                >
                  {!serverError ? errors.password?.message : serverError}
                </span>
              </div>
            )}
          </form>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={()=> router.push('/forgot-password')}
              className="recover_password"
            >
              - Olvide mi contraseña -
            </button>
           
          </div>
        </div>

      </FormProvider>
  );
}

export default FormPassword;


