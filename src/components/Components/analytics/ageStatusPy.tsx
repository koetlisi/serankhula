import {Card, Col} from "antd";
import {PieChart} from "@mui/x-charts";

interface PieChartData {
    id: number;
    value: number;
    label: string;
}

const genderData: PieChartData[] = [
    {id: 0, value: 120, label: 'Male'},    // Example data
    {id: 1, value: 100, label: 'Female'},  // Example data
    {id: 2, value: 30, label: 'Other'},    // Example data
];

export const PieChartPeople = () => {
    return <PieChart
        width={300} // Set a fixed width for testing
        height={300} // Set a fixed height for testing
        series={[
            {
                data: genderData,
                innerRadius: 30,
                outerRadius: '80%',
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 360,
            }
        ]}
    />
}
