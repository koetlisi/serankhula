import React from "react";
import './rightbar.css.scss'
import {RightBarHome} from "@/app/dashBoard/RightBar/RightBarHome/RightBarHome";

interface Props{
    profile: boolean
}
export const RightBar: React.FC<Props> = ({profile=false}) => {
    return <div className="right-bar mx-2">
       <div className="right-bar-wrapper mx-4">
            <RightBarHome/>
       </div>
    </div>
}
