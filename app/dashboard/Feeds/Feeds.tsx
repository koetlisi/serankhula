import './feeds.css.scss'
import React, {useEffect} from "react";
import {Posts} from "@/app/dashboard/Feeds/Post/Post";
import {Share} from "@/app/dashboard/Feeds/Share/Share";
import {Stories} from "@/app/dashboard/Feeds/Stories/Stories";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/lib/appRedux/store";
import {getPost} from "@/app/lib/appRedux/thunks/post/post";
import {shuffleArray} from "@/service/shuffleArray";
import {Post} from "@/app/lib/types/post";

interface Prop {
    stories: boolean
}

export const Feeds: React.FC<Prop> = ({stories = true}) => {
    const {posts} = useSelector((state: RootState) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(getPost())
    }, []);
    return <div className="feeds">
        <div className="feed-wrapper">
            {stories && <Stories/>}
            <Share/>
            {shuffleArray<Post>(posts).map((post) => (
                <Posts posts={post} key={post.id}/>
            ))}

        </div>
    </div>
}
