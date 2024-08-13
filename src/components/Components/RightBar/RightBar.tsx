import React from "react";
import './rightbar.css.scss'
import {RightBarHome} from "@/components/Components/RightBar/RightBarHome/RightBarHome";
import {ProfileRightBar} from "@/app/[profile]/ProfileRightBar/ProfileRightBar";

interface Props{
    profile: boolean
}
export const RightBar: React.FC<Props> = ({profile=false}) => {
    return <div className="right-bar">
       <div className="rightbar-wrapper">
           {profile? <ProfileRightBar/>: <RightBarHome/>}
       </div>
    </div>
}
