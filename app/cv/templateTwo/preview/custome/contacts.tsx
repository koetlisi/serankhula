import React from "react";
import { ResumeInfo } from "@/app/lib/types/templateTwoInterface";

const ContactsInfo: React.FC<{ userInfo: ResumeInfo }> = ({ userInfo }) => {
    return (
        <div className="contacts-info border-b border-[#f7f7f7] pb-4">
            <h3 className="text-center text-[1rem] uppercase text-[#f7f7f7ec] pt-2 mb-4">
                Contacts Info
            </h3>
            <ul className="py-1">
                <li className="flex items-center text-[#718096] py-1">
                    <i className="fa fa-phone pr-4 text-[1.1rem] text-[#2D9CDB]"></i>
                    <span>(266) {userInfo.phone}</span>
                </li>
                <li className="flex items-center text-[#718096] py-1">
                    <i className="fa fa-fax pr-4 text-[1.1rem] text-[#2D9CDB]"></i>
                    <span>{userInfo.email}</span>
                </li>
                <li className="flex items-center text-[#718096] py-1">
                    <i className="fa fa-globe pr-4 text-[1.1rem] text-[#2D9CDB]"></i>
                    <span>www.theko.koetlisi.com</span>
                </li>
            </ul>
        </div>
    );
};

export default ContactsInfo;
