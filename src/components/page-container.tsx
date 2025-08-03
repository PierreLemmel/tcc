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

    return <div
        style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        }}
        className={cn(
            "relative w-screen h-screen",
            "bg-cover bg-no-repeat",
            "font-aaargh",
            className
        )}
    >
        {children}
    </div>
}

export default PageContainer;