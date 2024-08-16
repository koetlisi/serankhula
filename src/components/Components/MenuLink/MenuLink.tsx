import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import "./menulink.css.scss";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";

// Define the type for the component props
interface MenuLinkProps {
    icon: SvgIconComponent;
    text: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ icon: Icon, text }) => {
    const { userData } = useSelector((state: RootState) => state.login);
    return <div className="menu-link">
        <Icon className="sidebar-icon" />
        <span className="sidebar-list-item-text menu-link-text">{text}</span>
        <span className="sidebar-list-item-text menu-link-text-name">{text==="Logout"&& "("+userData.name+")"}</span>
    </div>
};

