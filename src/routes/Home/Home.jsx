// import Layout from "../layout";
import { useState, useEffect, PureComponent } from "react";
import "./Home.scss";
import RadarChartCustom from "../../components/RadarChartCustom/RadarChartCustom";
import LineChartCustom from "../../components/LineChartCustom/LineChartCustom";
import BarChartCustom from "../../components/BarChartsCustom/BarChartsCustom";
import PieChartCustom from "../../components/PieChartCustom/PieChartCustom";

export default function Home() {
    const [userDatas, setUserDatas] = useState({});
    const [userActivity, setUserActivity] = useState({});
    const [userAverageSess, setUserAverageSess] = useState({});
    const [userPerformance, setUserPerformance] = useState({});
    const userId = 12;

    const getKind = (kind) => {
        switch (kind) {
            case 1:
                return "Cardio";
            case 2:
                return "Énergie";
            case 3:
                return "Endurance";
            case 4:
                return "Force";
            case 5:
                return "Vitesse";
            case 6:
                return "Intensité";
            default:
                return "";
        }
    };

    const getDay = (day) => {
        switch (day) {
            case 1:
                return "L";
            case 2:
                return "M";
            case 3:
                return "M";
            case 4:
                return "J";
            case 5:
                return "V";
            case 6:
                return "S";
            case 7:
                return "D";
            default:
                return "";
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3000/user/${userId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setUserDatas(data.data);
                console.log("userdata", data);

                // console.log("Données récupérées avec succès:", data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });

        fetch(`http://localhost:3000/user/${userId}/activity`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const transformedData = data.data.sessions.map((session, index) => ({
                    ...session,
                    day: index + 1
                }));
                setUserActivity(transformedData);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });

        fetch(`http://localhost:3000/user/${userId}/performance`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // console.log("Données récupérées avec succès:", data);
                const formatedDatas = [];
                const perfData = data.data.data;
                // console.log(perfData);
                for (let index = perfData.length - 1; index >= 0; index--) {
                    const obj = {
                        value: perfData[index].value,
                        kind: getKind(perfData[index].kind)
                    };
                    formatedDatas.push(obj);
                }
                setUserPerformance(formatedDatas);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });

        fetch(`http://localhost:3000/user/${userId}/average-sessions`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const formatedSessDatas = [];

                const averageSessData = data.data.sessions;

                for (let index = 0; index < averageSessData.length; index++) {
                    const obj = {
                        day: getDay(averageSessData[index].day),
                        sessionLength: averageSessData[index].sessionLength
                    };
                    formatedSessDatas.push(obj);
                }
                setUserAverageSess(formatedSessDatas);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);
    console.log(userDatas);
    return (
        <div className="homeContainer">
            <div className="homeTitle">Bonjour {}</div>
            <div className="lineChartContainer">
                <LineChartCustom data={userAverageSess} />
            </div>
            <div className="radarChartContainer">
                <RadarChartCustom data={userPerformance} />
            </div>

            <div className="barChartContainer">
                <BarChartCustom data={userActivity} />
            </div>

            <div className="PieChartContainer">
                <PieChartCustom data={userDatas} />
            </div>
        </div>
    );
}
