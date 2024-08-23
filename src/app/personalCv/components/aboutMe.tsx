import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";

const AboutMe = ()=>{
    const aboutYou = useSelector((state: RootState) => state.aboutUser);
    const user = useSelector((state: RootState) => state.login);
    const aboutMe = aboutYou.aboutUser.filter(about=> about.user_id === user.userData.id)[0]
    return <section className="about-me section">
        <h2 className="right-title pb-2">About Me</h2>
        <p className="about-me-para">{aboutMe.aboutYou}</p>
    </section>
}

export default AboutMe