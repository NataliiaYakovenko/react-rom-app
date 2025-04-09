import * as yup from "yup";

const SIGN_IN_SHEMA = yup.object({
  email: yup.string().required().email('Email is not valid'),
  password: yup
    .string()
    .required()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Password is not valid"),
});

export default SIGN_IN_SHEMA