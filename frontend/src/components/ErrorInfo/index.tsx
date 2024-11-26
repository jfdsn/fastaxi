import React from "react";
import { ErrorInfoMessage } from "./style";

interface ErrorInfoProps {
    children?: React.ReactNode
};

export const ErrorInfo: React.FC<ErrorInfoProps> = ({children}) => {
    return (
        <ErrorInfoMessage>{children}</ErrorInfoMessage>
    )
};