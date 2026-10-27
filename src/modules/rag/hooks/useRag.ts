import { SubmitHandler, useForm } from "react-hook-form";
import { ragSchema, RagSchemaType } from "../schemas/RagForm.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "@/context/SnackbarContext";
import sendData from "../services/sendData";
import { AxiosError, isAxiosError } from "axios";
import { useState } from "react";

const useRag = () => {
  const [response, setResponse] = useState<string | null>(null);
  const hookForm = useForm<RagSchemaType>({
    resolver: yupResolver(ragSchema),
    defaultValues: {
      files: [],
      query: "",
    },
  });

  const showSnackbar = useSnackbar();

  const onSubmit: SubmitHandler<RagSchemaType> = async (data) => {
    try {
      const res = await sendData(data);
      setResponse(res.answer);
    } catch (err) {
      if (isAxiosError(err)) {
        const error = err as AxiosError;

        console.log(error.response);
        showSnackbar("Failed to send data", "error");
      } else {
        console.log(err);
      }
    }
  };

  return {
    response,
    hookForm,
    onSubmit,
  };
};

export default useRag;
