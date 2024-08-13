import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import "./menulink.css.scss";

// Define the type for the component props
interface MenuLinkProps {
    icon: SvgIconComponent; // Type for the icon component
    text: string; // Type for the text
}

export const MenuLink: React.FC<MenuLinkProps> = ({ icon: Icon, text }) => {
    return <div className="menu-link">
        <Icon className="sidebar-icon" />
        <span className="sidebar-list-item-text menu-link-text">{text}</span>
        <span className="sidebar-list-item-text menu-link-text-name">{text==="Logout"&& "(Theko)"}</span>
    </div>
};

