import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyPieChart = () => {
    const [data] = useChartData();
    return (
        <PieChart width={600} height={500}>
            <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data} dataKey="month" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            <Tooltip />
        </PieChart>
    );
};

export default MyPieChart;