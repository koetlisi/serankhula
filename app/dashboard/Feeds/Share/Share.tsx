"use client";
import {
    Dialog,
    DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog"
import './share.css.scss'
import {Edit, EmojiEmotions, PermMedia, PictureAsPdf, VideoCameraFront} from "@mui/icons-material";
import {Input} from "antd";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {PostingFunction} from "@/app/dashboard/Feeds/Post/postingFunction";
import PostCreationModal from "@/app/dashboard/Feeds/Post/postCreation";
export const Share = () =>{
    const [isFocused, setIsFocused] = useState(false);
    const {onChange,input, open,setOpen,userData} = PostingFunction()
    return <>
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img alt="share-profile-image"
                         src={!(userData.profileImage === '' || userData.profileImage === null) ? userData.profileImage : '/assets/person/7.jpeg'}
                         className="share-profile-image"/>
                    <Input value={input.text} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
                           placeholder={"what's in your mind " + userData.surname} className='share-input'
                           suffix={!isFocused && <Edit className='edit-icon'/>} name='text' onChange={onChange}/>
                </div>
                <hr className="share-hr"/>
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PictureAsPdf style={{color: "#bb0000f2"}} className="share-icon"/>
                            <span className="share-option-text">Pdf Share</span>
                        </div>
                        <div className="share-option">
                            <PermMedia style={{color: "green"}} className="share-icon"/>
                            <span className="share-option-text">Photo/Video</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions style={{color: "orange"}} className="share-icon"/>
                            <span className="share-option-text">Feeling/Activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PostCreationModal input={input} onChange={onChange} open={open} setOpen={setOpen} userData={userData}/>
    </>
}
