import './post.css.scss'
import React, {useEffect, useState} from "react";
import {IconButton} from "@mui/material";
import {
    ChatBubbleOutline,
    ChatBubbleOutlined,
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
interface Props{
    posts: Post
}
export const Posts: React.FC<Props> = ({ posts }) => {
    const { users } = useSelector((state: RootState) => state.users);
    const user = users.find((user) => user.id === posts.user_id);

    const [timeAgoText, setTimeAgoText] = useState(TimeAgo(posts.created_at));

    useEffect(() => {
        window.addEventListener('resize', () => {
            resizeImages();
        });
        const interval = setInterval(() => {
            setTimeAgoText(TimeAgo(posts.created_at));
        }, 60000);

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [posts.created_at]);

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
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            style={{maxHeight: "420px", objectFit: "cover"}}
                            className="w-full rounded-t-lg"
                            src={posts?.imageUrl}
                            key={posts.id}
                            alt="Post Image"
                        />
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
