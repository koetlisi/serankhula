"use client";

import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Image, Upload} from 'antd';
import type {UploadFile, UploadProps} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserProfileImage} from '@/GlobalRedux/Features/auth/login';
import {RootState} from '@/GlobalRedux/store';
import {AuthControls} from "@/app/auth/authControls";

type FileType = NonNullable<UploadFile['originFileObj']>;

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });



const ProfileUpload: React.FC= () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const {formData} = AuthControls()
    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        setFileList(newFileList);

        // Get the first file's URL or path and dispatch it
        const file = newFileList[0]?.originFileObj;
        if (file) {
            const filePath = URL.createObjectURL(file);
            console.log(filePath)
            localStorage.setItem('file_path', filePath);
        }
    };

    const uploadButton = (
        <button style={{border: 0, background: 'none'}} type="button">
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
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
                    wrapperStyle={{display: 'none'}}
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
