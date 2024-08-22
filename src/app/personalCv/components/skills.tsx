import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";

const SkillsInfo = () =>{
    const skill = useSelector((state: RootState) => state.skills);
    const user = useSelector((state: RootState) => state.login);
    return <div className="skill-section">
        <h3 className="contacts-main-title">Skills</h3>
        <ul>
            {skill.skills
                .filter(skill => skill.user_id === user.userData.id) // Replace `someSpecificId` with the id you want to filter out
                .map((skill, index) => (
                    <li key={index}>
                        <p className="skill-title">{skill.name}</p>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${skill.ratting}%` }}></div>
                        </div>
                    </li>
                ))}

        </ul>
    </div>
}

export default SkillsInfo