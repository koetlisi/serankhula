import {Form} from 'antd';
import React from 'react';

function ArrayTextAreaComponent({name, data, setData, index}) {
    // Handle change in text area value
    const handleChange = (event) => {
        const newValue = event.target.value;
        const key = `description-${index}`;

        // Update the specific key in the course.description object
        setData((prevData) => ({
            ...prevData,
            description: {
                ...prevData.description,
                [key]: newValue,
            },
        }));
    };

    return (
        <div className="pb-4 pt-4">
              <textarea
                  id={name}
                  value={data}
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  style={{width:"100%"}}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Type your message here..."
              />
            <p className="mt-2 text-gray-600">You have typed: {data.length} characters</p>
        </div>
    );
}

export default ArrayTextAreaComponent;
