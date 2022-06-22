/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

import Nav from '../components/Nav/index';
import '../style/CardDetail.css';
import { Country } from '../interface/index';

export default function CardDetails() {
  const [Data, setData] = React.useState<Country[]>([]);

  const location = useLocation();
  const name = location.pathname.substr(9);

  React.useEffect(() => {
    Axios.get(`https://restcountries.com/v2/name/${name}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className="card_details">
      <Nav />
      <div className="container">
        <a href="/" className="back">
          <i className="fas fa-long-arrow-alt-left" />
          <span>Back</span>
        </a>
        {Data.map((r) => (
          <section key={r.name}>
            <aside className="flag">
              <img src={r.flag} alt={r.name} />
            </aside>
            <aside className="content">
              <div>
                <h2>{r.name}</h2>
                <span className="content-variableData.dataMore">
                  <span>
                    <p>
                      <strong>
                        Native Name:
                        {r.nativeName}
                      </strong>
                      {' '}
                    </p>
                    <p>
                      <strong>
                        Population:
                        {r.population}
                      </strong>
                      {' '}
                    </p>
                    <p>
                      <strong>Region:</strong>
                      {' '}
                      {r.region}
                    </p>
                    <p>
                      <strong>Sub Region:</strong>
                      {' '}
                      {r.subregion}
                    </p>
                  </span>
                  <span>
                    <p>
                      <strong>Top Level Domain:</strong>
                      {' '}
                      {r.topLevelDomain}
                    </p>
                    <ol className="list-container">
                      <p><strong>Currencies:</strong></p>
                      {r.currencies.map((rc) => <p key={rc.code}>{rc.code}</p>)}
                    </ol>
                    <ol className="list-container">
                      <p><strong>Languages:</strong></p>
                      {r.languages.map((rl) => <p key={rl.name} className="language-item">{rl.name}</p>)}
                    </ol>

                  </span>

                </span>
              </div>
              <span className="countries">

                {r.regionalBlocs != null
                  ? (
                    <>
                      <h3>Borders Countries:</h3>
                      {r.regionalBlocs.map((borderCountry) => (
                        <p
                          key={borderCountry.name}
                        >
                          {borderCountry.name}
                        </p>
                      ))}
                    </>
                  ) : null}
              </span>
            </aside>
          </section>
        ))}
      </div>
    </div>
  );
}
