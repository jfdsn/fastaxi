import React from "react";
import { LabelStyle, SelectStyle } from "./style";

interface Option {
    value: string,
    name: string,
};

interface DriverSelectProps {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
};

export const DriverSelect: React.FC<DriverSelectProps> = ({ onChange, options }) => {
    return (
        <div>
            <LabelStyle htmlFor="drivers">Motorista: </LabelStyle>
            <SelectStyle name="drivers" id="drivers" onChange={onChange}>
                <option value="All" defaultChecked>Todos</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </SelectStyle>
        </div>
    )
};