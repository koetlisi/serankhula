"use client"
import React, {useState} from "react";
import {Drawer} from "antd";
import CV from "@/app/personalCv/personal";
import {useSelector} from "react-redux";
import {RootState} from "@/GlobalRedux/store";

interface Prop {
    open:boolean
    setOpen: any
}
export const CvDrawer: React.FC<Prop> = ({open = false, setOpen}) =>{
    const { userData } = useSelector((state: RootState) => state.login);
    return <Drawer  width="85vw"  onClose={setOpen}  open={open} styles={{body: {paddingBottom: 0}}}>
        <CV/>
    </Drawer>
}