import React from 'react';
import WeatherIcon from '../../WeatherIcon';
import { getCelsiusFromFahrenheit } from '../../../utils';
import { CurrentWeather } from '../../../types';

import './styles.less';

interface PropsType {
  data: CurrentWeather;
}

class TodayWeatherCard extends React.Component<PropsType> {
  render() {
    const {
      data: { weather, temp },
    } = this.props;

    return (
      <div className="today-weather-card">
        <div className="today-weather-card__date">Today</div>
        <div className="today-weather-card--body">
          <WeatherIcon icon={weather[0].icon} />
          <div className="today-weather-card--text">
            <div className="today-weather-card--body__temp">
              {getCelsiusFromFahrenheit(temp)}
            </div>
            <div className="today-weather-card--body__name">
              {weather[0].main}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodayWeatherCard;
