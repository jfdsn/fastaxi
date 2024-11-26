import React from "react";
import { InputContainer, InputStyle, LabelStyle } from "./style";

interface InputProps {
    type?: "text" | "number"
    placeholder?: string,
    name: string,
    children: React.ReactNode;
    value?: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
    type = 'text',
    placeholder,
    name,
    children,
    value,
    onChange
}) => {
    return (
        <InputContainer>  
            <LabelStyle htmlFor={name}>{children}</LabelStyle>
            <InputStyle 
                type={type}
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    )
};