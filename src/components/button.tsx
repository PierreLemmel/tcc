import { cn } from '@/lib/utils';
import React from 'react';

export type ButtonProps = {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    variant?: 'default' | 'outline';
}

export const Button = (props: ButtonProps) => {
    const { onClick, className, children, variant = 'default' } = props;

    const baseClasses = "inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-opensans text-lg font-thin transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none hover:cursor-pointer";
    
    const variantClasses = {
        default: "bg-red-900 hover:bg-red-800 text-white",
        outline: "bg-white/20 border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white"
    };

    return <button
        onClick={onClick}
        className={cn(
            baseClasses,
            variantClasses[variant],
            className
        )}
    >
        {children}
    </button>
};

export default Button;
