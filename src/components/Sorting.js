import React from 'react';
import './ByDefault.css';

const Sorting = ({ setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <select onChange={handleSortChange} className="sorting-dropdown">
      <option value="relevance">Relevance</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  );
};

export default Sorting;
