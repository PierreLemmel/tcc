import Button from "@/components/button";
import ContentBlock from "@/components/content-block";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Presentation = () => <PageContainer
    backgroundImage="/backgrounds/presentation.jpeg"
    mobileBackgroundImage="/backgrounds/mobile-main.jpeg"
    bgClassName="bg-[100%_0%]"
    mobileBgClassName="bg-center opacity-50"
    className={cn(
        "grid grid-cols-1 md:grid-cols-2 items-center",
        "py-2 md:py-0"
    )}
>
    <ContentBlock title="Présentation du spectacle">
        <div className="text-center">
            Depuis notre naissance, nous portons ce costume de peau qu&apos;est notre corps. Collé sur nos chairs, il nous définit, nous révèle mais nous entrave également. De la puissance émancipatrice que nous pouvons en tirer à la prison qu&apos;ils peuvent se révéler être, ce seule en scène explore nos rapports intimes, complexes et souvent ambigus au corps – le nôtre, mais aussi celui des autres.
        </div>
        <div className="text-center">
            Ce spectacle improvisé se construit autour d&apos;anecdotes, témoignages anonymes que vous pouvez <Link href="/temoignages" className="underline text-red-900 hover:text-red-800 transition-colors duration-200 font-semibold">enregistrer ici</Link> et qui sont diffusés en introduction, inspirant les saynètes qui se créent durant une heure sous vos yeux.
        </div>
    </ContentBlock>

    <div className={cn(
        "h-full w-full",
        "flex flex-col items-center justify-start",
        "order-first md:order-last",
        "pb-4"
    )}>
        <TitleDisplay />
    </div>

</PageContainer>;

export default Presentation;