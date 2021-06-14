import React from 'react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, Tooltip, YAxis, XAxis } from 'recharts';

const ColorMap = {
  purple: '#8884d8',
  orange: '#ffa500',
  blue: '#48D8E9',
} as const;

interface ChartData {
  uv: number;
  name: string;
}

interface ChartProps {
  data: ChartData[];
  width?: number;
  height?: number;
  color: keyof typeof ColorMap;
  chartType: 'bar' | 'area' | 'line';
}

const Chart: React.FC<ChartProps> = ({ data, width, height, color, chartType }) => {
  if (chartType === 'bar') {
    return (
      <BarChart width={width ? width : 400} height={width ? width : 300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill={color} />
      </BarChart>
    );
  } else if (chartType === 'line') {
    return (
      <LineChart width={width ? width : 400} height={height ? height : 300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke={color} strokeWidth={2} />
      </LineChart>
    );
  } else {
    return (
      <AreaChart
        width={width ? width : 400}
        height={height ? height : 300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke={color} fill={color} />
      </AreaChart>
    );
  }
};

export default Chart;
