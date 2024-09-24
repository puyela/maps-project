import React from 'react';

const SearchBar = () => {
  return (
    <input 
      type="text" 
      placeholder="Search for schools..." 
      className="w-full p-2 border border-gray-300 rounded-md mb-4"
    />
  );
};

export default SearchBar;
