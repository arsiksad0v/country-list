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

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => {
        const data = response.data[0];
        const countryInfo = {
          capital: data.capital[0],
          population: data.population,
          borders: data.borders || [],
        };
        setCountryData(countryInfo);
      })
      .catch(error => {
        console.error("Error fetching country data: ", error);
      });
  }, [countryName]);

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
        {countryData.borders.map(border => (
          <li key={border}>{border}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetail;

