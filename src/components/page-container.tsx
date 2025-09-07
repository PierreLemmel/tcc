'use client';

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/lib/hook";

export type PageContainerProps = {
    backgroundImage?: string;
    mobileBackgroundImage?: string;
    className?: string;
    bgClassName?: string;
    mobileBgClassName?: string;
    children: React.ReactNode;
}

const PageContainer = (props: PageContainerProps) => {
    const {
        backgroundImage,
        mobileBackgroundImage,
        className,
        bgClassName,
        mobileBgClassName,
        children
    } = props;

    const isMobile = useIsMobile();
    const bgImg = (isMobile && mobileBackgroundImage) ? mobileBackgroundImage : backgroundImage;

    return <>
        <div
            style={{
                backgroundImage: bgImg ? `url(${bgImg})` : undefined,
            }}
            className={cn(
                "fixed inset-0 w-screen h-screen",
                "bg-cover bg-no-repeat",
                "z-0",
                isMobile ? mobileBgClassName : bgClassName,
            )}
            aria-hidden="true"
        />
        <div
            className={cn(
                "relative z-10 w-full h-full overflow-auto min-h-screen",
                "font-aaargh",
                className
            )}
        >
            {children}
        </div>
    </>
}

export default PageContainer;