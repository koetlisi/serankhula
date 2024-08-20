"use client"
import React, {useState} from 'react';
import {Form, Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {changeFilter} from "@/app/GlobalRedux/Features/quali_instition/quali_institution";
import {RootState} from "@/app/GlobalRedux/store";

interface ArrayEmpTypeProps {
    setData: any;
    data: string;
    index: number;
    field: string;
    options?: { value: string; label: string }[];
}

const SelectOption: React.FC<ArrayEmpTypeProps> = ({setData, data, index, field, options}) => {
    const dispatch = useDispatch();
    const [previousEvent, setPreviousEvent] = useState<number | null>(null);
    const {courseData} = useSelector((state: RootState) => state.course);
    const handleFilterChange = (event: string | number) => {
        const eventValue = typeof event === 'number' ? event : parseInt(event, 10);
        if (!isNaN(eventValue)) {
            setPreviousEvent(eventValue);
            // @ts-ignore
            dispatch(changeFilter(eventValue)); // Assuming changeFilter accepts a number
        } else if (previousEvent !== null) {
            // @ts-ignore
            dispatch(changeFilter(previousEvent));
        }
    };

    const handleChange = (event: string) => {
        const newValue = event;
        const key = `${field}-${index}`;
        handleFilterChange(event);
        dispatch(setData({
            [field]: {
                [key]: newValue
            }
        }));
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
