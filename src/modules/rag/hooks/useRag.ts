import { SubmitHandler, useForm } from "react-hook-form";
import { ragSchema, RagSchemaType } from "../schemas/RagForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "@/context/SnackbarContext";

const useRag = () => {
  const hookForm = useForm<RagSchemaType>({
    resolver: yupResolver(ragSchema),
    defaultValues: {
      files: [],
    },
  });

  const showSnackbar = useSnackbar();

  const onSubmit: SubmitHandler<RagSchemaType> = async ({ files }) => {
    console.log(files);
  };

  return {
    hookForm,
    onSubmit,
  };
};

export default useRag;
