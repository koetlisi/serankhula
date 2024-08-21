import { useState } from 'react';
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
            <TextAreaComponent name="motivationalSummary" setText={updateMotivationSummary} text={motivationalSummary} />
          </div>

          <div className="col col-12">
            <TextAreaComponent name={motivationalSummary} text={internshipSummary} setText={updateInternshipSummary} />
          </div>
        </div>
      </Card>
    </Badge.Ribbon>
  );
};

export default AboutYouPage;

