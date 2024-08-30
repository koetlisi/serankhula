import React, { useState } from 'react';
import './stories.css.scss';
import {Users} from "@/app/dashBoard/Fiends/dummyData";
import {StoryCard} from "@/app/dashBoard/Feeds/Stories/StoryCard/StoryCard";

export const Stories: React.FC = () => {
    const currentStories = Users.slice(0, 5);
    return (
        <div className="stories">
            <div className="stories-container flex justify-center items-center gap-4">
                {currentStories.map((user) => (
                    <StoryCard identifier={user.id} key={user.id} user={user} />
                ))}
            </div>
            {/*<AgeVsEmployedBarChart/>*/}
        </div>
    );
};

