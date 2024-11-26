import React from "react";
import { ButtonContainer } from "./style";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit"
};

export const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button'}) => {
    return (
        <ButtonContainer onClick={onClick} type={type}>{children}</ButtonContainer>
    )
};