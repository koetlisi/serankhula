import React, {useState} from 'react';
import {Card, Badge, Checkbox, Divider} from 'antd';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {RootState} from "@/app/GlobalRedux/store";
import TextAreaComponent from "@/components/Components/FormThings/TextAreaField";
import {updateProfileStep} from "@/app/GlobalRedux/Features/pageControl/pageControlSlice";

const CheckboxGroup = Checkbox.Group;
export const  EmploymentStatus = () =>{
    const profileSteps = useSelector((state: RootState) => state.pages.profileSteps??[]);
    const dispatch = useDispatch();


    const [checkedList, setCheckedList] = useState(profileSteps);
    const [old, setOld] = useState('Jobless');

    const onChange = (list:any) => {
        const hasUnemployed = list.includes('Jobless');
        const hasCurrentlyEmployed = list.includes('Working');

        if (hasUnemployed && hasCurrentlyEmployed) {
            if(old ==='Jobless') {
                // @ts-ignore
                list = list.filter(item => item !== 'Jobless');
                setOld('Working')
            }else{
                // @ts-ignore
                list = list.filter(item => item !== 'Working');
                setOld('Jobless')
            }
        }
        setCheckedList(list);
        // @ts-ignore
        dispatch(updateProfileStep(list));
    };

    // Checkbox options for employment status
    const plainOptions = [
        { label: 'Jobless', value: 'Jobless', disabled: profileSteps.length === 1 && profileSteps[0] === 'JobLess' },
        { label: 'Ex-employed', value: 'Ex-employed', disabled: profileSteps.length === 1 && profileSteps[0] === 'Ex-employed' },
        { label: 'Working', value: 'Working', disabled: profileSteps.length === 1 && profileSteps[0] === 'Working' },
        { label: 'Postgraduate', value: 'Postgraduate', disabled: profileSteps.length === 1 && profileSteps[0] === 'Postgraduate' },
    ];
    return <Badge.Ribbon
        text={<CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />}
    >
        <Card style={{ width: "100%" }} title="Select your current status" size="small">
            <h1 className="text-2xl font-bold mb-4">Lesotho Unemployment Overview</h1>
            <div className="row">
                <div className="col col-12">
                    <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                        Reasons for unemployment in Lesotho :
                    </label>
                    <TextAreaComponent/>

                </div>
                <div className="col col-12">
                    <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                        What are the constraints of finding some job:
                    </label>
                    <TextAreaComponent/>
                </div>
            </div>
        </Card>
    </Badge.Ribbon>
}