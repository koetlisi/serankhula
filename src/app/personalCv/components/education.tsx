import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {extractMonthAndYear} from "@/function/laravelDataToString";


const EducationInfo: React.FC = () => {
    const {courses} = useSelector((state: RootState) => state.userCourses);
    const {userData} = useSelector((state: RootState) => state.login);
    return (
        <section className="education-section">
            <h2 className="right-title pb-2">Education</h2>
            {courses.filter(course => course.user_id ===userData.id).map((course, index) => (
                <div className="timeline" key={index}>
                    <div className="left-tl-content">
                        <h5 className="tl-title">{course.institution}</h5>
                        <p className="about-me-para">{extractMonthAndYear(course.interval_start)+"-"+extractMonthAndYear(course.interval_end)}</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">{course.qualification}</h5>
                            <p className="about-me-para pb-4"><i>({course.name})</i></p>
                            <p className="about-me-para">{course.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default EducationInfo;