import React, { useState } from 'react';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import './App.css';

const App: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="App">
      <div className="CountryList">
        <CountryList setSelectedCountry={setSelectedCountry} />
      </div>
      <div className="CountryDetail">
        {selectedCountry ? (
          <CountryDetail countryName={selectedCountry} />
        ) : (
          <div>Please select a country</div>
        )}
      </div>
    </div>
  );
};

export default App;