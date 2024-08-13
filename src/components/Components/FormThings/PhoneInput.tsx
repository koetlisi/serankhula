import { InputNumber } from "antd";
import React from "react";

interface Prop {
    addonAfter: string;
    name: string;
    data: number | null;  // Changed to number or null to match InputNumber type
    setData: (name: string, value: number | null) => void;
}

export const NumberInputAddonAfter: React.FC<Prop> = ({ addonAfter, name, data, setData }) => {
    const handleChange = (value: number | null) => {
        if (value !== null) {
            setData(name, value); // Pass the numeric value
        } else {
            setData(name, null); // Handle null value
        }
    };

    return (
        <InputNumber
            value={data}
            onChange={handleChange}
            addonBefore={addonAfter} // Corrected usage of addonAfter
            style={{ width: '100%' }}
        />
    );
};
