import { PlusIcon } from "lucide-react";
import React from "react";
import './storycard.css.scss';

// Ensure that User is correctly imported and defined elsewhere
import { User } from "@/components/Components/Fiends/dummyData";

// Define a Props interface for the component
interface Props {
    user: User;
    identifier: number;  // Renamed from `key` to `identifier`
}

export const StoryCard: React.FC<Props> = ({ user, identifier }) => {
    return (
        <div className="story-card">
            <div className="overlay"></div>
            <img alt={user.username} src={user.profilePicture} className="story-profile" />
            <img alt={user.username} src={user.profilePicture} className="story-background" />
            {identifier === 1 && <PlusIcon className="story-add" />}
            <span className="text">{user.username}</span>
        </div>
    );
}

