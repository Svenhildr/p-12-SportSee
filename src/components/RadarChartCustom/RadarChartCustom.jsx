// import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "./RadarChartCustom.scss";

const RadarChartCustom = ({ data }) => {
    return (
        <div className="chart">
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" /* tick={{ fill: "white" }} */ />
                <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};
export default RadarChartCustom;
