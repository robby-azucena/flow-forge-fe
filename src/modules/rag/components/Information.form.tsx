import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import { Typography } from "@mui/material";
import { useRagContext } from "../context/RagContext";

const InformationForm = () => {
  const { hookForm } = useRagContext();
  const { getValues } = hookForm;
  return (
    <Container
      glass="base"
      className="flex flex-col w-full p-4 self-stretch"
      sx={{ borderRadius: RADIUS.xxxLarge }}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(getValues());
        }}
      >
        CHECK
      </button>
      <Typography component="h2" variant="titleBoldS">
        2. Information Form
      </Typography>
    </Container>
  );
};

export default InformationForm;
