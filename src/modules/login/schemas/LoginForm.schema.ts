import { EMAIL_MAX_LENGTH, PASSWORD_MAX_LENGTH } from "@/constants/MaxLength";
import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email Address is must be a valid email")
    .required("Email Address is required")
    .max(
      EMAIL_MAX_LENGTH,
      `Email address must be at most ${EMAIL_MAX_LENGTH} characters`,
    ),
  password: yup
    .string()
    .required("Password is required")
    .max(
      PASSWORD_MAX_LENGTH,
      `Password must be at most ${PASSWORD_MAX_LENGTH} characters`,
    ),
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>;
