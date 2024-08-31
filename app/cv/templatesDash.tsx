'use client'
import './index.scss'
import {RootState} from "@/app/lib/appRedux/store";
import {useSelector} from "react-redux";
import {ResumeItemCard} from "@/app/cv/customes/resumeItemCard";
import {SideBar} from "@/app/dashBoard/sideBar/SideBar";

const TemplatesDah = () => {
    const {templates} = useSelector((state: RootState) => state.resumeTemplates);
    return <div className="w-full grid grid-cols-12">
        <div className="flex col-span-3 w-full"><SideBar/></div>
        <div className="flex col-span-9 w-full">
            <div className="temp-dashboard-body">
                <h2 className="font-bold text-3xl">Templates</h2>
                <p>Choose and Start Creating AI resume to your next Job role</p>
                <div className="temp-body-add">
                    {templates.map((item,index)=>(
                        <ResumeItemCard resume={item} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
}

export default TemplatesDah