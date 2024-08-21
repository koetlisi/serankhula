import {Form, Input} from 'antd';

const {TextArea} = Input;
import React, {useState} from 'react';
import {useDispatch} from "react-redux";

function TextAreaComponent({text, setText, name}) {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const value_ = event.target.value;
        dispatch(setText(value_))
    };

    return (
        <div className="pb-4 pr-4 pl-4">
            <TextArea
                name={name}
                id="textarea"
                value={text}
                onChange={handleChange}
                rows="4"
                cols="50"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                style={{width: '100%'}} // Ensures full width
            />
            <p className="mt-2 text-gray-600 italic">You have typed: {text.length} characters</p>
        </div>
    );
}

export default TextAreaComponent;
