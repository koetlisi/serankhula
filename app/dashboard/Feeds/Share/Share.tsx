"use client";
import './share.css.scss';
import { Edit, EmojiEmotions, PermMedia, PictureAsPdf } from "@mui/icons-material";
import { Input } from "antd";
import React, { useState, useEffect } from "react";
import { PostingFunction } from "@/app/dashboard/Feeds/Post/postingFunction";
import PostCreationModal from "@/app/dashboard/Feeds/Post/postCreation";
import { UrlAccessible } from "@/service/urlAccessible";
import {AvataImages} from "@/service/hooks/avataImages";

export const Share = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { onChange, input, open, setOpen, userData } = PostingFunction();

    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <AvataImages imgPath={userData.profileImage}
                                 className="share-profile-image"
                    />
                    <div className="w-full flex">
                        <Input
                            style={{ width: "100%" }}
                            value={input.content}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder={`What's in your mind, ${userData.surname}`}
                            className="share-input w-full"
                            name="content"
                            onChange={onChange}
                        />
                        <div className={`absolute inset-y-0 right-0 flex items-center pr-3 ${isFocused ? 'hidden' : 'block'}`}>
                            <Edit className="text-gray-500 text-xl" />
                        </div>
                    </div>
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PictureAsPdf style={{ color: "#bb0000f2" }} className="share-icon" />
                            <span className="share-option-text">Pdf Share</span>
                        </div>
                        <div className="share-option">
                            <PermMedia style={{ color: "green" }} className="share-icon" />
                            <span className="share-option-text">Photo/Video</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions style={{ color: "orange" }} className="share-icon" />
                            <span className="share-option-text">Feeling/Activity</span>
                        </div>
                    </div>
                </div>
            </div>
            <PostCreationModal input={input} onChange={onChange} open={open} setOpen={setOpen} userData={userData} />
        </div>
    );
};
