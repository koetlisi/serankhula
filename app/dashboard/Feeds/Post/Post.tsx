import './post.css.scss'
import React from "react";
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
interface Props{
    posts: Post
}
export const Posts: React.FC<Props> = ({posts}) =>{
    const {users} = useSelector((state: RootState) => state.users);
    const user = users.find((user) => user.id === posts.userId);
    return <div className="post">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img src={user?.profileImage} className="post-profile-image" key={posts.id} alt={posts.createdAt} />
                    <div className="post-date-name">
                        <span className="post-user-name">{user?.surname} {user?.name}</span>
                        <span className="post-date">{posts.createdAt}</span>
                    </div>
                </div>
                <div className="post-top-right">
                    <IconButton>
                        <MoreVert className='post-vert-btn'/>
                    </IconButton>
                </div>
            </div>
            <div className="post-center">
                <p className="post-text">{posts?.text}</p>
                <img className="post-image" src={posts?.imageUrl} key={posts.id} alt={posts.createdAt} />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <Favorite className="bottom-left-icon" style={{color:'red'}} />
                    <ThumbUp className="bottom-left-icon" style={{color: '#011631'}} />
                    <span className="post-like-counter">{posts.likes?.length}</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-text">{posts.comments?.length} - comments -shares</span>
                </div>
            </div>
            <hr className="post-bottom-hr"/>
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
}
