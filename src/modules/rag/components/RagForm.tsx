import { ANIM_FADE } from "@/constants/Animation";
import Container from "@/shared/ui/Container";
import ResumeForm from "./Resume.form";
import InformationForm from "./Information.form";
import { useRagContext } from "../context/RagContext";

const RagForm = () => {
  const { hookForm, onSubmit } = useRagContext();
  const { handleSubmit } = hookForm;
  return (
    <form
      className="flex flex-col self-stretch h-full w-full overflow-hidden"
      id={"rag-form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Container
        component={"section"}
        {...ANIM_FADE}
        id="main-section"
        className="flex flex-col h-full lg:flex-row self-stretch w-full gap-4 px-4 pb-4"
      >
        <section
          id="form-section"
          className="flex w-full self-stretch h-full max-h-20 lg:max-w-80 lg:max-h-full"
        >
          <ResumeForm />
        </section>
        <section
          id="information-section"
          className="flex w-full h-full self-stretch"
        >
          <InformationForm />
        </section>
      </Container>
    </form>
  );
};

export default RagForm;
