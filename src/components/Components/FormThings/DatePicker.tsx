import React from 'react';
import { DatePicker} from 'antd';
import moment, { Moment } from 'moment';

interface FormDatePickerProps {
    label?: string;
    status?: 'success' | 'warning' | 'error' | 'validating';
    name: string;
    message?: string;
    data: string | null;
    setData: (name: string, value: string) => void;
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({name, data, setData}) => {
    // Ensure the data is either a moment object or null
    const dateValue: Moment | null = data ? moment(data, 'YYYY-MM-DD') : null;

    // Handle the date change
    const handleDateChange = (date: Moment | null, dateString: string) => {
        if (date && date.isValid()) {
            setData(name, dateString);
        } else {
            setData(name, '');
        }
    };

    // @ts-ignore
    // @ts-ignore
    return <DatePicker
        value={dateValue}
        //onChange={handleDateChange}
        style={{ width: "100%" }}
        format="YYYY-MM-DD"
    />
};
