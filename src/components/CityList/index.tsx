import React from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../../store/action';
import { State, AppDispatch } from '../../store';
import { City } from '../../types';

import { cities } from '../../config/cities';
import './styles.less';

type PropsType = {
  city: City;
  selectCity: (city: City) => void;
};

class CityList extends React.Component<PropsType> {
  render() {
    const { city: selected, selectCity } = this.props;
    return (
      <div className="city-list">
        {cities.map((city: City, index: number) => {
          return (
            <div className="city-list__item" key={index}>
              <span
                onClick={() => selectCity(city)}
                className={selected.name === city.name ? 'active' : ''}
              >
                {city.name}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  city: state.weather.city,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    selectCity: (city: City) => dispatch(selectCity(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
