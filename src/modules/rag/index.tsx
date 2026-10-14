'use client'
import { ANIM_FADE } from "@/constants/Animation";
import Container from "@/shared/ui/Container";
import ResumeForm from "./components/Resume.form";
import InformationForm from "./components/Information.form";
import Typography from "@mui/material/Typography";

const Rag = () => {
    return (
        <div className="flex flex-col self-stretch gap-4 w-full h-full overflow-hidden">
            <div className="px-4">
                <Typography component="h1" variant="titleLightL" color="textClear">RAG Pipeline</Typography>
            </div>
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
        </div>
    );
};

export default Rag;
