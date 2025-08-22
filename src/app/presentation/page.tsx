import Button from "@/components/button";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Presentation = () => <PageContainer
    backgroundImage="/backgrounds/presentation.jpeg"
    className={cn(
        "bg-[100%_0%]",
        "grid grid-cols-2 items-center",
    )}
>

    <div className={cn(
        "flex-grow",
        "flex flex-col items-center justify-center",
        "px-12"
    )}>
        <div className={cn(
            "flex flex-col items-stretch",
            "bg-white/50 rounded-lg border-2 border-red-900",
            "px-4 py-2",
            "gap-2",
            "text-black"
        )}>
            <div className={cn(
                "font-lemon text-red-900 text-4xl text-center",
                "mt-2 mb-4"
            )}>
                Présentation du spectacle
            </div>
            <div className="text-center">
                Depuis notre naissance, nous portons ce costume de peau qu&apos;est notre corps. Collé sur nos chairs, il nous définit, nous révèle mais nous entrave également. De la puissance émancipatrice que nous pouvons en tirer à la prison qu&apos;ils peuvent se révéler être, ce seule en scène explore nos rapports intimes, complexes et souvent ambigus au corps – le nôtre, mais aussi celui des autres.
            </div>
            <div className="text-center">
                Ce spectacle improvisé se construit autour d&apos;anecdotes, témoignages anonymes que vous pouvez <Link href="/temoignages" className="underline text-red-900 hover:text-red-800 transition-colors duration-200 font-semibold">enregistrer ici</Link> et qui sont diffusés en introduction, inspirant les saynètes qui se créent durant une heure sous vos yeux.
            </div>
        </div>
    </div>


    <div className={cn(
        "h-full w-full",
        "flex flex-col items-center justify-start",
    )}>
        <TitleDisplay />

        
    </div>

</PageContainer>;

export default Presentation;