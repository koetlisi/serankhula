'use client'
import PuffLoader from 'react-spinners/PuffLoader';
import {NavBar} from "@/components/Components/NavThings/NavBar";
import './index.scss'
import React from "react";
import {AddResume} from "@/app/cvTemplates/custome/addResume";

const CreateTemplate = () => {
    return <div>
        <NavBar/>
        <div className="temp-dashboard-body">
            <h2 className="font-bold text-3xl">My Resume</h2>
            <p>Start Creating AI resume to your next Job role</p>
            <div className="temp-body-add">
                <AddResume/>
            </div>
        </div>
    </div>
}
export default CreateTemplate