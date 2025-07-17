import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch(err => {
        setError('Country not found.');
        setLoading(false);
      });
  }, [name]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!country) return null;

  return (
    <div className="details">
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt={country.name.common} />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</p>
    </div>
  );
};

export default CountryDetails;
