import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),

  password: yup
    .string()
    .required("Required")
    .min(8, "Password must be at least 8 Charcters"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
