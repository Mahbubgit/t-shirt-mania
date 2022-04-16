import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="line-chart">
                <MyLineChart></MyLineChart>
                <h2>Line Chart</h2>
            </div>
            <div className="bar-chart">
                <MyBarChart></MyBarChart>
                <h2>Bar Chart</h2>
            </div>
            <div className="pie-chart">
                <MyPieChart></MyPieChart>
                <h2>Pie Chart</h2>
            </div>
        </div>
    );
};

export default Dashboard;