import Button from "@/components/button";
import ContactIcons from "@/components/contact-icons";
import ContentBlock from "@/components/content-block";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import Link from "next/link";

const EspacePro = () => <PageContainer
    backgroundImage="/backgrounds/espace-pro.jpeg"
    className={cn(
        "bg-[30%_60%]",
        "flex flex-col items-center",
        "py-4 lg:pl-[50%]",
        "pt-6 lg:pt-0",
        "px-8"
    )}
>
    <TitleDisplay />

    <ContentBlock title="Espace pro">
        <div className="text-center">
            Vous êtes programmateur ou programmatrice d&apos;une salle de théâtre et intéressé-es par le spectacle ?
        </div>
        <div className="text-center">
            Vous êtes un-e particulier qui souhaite qu&apos;on vienne jouer chez vous ? 
        </div>
        <div className="text-center">
            Vous êtes une troupe ou compagnie de théâtre et vous souhaitez organiser un atelier autour du théâtre corporel ou du seul-e en scène ? 
        </div>
        <div className="text-center">
            Vous pouvez nous contacter :
        </div>
        <div className="text-center">
            +33687447866 <br/>
            treschaircorps@gmail.com
        </div>
        <ContactIcons />
    </ContentBlock>

    <div className={cn(
        "flex flex-col items-stretch justify-center",
        "gap-5",
    )}>
        <Button className="px-10">
            <Link href="/diffusion/dossier-tcc.pdf" target="_blank">Dossier de diffusion</Link>
        </Button>
    </div>
</PageContainer>;

export default EspacePro;