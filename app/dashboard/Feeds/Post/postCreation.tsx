import React, {useEffect, useState} from 'react';
import { PictureAsPdf, PermMedia, EmojiEmotions } from '@mui/icons-material';
import {Post} from "@/app/lib/types/post";
import {useAppDispatch} from "@/app/lib/appRedux/hooks";
import {addPost} from "@/app/lib/appRedux/slice/post";
import {useDispatch} from "react-redux";
import {createPost} from "@/app/lib/appRedux/thunks/post/post";
import {UrlAccessible} from "@/service/urlAccessible";

const PostCreationModal: React.FC<{open:boolean, setOpen:(open:boolean)=>void, userData:any,input:Post,onChange:any}> = ({ open, setOpen, userData, input, onChange }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const [profileImage, setProfileImage] = useState("/assets/person/7.jpeg");

    useEffect(() => {
        const checkProfileImage = async () => {
            const isAccessible = await UrlAccessible(userData.profileImage);
            setProfileImage(isAccessible ? userData.profileImage : "/assets/person/7.jpeg");
        };

        checkProfileImage().then(r => {});
    }, [userData.profileImage]);
    const submitPost = async () =>{
        setError(null);
        try {
            // @ts-ignore
            dispatch(createPost(input));
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setOpen(false);
        }
    }
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
                            src={profileImage}
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-medium">{`${userData.name} ${userData.surname}`}</span>
                    </div>
                    <textarea
                        value={input.content}
                        autoFocus={false}
                        onFocus={() => {}}
                        onBlur={() => {}}
                        placeholder={`What's on your mind, ${userData.surname}?`}
                        className="w-full h-28 p-4 focus:border-none focused"
                        name="content"
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
                    onClick={submitPost}
                >
                    Post
                </button>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default PostCreationModal;
