import React from "react";
import {Login} from "@/app/GlobalRedux/Features/auth/login";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";

const ContactsInfo: React.FC = ()=>{
    const { userData } = useSelector((state: RootState) => state.login);
    return <div className="contacts-info">
        <h3 className="contacts-main-title">Contacts Info</h3>
        <ul>
            <li>
                <i className="fa fa-phone"></i> (266) {userData.phone}
            </li>
            <li>
                <i className="fa fa-fax"></i> {userData.email}
            </li>
            <li>
                <i className="fa fa-globe"></i> www.theko.koetlisi.com
            </li>
        </ul>
    </div>
}

export default ContactsInfo;