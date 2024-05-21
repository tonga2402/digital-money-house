import * as yup from "yup"
const inputEmailSchema = yup
  .object({
    email: yup
      .string()
      .email("Formato de email invalido")
      .required("Este campo es requerido"),
  })
  .required();

export default inputEmailSchema;