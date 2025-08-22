import Button from "@/components/button";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const Dates = () => <PageContainer
    backgroundImage="/backgrounds/dates.jpeg"
    className={cn(
        "bg-center",
        "flex flex-col items-center justify-center",
        "lg:pl-[50%]"
    )}
>

    <TitleDisplay />

    <div className={cn(
        "flex-grow",
        "flex flex-col items-stretch justify-center",
        "gap-0.5",
        "pb-10"
    )}>
        <div className="text-lg pl-6">Jeudi 2 octobre</div>
        <div className="text-lg pl-6">21 heures</div>
        <div className="text-lg pl-6">Théâtre Pixel</div>
        <div className="text-lg pl-6">Réservation obligatoire</div>
        <Link href="https://www.billetreduc.com/376170/evt.htm" target="_blank">
            <Button className="px-6 mt-3">
                <CalendarDays />
                Prendre ma place
            </Button>
        </Link>
    </div>

</PageContainer>;

export default Dates;