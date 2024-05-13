import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';

interface ChartData {
  name: string;
  value: number;
}

interface PieSeries {
  data: ChartData[];
  innerRadius: number;
  outerRadius: number;
  colors: string[];
}

interface PieChartProps {
  series: PieSeries[]; // Array of series
}

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  value: number;
  index: number;
  name: string;
}

// Define the custom label rendering function
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
  colors,
  name,
}: LabelProps & { colors: string[] }) => {
  if (name === "Remaining") return null;

  const RADIAN = Math.PI / 180;
  const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5 + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const color = colors[index % colors.length];

  return (
    <text x={x} y={y} fill={color} textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {value}
    </text>
  );
};

const PieChartComponent: React.FC<PieChartProps> = ({ series }) => {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        {series.map((serie, index) => (
          <Pie
            key={index}
            data={serie.data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={serie.innerRadius}
            outerRadius={serie.outerRadius}
            fill="#8884d8"
            labelLine={false}
            label={(props) => renderCustomLabel({...props, colors: serie.colors})} // Pass colors along with other label props
          >
            {serie.data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={serie.colors[idx % serie.colors.length]} />
            ))}
          </Pie>
        ))}
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          height={36}
          formatter={(value, entry) => entry.value !== "Remaining" ? value : null}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
