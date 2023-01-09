import React from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading';
import ErrorView from '../ErrorView';
import TodayWeatherCard from '../cards/TodayCard';
import WeatherCard from '../cards/WeatherCard';
import { AppDispatch, State } from '../../store';
import { fetchWeather } from '../../store/action';
import { City, WeatherPayload } from '../../types';
import './styles.less';

type PropsType = {
  loading: boolean;
  city: City;
  weatherData: WeatherPayload | null;
  fetchWeather: (city: City) => void;
};

class WeatherView extends React.Component<PropsType> {
  componentDidMount() {
    const { city, weatherData, fetchWeather } = this.props;
    if (city && !weatherData) {
      fetchWeather(city);
    }
  }

  render() {
    const { weatherData, loading } = this.props;

    if (loading) return <Loading />;
    if (!weatherData) return <ErrorView />;

    return (
      <div className="weather-view">
        <TodayWeatherCard data={weatherData.current} />
        <div className="weather-view__list">
          {weatherData.daily.slice(0, 4).map((weather, index) => (
            <WeatherCard data={weather} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  loading: state.weather.loading,
  city: state.weather.city,
  weatherData: state.weather.weatherInfo,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchWeather: (city: City) => dispatch(fetchWeather(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);
