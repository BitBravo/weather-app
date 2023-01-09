export interface Weather {
  id: number;
  main: string;
  icon: string;
  description: string;
}

export interface CurrentWeather {
  dt: number;
  temp: number;
  weather: Weather[];
}

export interface DailyWeather {
  weather: Weather[];
  temp: {
    day: number;
  };
  dt: number;
}

export interface WeatherPayload {
  current: CurrentWeather;
  daily: DailyWeather[];
}
