import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WeatherView from './components/WeatherView';
import CityList from './components/CityList';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <CityList />
          <WeatherView />
        </div>
      </Provider>
    );
  }
}

export default App;
