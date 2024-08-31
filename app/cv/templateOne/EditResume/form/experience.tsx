import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Add, Cancel, Delete} from "@mui/icons-material";
import { SaveAll } from "lucide-react";
import {ResumeInfo} from "@/app/lib/types/templateOneInterface";
import {RichTextEditor} from "@/app/components/widgets/richTextEditor";
export const Experience: React.FC<{ resumeInfo: ResumeInfo, setResumeInfo: any }> = ({ resumeInfo, setResumeInfo }) => {
    const onChange = (index: number, event: any) => {
        const updatedExperience = [...resumeInfo.experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            [event.target.name]: event.target.value,
        };
        setResumeInfo({
            ...resumeInfo,
            experience: updatedExperience,
        });
    };

    const addMoreExperience = () => {
        setResumeInfo({
            ...resumeInfo,
            experience: [
                ...resumeInfo.experience,
                {
                    id: resumeInfo.experience.length + 1, // Generate a new id
                    title: '',
                    companyName: '',
                    country: '',
                    address: '',
                    startDate: '',
                    endDate: '',
                    currentlyWorking: false, // Add default value if needed
                    workSummery: '',
                }
            ]
        });
    };

    const removeExperience = (index: number) => {
        const updatedExperience = resumeInfo.experience.filter((_, i) => i !== index);
        setResumeInfo({
            ...resumeInfo,
            experience: updatedExperience,
        });
    };

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-5">
            <h2 className="font-bold text-lg">Professional Experience</h2>
            <p>Add your job experiences</p>
            <div>
                {resumeInfo.experience.map((item, index) => (
                    <div key={index} className="relative">
                        <button
                            onClick={() => removeExperience(index)}
                            className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800 focus:outline-none"
                            aria-label="Remove"
                        >
                            <Cancel className="w-5 h-5" />
                        </button>
                        <div className="mt-4 border p-3 my-5 rounded-lg">
                            <div className="grid grid-cols-2 gap-3  p-3 my-5 rounded-lg">
                                <div>
                                    <label>Position Title</label>
                                    <Input name='title' defaultValue={item.title}
                                           onChange={(event) => onChange(index, event)}/>
                                </div>
                                <div>
                                    <label>Company Name</label>
                                    <Input name='companyName' defaultValue={item.companyName}
                                           onChange={(event) => onChange(index, event)}/>
                                </div>
                                <div>
                                    <label>Country</label>
                                    <Input name='country' defaultValue={item.country}
                                           onChange={(event) => onChange(index, event)}/>
                                </div>
                                <div>
                                    <label>Address</label>
                                    <Input name='address' defaultValue={item.address}
                                           onChange={(event) => onChange(index, event)}/>
                                </div>
                                <div>
                                    <label>Start Date</label>
                                    <Input type="date" name='startDate' value={item.startDate} defaultValue={item.startDate}
                                           onChange={(event) => onChange(index, event)}/>
                                </div>
                                <div>
                                    <label>End Date</label>
                                    <Input type="date" name='endDate' defaultValue={item.endDate}
                                           onChange={(event) => onChange(index, event)}/>
                                </div>
                                <div className="col-span-2">
                                    <RichTextEditor
                                        value={resumeInfo.experience[index].workSummery}
                                        onChange={(newValue) => {
                                            const updatedExperience = [...resumeInfo.experience];
                                            updatedExperience[index].workSummery = newValue;
                                            setResumeInfo({
                                                ...resumeInfo,
                                                experience: updatedExperience,
                                            });
                                        }}
                                     resumeInfo={resumeInfo} setResumeInfo={setResumeInfo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between">
                    <Button onClick={addMoreExperience} variant="outline" className="text-primary flex gap-2"><Add/>More
                        Experience</Button>
                    <Button className="ui-button gap-3 flex"><SaveAll/>Save</Button>
                </div>
            </div>
        </div>
    );
}
