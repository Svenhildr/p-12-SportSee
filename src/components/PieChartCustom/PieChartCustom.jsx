import { PieChart, Pie, Cell } from "recharts";

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

    return (
        <>
            <PieChart width={300} height={300}>
                <Pie data={formattedData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
                    {formattedData.map((entry, index) => {
                        return <Cell key={index} fill={colors[index % colors.length]} />;
                    })}
                </Pie>
            </PieChart>
        </>
    );
};

export default PieChartCustom;
