import { useState, useCallback } from 'react';

function useWeatherData() {
  const [weatherData, setWeatherData] = useState({
    currentTemperature: null,
    weeklyAverageTemperature: null,
    weeklyAverageRainfall: null,
    weeklyAverageHumidity: null,
    chartDataSet: [],
  });

  const extractWeatherData = useCallback((data) => {
    const currentTemperature = data[0]?.temp || null;

    const totalTemp = data.reduce(
      (acc, day) => acc + (day.max_temp + day.min_temp) / 2,
      0
    );
    const weeklyAverageTemperature =
      Math.floor(totalTemp / data.length) || null;

    const totalRainfall = data.reduce((acc, day) => acc + day.precip, 0);
    const weeklyAverageRainfall = Math.floor(totalRainfall / data.length) || 0;

    const totalHumidity = data.reduce((acc, day) => acc + day.rh, 0);
    const weeklyAverageHumidity =
      Math.floor(totalHumidity / data.length) || null;

    const chartDataSet = data.map((day) => ({
      avgTemp: parseFloat(((day.max_temp + day.min_temp) / 2).toFixed(2)),
      minTemp: day.min_temp,
      maxTemp: day.max_temp,
      date: day.datetime,
    }));

    setWeatherData({
      currentTemperature,
      weeklyAverageTemperature,
      weeklyAverageRainfall,
      weeklyAverageHumidity,
      chartDataSet,
    });
  }, []);

  return [weatherData, extractWeatherData];
}

export default useWeatherData;
