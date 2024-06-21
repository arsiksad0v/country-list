import React, { useState } from 'react';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="App">
      <CountryList setSelectedCountry={setSelectedCountry} />
      {selectedCountry ? (
        <CountryDetail countryName={selectedCountry} />
      ) : (
        <div>Please select a country</div>
      )}
    </div>
  );
};

export default App;