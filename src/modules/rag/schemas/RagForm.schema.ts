import * as yup from "yup";

export const ragSchema = yup.object({
  files: yup
    .array()
    .of(yup.mixed<File>())
    .required("Document is required to scan"),
});

export type RagSchemaType = yup.InferType<typeof ragSchema>;
