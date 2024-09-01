import React from "react";
import { Input } from "@/components/ui/input";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {Button} from "@/components/ui/button";
import {Add, Cancel} from "@mui/icons-material";
import {SaveAll} from "lucide-react";
import {ResumeInfo} from "@/app/lib/types/templateTwoInterface";

export const Skill: React.FC<{ resumeInfo: ResumeInfo, setResumeInfo: (info: ResumeInfo) => void }> = ({ resumeInfo, setResumeInfo }) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | number, index: number) => {
        const updatedSkills = [...resumeInfo.skills];
        if (typeof e === 'number') {
            // Update the rating
            updatedSkills[index].rating = e*10;
        } else {
            // Update the skill name
            updatedSkills[index].name = e.target.value;
        }
        setResumeInfo({
            ...resumeInfo,
            skills: updatedSkills,
        });
    };
    const addMoreSkill = () => {
        setResumeInfo({
            ...resumeInfo,
            skills: [
                ...resumeInfo.skills,
                {
                    id: resumeInfo.skills.length + 1,
                    name:'',
                    rating:0
                }
            ]
        });
    };

    const removeSkill = (index: number) => {
        const updatedExperience = resumeInfo.skills.filter((_, i) => i !== index);
        setResumeInfo({
            ...resumeInfo,
            skills: updatedExperience,
        });
    };

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-5">
            <h2 className="font-bold text-lg">Skills</h2>
            <p>Add your Skills</p>
            <div>
                {resumeInfo.skills.map((skills, index) => (
                    <div key={index} className='relative'>
                        <button
                            onClick={() => removeSkill(index)}
                            className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800 focus:outline-none"
                            aria-label="Remove"
                        >
                            <Cancel className="w-5 h-5"/>
                        </button>
                        <div className="mt-4 border p-3 my-5 rounded-lg">
                            <div className="my-3 p-5 rounded-lg flex justify-between">
                                <div>
                                    <label className="text-xs">Name</label>
                                    <Input
                                        value={skills.name}
                                        onInput={(e) => onChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                                    />
                                </div>
                                <Rating
                                    className="w-full"
                                    items={10}
                                    style={{maxWidth: 220}}
                                    value={(skills.rating) / 10}
                                    onChange={(rating: any) => onChange(rating, index)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between">
                    <Button onClick={addMoreSkill} variant="outline" className="text-primary flex gap-2"><Add/>More
                        Skill</Button>
                    <Button className="ui-button gap-3 flex"><SaveAll/>Save</Button>
                </div>
            </div>
        </div>
    );
};
