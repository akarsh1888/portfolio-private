import React, { useCallback, useState } from "react";

export default function AutocompleteTypehead() {
  const [filteredCities, setFilteredCities] = useState(allCities);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  const handleCityClick = (selectedCity) => {
    setSearchQuery(selectedCity);
    setShowAutocomplete(false);
  };

  const debounce = (callback, waitTime) => {
    let timer;

    return function (...args) {
      if (timer) clearInterval(timer);
      const context = this;
      timer = setTimeout(() => {
        timer = null;
        callback.apply(context, args);
      }, waitTime);
    };
  };

  const filterCities = (query) => {
    setFilteredCities(allCities.filter((city) => city.toLowerCase().includes(query.toLowerCase())));
  };

  // Across each render the debounce function was getting called and each 
  // call it was creating a fresh closed function each having its own value
  // that's why we have to used useCallback hook

  const optimizedFilter = useCallback(debounce(filterCities, 500), []);

  const handleInputChange = (query) => {
    setSearchQuery(query);
    setShowAutocomplete(true);
    optimizedFilter(query);
  };

  return (
    <div>
      <h1>AutocompleteTypehead</h1>
      <input
        type="text"
        placeholder="Type to Search"
        value={searchQuery}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => setShowAutocomplete(true)}
      />
      {showAutocomplete && (
        <ul>
          {filteredCities.map((city) => (
            <li key={city} onClick={() => handleCityClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
