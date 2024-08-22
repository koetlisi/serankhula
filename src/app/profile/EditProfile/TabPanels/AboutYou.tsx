import React, { useState } from 'react';
import { Card, Badge, Checkbox, Divider } from 'antd';
import { useSelector } from 'react-redux';
import {RootState} from "@/app/GlobalRedux/store";
import TextAreaComponent from "@/components/Components/FormThings/TextAreaField";
import {updateInternshipSummary, updateMotivationSummary} from "@/app/GlobalRedux/Features/dummyData/aboutYou";

const AboutYouPage = () => {
    const {motivationalSummary,internshipSummary} = useSelector((state: RootState) => state.aboutYou);
    return (
    <Badge.Ribbon text="About You">
      <Card title="Create Profile" size="small">
        <h1 className="text-2xl font-bold mb-4">Say Something About You</h1>
        
        <div className="row">
            <div className="col col-12">
                <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                    Say something inspiring about :
                </label>
                <TextAreaComponent name="motivationalSummary" setText={updateMotivationSummary}
                                   text={motivationalSummary}/>
            </div>

            <div className="col col-12">
                <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                    Did You get an Internship?(Yes) How did it help, (No) How did this affect you. :
                </label>
                <TextAreaComponent name={motivationalSummary} text={internshipSummary}
                                   setText={updateInternshipSummary}/>
            </div>
        </div>
      </Card>
    </Badge.Ribbon>
    );
};

export default AboutYouPage;

