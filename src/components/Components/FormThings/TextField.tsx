"use client"
import React from 'react';
import {Input } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import './style.css.scss'
import {useDispatch} from "react-redux";
interface Prop {
    data: string;
    onChange: any;
    name: string;
    icon?: React.ReactNode;
}

export const TextField: React.FC<Prop> = ({ data, onChange, name, icon = <EditOutlined className="site-form-item-icon" /> }) => {
    const dispatch = useDispatch()
    return (
        <Input
            prefix={icon}
            name={name}
            value={data}
            onChange={(e)=>dispatch(onChange(e.target.value))}
        />
    );
};

