import { InputNumber } from "antd";
import React from "react";
import {useDispatch} from "react-redux";

interface Prop {
    addonAfter: string;
    name: string;
    data: number | null;  // Changed to number or null to match InputNumber type
    onChange:any;
}

export const NumberInputAddonAfter: React.FC<Prop> = ({ addonAfter, name, data, onChange }) => {
    const dispatch = useDispatch()


    return (
        <InputNumber
            value={data}
            onChange={(e)=>dispatch(onChange(e))}
            addonBefore={addonAfter} // Corrected usage of addonAfter
            style={{ width: '100%' }}
        />
    );
};
