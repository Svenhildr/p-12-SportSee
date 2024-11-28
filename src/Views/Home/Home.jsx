import { useState, useEffect, PureComponent } from "react";
import { useParams } from "react-router-dom";
import { fetchUserData, fetchUserAverage, fetchUserActivity, fetchUserPerf } from "../../api/apiService";
import PropTypes from "prop-types";
import "./Home.scss";
import RadarChartCustom from "../../components/RadarChartCustom/RadarChartCustom";
import LineChartCustom from "../../components/LineChartCustom/LineChartCustom";
import BarChartCustom from "../../components/BarChartsCustom/BarChartsCustom";
import PieChartCustom from "../../components/PieChartCustom/PieChartCustom";
import UserHeader from "../../components/User/User";
import UserIntakes from "../../components/UserIntakes/UserIntakes";

export default function Home() {
    const { userId } = useParams();
    const [userDatas, setUserDatas] = useState({ userInfos: {}, keyData: {} });
    const [userActivity, setUserActivity] = useState([]);
    const [userAverageSess, setUserAverageSess] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);
    const [useMock, setUseMock] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await fetchUserData(userId, useMock);
                setUserDatas(userData);

                const userAvgSessions = await fetchUserAverage(userId, useMock);
                setUserAverageSess(userAvgSessions);

                const userAct = await fetchUserActivity(userId, useMock);
                setUserActivity(userAct);

                const userPerf = await fetchUserPerf(userId, useMock);
                setUserPerformance(userPerf);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userId, useMock]);
    if (!userDatas.userInfos.firstName || !userDatas.keyData.calorieCount) {
        return <div>Loading...</div>;
    }

    return (
        <div className="homeContainer">
            <UserHeader firstName={userDatas.userInfos ? userDatas.userInfos.firstName : "Utilisateur"} />
            <div className="barChartContainer">
                <BarChartCustom data={userActivity} />
            </div>

            <div className="lineChartContainer">
                <LineChartCustom data={userAverageSess} />
            </div>

            <div className="radarChartContainer">
                <RadarChartCustom data={userPerformance} />
            </div>

            <div className="pieChartContainer">
                <PieChartCustom data={userDatas} />
            </div>

            <div className="userIntakesContainer">
                <UserIntakes data={userDatas} />
            </div>
        </div>
    );
}
