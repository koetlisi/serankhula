import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";
import {keys} from "@mui/system";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Add, Cancel} from "@mui/icons-material";
import {SaveAll} from "lucide-react";

export const Education: React.FC<{ resumeInfo: ResumeInfo, setResumeInfo: any }> = ({resumeInfo, setResumeInfo}) => {
    const onChange = (event: any,index: number) => {
        const updatedExperience = [...resumeInfo.education];
        updatedExperience[index] = {
            ...updatedExperience[index],
            [event.target.name]: event.target.value,
        };
        setResumeInfo({
            ...resumeInfo,
            education: updatedExperience,
        });
    };
    const addMoreQualification = () => {
        setResumeInfo({
            ...resumeInfo,
            education: [
                ...resumeInfo.education,
                {
                    id: resumeInfo.education.length + 1, // Generate a new id
                    institutionName: '',
                    startDate: '',
                    endDate: '',
                    qualification: '',
                    major: '',
                    description: '',
                }
            ]
        });
    };
    const removeQualification = (index: number) => {
        const updatedExperience = resumeInfo.education.filter((_, i) => i !== index);
        setResumeInfo({
            ...resumeInfo,
            education: updatedExperience,
        });
    };
    return <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-5">
        <h2 className="font-bold text-lg">Professional Experience</h2>
        <p>Add your job experiences</p>
        <div>
            {resumeInfo.education.map((education, index) => (
                <div key={index} className="relative">
                    <button
                        onClick={() => removeQualification(index)}
                        className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800 focus:outline-none"
                        aria-label="Remove"
                    >
                        <Cancel className="w-5 h-5"/>
                    </button>
                    <div className="mt-4 border p-3 my-5 rounded-lg">
                        <div className="grid grid-cols-2 gap-3  p-3 my-5">
                            <div className="col-span-2">
                                <label>Institution Name</label>
                                <Input value={education.institutionName} defaultValue={education.institutionName}
                                       name="institutionName" onChange={(e) => onChange(e, index)}/>
                            </div>
                            <div>
                                <label>Qualification</label>
                                <Input defaultValue={education.qualification} value={education.qualification} name="qualification"
                                       onChange={(e) => onChange(e, index)}/>
                            </div>
                            <div>
                                <label>Major</label>
                                <Input defaultValue={education.major} value={education.major} name="qualification"
                                       onChange={(e) => onChange(e, index)}/>
                            </div>
                            <div>
                                <label>Start Date</label>
                                <Input value={education.startDate} defaultValue={education.startDate} name="startDate"
                                       onChange={(e) => onChange(e, index)}/>
                            </div>
                            <div>
                                <label>End Date</label>
                                <Input value={education.endDate} defaultValue={education.startDate} name="endDate"
                                       onChange={(e) => onChange(e, index)}/>
                            </div>
                            <div className="col-span-2">
                                <label>Description</label>
                                <Textarea value={education.description} defaultValue={education.description}
                                          name="description" onChange={(e) => onChange(e, index)}/>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-between">
                <Button onClick={addMoreQualification} variant="outline" className="text-primary flex gap-2"><Add/>More
                    Experience</Button>
                <Button className="ui-button gap-3 flex"><SaveAll/>Save</Button>
            </div>
        </div>
    </div>
}