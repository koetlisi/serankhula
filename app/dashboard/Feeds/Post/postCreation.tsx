import React, { useState } from 'react';
import { PictureAsPdf, PermMedia, EmojiEmotions } from '@mui/icons-material';
import {Post} from "@/app/lib/types/post";

const PostCreationModal: React.FC<{open:boolean, setOpen:(open:boolean)=>void, userData:any,input:Post,onChange:any}> = ({ open, setOpen, userData, input, onChange }) => {
    if (!open) return null;

    

    return (
        <div className="fixed bg-dot inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4">
                <div className="flex justify-between items-center pb-2">
                    <h2 className="text-lg font-semibold text-center">Create Post</h2>
                    <button className="text-gray-600" onClick={() => setOpen(false)}>
                        ✖
                    </button>
                </div>
                <hr className="my-2" />
                <div>
                    <div className="flex items-center space-x-4 mb-4">
                        <img
                            alt="User Profile"
                            src={userData.profileImage || "/assets/person/7.jpeg"}
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-medium">{`${userData.name} ${userData.surname}`}</span>
                    </div>
                    <textarea
                        value={input.text}
                        autoFocus={false}
                        onFocus={() => {}}
                        onBlur={() => {}}
                        placeholder={`What's on your mind, ${userData.surname}?`}
                        className="w-full h-28 p-4 focus:border-none focused"
                        name="text"
                        onChange={onChange}
                        style={{ resize: "none" }} // Disable resizing to mimic Facebook's textarea
                    />
                    <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
                        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                            <PermMedia style={{ color: "#42b72a" }} className="text-2xl" />
                            <span className="text-sm font-medium">Photo/Video</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                            <EmojiEmotions style={{ color: "#f7b928" }} className="text-2xl" />
                            <span className="text-sm font-medium">Feeling/Activity</span>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                            <PictureAsPdf style={{ color: "#f02849" }} className="text-2xl" />
                            <span className="text-sm font-medium">PDF</span>
                        </div>
                    </div>
                </div>
                <button
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all"
                    onClick={() => {
                        /* handle post submission */
                    }}
                >
                    Post
                </button>
            </div>
        </div>
    );
};

export default PostCreationModal;
