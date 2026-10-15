import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import { TextareaAutosize, Typography } from "@mui/material";
import { useRagContext } from "../context/RagContext";
import PrimaryIconButton from "@/shared/ui/buttons/IconButton";

import SendIcon from "@mui/icons-material/Send";
import PrimaryButton from "@/shared/ui/buttons/PrimaryButton";

const InformationForm = () => {
  const { hookForm } = useRagContext();
  const { getValues } = hookForm;
  return (
    <Container
      glass="base"
      className="flex flex-col w-full p-4 self-stretch gap-4"
      sx={{ borderRadius: RADIUS.xxxLarge }}
    >
      <Typography component="label" variant="labelL" color="textClearest">
        2. Extract information
      </Typography>
      <div className="flex flex-col self-stretch h-full w-full bg-amber-50"></div>

      <Container
        glass="base"
        className="flex gap-4 items-center-safe w-full p-4 self-stretch"
        sx={{ borderRadius: RADIUS.xxLarge }}
      >
        <TextareaAutosize
          placeholder="Enter the information you need"
          className="w-full max-h-20"
          minRows={1}
          maxRows={3}
        />
        <PrimaryButton
          label="Send"
          className="w-full max-w-30"
          color="primary"
        />
      </Container>
    </Container>
  );
};

export default InformationForm;
