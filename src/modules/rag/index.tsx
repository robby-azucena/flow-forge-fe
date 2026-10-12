import { ANIM_FADE } from "@/constants/Animation";
import Container from "@/shared/ui/Container";
import ResumeForm from "./components/Resume.form";
import InformationForm from "./components/Information.form";

const Rag = () => {
  return (
      <Container component={"section"} {...ANIM_FADE} id="main-section" className="flex flex-col lg:flex-row self-stretch w-full h-full gap-4 px-4 pb-4">
        <section
          id="form-section"
          className="flex w-full self-stretch h-full max-h-20 lg:max-w-60 lg:max-h-full"
        >
          <ResumeForm />
        </section>
        <section id="information-section" className="flex w-full h-full self-stretch">
         <InformationForm />
        </section>
      </Container>
  );
};

export default Rag;
