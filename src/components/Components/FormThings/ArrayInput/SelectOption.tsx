"use client"
import React, {useState} from 'react';
import {Form, Select} from 'antd';
import {useDispatch} from 'react-redux';
import {changeFilter} from "@/app/GlobalRedux/Features/quali_instition/quali_institution";

interface ArrayEmpTypeProps {
    setData: React.Dispatch<React.SetStateAction<any>>;
    data: string;
    index: number;
    field: string;
    options?: { value: string; label: string }[];
}

const SelectOption: React.FC<ArrayEmpTypeProps> = ({setData, data, index, field, options}) => {
    const dispatch = useDispatch();
    const [previousEvent, setPreviousEvent] = useState<number | null>(null);

    const handleFilterChange = (event: string | number) => {
        // Check if event is a number and not NaN
        const eventValue = parseInt(event as string, 10);
        if (!isNaN(eventValue)) {
            setPreviousEvent(eventValue); // Update previousEvent to the valid number
            // @ts-ignore
            dispatch(changeFilter(eventValue));
        } else {
            // Use previousEvent if the event is not a valid number
            if (previousEvent !== null) {
                // @ts-ignore
                dispatch(changeFilter(previousEvent));
            }
        }
    };

    const handleChange = (event: string) => {
        const newValue = event;
        const key = `${field}-${index}`;
        handleFilterChange(event);
        // Update the specific key in the course.description object
        setData((prevData: any) => ({
            ...prevData,
            [field]: {
                ...prevData[field],
                [key]: newValue,
            },
        }));
        console.log(event);
    };

    return (
        <Select
            value={data}
            showSearch
            onChange={handleChange}
            style={{width: '100%'}}
            placeholder="Search to Select"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={
                options ?? [
                    {value: 'full-time', label: 'Full Time'},
                    {value: 'part-time', label: 'Part Time'},
                    {value: 'contract', label: 'Contract'},
                ]
            }
        />
    );
};

export default SelectOption;
