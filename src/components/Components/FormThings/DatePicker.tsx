import React from 'react';
import { DatePicker } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {updateUserDOB} from "@/GlobalRedux/Features/auth/login";
import {RootState} from "@/GlobalRedux/store";
import dayjs, { Dayjs } from 'dayjs';
const FormDatePicker: React.FC = ()=> {
    const dispatch = useDispatch()
    const {userData} = useSelector((state: RootState) => state.login);
    const initialDate = dayjs(userData.dob, 'YYYY-MM-DD');
   return  <DatePicker
       style={{ width: "100%" }}
       format="YYYY-MM-DD"
       value={initialDate}
       onChange={(date) => {
           if (date && dayjs.isDayjs(date)) {
               const formattedDate = date.format('YYYY-MM-DD'); // Format as 'YYYY-MM-DD'
               console.log(formattedDate); // Example: "2024-08-29"
                dispatch(updateUserDOB(formattedDate))  // Example output: "2024-07-02T22:00:00.000Z"
            }
        }}
        renderExtraFooter={() => 'extra footer'}
        showTime
    />
}

export default FormDatePicker;
