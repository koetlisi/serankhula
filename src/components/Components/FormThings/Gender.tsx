import React from "react";
import { Radio } from "antd";

interface Prop {
    setData: (name: string, value: string) => void;
    name: string;
}

export const Gender: React.FC<Prop> = ({ setData, name}) => {
    return (
        <div>

            <Radio.Group
                onChange={(e) => setData(name, e.target.value)}
                name={name}
                defaultValue="other"
            >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
            </Radio.Group>
        </div>
    );
};
