import {useContext} from "react";
import './index.scss'
import ProfileImage from "@/app/cv/templateTwo/preview/custome/profileImage";
import {ResumeInfoContextTwo} from "@/app/cv/templateTwo/templateTwo";
import ContactsInfo from "@/app/cv/templateTwo/preview/custome/contacts";
import SkillsInfo from "@/app/cv/templateTwo/preview/custome/skills";
import AboutMe from "@/app/cv/templateTwo/preview/custome/aboutMe";
import ExperienceInfo from "@/app/cv/templateTwo/preview/custome/experience";
import EducationInfo from "@/app/cv/templateTwo/preview/custome/education";
export const TempReview = () =>{
    const context = useContext(ResumeInfoContextTwo);
    if (!context) {
        return <div>Error: Resume information is not available.</div>;
    }
    const { resumeInfo, setResumeInfo } = context;

    return <div style={{borderBlockColor:"#00324A"}} id="print-area"  className="main-section form-scroll grid grid-cols-12 shadow-lg h-full m-5 print:m-0 border-t-[20px]">
        <div className="col-span-4 h-full left-section">
            <ProfileImage userInfo={resumeInfo}/>
            <ContactsInfo userInfo={resumeInfo}/>
            <SkillsInfo userInfo={resumeInfo}/>
        </div>
        <div className="col-span-8">
            <AboutMe userInfo={resumeInfo}/>
            <ExperienceInfo userInfo={resumeInfo}/>
            <EducationInfo userInfo={resumeInfo}/>
        </div>
    </div>
}