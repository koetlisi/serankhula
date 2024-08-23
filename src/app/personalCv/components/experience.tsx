import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import { extractMonthAndYear } from "@/function/laravelDataToString";
import Description from "@/components/Components/FormThings/displayText";

const ExperienceInfo = () => {
    const { work } = useSelector((state: RootState) => state.userWork);
    const { userData } = useSelector((state: RootState) => state.login);

    return (
        <section className="experience sect">
            <h2 className="right-title pb-2">Experience</h2>
            {work.filter(work => work.user_id === userData.id).map((work, index) => (
                <div key={index} className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">{work.place}</h5>
                        <p className="about-me-para">{extractMonthAndYear(work.interval_start) + "-" + extractMonthAndYear(work.interval_end)}</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">{work.title}</h5>
                            <Description text={work.description} />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ExperienceInfo;
