"use client"
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/GlobalRedux/store";
import {getInstitutions, getQualification} from "@/app/GlobalRedux/Features/quali_instition/quali_institution";

export const UserQualification: React.FC = () =>{
    const dispatch = useDispatch();
    const { institutions, qualifications, filter } = useSelector((state: RootState) => state.institution);

    useEffect(() => {
        // @ts-ignore
        dispatch(getInstitutions());
        // @ts-ignore
        dispatch(getQualification());
    }, [dispatch]);
    return <></>
}