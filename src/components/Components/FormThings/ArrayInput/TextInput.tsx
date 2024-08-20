// ArrayTextField.jsx
import React from 'react';
import { Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {useDispatch} from "react-redux";
interface Props {
    setData: any;
    data: string;
    index: number;
    field: string;
    icon:any
}
export const ArrayTextField: React.FC<Props> = ({data, setData,index, field, icon = <EditOutlined className="site-form-item-icon" />}) => {
    const dispatch = useDispatch();
    const handleInputChange = (e:any) => {
        const newValue = e.target.value;
        const key = `${field}-${index}`; // Construct key using field and index

        dispatch(setData({
            [field]: {
                [key]: newValue
            }
        }));
    };

    return <Input
        prefix={icon}
        value={data}
        onChange={handleInputChange}
    />
};
