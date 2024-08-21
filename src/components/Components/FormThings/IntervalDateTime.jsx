import React, {useState} from 'react';
import {DatePicker, Space, Form} from 'antd';
import moment from 'moment';
import {useDispatch} from "react-redux";

const {RangePicker} = DatePicker;

const IntervalDateTime = ({takeFirst,takeLast, name}) => {
    const dispatch = useDispatch()
    const [data, setTime] = useState();
    const handleChange = (dates, dateStrings) => {
        if (dates) {
            const startDate = dates[0].format('YYYY-MM-DD HH:mm:ss');
            const endDate = dates[1].format('YYYY-MM-DD HH:mm:ss');
            dispatch(takeFirst(startDate))
            dispatch(takeLast(endDate))
            setTime(dates)
            console.log('Start Date:', startDate);
            console.log('End Date:', endDate);
        }
    };

    return (
        <div className="w-full p-1">
            <RangePicker
                style={{width: '100%'}}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                onChange={handleChange}
            />
        </div>
    );
};

export default IntervalDateTime;
