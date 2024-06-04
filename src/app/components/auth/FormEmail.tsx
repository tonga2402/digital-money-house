'use client'

import { useRouter } from "next/navigation"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "./InputText"
import { FormProvider, useForm } from "react-hook-form"
import inputEmailSchema from "@/app/schemes/inputEmail.scheme";
import { BeatLoader } from "react-spinners"


type InputEmailProps = {
  email: string
}

const FormEmail = () => {
  const router = useRouter();
  const goToLink = (href: string) => {
    router.push(href);
  };


  const methods = useForm<InputEmailProps>({
    resolver: yupResolver(inputEmailSchema),
  })
  const { handleSubmit ,formState: {errors , isSubmitting} } = methods;

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
            <button
              className="button_input_grey"
              onClick={() => goToLink("/register")}
            >
              Crear Cuenta
            </button>
            {errors && (
              <span
                style={{ color: "red", fontStyle: "italic", fontSize: "14px" }}
              >
                {errors.email?.message}
              </span>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default FormEmail;
