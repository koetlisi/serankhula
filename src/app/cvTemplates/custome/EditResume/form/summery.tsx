import React from "react";
import {ResumeInfo} from "@/app/cvTemplates/custome/EditResume/dummyData";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Brain} from "lucide-react";

export const Summery: React.FC<{ resumeInfo: ResumeInfo, setResumeInfo: any }> = ({resumeInfo, setResumeInfo}) => {
    const onChange = (e:any)=>{
        setResumeInfo({
            ...resumeInfo, summery:e.target.value
        })
    }
    return <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-5">
        <h2 className="font-bold text-lg">Summery</h2>
        <p className="">Add Summery For Your Job Title</p>
        <form className="mt-7">
            <div className="flex justify-between items-end">
                <label>Add Summery</label>
                <Button type="button" variant="outline" className="border-primary text-primary flex gap-3" size="sm"><Brain className="h-4 w-4"/>Generate Form AI</Button>
            </div>
            <Textarea onChange={onChange} defaultValue={resumeInfo.summery} className="mt-4 h-48"/>
            <div className="flex justify-end mt-3">
                <Button>Save</Button>
            </div>
        </form>
    </div>
}