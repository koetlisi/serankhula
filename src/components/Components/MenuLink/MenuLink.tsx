import React from "react";
import { SvgIconComponent } from "@mui/icons-material";
import "./menulink.css.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";

// Define the type for the component props
interface MenuLinkProps {
    icon: SvgIconComponent;
    text: string;
    onClick: () => void;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ onClick, icon: Icon, text }) => {
    const { userData } = useSelector((state: RootState) => state.login);
    return (
        <div className="menu-link" onClick={onClick}>
            <Icon className="sidebar-icon" />
            <span className="sidebar-list-item-text menu-link-text">{text}</span>
            {text === "Logout" && <span className="sidebar-list-item-text menu-link-text-name">({userData.name})</span>}
        </div>
    );
};
