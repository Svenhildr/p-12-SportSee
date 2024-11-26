import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./LineChartCustom.scss";

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

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="intro">{`${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
};
const CustomCursor = ({ points, width, height }) => {
    const { x, y } = points[0];
    return <rect x={x} y={y - 5} width={235} height={height + 40} fill="rgba(0, 0, 0, 0.1)" stroke="#8884d8" strokeWidth={0} />;
};

const transformLineChartData = (data) => {
    return data.map((item) => ({
        ...item,
        day: getDay(item.day)
    }));
};

const LineChartCustom = ({ data }) => {
    const transformedData = transformLineChartData(data);
    return (
        <>
            <h3 className="averageTitle">Durée moyenne des sessions</h3>
            <ResponsiveContainer width="90%" height="65%">
                <LineChart width={300} height={305} data={transformedData}>
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} dot={false} activeDot={{ stroke: "#ffffff", strokeWidth: 2, r: 5 }} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        stroke="#ffffff"
                        padding={{
                            left: 15,
                            right: 15
                        }}
                    />
                    <YAxis domain={[0, "dataMax + 15"]} hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};

LineChartCustom.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number.isRequired,
            sessionLength: PropTypes.number.isRequired
        })
    ).isRequired
};
export default LineChartCustom;
