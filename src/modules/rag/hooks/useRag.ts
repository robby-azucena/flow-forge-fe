import { SubmitHandler, useForm } from "react-hook-form"
import { ragSchema, RagSchemaType } from "../schemas/RagForm.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSnackbar } from "@/context/SnackbarContext"

const useRag = () => {
    const {   control,
    handleSubmit,
    formState,
   } = useForm<RagSchemaType>({
        resolver: yupResolver(ragSchema),
        defaultValues: {
            files: []
        }
    })

    const showSnackbar = useSnackbar();

    const onSubmit: SubmitHandler<RagSchemaType> = async({
        files
    }) => {
        console.log(files)
    }

    return {
      hookForm: {
        control,
        handleSubmit,
        formState,
        onSubmit,
      },
    }

}

export default useRag
