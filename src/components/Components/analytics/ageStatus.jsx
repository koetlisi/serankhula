import {Card, Col} from "antd";
import {BarChart} from "@mui/x-charts";

export const AgeVsEmployedBarChart = () => {
    const employedData = [100, 150, 200, 180, 250, 300];
    const unemployedData = [50, 60, 90, 80, 70, 40];
    const graduates = [50, 60, 90, 80, 70, 40];
    const selfEmployedData = [20, 30, 40, 60, 80, 100];
    const students = [20, 30, 40, 60, 80, 100];
    const ageGroups = ['18-25', '26-35', '36-45', '46-55', '56-65', '66+'];


    return <BarChart
        width={800} // Set width according to your needs
        height={300} // Set height according to your needs
        series={[
            {data: employedData, label: 'Workers', id: 'Workers'},
            {data: unemployedData, label: 'Jobless', id: 'Jobless'},
            {data: selfEmployedData, label: 'Entrepreneurs', id: 'Entrepreneurs'},
            {data: students, label: 'Students', id: 'Students'},
            {data: graduates, label: 'Graduates', id: 'graduates'},
        ]}
        xAxis={[{data: ageGroups, scaleType: 'band'}]}
    />
};
