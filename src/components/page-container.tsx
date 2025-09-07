import { cn } from "@/lib/utils";

export type PageContainerProps = {
    backgroundImage?: string;
    className?: string;
    children: React.ReactNode;
}

const PageContainer = (props: PageContainerProps) => {
    const {
        backgroundImage,
        className,
        children
    } = props;

    return <>
        <div
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            }}
            className={cn(
                "fixed inset-0 w-screen h-screen",
                "bg-cover bg-no-repeat",
                "z-0",
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