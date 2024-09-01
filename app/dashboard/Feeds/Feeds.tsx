import './feeds.css.scss'
import React from "react";
import {Posts, Users} from "@/app/dashboard/Fiends/dummyData";
import {Post} from "@/app/dashboard/Feeds/Post/Post";
import {Share} from "@/app/dashboard/Feeds/Share/Share";
import {Stories} from "@/app/dashboard/Feeds/Stories/Stories";
interface Prop {
    stories:boolean
}
export const Feeds: React.FC<Prop> = ({stories = true}) => {
    return <div className="feeds">
        <div className="feed-wrapper">
            {stories && <Stories/>}
            <Share/>
            {Posts.map((post)=>(
                <Post posts={post} key={post.id}  users={Users}/>
            ))}

        </div>
    </div>
}
