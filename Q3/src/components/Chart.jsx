import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
  ResponsiveContainer,
} from 'recharts';


const Chart = ({ data }) => {
  return (
    <div className='flex-1 glassmorph flex flex-col gap-[1em] justify-between h-[500px] p-[1em] border rounded-[10px] xl:h-[450px] md:h-[300px]'>
      <h3 className='px-1 text-[1.8rem] font-[800] xl:text-[1.6rem] md:text-[1.2rem] sm:text-[1.2rem]'>
        Weekly Temperature
      </h3>
      <ResponsiveContainer
        width='100%'
        height='90%'
        className='lg:text-[.8rem] px-3 md:px-0'
      >
        <ComposedChart
          data={data}
          margin={{
            top: 40,
            right: 0,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey='date'
            scale='point'
            padding={{ left: 40, right: 40 }}
          />
          <YAxis dataKey='avgTemp' tickCount={8} width={30} />
          <Tooltip />
          <Legend />
          <Bar dataKey='avgTemp' fill='#00288b' />
          <Line type='monotone' dataKey='minTemp' stroke='#217eff' strokeWidth={2}/>
          <Line type='monotone' dataKey='maxTemp' stroke='#ff0909' strokeWidth={2}/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
