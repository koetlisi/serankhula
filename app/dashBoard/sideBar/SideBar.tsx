import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import {updateSelectedComponent} from "@/app/lib/appRedux/slice/systemSlice";
import "./sideBar.scss"
import {LogoutOutlined} from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WalletIcon from '@mui/icons-material/Wallet';
import {MenuLink} from "@/app/dashBoard/menuLink/MenuLink";
import {logout} from "@/app/lib/appRedux/slice/loginSlice";
export const SideBar =()=>{
    const dispatch = useDispatch();
    const {userData} = useSelector((state: RootState) => state.auth);
    const handleClick = (page:string) => dispatch(updateSelectedComponent(page))
    return <div className="sidebar">
        <div className="sidebar-wrapper">
            <div onClick={() => handleClick('Profile')} className="menu-link">
                <img alt={userData.name} style={{width: "40px", height: "40px", borderRadius: "500%"}}
                     src={(userData.profileImage === null || userData.profileImage == '') ? 'assets/img.png' : userData.profileImage}
                     className="sidebar-icon"/>
                <span className="sidebar-list-item-text menu-link-text">{userData.name + ' ' + userData.surname}</span>
            </div>
            <MenuLink onClick={()=>{}} icon={AccountBalanceIcon} text='Students'/>
            <MenuLink onClick={()=>{}} icon={SchoolIcon} text='Graduates'/>
            <MenuLink onClick={()=>{}} icon={BadgeIcon} text='Jobless'/>
            <MenuLink onClick={()=>{}} icon={AccountBalanceWalletIcon} text='Workers'/>
            <MenuLink onClick={()=>{}} icon={WalletIcon} text='Entrepreneurs'/>
            <MenuLink onClick={()=>dispatch(logout())} icon={LogoutOutlined} text='Logout'/>
            <button onClick={()=>handleClick('Cv_template')} className="sidebar-btn">CV Templates</button>
            <hr className="sidebar-hr"/>
        </div>
    </div>
}