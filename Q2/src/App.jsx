import Card from './components/Card';
import Chart from './components/Chart';
import NotePad from './components/NotePad';
import weatherData from './card-data.json';

const App = () => {
  return (
    <div className='container px-[1em] min-h-[100vh] flex items-center sm:px-2'>
      <main className='flex flex-1 flex-col gap-[2em] my-4 xl:gap-[1em]'>
        <section className='grid gap-[2em] grid-cols-4 xl:grid-cols-2 xl:gap-[1em] md:grid-cols-1'>
          {weatherData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </section>
        <section className='grid gap-[2em] grid-cols-2 xl:gap-[1em] xl:grid-cols-1'>
          <Chart />
          <NotePad />
        </section>
      </main>
    </div>
  );
};

export default App;
