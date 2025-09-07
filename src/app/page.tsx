import Button from "@/components/button";
import ContactIcons from "@/components/contact-icons";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Home = () => <PageContainer
    backgroundImage="/backgrounds/homepage.jpeg"
    mobileBackgroundImage="/backgrounds/mobile-homepage.jpeg"
    bgClassName="bg-[50%_80%]"
    mobileBgClassName="bg-top"
    className={cn(
        "flex flex-col items-center justify-between",
        "py-4 lg:pl-[50%]",
        "pt-6 lg:pt-0",
    )}
>
    <TitleDisplay />

    <div className={cn(
        "flex flex-col items-stretch justify-center",
        "gap-5",
    )}>
        <Button className="px-10">
            <Link href="/presentation">Présentation du spectacle</Link>
        </Button>
        
        <Button className="px-10">
            <Link href="/temoignages">Enregistrer un témoignage</Link>
        </Button>
        
        <Button className="px-10">
            <Link href="/dates">Prochaines dates</Link>
        </Button>
                
        <Button className="px-10">
            <Link href="/espace-pro">Espace pro</Link>
        </Button>
    </div>

    <ContactIcons />
</PageContainer>;

export default Home;