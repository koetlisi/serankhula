import React, {useState} from 'react';
import {Badge, Button, Card} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@/GlobalRedux/store";
import {
    updateDumSkill,
    updateSkillDescription,
    updateSkillName,
    updateSkillRatting
} from "@/GlobalRedux/Features/dummyData/dumSkill";
import {EditOutlined, PlusOutlined} from "@ant-design/icons";
import {ArrayTextField} from "@/components/Components/FormThings/ArrayInput/TextInput";
import {Sliders} from "@/components/Components/FormThings/ArrayInput/sliders";
import ArrayTextAreaComponent from "@/components/Components/FormThings/ArrayInput/ArrayTextAreaInput";

const SkillForm: React.FC = () => {
    const {skillData} = useSelector((state: RootState) => state.dumSkills);
    const dispatch = useDispatch();

    const addSection = () => {
        const newIndex = Object.keys(skillData.name).length;
        const addNewSkill = {
            ...skillData,
            name: {
                ...skillData.name,
                [`name-${newIndex}`]: ""
            },
            id: {
                ...skillData.id,
                [`id-${newIndex}`]: newIndex
            },
            description: {
                ...skillData.description,
                [`description-${newIndex}`]: ""
            },
            ratting: {
                ...skillData.ratting,
                [`ratting-${newIndex}`]: ""
            }
        };
        console.log(JSON.stringify(skillData))
        dispatch(updateDumSkill(addNewSkill));
    };

    const autoClick = () => {
        const newIndex = Object.keys(skillData.name).length;
        if (newIndex === 0) {
            addSection();
        }
    };

    autoClick();

    return (
        <Badge.Ribbon text="Personal Skills" >
            <Card title="Add Your Skills" size="small" style={{ width: "100%" }}>
                <h1 className="text-2xl font-bold mb-4">Say Something About You</h1>
                <div className="p-4">
                    {Object.keys(skillData.name).map((key, index) => (
                        <div key={skillData.id[`id-${index}`]} className="row mb-4 border-b border-gray-300 pb-4" style={{ width: "100%" }}>
                            <div className="col col-6 mb-2" style={{ width: "100%" }}>
                                <div className="form-inputs" style={{ width: "100%" }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                        Skill Name :
                                    </label>
                                    <ArrayTextField
                                        data={skillData.name[`name-${index}`]}
                                        setData={updateSkillName}
                                        index={index}
                                        field="name"
                                        icon={<EditOutlined />}
                                    />
                                </div>
                            </div>
                            <div className="col col-6 mb-2" style={{ width: "100%" }}>
                                <div className="form-inputs" style={{ width: "100%" }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                        Rate your skill :
                                    </label>
                                    <Sliders index={index} field="ratting" data={skillData} setData={updateSkillRatting} />
                                </div>
                            </div>
                            <div className="col col-12 mb-2" style={{ width: "100%" }}>
                                <div className="form-inputs" style={{ width: "100%" }}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2 pl-4 pr-4">
                                        Summarise your skill :
                                    </label>
                                    <ArrayTextAreaComponent
                                        data={skillData.description[`description-${index}`]}
                                        setData={updateSkillDescription}
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
                        style={{ width: "100%" }}
                        type="dashed"
                        icon={<PlusOutlined />}
                    >
                        Add More Skills
                    </Button>
                </div>
            </Card>
        </Badge.Ribbon>
    );
};

export default SkillForm;
