import React from "react";
import { HeaderContainer, Logo, Nav, NavContainer } from "./style";

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <a href="/"><Logo>FasTáxi</Logo></a>
            <NavContainer>
                <Nav>
                    <a href="/">Home</a>
                    <a href="/history">Histórico</a>
                </Nav>
            </NavContainer>
        </HeaderContainer>
    );
};