import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyBarChart = () => {
    const [data] = useChartData();
    return (
        <BarChart width={600} height={500} data={data} margin={{ top: 10, right: 20, bottom: 5, left: 10 }}>
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey={"investment"} />
            <YAxis dataKey={"revenue"} />
            <Tooltip />
        </BarChart>
    );
};

export default MyBarChart;