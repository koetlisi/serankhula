export interface LoginUserType {
    isLogin: boolean;
    isLoading: boolean;
    userData: {
        token: string;
        name: string;
        surname: string;
        email: string;
        nationality: string,
        national_id: string,
        dob:string,
        gender:string,
        phone:number,
        id:number,
        profileImage:string,
    };
}