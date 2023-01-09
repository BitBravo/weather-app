import React from 'react';
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiDust,
  WiFog,
} from 'weather-icons-react';

import './styles.less';

type PropsType = {
  icon: string;
  color?: string;
  size?: number;
};

class WeatherIcon extends React.Component<PropsType> {
  static defaultProps = {
    size: 24,
    color: '#7eb5b5',
  };

  render() {
    const { icon, color, size } = this.props;

    switch (icon) {
      case '01d':
        return <WiDaySunny size={size} color={color} />;
      case '02d':
        return <WiDayCloudy size={size} color={color} />;
      case '03d':
        return <WiCloudy size={size} color={color} />;
      case '04d':
        return <WiCloudy size={size} color={color} />;
      case '09d':
        return <WiRain size={size} color={color} />;
      case '09n':
        return <WiRain size={size} color={color} />;
      case '10n':
        return <WiRain size={size} color={color} />;
      case '10d':
        return <WiRain size={size} color={color} />;
      case '13n':
        return <WiRain size={size} color={color} />;
      case '11d':
        return <WiThunderstorm size={size} color={color} />;
      case '50d':
        return <WiDust size={size} color={color} />;
      case '50n':
        return <WiFog size={size} color={color} />;
      default:
        return <WiDaySunny size={size} color={color} />;
    }
  }
}

export default WeatherIcon;
