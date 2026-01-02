"use client";

import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';

export type ButtonProps = {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    variant?: 'default' | 'outline';
    disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        onClick,
        className,
        children,
        variant = 'default',
        disabled = false
    } = props;

    const baseClasses = "inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full font-opensans text-lg font-thin transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none hover:cursor-pointer";
    
    const variantClasses = {
        default: "bg-red-900 hover:bg-red-800 text-white",
        outline: "bg-white/20 border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white"
    };

    const disabledClasses = "opacity-50 cursor-not-allowed";

    const onClickHandler = useCallback(() => {
        if (disabled) return;
        onClick?.();
    }, [disabled, onClick]);

    return <button
        onClick={onClickHandler}
        className={cn(
            baseClasses,
            variantClasses[variant],
            className,
            disabled && disabledClasses
        )}
        disabled={disabled}
    >
        {children}
    </button>
};

export default Button;
