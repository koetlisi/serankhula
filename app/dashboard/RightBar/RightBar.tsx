import React from "react";
import './rightbar.css.scss'
import {RightBarHome} from "@/app/dashboard/RightBar/RightBarHome/RightBarHome";

interface Props{
    profile: boolean
}
export const RightBar: React.FC<Props> = ({profile=false}) => {
    return <div className="right-bar">
       <div className="right-bar-wrapper ">
            <RightBarHome/>
       </div>
    </div>
}
