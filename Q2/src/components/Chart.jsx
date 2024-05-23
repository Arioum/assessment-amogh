import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Monday',
    avgTemp: 31,
  },
  {
    name: 'Tuesday',
    avgTemp: 30,
  },
  {
    name: 'Wednesday',
    avgTemp: 30,
  },
  {
    name: 'Thursday',
    avgTemp: 31,
  },
  {
    name: 'Friday',
    avgTemp: 30,
  },
  {
    name: 'Saturday',
    avgTemp: 31,
  },
  {
    name: 'Sunday',
    avgTemp: 32,
  },
];

const Chart = () => {
  return (
    <div className='min-w-[400px] flex-1 flex flex-col justify-between h-[500px] p-[1em] border rounded-[10px] shadow-[0px_0px_8px_1px_#e2e8f0]'>
      <h3 className='px-1 text-[1.8rem] font-[800]'>Weekly Average Temperature</h3>
      <ResponsiveContainer width='100%' height='80%'>
        <BarChart
          width={150}
          height={40}
          data={data}
          margin={{
            top: 5,
            right: 30,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey='name'
            scale='point'
            padding={{ left: 60, right: 60 }}
          />
          <YAxis dataKey='avgTemp' tickCount={8} />
          <Tooltip />
          {/* <Legend /> */}
          {/* <CartesianGrid strokeDasharray='3 3' /> */}
          <Bar
            // name='Average Temperature (7 days)'
            dataKey='avgTemp'
            fill='#8884d8'
            minPointSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
