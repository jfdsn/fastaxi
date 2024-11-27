import styled from "styled-components";

export const LabelStyle = styled.label `
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const SelectStyle = styled.select `
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