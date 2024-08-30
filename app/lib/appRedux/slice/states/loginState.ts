import {LoginUserType} from "@/app/lib/types/loginUserType";

const initialLoginState: LoginUserType = {
    isLogin: false,
    isLoading: false,
    userData: {
        token: '',
        name: '',
        surname: '',
        email: '',
        nationality: '',
        national_id: '',
        dob: '',
        gender: 'other',
        phone: 0,
        id: 0,
        profileImage: '',
    },
};