// __tests__/WeatherComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeatherComponent from '../WeatherComponent'; // Assurez-vous de mettre le bon chemin

test('affiche correctement les informations météorologiques', () => {
  const temperature = 25;
  const description = 'Ensoleillé';

  render(<WeatherComponent temperature={temperature} description={description} />);

  // Assurez-vous d'ajuster ces sélecteurs en fonction de votre implémentation réelle
  expect(screen.getByText(`Température : ${temperature} °C`)).toBeInTheDocument();
  expect(screen.getByText(`Description : ${description}`)).toBeInTheDocument();
});
