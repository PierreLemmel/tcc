import { cn } from "@/lib/utils";
import Link from "next/link";

const TitleDisplay = () => {
    return <Link href="/">
            <div className={cn(
            "px-8 py-4",
            "flex flex-col items-center justify-center",
        )}>
            <h1 className="text-6xl text-red-900 font-lemon">Très chair corps</h1>
            <p className="text-lg">Seule-en-scène improvisé</p>
        </div>
    </Link>
}

export default TitleDisplay;