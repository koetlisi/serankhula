'use client'
import PuffLoader from 'react-spinners/PuffLoader';
import {NavBar} from "@/components/Components/NavThings/NavBar";
import './index.scss'
import React from "react";
import {AddResume} from "@/app/cvTemplates/custome/addResume";
import {useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";
import {ResumeItemCard} from "@/app/cvTemplates/custome/resumeItemCard";

const CreateTemplate = () => {
    const {resumes} = useSelector((state: RootState) => state.resume);
    const {userData} = useSelector((state: RootState) => state.login);
    return <div>
        <NavBar/>
        <div className="temp-dashboard-body">
            <h2 className="font-bold text-3xl">My Resume</h2>
            <p>Start Creating AI resume to your next Job role</p>
            <div className="temp-body-add">
                <AddResume/>
                {resumes&&resumes.filter((resume)=> resume.user_id === userData.id).map((resume,key)=>(
                    <ResumeItemCard resume={resume} key={key}/>
                ))}
            </div>
        </div>
    </div>
}
export default CreateTemplate