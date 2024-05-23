import Card from './components/Card';
import weatherData from './card-data.json';
import Chart from './components/Chart';
import NotePad from './components/NotePad';

const App = () => {
  return (
    <div className='container px-[1em] min-h-[100vh] flex items-center'>
      <main className='flex flex-1 flex-col gap-[2em]'>
        <section className='flex flex-wrap gap-[2em]'>
          {weatherData.map((data, index) => (
            <Card data={data} key={index} />
          ))}
        </section>
        <section className='flex gap-[2em] flex-wrap'>
          <Chart />
          <NotePad />
        </section>
      </main>
    </div>
  );
};

export default App;
