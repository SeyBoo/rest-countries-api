import * as React from 'react';
import Axios from 'axios';

import '../style/Home.css';
// @ts-ignore
import Nav from '../components/Nav/index.tsx';
// @ts-ignore
import CardList from '../components/cardList/index.tsx';
// @ts-ignore
import { Country } from '../interface/index.ts';

export default function Home() {
  const [Data, setData] = React.useState<Country[]>([]);
  const [filterShow, setfilterShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    Axios.get('https://restcountries.com/v2/all')
      .then((res) => setData(res.data))
      .catch((err) => { throw err; });
  }, []);

  const HandleSearch = (value: string) => {
    if (value.length > 0) {
      Axios.get(`https://restcountries.com/v2/name/${value}`)
        .then((res) => setData(res.data))
        .catch((err) => { throw err; });
    }
  };

  const HandleFilter = (value: string) => {
    if (value.length > 0) {
      Axios.get(`https://restcountries.com/v2/name/${value}`)
        .then((res) => setData(res.data))
        .catch((err) => { throw err; });
    }
  };
  return (
    <div>
      <Nav />
      <div className="filter">
        <span className="search-field">
          <i className="fas fa-search" />
          <input type="text" name="country" placeholder="Search for a country..." onChange={(event) => HandleSearch(event.target.value)} />
        </span>
        <span className="filter-field">
          <button
            onClick={() => setfilterShow(!filterShow)}
            type="button"
          >
            <h3>Filter by Region</h3>
            {filterShow ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />}
          </button>
          {filterShow ? (
            <ol>
              <li>
                <button
                  onClick={() => HandleFilter('Africa')}
                  type="button"
                >
                  Africa
                </button>
              </li>
              <li>
                <button
                  onClick={() => HandleFilter('America')}
                  type="button"
                >
                  America
                </button>
              </li>
              <li>
                <button
                  onClick={() => HandleFilter('Asia')}
                  type="button"
                >
                  Asia
                </button>
              </li>

              <li>
                <button
                  onClick={() => HandleFilter('Europe')}
                  type="button"
                >
                  Europe
                </button>
              </li>
              <li>
                <button
                  onClick={() => HandleFilter('Oceania')}
                  type="button"
                >
                  Oceania
                </button>
              </li>
            </ol>
          ) : null}
        </span>
      </div>
      <CardList countryList={Data} />
    </div>
  );
}
