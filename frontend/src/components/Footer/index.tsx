import React from 'react';
import { FooterContainer, FooterText } from './style';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterText>
                &copy; {new Date().getFullYear()} FasTáxi.  
                Feito por: <a href="https://github.com/jfdsn">Jônathan Faria</a>
            </FooterText>
        </FooterContainer>
    )
}