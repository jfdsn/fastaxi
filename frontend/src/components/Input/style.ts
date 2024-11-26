import styled from "styled-components";

export const InputStyle = styled.input `
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;

    &:focus {
    outline: none;
    border-color: yellow;
    }
`;

export const LabelStyle = styled.label `
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const InputContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 16px;
    margin-top: 16px;
`;
