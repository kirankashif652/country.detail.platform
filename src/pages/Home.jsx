import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CountryCard from '../components/CountryCard';



const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    fetch("https://corsproxy.io/?https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,population,languages,currencies")
      .then((res) => res.json())
      .then((data) => {

        console.log("API response data:", data);
        if (Array.isArray(data)) {
          setCountries(data);
          setFiltered(data); 
          setLoading(false);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((err) => {
        setError("Failed to load countries.");
        setLoading(false);
        console.error("Fetch error:", err);
      });
  }, []);

  const handleSearch = (query) => {
    const result = countries.filter((c) =>
      c.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
    setPage(1);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

 
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />

      <div className="grid">
        {paginated.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>{page} / {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
