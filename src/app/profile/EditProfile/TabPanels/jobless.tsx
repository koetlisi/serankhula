import React, { useState } from 'react';
import { Card, Badge, Checkbox, Divider } from 'antd';
import TextAreaComponent from "@/components/Components/FormThings/TextAreaField";
import jobless, {
    updateJoblessDescription,
    updateSinceWhen,
    updateTillWhen
} from "@/GlobalRedux/Features/jobless/jobless";
import {useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";
import IntervalDateTime from "@/components/Components/FormThings/IntervalDateTime";
import Employed from "@/app/profile/EditProfile/TabPanels/employed";
interface Props{
    data:any,
    setData:any
}
const Jobless: React.FC = () => {
    const {description} = useSelector((state: RootState) => state.jobless);
    const profileSteps = useSelector((state: RootState) => state.pages.profileSteps ?? []);
    const hasJobless = profileSteps.includes('Jobless');
    const hasWork = profileSteps.includes('Working');
    const hadWork = profileSteps.includes('Ex-employed');
    const studying = profileSteps.includes('Postgraduate');
    return (
        <Badge.Ribbon text="Jobless">
            <Card title="Jobless Details" size="small" className="">
                <div className="row">
                    <div className="col col-12 p-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                            Since When have you benn jobless :
                        </label>
                        <IntervalDateTime
                            name="sincewhen"
                           takeFirst={updateSinceWhen}
                            takeLast={updateTillWhen}
                        />
                    </div>

                    <div className="col col-12">
                        <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                            What the possible reasons for being jobless :
                        </label>
                        <TextAreaComponent
                            text={description}
                            setText={updateJoblessDescription}
                            name="description"
                        />
                    </div>
                </div>
            </Card>
            {hasJobless&&hadWork&&<Employed/>}
        </Badge.Ribbon>
    );
};

export default Jobless;
