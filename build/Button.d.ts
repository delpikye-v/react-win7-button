import React from "react";
type ButtonVariant = "default" | "primary" | "danger";
type ButtonSize = "small" | "medium" | "large";
type ButtonShape = "square" | "rounded" | "pill";
type SpinnerPosition = "start" | "end" | "overlay";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    iconOnly?: boolean;
    width?: string | number;
    height?: string | number;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    shape?: ButtonShape;
    color?: string;
    background?: string;
    spinnerPosition?: SpinnerPosition;
    active?: boolean;
    toggle?: boolean;
    autoFocus?: boolean;
    focused?: boolean;
    onActiveChange?: (active: boolean) => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
