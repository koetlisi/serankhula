import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/GlobalRedux/store";
import { getInstitutions, getQualification } from "@/app/GlobalRedux/Features/quali_instition/quali_institution";
import { Button, Badge, Card } from "antd";
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import SelectOption from "@/components/Components/FormThings/ArrayInput/SelectOption";
import { ArrayTextField } from "@/components/Components/FormThings/ArrayInput/TextInput";
import ArrayIntervalDateTime from "@/components/Components/FormThings/ArrayInput/DateTimeInterval";
import ArrayTextAreaComponent from "@/components/Components/FormThings/ArrayInput/ArrayTextAreaInput";
import {updateCourseData} from "@/app/GlobalRedux/Features/course/course";

export const UserQualification: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { courseData } = useSelector((state: RootState) => state.course);
    const { institutions, qualifications, filter } = useSelector((state: RootState) => state.institution);

    useEffect(() => {
        dispatch(getInstitutions());
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
            qualification: {
                ...courseData.qualification,
                [`qualification-${newIndex}`]: ''
            },
            interval: {
                ...courseData.interval,
                [`interval-${newIndex}`]: { start: '', end: '' }
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

    useEffect(() => {
        if (Object.keys(courseData.name).length === 0) {
            addSection();
        }
    }, [courseData.name]);

    return (
        <Badge.Ribbon text="Personal Info">
            <Card title="Edit User Qualification" size="small">
                <div className="p-4">
                    {Object.keys(courseData.name).map((key, index) => (
                        <div key={index} className="row mb-4 border-b border-gray-300 pb-4">
                            <div className="col col-6 mb-2">
                                <div className="form-inputs">
                                    <label className="label-spacing" htmlFor="institution">Institution Attended</label>
                                    <SelectOption
                                        data={courseData.institution[`institution-${index}`]}
                                        setData={(value) => dispatch(updateCourseData({
                                            institution: { ...courseData.institution, [`institution-${index}`]: value }
                                        }))}
                                        index={index}
                                        field="institution"
                                        options={institutions}
                                    />
                                </div>
                            </div>
                            <div className="col col-6 mb-2">
                                <div className="form-inputs">
                                    <label className="label-spacing" htmlFor="qualification">Qualification Obtained</label>
                                    <SelectOption
                                        data={courseData.qualification[`qualification-${index}`]}
                                        setData={(value) => dispatch(updateCourseData({
                                            qualification: { ...courseData.qualification, [`qualification-${index}`]: value }
                                        }))}
                                        index={index}
                                        field='qualification'
                                        options={qualifications.filter(qualification => qualification.institution_id === filter)}
                                    />
                                </div>
                            </div>
                            <div className="col col-6 mb-2">
                                <div className="form-inputs">
                                    <label className="label-spacing" htmlFor="name">Course Name</label>
                                    <ArrayTextField
                                        data={courseData.name[`name-${index}`]}
                                        setData={(value) => dispatch(updateCourseData({
                                            name: { ...courseData.name, [`name-${index}`]: value }
                                        }))}
                                        index={index}
                                        field="name"
                                        icon={<EditOutlined />}
                                    />
                                </div>
                            </div>
                            <div className="col col-6 mb-2">
                                <div className="form-inputs">
                                    <label className="label-spacing" htmlFor="interval">Start and End Date</label>
                                    <ArrayIntervalDateTime
                                        data={courseData.interval[`interval-${index}`]}
                                        setData={(value) => dispatch(updateCourseData({
                                            interval: { ...courseData.interval, [`interval-${index}`]: value }
                                        }))}
                                        index={index}
                                    />
                                </div>
                            </div>
                            <div className="col col-12 mb-2">
                                <div className="form-inputs">
                                    <label className="label-spacing" htmlFor="description">Course Overview</label>
                                    <ArrayTextAreaComponent
                                        data={courseData.description[`description-${index}`]}
                                        setData={(value) => dispatch(updateCourseData({
                                            description: { ...courseData.description, [`description-${index}`]: value }
                                        }))}
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
                        style={{ width: '100%' }}
                        type="dashed"
                        icon={<PlusOutlined />}
                    >
                        {Object.keys(courseData.name).length === 0 ? "Add Highest Qualification" : 'Add More Qualification'}
                    </Button>
                </div>
            </Card>
        </Badge.Ribbon>
    );
};
