import * as yup from "yup";

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["jpg", "jpeg", "gif", "png"];

export const destinationSchema = yup.object().shape({
  title: yup.string().required("Required"),
  desc: yup.string(),
  country: yup.string().required("Required"),
  city: yup.string().required("Required"),
  price: yup.number().required("Required"),
  period: yup.number(),
  photos: yup.array().min(1, "select at least 1 file"),
  /*
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    ) */
});
