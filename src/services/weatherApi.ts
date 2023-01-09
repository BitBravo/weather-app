import { WeatherPayload, City } from '../types';

export const getWeather = async ({
  lat,
  lon,
}: City): Promise<WeatherPayload> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
  );

  if (!res.ok) {
    const resData = await res.json();
    throw new Error(resData.message);
  }

  const resData: WeatherPayload = await res.json();
  return resData;
};
