import './feeds.css.scss'
import React from "react";
import {Posts} from "@/app/dashboard/Feeds/Post/Post";
import {Share} from "@/app/dashboard/Feeds/Share/Share";
import {Stories} from "@/app/dashboard/Feeds/Stories/Stories";
import {useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
interface Prop {
    stories:boolean
}
export const Feeds: React.FC<Prop> = ({stories = true}) => {
    const {posts} = useSelector((state: RootState) => state.posts);
    return <div className="feeds">
        <div className="feed-wrapper">
            {stories && <Stories/>}
            <Share/>
            {posts.map((post)=>(
                <Posts posts={post} key={post.id}/>
            ))}

        </div>
    </div>
}
