import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import { TextareaAutosize, Typography } from "@mui/material";
import { useRagContext } from "../context/RagContext";
import PrimaryIconButton from "@/shared/ui/buttons/IconButton";

import SendIcon from "@mui/icons-material/Send";
import PrimaryButton from "@/shared/ui/buttons/PrimaryButton";
import "../styles/fade-container.css";
import TextAreaField from "@/shared/ui/form/TextAreaField";

const InformationForm = () => {
  const { hookForm, response } = useRagContext();
  const { getValues, control } = hookForm;
  return (
    <Container
      glass="base"
      className="flex flex-col w-full p-4 self-stretch"
      sx={{ borderRadius: RADIUS.xxxLarge }}
    >
      <Typography component="label" variant="labelL" color="textClearest">
        2. Extract information
      </Typography>
      <div className="scroll-fade overflow-hidden overflow-y-auto py-4 h-full">
        {response && (
          <Typography
            component="label"
            variant="descriptionBoldL"
            color="textClearest"
          >
            {response}
          </Typography>
        )}
      </div>

      <Container
        glass="base"
        className="flex gap-4 items-center-safe w-full p-4 self-stretch"
        sx={{ borderRadius: RADIUS.xxLarge }}
      >
        <TextAreaField
          control={control}
          name={"query"}
          placeholder={"Enter the information you need"}
        />
        <PrimaryButton
          type="submit"
          label="Send"
          className="w-full max-w-30"
          color="primary"
        />
      </Container>
    </Container>
  );
};

export default InformationForm;
