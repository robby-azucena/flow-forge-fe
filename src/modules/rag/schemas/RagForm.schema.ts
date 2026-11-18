import * as yup from "yup";

export const ragSchema = yup.object({
  files: yup
    .array()
    .of(yup.mixed<File>())
    .required("Document is required to scan"),
  query: yup.string().required("Enter a query"),
});

export type RagSchemaType = yup.InferType<typeof ragSchema>;
