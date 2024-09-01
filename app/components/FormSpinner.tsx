import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
export const FormSpinner = () =>{
    return <Flex align="center" gap="middle" className="flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
}