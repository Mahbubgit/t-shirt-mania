import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';
import './MyLineChart.css';

const MyLineChart = () => {
    
    const [data] = useChartData();
    return (
        <LineChart width={600} height={500} data={data} margin={{ top: 10, right: 20, bottom: 5, left: 10 }}>
            <Line dataKey="month" />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey={"month"} stroke="white" />
            <YAxis dataKey={"sell"} stroke="white" />
            <Tooltip />
        </LineChart>
    );
};

export default MyLineChart;