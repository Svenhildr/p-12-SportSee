import { BarChart, XAxis, YAxis, Bar, CartesianGrid, Legend, Tooltip } from "recharts";

const BarChartCustom = ({ data }) => {
    console.log(data);
    return (
        <>
            <BarChart width={500} height={300} data={data} barCategoryGap={10}>
                <XAxis dataKey="day" />
                <YAxis yAxisId="right" dataKey="kilogram" orientation="right" domain={["dataMin - 2", "dataMax + 1"]} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" dataKey="calories" orientation="left" domain={["dataMin - 50", "dataMax + 50"]} axisLine={false} tickLine={false} tick={false} />
                <Bar dataKey="kilogram" yAxisId="right" name="poids (kg)" fill="#282D30" barSize={10} radius={[6, 6, 0, 0]} />
                <Bar dataKey="calories" yAxisId="left" name="calories brulées (kcal)" fill="#E60000" barSize={10} radius={[6, 6, 0, 0]} />
                <Tooltip />
                <Legend verticalAlign="top" align="right" iconType="circle" />
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            </BarChart>
        </>
    );
};

export default BarChartCustom;
