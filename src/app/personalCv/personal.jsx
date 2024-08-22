import React, {createContext, useContext, useEffect} from 'react';
import './cv.css.scss';
import ReferencesInfo from './components/references';
import ExperienceInfo from './components/experience';
import ContactsInfo from "@/app/personalCv/components/contacts";
import EducationInfo from "@/app/personalCv/components/education";
import AboutMe from "@/app/personalCv/components/aboutMe";
import SkillsInfo from "@/app/personalCv/components/skills";
import {useDispatch} from "react-redux";
import {getAllCourses} from "@/app/GlobalRedux/Features/course/userCourse/thunks/allCourse";
import ProfileImage from "@/app/personalCv/components/profileImage";


export default function CV({userInfo}) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch]);

    return (
        <div className="cv">
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <main className='main-content'>
                        <section className='left-section'>
                            <div className='left-content'>
                                <ProfileImage userInfo={userInfo}/>
                                <ContactsInfo/>
                                <SkillsInfo/>
                                <ReferencesInfo/>
                            </div>
                        </section>
                        <section className='right-section'>
                            <div className='right-content'>
                                <AboutMe/>
                                <ExperienceInfo/>
                                <EducationInfo/>
                            </div>
                        </section>
                </main>
            </div>
        </div>
    );
}
