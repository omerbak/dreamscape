import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters ")
    .max(20, "Name must be 20 characters at maximum")
    .required("Required"),

  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup
    .string()
    .min(20, "Name must be at least 20 characters ")
    .required("Required"),
});
