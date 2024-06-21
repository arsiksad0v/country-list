import React from 'react';

interface CountryListProps {
  setSelectedCountry: (country: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ setSelectedCountry }) => {
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan"];

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country} onClick={() => setSelectedCountry(country)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
