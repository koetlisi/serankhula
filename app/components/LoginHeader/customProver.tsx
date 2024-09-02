import { Person } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { Popover } from "antd"
import { useState } from "react";
export const CustomProver: React.FC<{node:React.ReactNode, count:number, icon:React.ReactNode}> = ({node, count, icon}) => {
    return <Popover trigger="click" content={node}>
        <Badge sx={{color: "white"}} badgeContent={count} color="primary" className="navbar-icon-item">
            {icon}
        </Badge>
    </Popover>
}

