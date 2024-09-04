import React, { useState } from 'react';
import { PictureAsPdf, PermMedia, EmojiEmotions } from '@mui/icons-material';
import { Post } from "@/app/lib/types/post";
import { useDispatch } from "react-redux";
import { createPost } from "@/app/lib/appRedux/thunks/post/post";
import { AvataImages } from "@/service/hooks/avataImages";

interface PostCreationModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    userData: any;
    input: Post;
    onChange: any;
}

const PostCreationModal: React.FC<PostCreationModalProps> = ({ open, setOpen, userData, input, onChange }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const submitPost = async () => {
        setError(null);
        try {
            const formData = new FormData();
            formData.append('content', input.content);
            if (selectedFile) {
                formData.append('file', selectedFile);
            }
            // @ts-ignore
            dispatch(createPost(formData));
            setOpen(false);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-dot flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div
                className="bg-white rounded-lg shadow-lg w-full max-w-lg flex flex-col h-96"> {/* Adjust height as needed */}
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                        <h2 className="text-lg font-semibold text-center">Create Post</h2>
                        <button className="text-gray-600 text-xl" onClick={() => setOpen(false)}>
                            &times;
                        </button>
                    </div>

                    <div className="flex items-center space-x-4 m-4">
                        <AvataImages
                            imgPath={userData.profileImage}
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="font-medium">{`${userData.name} ${userData.surname}`}</span>
                    </div>
                </div>
                {/* Body */}
                <div className="overflow-y-auto p-4">
                    <textarea
                        value={input.content}
                        placeholder={`What's on your mind, ${userData.surname}?`}
                        className="w-full h-24 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        name="content"
                        onChange={onChange}
                    ></textarea>
                    {selectedFile && (
                        <div className="mt-2">
                            <img
                                style={{objectFit: 'contain'}}
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected"
                                className="w-full rounded-lg"
                            />
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-4 py-2 border-t">
                    <div className="flex justify-between items-center">
                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                            <label
                                className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                                <PermMedia style={{color: "#42b72a"}} className="text-2xl"/>
                                <span className="text-sm font-medium">Photo/Video</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                            <div
                                className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                                <EmojiEmotions style={{color: "#f7b928"}} className="text-2xl"/>
                                <span className="text-sm font-medium">Feeling/Activity</span>
                            </div>
                            <div
                                className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                                <PictureAsPdf style={{color: "#f02849"}} className="text-2xl"/>
                                <span className="text-sm font-medium">PDF</span>
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 my-4 py-2 w-full rounded-lg font-medium hover:bg-blue-600 transition"
                        onClick={submitPost}
                    >
                        Post
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default PostCreationModal;
