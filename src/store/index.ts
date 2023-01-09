import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { weatherSlice } from './slice';
export { fetchWeather, selectCity } from './action';
export const { setCity } = weatherSlice.actions;

const reducer = combineReducers({
  weather: weatherSlice.reducer,
});

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
  },
});

export default store;

export type State = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
