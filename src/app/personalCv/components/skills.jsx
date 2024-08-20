import React from "react";

const SkillsInfo = () =>{
    return <div className="skill-section">
        <h3 className="contacts-main-title">Skills</h3>
        <ul>
            <li>
                <p className="skill-title">JavaScript</p>
                <div className="progress-bar">
                    <div className="progress js-progress"></div>
                </div>
            </li>
            <li>
                <p className="skill-title">Python</p>
                <div className="progress-bar">
                    <div className="progress py-progress"></div>
                </div>
            </li>
            <li>
                <p className="skill-title">Nodejs</p>
                <div className="progress-bar">
                    <div className="progress nj-progress"></div>
                </div>
            </li>
            <li>
                <p className="skill-title">C/C++</p>
                <div className="progress-bar">
                    <div className="progress nj-progress"></div>
                </div>
            </li>
            <li>
                <p className="skill-title">HTML/Css</p>
                <div className="progress-bar">
                    <div className="progress nj-progress"></div>
                </div>
            </li>
            <li>
                <p className="skill-title">Flutter</p>
                <div className="progress-bar">
                    <div className="progress nj-progress"></div>
                </div>
            </li>
        </ul>
    </div>
}

export default SkillsInfo