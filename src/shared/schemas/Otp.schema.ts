import { OTP_MAX_LENGTH } from "@/constants/MaxLength";
import * as yup from "yup";

export const otpValidator = yup
  .string()
  .required("MFA code is required")
  .length(OTP_MAX_LENGTH, `MFA code must be at most ${OTP_MAX_LENGTH} length`)
  .max(OTP_MAX_LENGTH);


export const otpSchema = yup.object({
  otp: otpValidator,
});

export type OtpSchemaType = yup.InferType<typeof otpSchema>;
