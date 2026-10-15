import { createContext, useContext } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

interface RagContextType {
  hookForm: UseFormReturn<
    {
      files: (File | undefined)[];
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    {
      files: (File | undefined)[];
    }
  >;
  onSubmit: SubmitHandler<{
    files: (File | undefined)[];
  }>;
}

export const RagContext = createContext<RagContextType | undefined>(undefined);

export const useRagContext = () => {
  const context = useContext(RagContext);

  if (!context)
    throw new Error("useRagContext must be used within a RagContextProvider");

  return context;
};
