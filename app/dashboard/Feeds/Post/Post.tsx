import './post.css.scss'
import React, {useEffect, useState} from "react";
import {IconButton} from "@mui/material";
import {
    ChatBubbleOutline,
    Favorite,
    MoreVert, ShareOutlined,
    ThumbUp,
    ThumbUpAltOutlined
} from "@mui/icons-material";
import {User, Post} from "@/app/lib/types/post";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import {TimeAgo} from "@/service/timeAgo";
import {AvataImages} from "@/service/hooks/avataImages";
import {resizeImages} from "@/service/resizeImage";
import {UrlAccessible} from "@/service/urlAccessible";
import {useWebSocket} from "@/lib/webSocket/webSocketProvider";
import {UserRequest} from "@/app/lib/types/userRequest";
interface Props{
    posts: Post
}
export const Posts: React.FC<Props> = ({ posts }) => {
    const { users } = useSelector((state: RootState) => state.users);
    const { newPost } = useSelector((state: RootState) => state.posts);
    const user = users.find((user) => user.id === posts.user_id);
    const {sendMessage} = useWebSocket();
    const [timeAgoText, setTimeAgoText] = useState(TimeAgo(posts.created_at));
    const [img, setImg] =useState(false)

    useEffect(() => {
        const isAccessible =async ()=>{
           const acc =  await UrlAccessible(posts?.imageUrl) && posts?.imageUrl !== ''
            setImg(!acc);
        };
        isAccessible().then(r => {})
        window.addEventListener('resize', () => {
            resizeImages();
        });
        const interval = setInterval(() => {
            if(newPost.id !== 0){
                const broadCastPost = {
                    operation: 'createPost',
                    message: {
                        content: 'createPost',
                        msg: newPost
                    }
                }
                sendMessage(broadCastPost);
            }
            setTimeAgoText(TimeAgo(posts.created_at));
        }, 60000);

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [newPost, posts.created_at, posts?.imageUrl, sendMessage]);

    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <AvataImages imgPath={user?.profileImage}
                            className="post-profile-image"
                            key={posts.id}
                        />
                        <div className="post-date-name">
                            <span className="post-user-name">
                                {user?.surname} {user?.name}
                            </span>
                            <span className="post-date">{timeAgoText}</span>
                        </div>
                    </div>
                    <div className="post-top-right">
                        <IconButton>
                            <MoreVert className="post-vert-btn" />
                        </IconButton>
                    </div>
                </div>
                <div className="post-center">
                    <p className="post-text">{posts?.content}</p>
                    <div className="overflow-hidden">
                        {!img && <img
                            style={{maxHeight: "420px", objectFit: "cover"}}
                            className="w-full"
                            src={posts?.imageUrl}
                            key={posts.id}
                            alt=""
                        />}
                    </div>
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <Favorite
                            className="bottom-left-icon"
                            style={{color: 'red'}}
                        />
                        <ThumbUp
                            className="bottom-left-icon"
                            style={{ color: '#011631' }}
                        />
                        <span className="post-like-counter">
                            {posts.likes?.length}
                        </span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">
                            {posts.comments?.length} - comments - shares
                        </span>
                    </div>
                </div>
                <hr className="post-bottom-hr" />
                <div className="post-bottom-footer">
                    <div className="post-bottom-footer-item">
                        <ThumbUpAltOutlined className="post-footer-icon" />
                        <span className="post-footer-text">Like</span>
                    </div>
                    <div className="post-bottom-footer-item">
                        <ChatBubbleOutline className="post-footer-icon" />
                        <span className="post-footer-text">Comment</span>
                    </div>
                    <div className="post-bottom-footer-item">
                        <ShareOutlined className="post-footer-icon" />
                        <span className="post-footer-text">Share</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
