import PageContainer from "@/components/page-container";
import TemoignageComponent from "@/components/temoignagne-component";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";

const Temoignage = () => <PageContainer
    backgroundImage="/backgrounds/temoignages.jpeg"
    className={cn(
        "bg-[50%_80%]",
        "grid grid-cols-2 items-center",
    )}
>

    <div className={cn(
        "h-full w-full",
        "flex flex-col items-center justify-center",
    )}>
        <TemoignageComponent />
        <div className={cn(
            "w-3/4",
            "flex flex-col items-center justify-center",
            "text-center italic",
        )}>
            Pour témoigner, appuyez sur le bouton pour démarrer l&apos;enregistrement, autorisez votre micro à enregistrer du son et parlez.<br />
            Pour terminer, réappuyez sur le bouton
        </div>
    </div>

    <div className={cn(
        "h-full w-full",
        "flex flex-col items-center justify-center",
    )}>
        <TitleDisplay />

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
                    Témoignages
                </div>
                <div className="text-center">
                    A chaque représentation, deux témoignages anonymes sont diffusés. Ils sont la source d&apos;inspiration des scènes improvisées.
                </div>
                <div className="text-center">
                    En toute intimité, vous êtes libre de partager vos anecdotes. Vous pouvez parler de vos spécificités corporelles, de votre relation avec votre corps, avec celui des autres, livrez vos réflexions, vos souvenirs.
                </div>
                <div className="text-center">
                    Même si cela vous semble banal, simple, que ce n&apos;est qu&apos;une phrase murmurée timidement, tous les témoignages sont des sources d&apos;inspiration précieuses.
                </div>
                <div className="text-center">
                    Les témoignages seront choisis par le régisseur et découverts sur scène, au moment du spectacle, par la comédienne.
                </div>
            </div>
        </div>
    </div>

</PageContainer>;

export default Temoignage;