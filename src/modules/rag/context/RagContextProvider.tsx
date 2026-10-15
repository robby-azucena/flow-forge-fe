import { ReactNode, useMemo } from "react";
import { RagContext } from "./RagContext";
import useRag from "../hooks/useRag";

interface RagContextProviderProps {
  children: ReactNode;
}

const RagContextProvider = ({ children }: RagContextProviderProps) => {
  const rag = useRag();

  const contextValue = useMemo(() => rag, [rag]);

  return (
    <RagContext.Provider value={contextValue}>{children}</RagContext.Provider>
  );
};

export default RagContextProvider;
