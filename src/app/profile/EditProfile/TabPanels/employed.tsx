"use client"
import React, { useState } from 'react';
import {PlusOutlined, EditOutlined} from '@ant-design/icons';
import {Button, Card, Badge, Checkbox, Radio, Divider} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {
    updateDumWorkData, updateDumWorkDescription, updateDumWorkEmpType, updateDumWorkInterval,
    updateDumWorkPlace, updateDumWorkRatting, updateDumWorkTerm,
    updateDumWorkTitle, updateDumWorkWorkStatus
} from "@/app/GlobalRedux/Features/dummyData/dummyWork";
import {ArrayTextField} from "@/components/Components/FormThings/ArrayInput/TextInput";
import SelectOption from "@/components/Components/FormThings/ArrayInput/SelectOption";
import ArrayIntervalDateTime from "@/components/Components/FormThings/ArrayInput/DateTimeInterval";
import ArrayTextAreaComponent from "@/components/Components/FormThings/ArrayInput/ArrayTextAreaInput";
import {Sliders} from "@/components/Components/FormThings/ArrayInput/sliders";
import {prepareDataForSubmission} from "@/function/prepareWorkData";
const Employed = () => {
    const profileSteps = useSelector((state: RootState) => state.pages.profileSteps ?? []);

    const hasJobless = profileSteps.includes('Jobless');
    const hasWork = profileSteps.includes('Working');
    const hadWork = profileSteps.includes('Ex-employed');
    const studying = profileSteps.includes('Postgraduate');

    const options = [
        {label:'Hired', value:'hired'},
        {label:'Self-Employed', value:'self-employed'}
    ];
    const options2 = [
        {label:'Current Job', value:'current-job'},
        {label:'Former Job', value:'former-job'}
    ];
    const [tepIndex, setIndex] = useState(0)
    const {WorkData} = useSelector((state: RootState) => state.dumWork);
    const [checkedList, setCheckedList] = useState<string>(WorkData.emp_type[`emp_type-${tepIndex}`]);
    const dispatch = useDispatch()

    const onChange = (e: any, setData:any) => {
        const value = e.target.value;
        const key = `emp_typ-${tepIndex}`
        setCheckedList(value);
        dispatch(setData({
            emp_type: {
                [key]: value
            }
        }));
    };

    const onChange2 = (e: any, setData:any) => {
        const value = e.target.value;
        const key = `work_status-${tepIndex}`
        setCheckedList(value);
        dispatch(setData({
            work_status: {
                [key]: value
            }
        }));
    };
    // Function to add a new section
    const addSection = () => {
        const newIndex = Object.keys(WorkData.place).length;
        setIndex(newIndex)
        const addWork = {
            ...WorkData,
            place:{
                ...WorkData.place,
                [`place-${newIndex}`]:''
            },
            title:{
                ...WorkData.title,
                [`title-${newIndex}`]:''
            },
            term:{
                ...WorkData.term,
                [`term-${newIndex}`]:''
            },
            ratting:{
                ...WorkData.ratting,
                [`ratting-${newIndex}`]:''
            },
            id:{
                ...WorkData.id,
                [`id-${newIndex}`]:newIndex
            },
            emp_type:{
                ...WorkData.emp_type,
                [`emp_type-${newIndex}`]:checkedList
            },
            interval: {
                ...WorkData.interval,
                [`interval-${newIndex}`]: {start: '', end: ''}
            },
            description: {
                ...WorkData.description,
                [`description-${newIndex}`]: ''
            }

        }
        console.log(JSON.stringify(prepareDataForSubmission(WorkData)))
        dispatch(updateDumWorkData(addWork))
    };
    const autoClick = () =>{
        const newIndex = Object.keys(WorkData.id).length;
        if(newIndex === 0){
            addSection()
        }
    }

    //updateDumWorkInterval,updateDumWorkDescription,updateDumWorkratting,updateDumWorkPlace,updateDumWorkTerm,updateDumWorkTitle,updateDumWorkId

    autoClick();

    return (
        <Badge.Ribbon text="Employment Info">
            <Card title="Create Profile" size="small">
                <h1 className="text-2xl font-bold mb-4">{hadWork&&!hasWork?"Former Work Info":'Work Information'}</h1>
                {Object.keys(WorkData.place).map((key, index) => (
                    <div key={index} className="row mb-4 border-gray-300">
                        <div className="col col-6 mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                Place of Work :
                            </label>
                            <ArrayTextField
                                data={WorkData.place[`place-${index}`]}
                                setData={updateDumWorkPlace}
                                index={index}
                                field='place'
                                icon={<EditOutlined/>}
                            />
                        </div>

                        <div className="col col-6">
                            <div className="row">
                                <div className="col col-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                        Working Status :
                                    </label>
                                    <Radio.Group
                                        disabled={!hadWork || !hasWork}
                                        style={{width: "100%"}}
                                        options={options2}
                                        value={hadWork && hasWork? checkedList : hasWork?'current-job':'former-job'}
                                        onChange={(e) => onChange2(e, updateDumWorkWorkStatus)}
                                        optionType="button"
                                        buttonStyle="solid"
                                    />
                                </div>
                                <div className="col col-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                        Employment Type :
                                    </label>
                                    <Radio.Group
                                        style={{width: "100%"}}
                                        options={options}
                                        value={checkedList}
                                        onChange={(e) => onChange(e, updateDumWorkEmpType)}
                                        optionType="button"
                                        buttonStyle="solid"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col col-6 mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                Work Title:
                            </label>
                            <ArrayTextField
                                data={WorkData.place[`title-${index}`]}
                                setData={updateDumWorkTitle}
                                index={index}
                                field='title'
                                icon={<EditOutlined/>}
                            />
                        </div>

                        <div className="col col-6 mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                Work Agreement:
                            </label>
                            <SelectOption
                                data={WorkData.term[`term-${index}`]}
                                setData={updateDumWorkTerm}
                                index={index}
                                field='term'
                            />
                        </div>

                        <div className="col col-12 mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                Work Satisfaction:
                            </label>
                            <Sliders index={index} field="ratting" data={WorkData} setData={updateDumWorkRatting}/>
                        </div>


                        <div className="col col-12">
                            <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                Work Description:
                            </label>
                            <ArrayIntervalDateTime
                                data={WorkData.interval[`interval-${index}`]}
                                setData={updateDumWorkInterval}
                                index={index}
                            />
                        </div>

                        <div className="col col-12">
                            <ArrayTextAreaComponent
                                data={WorkData.description[`description-${index}`]}
                                setData={updateDumWorkDescription}
                                name={`done-description-${index}`}
                                index={index}
                            />
                        </div>
                        <Divider/>
                    </div>
                ))}

                <Button
                    onClick={addSection}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{ width: "100%" }}
                    type="dashed"
                    icon={<PlusOutlined />}
                >
                    Add More Work
                </Button>
            </Card>
        </Badge.Ribbon>
    );
}

export default Employed;
