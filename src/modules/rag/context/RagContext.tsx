import { createContext, useContext } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";

interface RagContextType {
  response: string | null;
  hookForm: UseFormReturn<
    {
      files: (File | undefined)[];
      query: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    {
      files: (File | undefined)[];
      query: string;
    }
  >;
  onSubmit: SubmitHandler<{
    files: (File | undefined)[];
    query: string;
  }>;
  isLoading: boolean;
}

export const RagContext = createContext<RagContextType | undefined>(undefined);

export const useRagContext = () => {
  const context = useContext(RagContext);

  if (!context)
    throw new Error("useRagContext must be used within a RagContextProvider");

  return context;
};
