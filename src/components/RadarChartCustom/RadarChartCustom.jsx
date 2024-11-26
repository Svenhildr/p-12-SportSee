import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./RadarChartCustom.scss";

const getKind = (kind) => {
    switch (kind) {
        case 1:
            return "Intensité";
        case 2:
            return "Vitesse";
        case 3:
            return "Force";
        case 4:
            return "Endurance";
        case 5:
            return "Énergie";
        case 6:
            return "Cardio";
        default:
            return "";
    }
};

const transformRadarChartData = (data) => {
    return data.map((item) => ({
        ...item,
        kind: getKind(item.kind)
    }));
};

const RadarChartCustom = ({ data }) => {
    const transformedData = transformRadarChartData(data);
    return (
        <>
            <ResponsiveContainer width="90%" height="65%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={transformedData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" />
                    <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
};
RadarChartCustom.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired
        })
    ).isRequired
};
export default RadarChartCustom;
