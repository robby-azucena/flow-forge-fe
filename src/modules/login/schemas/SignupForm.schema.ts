import { EMAIL_MAX_LENGTH, PASSWORD_MAX_LENGTH } from "@/constants/MaxLength";
import * as yup from "yup";

export const signupSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required"),
  lastName: yup
    .string()
    .required("Last name is required"),
  emailAddress: yup
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
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export type SignupSchemaType = yup.InferType<typeof signupSchema>;
