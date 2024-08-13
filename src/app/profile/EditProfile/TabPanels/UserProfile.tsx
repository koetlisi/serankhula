import React, { useState } from 'react';
import ProfileUpload from "@/components/Components/FormThings/ProfileUpload";
import { TextField } from "@/components/Components/FormThings/TextField";
import { DataFrame } from "@/Pages/Profile/EditProfile/Data";
import {FormDatePicker} from "@/components/Components/FormThings/DatePicker";
import {Gender} from "@/components/Components/FormThings/Gender";
import {MailOutlined} from "@mui/icons-material";
import {NumberInputAddonAfter} from "@/components/Components/FormThings/PhoneInput";

export const UserProfile: React.FC = () => {
    const { profileData, setProfileData } = DataFrame();

    const handleDataChange = (field: string, value: string) => {
        setProfileData((prevData) => ({
            ...prevData,
            [field]: value
        }));
        console.log(profileData.phone);
    };

    return (
        <div className="edit-bottom">
            <div className="row row-control">
                <div className="col-12">
                    <ProfileUpload/>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="first-name">First Name: </label>
                        <TextField
                            data={profileData.name}
                            setData={handleDataChange}
                            name="name"
                        />
                    </div>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="surname">Surname: </label>
                        <TextField
                            data={profileData.surname}
                            setData={handleDataChange}
                            name="surname"
                        />
                    </div>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="nationality">Nationality: </label>
                        <TextField
                            data={profileData.nationality}
                            setData={handleDataChange}
                            name="nationality"
                        />
                    </div>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="national_id">National ID: </label>
                        <TextField
                            data={profileData.national_id}
                            setData={handleDataChange}
                            name="national_id"
                        />
                    </div>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="dob">Date of Birth: </label>
                        <FormDatePicker
                            data={profileData.dob}
                            setData={handleDataChange}
                            name="dob"
                        />
                    </div>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="gender">Gender: </label>
                        <Gender
                            setData={handleDataChange} name="gender"
                        />
                    </div>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="email">Email: </label>
                        <TextField
                            data={profileData.email}
                            setData={handleDataChange}
                            name="email"
                            icon={<MailOutlined/>}
                        />
                    </div>
                </div>
                <div className="col col-6">
                    <div className="form-inputs">
                        <label className="label-spacing" htmlFor="phones">Phone Number: </label>
                        {/*<NumberInputAddonAfter data={profileData.phone} setData={handleDataChange} addonAfter="266" name="phone" />*/}
                    </div>
                </div>

            </div>
        </div>
    );
};
