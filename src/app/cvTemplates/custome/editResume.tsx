import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";

const EditResume: React.FC = () =>{
    const {selectedResume} = useSelector((state: RootState) => state.system);
    const {resumes} = useSelector((state: RootState) => state.resume);
    return <div className="">

    </div>
}

export default EditResume