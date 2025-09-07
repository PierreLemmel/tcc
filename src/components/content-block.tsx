import { cn } from "@/lib/utils";
import { JSX } from "react";


export type ContentBlockProps = {
    title: string;
    children: JSX.Element[];
}

const ContentBlock = (props: ContentBlockProps) => {
    const { title, children } = props;

    return <div className={cn(
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
                {title}
            </div>
            {children}
        </div>
    </div>;
};

export default ContentBlock;