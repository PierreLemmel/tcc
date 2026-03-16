"use client";

import Button from "@/components/button";
import PageContainer from "@/components/page-container";
import TitleDisplay from "@/components/title-display";
import { cn } from "@/lib/utils";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Date1 = () => <div className={cn(
    "flex-grow",
    "flex flex-col items-stretch justify-center",
    "gap-0.5",
    "pb-10"
)}>
    <div className="text-lg pl-6">Mardis 28 avril, 19 et 26 mai</div>
    <div className="text-lg pl-6">20h30</div>
    <div className="text-lg pl-6">Théâtre Pixel</div>
    <div className="text-lg pl-6">18 rue Championnet, 75018 Paris</div>
    <div className="text-lg pl-6 pb-4">Réservation obligatoire</div>
    <Link href="https://www.billetreduc.com/376170/evt.htm" target="_blank">
        <Button className="px-6 mt-3">
            <CalendarDays />
            Prendre ma place
        </Button>
    </Link>
</div>

const Date2 = () => <div className={cn(
    "flex-grow",
    "flex flex-col items-stretch justify-center",
    "gap-0.5",
    "pb-10"
)}>
    <div className="text-lg pl-6">Samedi 18 avril</div>
    <div className="text-lg pl-6">21 heures</div>
    <div className="text-lg pl-6">Festival Semaine de l&apos;Impro</div>
    <div className="text-lg pl-6">Théâtre De Mon Désert</div>
    <div className="text-lg pl-6">71 rue de Mon Désert, 54000 Nancy</div>
    <div className="text-lg pl-6 pb-4">Billeterie sur place</div>
</div>

const Date3 = () => <div className={cn(
    "flex-grow",
    "flex flex-col items-stretch justify-center",
    "gap-0.5",
    "pb-10"
)}>
    <div className="text-lg pl-6">Vendredi 1er mai</div>
    <div className="text-lg pl-6">22 heures</div>
    <div className="text-lg pl-6">Festival Série Z</div>
    <div className="text-lg pl-6">Théâtre des Grottes</div>
    <div className="text-lg pl-6">Rue Louis-Favre 43, 1202 Genève</div>
    <div className="text-lg pl-6 pb-4">Réservation obligatoire</div>
    <Link href="https://www.helloasso.com/associations/alp-impro/evenements/festival-serie-z-tres-chair-corps" target="_blank">
        <Button className="px-6 mt-3">
            <CalendarDays />
            Prendre ma place
        </Button>
    </Link>
</div>

const DateElements = [Date1, Date2, Date3];

const Dates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? DateElements.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === DateElements.length - 1 ? 0 : prev + 1));
    };

    return <PageContainer
        backgroundImage="/backgrounds/dates.jpeg"
        mobileBackgroundImage="/backgrounds/mobile-main.jpeg"
        bgClassName="bg-center"
        mobileBgClassName="bg-center opacity-50"
        className={cn(
            "flex flex-col items-center justify-center",
            "lg:pl-[50%]"
        )}
    >

        <TitleDisplay />

        <div className={cn(
            "flex-grow",
            "flex flex-col items-stretch justify-center",
            "gap-6",
            "pb-10"
        )}>
            <div className="flex items-center justify-center gap-4 px-6">
                <button
                    type="button"
                    onClick={goPrevious}
                    className="p-1.5 rounded-full bg-white/80 text-red-900 hover:bg-white hover:cursor-pointer transition mb-12"
                    aria-label="Date précédente"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {DateElements[currentIndex]()}

                <button
                    type="button"
                    onClick={goNext}
                    className="p-1.5 rounded-full bg-white/80 text-red-900 hover:bg-white hover:cursor-pointer transition mb-12 ml-4"
                    aria-label="Date suivante"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="flex flex-row items-center justify-center gap-4">
                {DateElements.map((_, index) => (
                    <div key={index} className={cn(
                        "p-1.5 rounded-full hover:bg-white/100 hover:cursor-pointer transition",
                        index === currentIndex ? "bg-white/100" : "bg-white/40"
                    )} onClick={() => setCurrentIndex(index)}>
                        
                    </div>
                ))}
            </div>
        </div>

    </PageContainer>;
};

export default Dates;