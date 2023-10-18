
import React from 'react';
import "./css/Barchart.css";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', sale: 102.56 },
  { month: 'Feb', sale: 98.34 },
  { month: 'Mar', sale: 78.12 },
  { month: 'Apr', sale: 52.56 },
  { month: 'May', sale: 64.34 },
  { month: 'Jun', sale: 68.31 },
  { month: 'Jul', sale: 61.23 },
  { month: 'Aug', sale: 52.56 },
  { month: 'Sep', sale: 48.34 },
  { month: 'Oct', sale: 54.34 },
  { month: 'Nov', sale: 58.34 },
  { month: 'Dec', sale: 92.56 },
];

const Barchart = () => {
  return (
    <div>
      {/* ResponsiveContainer ensures the chart adapts to its parent container */}
      <ResponsiveContainer width="100%" height={300}>
        {/* BarChart component for rendering the bar chart */}
        <BarChart data={data} margin={{ top: 0, right: 10, bottom: 70, left: 10 }}>
          {/* XAxis component for rendering the X-axis */}
          <XAxis dataKey="month" />
          {/* Bar component for rendering the bars */}
          <Bar dataKey="sale" fill="#85adad" />
          {/* Tooltip component for displaying information on hover */}
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
