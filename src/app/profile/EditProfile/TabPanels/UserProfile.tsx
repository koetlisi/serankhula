import React from "react";
import ProfileUpload from "@/components/Components/FormThings/ProfileUpload";
import {TextField} from "@/components/Components/FormThings/TextField";
import FormDatePicker from "@/components/Components/FormThings/DatePicker";
import {Gender} from "@/components/Components/FormThings/Gender";
import {MailOutlined} from "@mui/icons-material";
import {NumberInputAddonAfter} from "@/components/Components/FormThings/PhoneInput";
import {Card,Badge} from "antd";
import {useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {
    updateUserDOB, updateUserEmail, updateUserGender,
    updateUserName,
    updateUserNationalID,
    updateUserNationality, updateUserPhone,
    updateUserSurname
} from "@/app/GlobalRedux/Features/auth/login";

export const UserProfile: React.FC = () => {
    const {userData} = useSelector((state: RootState) => state.login);
    // @ts-ignore
    return <Badge.Ribbon text="Personal Info">
        <Card title="Edit User Profile" size="small">
            <div className="edit-bottom">
                <div className="row row-control">
                    <div className="col-12">
                        <ProfileUpload/>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="first-name">First Name: </label>
                            <TextField
                                data={userData.name}
                                onChange={updateUserName}
                                name="name"
                            />
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="surname">Surname: </label>
                            <TextField
                                data={userData.surname}
                                onChange={updateUserSurname}
                                name="surname"
                            />
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="nationality">Nationality: </label>
                            <TextField
                                data={userData.nationality}
                                onChange={updateUserNationality}
                                name="nationality"
                            />
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="national_id">National ID: </label>
                            <TextField
                                data={userData.national_id}
                                onChange={updateUserNationalID}
                                name="national_id"
                            />
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="dob">Date of Birth: </label>
                            <FormDatePicker/>
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="gender">Gender: </label>
                            <Gender
                                onChange={updateUserGender} name="gender"
                            />
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="email">Email: </label>
                            <TextField
                                data={userData.email}
                                onChange={updateUserEmail}
                                name="email"
                                icon={<MailOutlined/>}
                            />
                        </div>
                    </div>
                    <div className="col col-6">
                        <div className="form-inputs">
                            <label className="label-spacing" htmlFor="phones">Phone Number: </label>
                            <NumberInputAddonAfter data={userData.phone} onChange={updateUserPhone} addonAfter="266"
                                                   name="phone"/>
                        </div>
                    </div>

                </div>
            </div>
        </Card>
    </Badge.Ribbon>
};
