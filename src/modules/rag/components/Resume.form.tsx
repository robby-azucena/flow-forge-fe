import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import Typography from "@mui/material/Typography";

const ResumeForm = () => {
  return (
    <Container
      glass="base"
      className="flex flex-col w-full p-4 self-stretch"
      sx={{ borderRadius: RADIUS.xxxLarge }}
    >
      <Typography component="h2" variant="titleBoldS">
        Resume Form
      </Typography>
    </Container>
  );
};

export default ResumeForm;
