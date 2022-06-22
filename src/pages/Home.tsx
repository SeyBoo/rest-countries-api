import * as React from 'react';
import Axios from 'axios';

import '../style/Home.css';
import Nav from '../components/Nav/index'
import CardList from '../components/cardList/index'
import { Country } from '../interface/index';

export default function Home(props:any) {

  const [Data, setData] = React.useState<Country[]>([])
  const [filterShow, setfilterShow] = React.useState<boolean>(false)

  React.useEffect(() => {
    Axios.get('https://restcountries.com/v2/all')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  
  const HandleSearch = (value: string) => {
    if (value.length > 0) {
      Axios.get(`https://restcountries.com/v2/name/${value}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } else {
      fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
        },
      ) 
    }
  }
  
  const HandleFilter = (value: string) => {
    if (value.length > 0) {
      Axios.get(`https://restcountries.com/v2/name/${value}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    } else {
      fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result)
        },
      ) 
    }
  }

  return (
      <div>
          <Nav />
          <div className='filter'>
            <span tabIndex={0} className='search-field'>
              <i className="fas fa-search"></i>
              <input type="text" name="country" placeholder='Search for a country...' onChange={event => HandleSearch(event.target.value)}></input>
            </span>
            <span tabIndex={0} className='filter-field'>
              <span onClick={() => setfilterShow(!filterShow)}>
                <h3>Filter by Region</h3>
                {filterShow? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
              </span>
              {filterShow? <ol>
                <li onClick={() => HandleFilter("Africa")}>Africa</li>
                <li onClick={() => HandleFilter("America")}>America</li>
                <li onClick={() => HandleFilter("Asia")}>Asia</li>

                <li onClick={() => HandleFilter("Europe")}>Europe</li>
                <li onClick={() => HandleFilter("Oceania")}>Oceania</li>
              </ol> : null}
            </span>
          </div>
          <CardList countryList={Data} />
        </div>
  );
}