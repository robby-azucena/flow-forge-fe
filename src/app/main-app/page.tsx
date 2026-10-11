import { METADATA } from "@/constants/Metadata";
import Rag from "@/modules/rag";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: METADATA.title + " - Main app",
  description: METADATA.description,
};

const MainPage = () => {
  return <Rag/>;
};

export default MainPage;
