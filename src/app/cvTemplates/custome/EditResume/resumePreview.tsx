import {useContext} from "react";
import ResumeInfoContext from "@/app/cvTemplates/context/resumeInfoContext";
import {PersonalDetails} from "@/app/cvTemplates/custome/EditResume/preview/personalDetails";

export const ResumePreview = () =>{
    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
    console.log(resumeInfo)
    return <div className="">
        {/*personal resume info*/}
        <PersonalDetails resumeInfo={resumeInfo}/>
    </div>
}