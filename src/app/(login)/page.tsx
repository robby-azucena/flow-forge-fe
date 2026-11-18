import { METADATA } from "@/constants/Metadata";
import Login from "@/modules/login";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: METADATA.title + " - Login",
  description: METADATA.description,
};

export default function LoginPage() {
  return (
    <Login />
  );
}
