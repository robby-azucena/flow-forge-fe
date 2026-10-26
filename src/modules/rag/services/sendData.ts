import axios from "axios";
import { RagSchemaType } from "../schemas/RagForm.schema";

const sendData = async ({ files, query }: RagSchemaType) => {
  const formData = new FormData();

  const file = files[0];

  if (!file) {
    throw new Error("Please select a file.");
  }

  formData.append("file", file);
  formData.append("question", query);

  const response = await axios.post("/api/requests/ai/analyze", formData);

  return response.data;
};

export default sendData;
