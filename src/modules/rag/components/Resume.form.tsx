import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import FileUploadField from "@/shared/ui/form/FileUploadField";
import Typography from "@mui/material/Typography";
import { useRagContext } from "../context/RagContext";

const FILE_ACCEPT =
  ".pdf,application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

const ResumeForm = () => {
  const { hookForm } = useRagContext();
  const { setValue } = hookForm;

  return (
    <Container
      glass="base"
      className="flex flex-col w-full p-4 self-stretch overflow-hidden"
      sx={{ borderRadius: RADIUS.xxxLarge }}
    >
      <Typography component="label" variant="titleBoldS" color="textClearest">
        1. Document to scan
      </Typography>
      <FileUploadField
        accept={FILE_ACCEPT}
        label="Attach document"
        onFilesChange={(e) => setValue("files", e)}
        visibleList
      />
    </Container>
  );
};

export default ResumeForm;
