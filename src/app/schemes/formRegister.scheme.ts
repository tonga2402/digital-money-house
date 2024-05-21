import * as yup from "yup"


const formRegisterSchema = yup
  .object({
    firstname: yup.string().trim().required('El nombre es requerido'),
    lastname: yup.string().trim().required('El apellido es requerido'),
    dni: yup.number().typeError('El DNI es requerido').required(),
    email: yup.string().email().trim().required('El email es requerido'),
    password: yup
      .string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])(?=.{6,})/,'La contraseña es requerida')
      .required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')]).required('Confirmar contraseña es requerido'),
    phone: yup.string().required('El teléfono es requerido'),
  })
  .required();

  export default formRegisterSchema;