import './feeds.css.scss'
import React from "react";
import {Stories} from "@/components/Components/Stories/Stories";
import {Share} from "@/components/Components/Share/Share";
import {Post} from "@/components/Components/Post/Post";
import {Posts, Users} from "@/components/Components/Fiends/dummyData";
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
