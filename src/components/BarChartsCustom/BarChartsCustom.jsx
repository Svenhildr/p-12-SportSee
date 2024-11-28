import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./BarChartCustom.scss";

const getDay = (day) => {
    switch (day) {
        case 1:
            return "1";
        case 2:
            return "2";
        case 3:
            return "3";
        case 4:
            return "4";
        case 5:
            return "5";
        case 6:
            return "6";
        case 7:
            return "7";
        default:
            return "";
    }
};

const tranformBarChartData = (data) => {
    return data.map((session, index) => ({
        ...session,
        day: getDay(index + 1)
    }));
};

const BarChartCustom = ({ data }) => {
    const transformedData = tranformBarChartData(data);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="customTooltip">
                    <p className="poids">{`${payload[0].value} kg`}</p>
                    <p className="kcals">{`${payload[1].value} kcal`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            <h3 className="dailyTitle">Activité quotidienne</h3>
            <ResponsiveContainer width="97%" height="80%">
                <BarChart data={transformedData} barCategoryGap={10}>
                    <CartesianGrid strokeDasharray="3 " horizontal={true} vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis
                        yAxisId="right"
                        dataKey="kilogram"
                        orientation="right"
                        domain={[(dataMin) => Math.floor(dataMin - 1), (dataMax) => Math.ceil(dataMax + 1)]}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis yAxisId="left" dataKey="calories" orientation="left" domain={["dataMin - 50", "dataMax + 50"]} axisLine={false} tickLine={false} tick={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="top" align="right" iconType="circle" />
                    <Bar dataKey="kilogram" yAxisId="right" name="poids (kg)" fill="#282D30" barSize={6} radius={[6, 6, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="left" name="calories brulées (kcal)" fill="#E60000" barSize={6} radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

BarChartCustom.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string.isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired
        })
    ).isRequired
};

export default BarChartCustom;
