

import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`} className="card">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <p>{country.name.common}</p>
    </Link>
  );
};

export default CountryCard;
