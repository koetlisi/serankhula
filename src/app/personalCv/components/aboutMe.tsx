import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";

const AboutMe = ()=>{
    const aboutYou = useSelector((state: RootState) => state.aboutYou);
    return <section className="about-me section">
        <h2 className="right-title pb-2">About Me</h2>
        <p className="about-me-para">{aboutYou.motivationalSummary}</p>
    </section>
}

export default AboutMe