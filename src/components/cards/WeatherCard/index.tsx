import React from 'react';
import WeatherIcon from '../../WeatherIcon';
import { DailyWeather } from '../../../types';
import { getWeekday, getCelsiusFromFahrenheit } from '../../../utils';

import './styles.less';

interface PropsType {
  data: DailyWeather;
}

class WeatherCard extends React.Component<PropsType> {
  render() {
    const {
      data: { weather, temp, dt },
    } = this.props;

    return (
      <div className="weather-card">
        <div className="weather-card__week">{getWeekday(dt)}</div>
        <div className="weather-card__icon">
          <WeatherIcon icon={weather[0].icon} />
        </div>
        <div className="weather-card__temp">
          {getCelsiusFromFahrenheit(temp.day)}
        </div>
      </div>
    );
  }
}

export default WeatherCard;
