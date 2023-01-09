import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather, selectCity } from './action';
import { cities } from '../config/cities';
import { City } from '../types/city';
import { WeatherPayload } from '../types/weather';

interface WeatherState {
  loading: boolean;
  city: City;
  weatherInfo: WeatherPayload | null;
  error: boolean;
}

const initialState: WeatherState = {
  loading: true,
  city: cities[0],
  weatherInfo: null,
  error: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.weatherInfo = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state) => {
      state.loading = false;
      state.weatherInfo = null;
      state.error = true;
    });
    builder.addCase(selectCity.fulfilled, (state, action) => {
      state.city = action.payload;
    });
  },
});

export default weatherSlice.reducer;
