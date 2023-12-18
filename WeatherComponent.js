// WeatherComponent.js
import React from 'react';

const WeatherComponent = ({ temperature, description }) => (
  <div>
    <p>Température : {temperature} °C</p>
    <p>Description : {description}</p>
  </div>
);

export default WeatherComponent;
