"use client";
import './share.css.scss'
import {Edit, EmojiEmotions, PermMedia, PictureAsPdf, VideoCameraFront} from "@mui/icons-material";
import {Input} from "antd";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
export const Share = () =>{
    const [isFocused, setIsFocused] = useState(false);
    const { userData } = useSelector((state: RootState) => state.login);
    return <div className="share">
        <div className="share-wrapper">
            <div className="share-top">
                <img alt="share-profile-image" src={!(userData.profileImage===''|| userData.profileImage===null)?userData.profileImage:'/assets/person/7.jpeg'} className="share-profile-image"/>
                <Input onFocus={()=>setIsFocused(true)} onBlur={()=>setIsFocused(false)} placeholder={"what's in your mind "+userData.surname} className='share-input' suffix={!isFocused && <Edit className='edit-icon' />} name='all-search' onChange={(e) => {}} />
            </div>
            <hr className="share-hr"/>
            <div className="share-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <PictureAsPdf style={{color:"#bb0000f2"}} className="share-icon"/>
                        <span className="share-option-text">Pdf Share</span>
                    </div>
                    <div className="share-option">
                        <PermMedia style={{color:"green"}} className="share-icon"/>
                        <span className="share-option-text">Photo/Video</span>
                    </div>
                    <div className="share-option">
                        <EmojiEmotions style={{color:"orange"}} className="share-icon"/>
                        <span className="share-option-text">Feeling/Activity</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
