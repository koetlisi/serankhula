import React, { createContext, useContext } from 'react';
import './cv.css.scss';
import ProfileImage from './components/profileImage';
import SkillsInfo from './components/skills';
import ReferencesInfo from './components/references';
import AboutMe from './components/aboutMe';
import ExperienceInfo from './components/experience';
import ContactsInfo from "@/app/personalCv/components/contacts";
import EducationInfo from "@/app/personalCv/components/education";


export default function CV({userInfo}) {

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
