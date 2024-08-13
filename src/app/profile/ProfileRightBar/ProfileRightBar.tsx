"use client"
import './profile.css.scss'
import React from "react";
import {useDispatch} from "react-redux";
import {updateSelectedComponent} from "@/app/GlobalRedux/Features/pageControl/pageControlSlice";

export const ProfileRightBar: React.FC = () => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(updateSelectedComponent('EditProfile'))
    return <div className="profile-right-bar">
        <div className="profile-right-bar-heading">
            <span className="profile-right-bar-title">User Information</span>
            <button onClick={handleClick}><span className="edit-button">Edit Profile</span></button>
        </div>

        <div className="profile-right-bar-info">
            <div className="profile-right-bar-info-item">
                <span className="profile-right-bar-info-key">Email:</span>
                <span className="profile-right-bar-info-value">thekoetlisi@gmail.com</span>
            </div>
            <div className="profile-right-bar-info-item">
                <span className="profile-right-bar-info-key">Phone Number:</span>
                <span className="profile-right-bar-info-value">(266) 59001394</span>
            </div>
            <div className="profile-right-bar-info-item">
                <span className="profile-right-bar-info-key">Name:</span>
                <span className="profile-right-bar-info-value">Theko</span>
            </div>
            <div className="profile-right-bar-info-item">
                <span className="profile-right-bar-info-key">Surname:</span>
                <span className="profile-right-bar-info-value">Koetlisi</span>
            </div>
        </div>
        <span className="profile-right-bar-title">Close Friends</span>
        <div className="profile-right-bar-followings">
            <div className="profile-right-bar-following">
                <img src="/assets/person/1.jpeg" alt="" className="profile-right-bar-following-img"/>
                <span className="profile-right-bar-following-name">Jennet Mofoka</span>
            </div>
            <div className="profile-right-bar-following">
                <img src="/assets/person/1.jpeg" alt="" className="profile-right-bar-following-img"/>
                <span className="profile-right-bar-following-name">Jennet Mofoka</span>
            </div>
            <div className="profile-right-bar-following">
                <img src="/assets/person/1.jpeg" alt="" className="profile-right-bar-following-img"/>
                <span className="profile-right-bar-following-name">Jennet Mofoka</span>
            </div>
        </div>
    </div>
}
