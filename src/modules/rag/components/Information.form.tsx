import { RADIUS } from "@/constants/Radius";
import Container from "@/shared/ui/Container";
import { CircularProgress, Typography } from "@mui/material";
import { useRagContext } from "../context/RagContext";

import PrimaryButton from "@/shared/ui/buttons/PrimaryButton";
import "../styles/fade-container.css";
import TextAreaField from "@/shared/ui/form/TextAreaField";
import MarkdownViewer from "@/shared/ui/MarkdownViewer";
import { useWatch } from "react-hook-form";

const InformationForm = () => {
  const { hookForm, response, isLoading } = useRagContext();
  const { control } = hookForm;

  const query = useWatch({ control, name: "query", defaultValue: "" });
  const isQueryEmpty = !query?.trim();

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
        {isLoading ? (
          <div className="w-full h-full flex items-center-safe justify-center-safe self-stretch">
            <CircularProgress />
          </div>
        ) : (
          <>
            {response ? (
              <MarkdownViewer>{response}</MarkdownViewer>
            ) : (
              // <Typography
              //   component="label"
              //   variant="descriptionBoldL"
              //   color="textClearest"
              // >
              //   {response}
              // </Typography>
              <div className="w-full h-full flex items-center-safe justify-center-safe self-stretch">
                <Typography
                  component="label"
                  variant="labelL"
                  color="textWhisper"
                >
                  No information yet
                </Typography>
              </div>
            )}
          </>
        )}
      </div>

      <Container
        glass="base"
        className="flex lg:flex-row flex-col gap-4 items-center-safe w-full p-4 self-stretch"
        sx={{ borderRadius: RADIUS.xxLarge }}
      >
        <TextAreaField
          control={control}
          name={"query"}
          disabled={isLoading}
          placeholder={"Enter the information you need"}
        />

        <PrimaryButton
          type="submit"
          label="Send"
          disabled={isLoading || isQueryEmpty}
          isLoading={isLoading}
          className="w-full max-w-30"
          color="primary"
        />
      </Container>
    </Container>
  );
};

export default InformationForm;
