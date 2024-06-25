import { LineChart, Line, XAxis, YAxis, Tooltip, Scatter } from "recharts";
import "./LineChartCustom.scss";

const LineChartCustom = ({ data }) => {
    return (
        <div className="lineChartContainer">
            <LineChart width={300} height={100} data={data}>
                <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} activeDot={{ stroke: "#ffffff", strokeWidth: 2, r: 10 }} />
                <XAxis
                    dataKey="day"
                    padding={{
                        left: 30,
                        right: 30
                    }}
                />
            </LineChart>
            <div>coucou test</div>
        </div>
    );
};
export default LineChartCustom;
