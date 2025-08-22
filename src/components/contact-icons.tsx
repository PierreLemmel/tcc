import { cn } from "@/lib/utils";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

const ContactIcons = () => <div className={cn(
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

export default ContactIcons;