import { Form, Input } from 'antd';
const { TextArea } = Input;
import React, { useState } from 'react';

function TextAreaComponent() {
  /*const handleChange = (event) => {
    const value = event.target.value;
    // Ensure data[name] is the right path to update.
    setData(name, value);
  };*/

  return (
      <div className="p-4">
          <TextArea
              id="textarea"
              value=""
              onChange={() => {
              }}
              rows="4"
              cols="50"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              style={{width: '100%'}} // Ensures full width
          />
          <p className="mt-2 text-gray-600 italic">You have typed: {1} characters</p>
      </div>
  );
}

export default TextAreaComponent;
