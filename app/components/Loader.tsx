"use client";

import React from "react";
import { Spin } from "antd";

const Loader: React.FC = () => {

    return (
        <div style={containerStyle}>
            <Spin size="large">
                <img
                    src="/assets/favicon.ico"
                    alt="Loading..."
                    style={imageStyle}
                />
            </Spin>
        </div>
    );
};

// Inline styles
const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "20px",
};

const imageStyle: React.CSSProperties = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #1890ff",
};

export default Loader;
