import { useState, useEffect } from 'react';
import axios from 'axios';
import LocationInput from '../components/LocationInput';
import Card from '../components/Card';
import Chart from '../components/Chart';
import useDateRange from '../hooks/useDateRange';
import useWeatherData from '../hooks/useWeatherData';

const WeatherSection = () => {
  const [location, setLocation] = useState('Manipal');
  // Below are two user defined hooks
  const [weatherData, extractWeatherData] = useWeatherData(); // Filters weather data and gives us what is required.
  const { today, pastDate } = useDateRange(); // Gives us two dates, both are formated as per API requirements.

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location && today && pastDate) {
        // API call
        await axios
          .get(
            `https://api.weatherbit.io/v2.0/history/daily?city=${location}&start_date=${pastDate}&end_date=${today}&key=${
              import.meta.env.VITE_API_KEY
            }`
          )
          .then((response) => {
            // The response is passed to the below hook which will filter the data
            extractWeatherData(response.data.data);
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      }
    };
    fetchWeatherData();
  }, [extractWeatherData, location, pastDate, today]); // This will run anytime the value of these dependencies change

  return (
    <>
      <LocationInput setLocation={setLocation} />
      <section className='grid gap-[2em] grid-cols-4 xl:grid-cols-2 xl:gap-[1em] md:grid-cols-1'>
        <Card
          data={weatherData?.currentTemperature}
          title='Current Temperature'
          icon='🌡️'
        />
        <Card
          data={weatherData?.weeklyAverageTemperature}
          title='Weekly Average Temperature'
          icon='🌤️'
        />
        <Card
          data={weatherData?.weeklyAverageRainfall}
          title='Weekly Average Rainfall'
          icon='🌧️'
        />
        <Card
          data={weatherData?.weeklyAverageHumidity}
          title='Weekly Average Humidity'
          icon='💧'
        />
      </section>
      <section className='grid gap-[2em] grid-cols-21 xl:gap-[1em] xl:grid-cols-1'>
        <Chart data={weatherData?.chartDataSet}/>
      </section>
    </>
  );
};

export default WeatherSection;
