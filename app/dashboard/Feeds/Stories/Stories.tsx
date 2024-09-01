import React from 'react';
import './stories.css.scss';
import {Users} from "@/app/dashboard/Fiends/dummyData";
import {CarouselSize} from "@/app/components/Slider";
import {StoryCard} from "@/app/dashboard/Feeds/Stories/StoryCard/StoryCard";

export const Stories: React.FC = () => {
    return (
        <div className="stories">
            <CarouselSize data={Users}/>
            {/*<AgeVsEmployedBarChart/>*/}
        </div>
    );
};

