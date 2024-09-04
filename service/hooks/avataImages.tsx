import React, { useEffect, useState } from "react";
import { UrlAccessible } from "@/service/urlAccessible";

interface AvataImagesProps {
    imgPath: string|any;
    className?: string;
    style?: React.CSSProperties;
}

export const AvataImages: React.FC<AvataImagesProps> = ({ imgPath, className, style }) => {
    const [profileImage, setProfileImage] = useState("/assets/img.png");

    useEffect(() => {
        const checkProfileImage = async () => {
            const isAccessible = await UrlAccessible(imgPath) && imgPath !== '';
            setProfileImage(isAccessible ? imgPath : "/assets/img.png");
        };

        checkProfileImage().then(r => {});
    }, [imgPath]);

    return (
        <img
            src={profileImage}
            alt="profile-image"
            className={className}
            style={style}
        />
    );
};
