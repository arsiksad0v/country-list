import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CountryDetailProps {
  countryName: string;
}

interface CountryData {
  capital: string;
  population: number;
  borders: string[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({ countryName }) => {
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => {
        const data = response.data[0];
        const countryInfo = {
          capital: data.capital ? data.capital[0] : "N/A",
          population: data.population,
          borders: data.borders || [],
        };
        setCountryData(countryInfo);
        setError(null);
      })
      .catch(error => {
        console.error("Error fetching country data: ", error);
        setError("Could not fetch country data");
      });
  }, [countryName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{countryName}</h2>
      <p>Capital: {countryData.capital}</p>
      <p>Population: {countryData.population}</p>
      <p>Borders:</p>
      <ul>
        {countryData.borders.length > 0 ? (
          countryData.borders.map(border => (
            <li key={border}>{border}</li>
          ))
        ) : (
          <li>No borders</li>
        )}
      </ul>
    </div>
  );
};

export default CountryDetail;