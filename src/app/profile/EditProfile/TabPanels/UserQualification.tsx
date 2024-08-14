"use client"
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {getInstitutions, getQualification} from "@/app/GlobalRedux/Features/quali_instition/quali_institution";
import {DataFrame} from "@/app/profile/EditProfile/Data";
import {Button, Badge, Card} from "antd";
import {EditOutlined, PlusOutlined} from '@ant-design/icons';
import SelectOption from "@/components/Components/FormThings/ArrayInput/SelectOption";
import {ArrayTextField} from "@/components/Components/FormThings/ArrayInput/TextInput";
import ArrayIntervalDateTime from "@/components/Components/FormThings/ArrayInput/DateTimeInterval";
import ArrayTextAreaComponent from "@/components/Components/FormThings/ArrayInput/ArrayTextAreaInput";

export const UserQualification: React.FC = () => {
    const {courseData, setCourseData} = DataFrame();
    const dispatch = useDispatch();
    const {institutions, qualifications, filter} = useSelector((state: RootState) => state.institution);

    useEffect(() => {
        // @ts-ignore
        dispatch(getInstitutions());
        // @ts-ignore
        dispatch(getQualification());
    }, [dispatch]);

    const addSection = () => {
        const newIndex = Object.keys(courseData.name).length; // Get the new index based on length of 'name' keys

        setCourseData((prevData) => ({
            ...prevData,
            name: {
                ...prevData.name,
                [`name-${newIndex}`]: '' // Add a new key-value pair for name
            },
            qualification: {
                ...prevData.qualification,
                [`qualification-${newIndex}`]: '' // Add a new key-value pair for qualification
            },
            interval: {
                ...prevData.interval,
                [`interval-${newIndex}`]: {start: '', end: ''} // Add a new interval object
            },
            institution: {
                ...prevData.institution,
                [`institution-${newIndex}`]: '' // Add a new key-value pair for institution
            },
            description: {
                ...prevData.description,
                [`description-${newIndex}`]: '' // Add a new key-value pair for description
            }
        }));

        console.log(courseData);
    };

    return <Badge.Ribbon text="Personal Info">
        <Card title="Edit User Qualification" size="small">
            <div className="p-4">
                {Object.keys(courseData.name).map((key, index) => (
                    <div key={index} className="row mb-4 border-b border-gray-300 pb-4">
                        <div className="col col-6 mb-2">
                            <div className="form-inputs">
                                <label className="label-spacing" htmlFor="institution">Institution Attended</label>
                                <SelectOption
                                    data={courseData.institution[`institution-${index}`]}
                                    setData={setCourseData}
                                    index={index}
                                    field="institution"
                                    options={institutions}
                                />
                            </div>
                        </div>
                        <div className="col col-6 mb-2">
                            <div className="form-inputs">
                                <label className="label-spacing" htmlFor="institution">Qualification Obtained</label>
                                <SelectOption
                                    data={courseData.qualification[`qualification-${index}`]}
                                    setData={setCourseData}
                                    index={index}
                                    field='qualification'
                                    options={qualifications.filter(qualification => qualification.institution_id === filter)}
                                />
                            </div>
                        </div>
                        <div className="col col-6 mb-2">
                            <div className="form-inputs">
                                <label className="label-spacing" htmlFor="institution">Course Name</label>
                                <ArrayTextField
                                    data={courseData.name[`name-${index}`]}
                                    setData={setCourseData}
                                    index={index}
                                    field="name"
                                    icon=<EditOutlined/>
                                />
                            </div>
                        </div>
                        <div className="col col-6 mb-2">
                            <div className="form-inputs">
                                <label className="label-spacing" htmlFor="institution">Start and End Date</label>
                                <ArrayIntervalDateTime
                                    data={courseData.interval[`interval-${index}`]}
                                    setData={setCourseData}
                                    index={index}
                                />
                            </div>
                        </div>
                        <div className="col col-12 mb-2">
                            <div className="form-inputs">
                                <label className="label-spacing" htmlFor="institution">Start and End Date</label>
                                <ArrayTextAreaComponent
                                    data={courseData.description[`description-${index}`]}
                                    setData={setCourseData}
                                    name={`done-course-description-${index}`}
                                    index={index}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <Button
                    onClick={addSection}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{width: '100%'}}
                    type="dashed"
                    icon={<PlusOutlined/>}
                >
                    {Object.keys(courseData.name).length === 0 ? "Add Highest Qualification" : 'Add More Qualification'}
                </Button>
            </div>
        </Card>
    </Badge.Ribbon>
}