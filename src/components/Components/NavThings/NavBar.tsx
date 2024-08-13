import './nav.css.scss'
import {Input} from "antd";
import {ChatBubble, Notifications, Person, Search} from "@mui/icons-material";
import {Badge} from "@mui/material";

export const NavBar = () => {
    return <div className='navbar-container'>
        <div className='navbar-left'>
            <span className='logo'>Serankhula</span>
        </div>
        <div className='navbar-center'>
            <div className="search-bar">
                <Input className='search-input' prefix={<Search className='search-icon' />} name='all-search' />
            </div>
        </div>
        <div className='navbar-right'>
            <div className="navbar-links">
                <span className="navbar-link">Homepage</span>
                <span className="navbar-link">Timeline</span>
            </div>
            <div className="navbar-icons">
                <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                    <Person color="action"/>
                </Badge>
                <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                    <ChatBubble color="action"/>
                </Badge>
                <Badge badgeContent={4} color="primary" className="navbar-icon-item">
                    <Notifications color="action"/>
                </Badge>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="navbar-image"/>
        </div>
    </div>
}
