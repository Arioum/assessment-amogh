import WeatherSection from './layouts/WeatherSection';
import NotePad from './components/NotePad';

const App = () => {
  return (
    <div className='container px-[1em] min-h-[100vh] flex items-center sm:px-2'>
      <main className='flex flex-1 flex-col gap-[2em] my-4 xl:gap-[1em]'>
        <WeatherSection />
        <NotePad />
      </main>
    </div>
  );
};

export default App;
