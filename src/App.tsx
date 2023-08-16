import React from 'react';
import { useState } from 'react';
import './App.css'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  PieChart,
  Pie,
  Sector
} from 'recharts';

const data = [
  {
    month: 'Jan',
    income: 5000,
    expenses: 2000,
  },
  {
    month: 'Feb',
    income: 5200,
    expenses: 2500,
  },
  {
    month: 'Mar',
    income: 5400,
    expenses: 1500,
  },
  {
    month: 'Apr',
    income: 5600,
    expenses: 5000,
  },
  {
    month: 'May',
    income: 5800,
    expenses: 2000,
  },
  {
    month: 'June',
    income: 6000,
    expenses: 2000,
  },
  {
    month: 'July',
    income: 7000,
    expenses: 4000,
  },
  {
    month: 'Aug',
    income: 8000,
    expenses: 6000,
  },
  {
    month: 'Sept',
    income: 9000,
    expenses: 6000,
  },
  {
    month: 'Oct',
    income: 10000,
    expenses: 6000,
  },
  {
    month: 'Nov',
    income: 15000,
    expenses: 10000,
  },
  {
    month: 'Dec',
    income: 5000,
    expenses: 11000,
  },
];


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="white">{`Monthly Amount: $${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Expense Ratio ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expenseData, setExpenseData] = useState([
    { name: 'Housing', value: 1000 },
    { name: 'Childcare', value: 400 },
    { name: 'Transportation', value: 500 },
    { name: 'Utilities', value: 500 },
  ])

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  function submitIncome() {

  }


  // with this function i want to
  // add onto the value of the expense depending on which category

  // need to access the expense data
    // change the value of the key based on the inputs
    // access the state and update 
  function submitExpense(amount: number, category: string) {
    
  }

  return (
    <div className='project-container'>
      <h1>Your Yearly Income to Budget</h1>
      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          width={1000}
          height={1000}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="expenses" stroke="#d45c53" fill="#d45c53" />
          <Line type="monotone" dataKey="income" stroke="#5aa83b" fill="#5aa83b" />
        </LineChart>
      </ResponsiveContainer>

      <span className='line'></span>
      <h1>Pie Chart with Inputs</h1>

      <div className='pie-container'>
        <form action="">
          <label htmlFor="income">Income</label>
          <input type="text" />
          <button onClick={submitIncome} type='submit'>Submit</button>
        </form>

        <ResponsiveContainer width="100%" height={600}>
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={expenseData}
              cx="50%"
              cy="50%"
              innerRadius={120}
              outerRadius={155}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>

        <form action="">
          <label htmlFor="expenses">Expense</label>
          <select name="expenses" id="expenses">
            <option value="housing">Housing</option>
            <option value="childcare">Childcare</option>
            <option value="transportation">Transportation</option>
            <option value="utilities">Utilities</option>
          </select>
          <label htmlFor="amount">Amount</label>
          <input type="text" />
          <button onClick={submitExpense} type='submit'>Submit</button>
        </form>
      </div>
    </div >
  )
}

export default App
