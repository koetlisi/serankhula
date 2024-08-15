import React from "react";
import { Radio } from "antd";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";

interface Prop {
    onChange: (value: string) => any; // Define onChange as a function that accepts a string
    name: string;
}

export const Gender: React.FC<Prop> = ({ onChange, name }) => {
    const dispatch = useDispatch();
    const {userData} = useSelector((state: RootState) => state.login);
    return (
        <div>
            <Radio.Group
                onChange={(e) => dispatch(onChange(e.target.value))} // Properly dispatching the onChange action
                name={name}
                defaultValue={userData.gender}
            >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
            </Radio.Group>
        </div>
    );
};
