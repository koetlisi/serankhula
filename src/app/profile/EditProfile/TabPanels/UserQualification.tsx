"use client"
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";
import {getInstitutions, getQualification} from "@/GlobalRedux/Features/quali_instition/quali_institution";
import {DataFrame} from "@/app/profile/EditProfile/Data";
import {Button, Badge, Card} from "antd";
import {EditOutlined, PlusOutlined} from '@ant-design/icons';
import SelectOption from "@/components/Components/FormThings/ArrayInput/SelectOption";
import {ArrayTextField} from "@/components/Components/FormThings/ArrayInput/TextInput";
import ArrayIntervalDateTime from "@/components/Components/FormThings/ArrayInput/DateTimeInterval";
import ArrayTextAreaComponent from "@/components/Components/FormThings/ArrayInput/ArrayTextAreaInput";
import {
    updateCourseData,
    updateCourseName, updateDateInterval, updateDescription,
    updateInstitution,
    updateQualification
} from "@/GlobalRedux/Features/course/course";

export const UserQualification: React.FC = () => {
    const dispatch = useDispatch();
    const {institutions, qualifications, filter} = useSelector((state: RootState) => state.institution);
    const {courseData} = useSelector((state: RootState) => state.course);

    useEffect(() => {
        // @ts-ignore
        dispatch(getInstitutions());
        // @ts-ignore
        dispatch(getQualification());
    }, [dispatch]);

    const addSection = () => {
        const newIndex = Object.keys(courseData.name).length;
        const newCourseData = {
            ...courseData,
            name: {
                ...courseData.name,
                [`name-${newIndex}`]: ''
            },
            id:{
                ...courseData.id,
                [`id-${newIndex}`]:newIndex
            },
            qualification: {
                ...courseData.qualification,
                [`qualification-${newIndex}`]: ''
            },
            interval: {
                ...courseData.interval,
                [`interval-${newIndex}`]: {start: '', end: ''}
            },
            institution: {
                ...courseData.institution,
                [`institution-${newIndex}`]: ''
            },
            description: {
                ...courseData.description,
                [`description-${newIndex}`]: ''
            }
        };

        dispatch(updateCourseData(newCourseData));
    };

    const autoClick = () =>{
        const newIndex = Object.keys(courseData.name).length;
        if(newIndex === 0){
            addSection()
        }
    }

    autoClick();

    return <Badge.Ribbon text="Personal Info">
        <Card title="Edit User Qualification" size="small">
            <div className="p-4">
                {Object.keys(courseData.name).map((key, index) => (
                    <div key={courseData.id[`id-${index}`]} className="row mb-4 border-b border-gray-300 pb-4">
                        <div className="col col-6 mb-2">
                            <div className="form-inputs">
                                <label className="label-spacing" htmlFor="institution">Institution Attended</label>
                                <SelectOption
                                    data={courseData.institution[`institution-${index}`]}
                                    setData={updateInstitution}
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
                                    setData={updateQualification}
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
                                    setData={updateCourseName}
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
                                    setData={updateDateInterval}
                                    index={index}
                                />
                            </div>
                        </div>
                        <div className="col col-12 mb-2">
                            <div className="form-inputs">
                                <label className="label-spacing" htmlFor="institution">Qualification Overview</label>
                                <ArrayTextAreaComponent
                                    data={courseData.description[`description-${index}`]}
                                    setData={updateDescription}
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