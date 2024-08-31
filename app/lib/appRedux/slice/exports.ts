
import settingReducer from '@/app/lib/appRedux/slice/settingsSlice';
import resumeReducer from '@/app/lib/appRedux/slice/defaultResumeSlice';
import authReducer from '@/app/lib/appRedux/slice/loginSlice';
import systemReducer from '@/app/lib/appRedux/slice/systemSlice';
import userReducer from "@/app/lib/appRedux/slice/users";
import resumeTemplatesReducer from "@/app/lib/appRedux/slice/resumeTemplates";
import resumeTemplateOneReducer from "@/app/lib/appRedux/slice/templateSlice/templateOne";
import resumeTemplateTwoReducer from "@/app/lib/appRedux/slice/templateSlice/templateTwo";

export {
    settingReducer,
    resumeReducer,
    authReducer,
    systemReducer,
    userReducer,
    resumeTemplatesReducer,
    resumeTemplateOneReducer,
    resumeTemplateTwoReducer
};