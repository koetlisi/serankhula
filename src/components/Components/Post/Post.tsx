import './post.css.scss'
import {Posts, User, Users} from "@/components/Components/Fiends/dummyData";
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
interface Props{
    posts: Posts
    users : User[]
}
export const Post: React.FC<Props> = ({posts, users = Users}) =>{
    const user = users.find((user) => user.id === posts.userId);
    return <div className="post">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img src={user?.profilePicture} className="post-profile-image" key={posts.id} alt={posts.date} />
                    <div className="post-date-name">
                        <span className="post-user-name">{user?.username}</span>
                        <span className="post-date">{posts.date}</span>
                    </div>
                </div>
                <div className="post-top-right">
                    <IconButton>
                        <MoreVert className='post-vert-btn'/>
                    </IconButton>
                </div>
            </div>
            <div className="post-center">
                <p className="post-text">{posts?.desc}</p>
                <img className="post-image" src={posts?.photo} key={posts.id} alt={posts.date} />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <Favorite className="bottom-left-icon" style={{color:'red'}} />
                    <ThumbUp className="bottom-left-icon" style={{color: '#011631'}} />
                    <span className="post-like-counter">{posts.like}</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-text">{posts.comment} - comments -shares</span>
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
