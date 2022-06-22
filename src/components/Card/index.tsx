import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Card(props:any) {
  const {
    name,
    flag,
    population,
    region,
    capital,
  } = props;
  return (
    <Link to={`details/${name}`}>
      <div className="card">
        <span className="card_img">
          <img src={flag} alt={name} />
        </span>
        <span className="card_info">
          <h3>{name}</h3>
          <ol>
            <li>
              <strong>Population:</strong>
              {population}
            </li>
            <li>
              <strong>Region:</strong>
              {region}
            </li>
            <li>
              <strong>Capital:</strong>
              {capital}
            </li>
          </ol>
        </span>
      </div>
    </Link>
  );
}
