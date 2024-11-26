import React from "react";
import { ButtonContainer } from "./style";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit"
};

export const Button: React.FC<ButtonProps> = ({ onClick, children, type}) => {
    return (
        <ButtonContainer onClick={onClick} type={type}>{children}</ButtonContainer>
    )
};