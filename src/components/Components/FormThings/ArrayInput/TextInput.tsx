// ArrayTextField.jsx
import React from 'react';
import { Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
interface Props {
    setData: React.Dispatch<React.SetStateAction<any>>;
    data: string;
    index: number;
    field: string;
    icon:any
}
export const ArrayTextField: React.FC<Props> = ({data, setData,index, field, icon = <EditOutlined className="site-form-item-icon" />}) => {
    const handleInputChange = (e:any) => {
        const newValue = e.target.value;
        const key = `${field}-${index}`; // Construct key using field and index

        setData((prevData:any) => ({
            ...prevData,
            [field]: { ...prevData[field], [key]: newValue },
        }));
    };

    return <Input
        prefix={icon}
        value={data}
        onChange={handleInputChange}
    />
};
