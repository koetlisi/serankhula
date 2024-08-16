import React, { useState } from 'react';
import './stories.css.scss';
import { StoryCard } from '@/components/Components/Stories/StoryCard/StoryCard';
import { Users } from '@/components/Components/Fiends/dummyData';
import {AgeVsEmployedBarChart} from "@/components/Components/analytics/ageStatus";

export const Stories: React.FC = () => {
    const currentStories = Users.slice(0, 5);
    return (
        <div className="stories">
           {/* <div className="stories-container flex justify-center items-center gap-4">
                {currentStories.map((user) => (
                    <StoryCard identifier={user.id} key={user.id} user={user} />
                ))}
            </div>*/}
            <AgeVsEmployedBarChart/>
        </div>
    );
};

