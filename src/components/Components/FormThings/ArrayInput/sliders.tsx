import React from "react";
import {useDispatch} from "react-redux";
import {Slider} from "antd";

interface Props {
    setData: any;
    data: any;
    index: number;
    field: string;
}
export const Sliders: React.FC<Props> = ({setData,data,index,field})=> {
    const getSliderColor = (value: number) => {
        if (value <= 10) {
            return '#f5222d'; // Red for lower values
        } else if (value <= 15) {
            return '#faad14'; // Orange for mid-range values
        } else {
            return '#52c41a'; // Green for higher values
        }
    };

    const formatTooltip = (value?: number) => {
        if (value === undefined) {
            return '';
        }
        const percentage = (value / 100) * 100; // Calculate percentage
        return `${percentage}%`;
    };
    const dispatch = useDispatch();
    const handleInputChange = (e:any) => {
        const newValue = e;
        const key = `${field}-${index}`; // Construct key using field and index

        dispatch(setData({
            [field]: {
                [key]: newValue
            }
        }));
    };
    return <Slider
        style={{ width: "100%" }}
        min={0}
        max={100}
        onChange={handleInputChange}
        value={data.ratting[`ratting-${index}`]}
        trackStyle={{ backgroundColor: getSliderColor(data.ratting) }}
        handleStyle={{ borderColor: getSliderColor(data.ratting) }}
        tooltip={{ formatter: formatTooltip }}
    />

}