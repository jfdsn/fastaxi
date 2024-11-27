import React from "react";
import { ButtonContainer } from "./style";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <ButtonContainer onClick={onClick} type='button'>{children}</ButtonContainer>
    )
};