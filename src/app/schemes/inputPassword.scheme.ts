import * as yup from "yup"

const inputPasswordSchema = yup.object().shape({
  password: yup.string().trim().required("Ingrese la contraseña"),
});


export default inputPasswordSchema;