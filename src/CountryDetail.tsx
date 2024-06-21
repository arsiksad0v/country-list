import React from 'react';

interface CountryDetailProps {
  countryName: string;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ countryName }) => {
  return <div>Details about {countryName}</div>;
};

export default CountryDetail;
