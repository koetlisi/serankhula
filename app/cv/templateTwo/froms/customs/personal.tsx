import React from "react";
import {ResumeInfo} from "@/app/lib/types/templateTwoInterface";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import ProfileUpload from "@/app/components/profileUpload";

export const Personal: React.FC<{ resumeInfo: ResumeInfo, setResumeInfo: any }> = ({resumeInfo, setResumeInfo}) => {
    const inputOnChange = (e: any) => {
        const {name, value} = e.target;
        setResumeInfo({
            ...resumeInfo,
            [name]: value
        })
    };

    return <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-5">
        <h2 className="font-bold text-lg">Personal Details</h2>
        <p className="">Get Started with the basic information</p>
        <form>
            <div className="grid grid-cols-2 mt-5 gap-3">
                <div className="flex col-span-2 justify-center items-center pb-2">
                    <ProfileUpload/>
                </div>
                <div>
                    <label className="text-sm">First Name</label>
                    <Input name="firtName" disabled value={resumeInfo.firstName}/>
                </div>
                <div>
                    <label className="text-sm">Second Name</label>
                    <Input name="lastName" disabled value={resumeInfo.lastName}/>
                </div>
                <div className="col-span-2">
                    <label className="text-sm">Job Title</label>
                    <Input name="jobTitle" defaultValue={resumeInfo.jobTitle} required onChange={inputOnChange}/>
                </div>
                <div className="col-span-2">
                    <label className="text-sm">Address</label>
                    <Input name="address" defaultValue={resumeInfo.address} required onChange={inputOnChange}/>
                </div>
                <div>
                    <label className="text-sm">Phone</label>
                    <Input onChange={inputOnChange} name="phone" defaultValue={resumeInfo.phone}/>
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <Input onChange={inputOnChange} name="email" defaultValue={resumeInfo.email}/>
                </div>
            </div>
            <div className="flex justify-end mt-3">
                <Button>Save</Button>
            </div>
        </form>
    </div>
}