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
  Cell
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

const pieData1 = [
  { name: 'Group Housing', value: 1000 },
  { name: 'Group Childcare', value: 200 },
  { name: 'Group Transportation', value: 250 },
  { name: 'Group Utilities', value: 500 },
]

const pieData2 = [
  { name: 'Housing 1', value: 1000 },
  { name: 'Childcare 1', value: 100 },
  { name: 'Childcare 2', value: 100 },
  { name: 'Transportation 1', value: 50 },
  { name: 'Transportation 2', value: 200 },
  { name: 'Utilities 1', value: 100 },
  { name: 'Utilities 1', value: 200 },
  { name: 'Utilities 1', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function App() {

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

      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={1000} height={1000}>
          <Pie data={pieData1} dataKey="value" cx="50%" cy="50%" outerRadius={140} fill="#8884d8" />
          <Pie data={pieData2} dataKey="value" cx="50%" cy="50%" innerRadius={160} outerRadius={180} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    </div >
  )
}

export default App
