"use client";

import Typography from "@mui/material/Typography";
import RagContextProvider from "./context/RagContextProvider";
import RagForm from "./components/RagForm";

const Rag = () => {
  return (
    <RagContextProvider>
      <div className="flex flex-col self-stretch gap-4 w-full h-full overflow-hidden">
        <div className="px-4">
          <Typography component="h1" variant="titleLightL" color="textClear">
            RAG Pipeline
          </Typography>
        </div>
        <RagForm />
      </div>
    </RagContextProvider>
  );
};

export default Rag;
