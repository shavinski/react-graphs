import './App.css'
import {
  LineChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line
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


function App() {

  return (
    <div>
      <h1>Your Yearly Income to Budget</h1>
      <ResponsiveContainer width="100%" height={400}>
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
    </div>
  )
}

export default App
