// ArrayIntervalDateTime.jsx
import React from 'react';
import { DatePicker, Space, Form } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const ArrayIntervalDateTime = ({data, setData, index }) => {
    const handleChange = (dates, dateStrings) => {
        const key = `interval-${index}`;

        if (dates) {
            const startDate = dates[0].format('YYYY-MM-DD HH:mm:ss');
            const endDate = dates[1].format('YYYY-MM-DD HH:mm:ss');

            setData((prevData) => ({
                ...prevData,
                interval: {
                    ...prevData.interval,
                    [key]: { start: startDate, end: endDate },
                },
            }));

            console.log('Start Date:', startDate);
            console.log('End Date:', endDate);
        } else {
            console.log('No dates selected');
        }
    };

    return (
        <div className="w-full p-1">
            <Space direction="vertical" size={12} className="flex w-full">
                <RangePicker
                    style={{ width: '100%' }}
                    showTime
                    value={
                        data && data.start && data.end
                            ? [moment(data.start), moment(data.end)]
                            : []
                    }
                    onChange={handleChange}
                />
            </Space>
        </div>
    );
};

export default ArrayIntervalDateTime;
