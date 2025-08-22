import Button from "@/components/button";
import ContactIcons from "@/components/contact-icons";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import Link from "next/link";

const EspacePro = () => <PageContainer
    backgroundImage="/backgrounds/espace-pro.jpeg"
    className={cn(
        "bg-[30%_60%]",
        "flex flex-col items-center justify-between",
        "py-4 lg:pl-[50%]",
        "pt-6 lg:pt-0",
        "px-8"
    )}
>
    <TitleDisplay />

    <div className={cn(
        "flex flex-col items-stretch justify-center",
        "gap-5",
    )}>
        <Button className="px-10">
            <Link href="/diffusion/dossier-tcc.pdf" target="_blank">Dossier de diffusion</Link>
        </Button>
    </div>

    <div className={cn(
        "flex flex-col items-center justify-center",
        "py-2 px-6 rounded-xl bg-white/50",
        "gap-4"
    )}>
        <div className="text-center text-red-900 font-bold font-lemon text-3xl">Nous contacter</div>
        <ContactIcons />
    </div>
</PageContainer>;

export default EspacePro;