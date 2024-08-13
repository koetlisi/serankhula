import React from 'react';
import {Input } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import './style.css.scss'
interface Prop {
    data: string;
    setData: (name: string, value: string) => void;
    name: string;
    icon?: React.ReactNode;
}

export const TextField: React.FC<Prop> = ({ data, setData, name, icon = <EditOutlined className="site-form-item-icon" /> }) => {
    return (
        <Input
            prefix={icon}
            name={name}
            value={data}
            onChange={(e) => setData(name, e.target.value)}
        />
    );
};

