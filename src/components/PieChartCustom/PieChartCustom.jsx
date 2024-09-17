import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./PieChartCustom.scss";

const getScore = (data) => {
    return data.todayScore ? data.todayScore : data.score;
};

const PieChartCustom = ({ data }) => {
    const formattedData = [
        {
            name: "score",
            value: getScore(data)
        },
        {
            name: "reste",
            value: 1 - getScore(data)
        }
    ];

    const colors = ["#ff0000", "#fbfbfb"];
    const scorePercentage = getScore(data) * 100;

    return (
        <>
            <div className="scoreContainer">
                <h3 className="scoreTitle">Score</h3>
            </div>
            <ResponsiveContainer width="90%" height="80%">
                <PieChart>
                    <Pie
                        data={[{ value: 100 }]}
                        innerRadius="00%"
                        outerRadius="90%"
                        startAngle={180}
                        endAngle={-180}
                        fill="#FFFFFF" // Remplissage blanc pour imiter l'intérieur du pie
                    />
                    <Pie data={formattedData} dataKey="value" nameKey="name" innerRadius="80%" outerRadius="90%" startAngle={180} endAngle={-180}>
                        {formattedData.map((entry, index) => {
                            return <Cell key={index} fill={colors[index % colors.length]} cornerRadius={100} />;
                        })}
                    </Pie>
                </PieChart>
                <div className="scoreText">
                    <p>
                        {scorePercentage}% <span> de votre objectif</span>
                    </p>
                </div>
            </ResponsiveContainer>
        </>
    );
};

PieChartCustom.propTypes = {
    data: PropTypes.shape({
        todayScore: PropTypes.number,
        score: PropTypes.number
    }).isRequired
};

export default PieChartCustom;
