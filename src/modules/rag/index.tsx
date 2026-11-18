"use client";

import Typography from "@mui/material/Typography";
import RagContextProvider from "./context/RagContextProvider";
import RagForm from "./components/RagForm";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Rag = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <RagContextProvider>
      <div className="flex flex-col self-stretch gap-4 w-full h-full overflow-hidden">
        <div className="px-4">
          <Typography
            component="h1"
            variant={matches ? "titleLightS" : "titleLightL"}
            className="text-1xl"
            color="textClear"
          >
            Analyze the document
          </Typography>
        </div>
        <RagForm />
      </div>
    </RagContextProvider>
  );
};

export default Rag;
