/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import { motion } from 'framer-motion';

import { Country } from '../../interface/index';
import Card from '../Card/index';

interface countryProps{
  countryList: Country[];
}
const CardList: React.FC<countryProps> = ({ countryList }) => (
  <ul className="country_container">
    {
        countryList ? countryList.map(({
          name, region, population, capital, flag,
        }: any) => (
          <motion.li
            key={name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card
              name={name}
              region={region}
              population={population}
              capital={capital}
              flag={flag}
            />
          </motion.li>
        )) : null
      }
  </ul>
);

export default CardList;
