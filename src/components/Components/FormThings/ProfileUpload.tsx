"use client"
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload} from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import {DataFrame} from "@/app/profile/EditProfile/Data";

type FileType = NonNullable<UploadFile['originFileObj']>;

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const ProfileUpload: React.FC = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const {selectedFiles, setSelectedFiles} = DataFrame();

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        const files = newFileList.map((file) => file.originFileObj).filter(Boolean) as File[];
        setSelectedFiles(files);
    };

    const handleUpload = () => {
        // Log file paths here for the selected files
        selectedFiles.forEach((file) => {
            console.log(`Selected file: ${file.name}`);
            // Add your custom upload logic here
        });
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <>
            <Upload
                className="img-picker"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={() => false} // Prevent auto-upload
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
};

export default ProfileUpload;
