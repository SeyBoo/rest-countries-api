/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CountrieDetails from './pages/CountrieDetails';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CountrieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
