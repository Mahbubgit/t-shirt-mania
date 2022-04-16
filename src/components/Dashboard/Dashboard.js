import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="chart">
                <MyLineChart></MyLineChart>
                <h2>Line Chart [Month vs Sell]</h2>
            </div>
            <div className="chart">
                <MyBarChart></MyBarChart>
                <h2>Bar Chart [Investment vs Revenue]</h2>
            </div>
            <div className="chart">
                <MyPieChart></MyPieChart>
                <h2>Pie Chart [Month vs Revenue]</h2>
            </div>
        </div>
    );
};

export default Dashboard;