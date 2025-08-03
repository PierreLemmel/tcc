import Button from "@/components/button";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

const Home = () => <PageContainer
    backgroundImage="/backgrounds/homepage.jpeg"
    className={cn(
        "bg-[50%_80%]",
        "flex flex-col items-center justify-between",
        "py-4 lg:pl-[50%]",
    )}
>
    <TitleDisplay />

    <div className={cn(
        "flex flex-col items-stretch justify-center",
        "gap-5",
    )}>
        <Button className="px-10">
            <Link href="/temoignages">Enregistrer un témoignage</Link>
        </Button>
        
        <Button className="px-10">
            <Link href="/presentation">Présentation du spectacle</Link>
        </Button>
        
        <Button className="px-10">
            <Link href="/dates">Prochaines dates</Link>
        </Button>
    </div>
    <div className={cn(
        "flex flex-row items-center justify-center",
        "gap-4"
    )}>
        <Link href="https://www.instagram.com/treschaircorps/" target="_blank">
            <SiInstagram
                className="size-10 text-red-900 hover:text-red-700 transition-colors duration-200 hover:cursor-pointer"
            />
        </Link>
        
        <Link href="mailto:treschaircorps@gmail.com" target="_blank">
            <Mail className="size-12 text-red-900 hover:text-red-700 transition-colors duration-200 hover:cursor-pointer" />
        </Link>
    </div>
</PageContainer>;

export default Home;