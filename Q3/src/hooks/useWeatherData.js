import { useState, useCallback } from 'react';

// The main objective of this hook is to take the response from the API and filter out the stuff we don't need.
function useWeatherData() {
  const [weatherData, setWeatherData] = useState({
    currentTemperature: null,
    weeklyAverageTemperature: null,
    weeklyAverageRainfall: null,
    weeklyAverageHumidity: null,
    chartDataSet: [],
  });

  // This function is triggered when the response data is passed to it.
  // The useCallback hook is used to memoize (persist) the result as long as the "data" passed to it remains the same.
  const extractWeatherData = useCallback((data) => {
    // Extracts current temperature
    const currentTemperature = data[0]?.temp || null;

    // Extracts average temperature from all 7 days and derives its sum (used for next step).
    const totalTemp = data.reduce((acc, day) => acc + (day.max_temp + day.min_temp) / 2, 0);
    // Extracts weekly average temperature
    const weeklyAverageTemperature = Math.floor(totalTemp / data.length) || null;

    // Extracts weekly average rainfall
    const totalRainfall = data.reduce((acc, day) => acc + day.precip, 0);
    const weeklyAverageRainfall = Math.floor(totalRainfall / data.length) || 0;

    // Extracts average humidity
    const totalHumidity = data.reduce((acc, day) => acc + day.rh, 0);
    const weeklyAverageHumidity = Math.floor(totalHumidity / data.length) || null;

    // Extracts data for the chart
    const chartDataSet = data.map((day) => ({
      avgTemp: parseFloat(((day.max_temp + day.min_temp) / 2).toFixed(2)),
      minTemp: day.min_temp,
      maxTemp: day.max_temp,
      date: day.datetime,
    }));

    // Update all the filtered result to the "weatherData" state
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
