import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeather } from '../services/weatherApi';
import { City, ErrorMessage } from '../types';

export const fetchWeather = createAsyncThunk(
  'weather/fetchByCity',
  async (city: City, thunkAPI) => {
    try {
      return getWeather(city);
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue({
        error: (error as ErrorMessage)?.message,
      });
    }
  }
);

export const selectCity = createAsyncThunk(
  'weather/selectCity',
  async (city: City, thunkAPI) => {
    try {
      thunkAPI.dispatch(fetchWeather(city));
      return city;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue({
        error: (error as ErrorMessage)?.message,
      });
    }
  }
);
