import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Monday',
    avgTemp: 31,
  },
  {
    name: 'Tuesday',
    avgTemp: 25,
  },
  {
    name: 'Wednesday',
    avgTemp: 21,
  },
  {
    name: 'Thursday',
    avgTemp: 26,
  },
  {
    name: 'Friday',
    avgTemp: 30,
  },
  {
    name: 'Saturday',
    avgTemp: 29,
  },
  {
    name: 'Sunday',
    avgTemp: 34,
  },
];

const Chart = () => {
  return (
    <div className='flex-1 flex flex-col gap-[1em] justify-between h-[500px] p-[1em] border rounded-[10px] shadow-[0px_0px_8px_1px_#e2e8f0] xl:h-[450px] md:h-[300px]'>
      <h3 className='px-1 text-[1.8rem] font-[800] xl:text-[1.6rem] md:text-[1.2rem] sm:text-[1.2rem]'>
        Weekly Average Temperature
      </h3>
      <ResponsiveContainer
        width='100%'
        height='90%'
        className='lg:text-[.8rem] px-3 md:px-0'
      >
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey='name'
            scale='point'
            padding={{ left: 40, right: 40 }}
          />
          <YAxis dataKey='avgTemp' tickCount={8} width={30} />
          <Tooltip />
          <Bar dataKey='avgTemp' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
