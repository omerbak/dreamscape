import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),

  password: yup
    .string()
    .required("Required")
    .min(8, "Password must be at least 8 Charcters"),
});
