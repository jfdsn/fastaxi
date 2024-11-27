import styled from "styled-components";

export const DriverOptionsContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px;
`;

export const CardContainer = styled.div `
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 20px;
`;

export const DriverCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DriverInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Name = styled.h3`
    margin: 0;
    color: #222;
`;

export const Description = styled.p`
    margin: 0;
    font-size: 14px;
    color: #555;
`;

export const Vehicle = styled.p`
    margin: 0;
    font-size: 14px;
    color: #555;
`;

export const AvaliationContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
`;

export const Rating = styled.p`
    margin: 0;
    font-size: 14px;
    color: #555;
`;

export const Comment = styled.p`
    margin: 0;
    font-size: 14px;
    color: #555;
`;

export const Price = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;
