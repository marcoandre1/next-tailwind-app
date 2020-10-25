import React from 'react';
import PropTypes from 'prop-types';

const SpeakerSearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="mb-6 ">
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Search by name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
);

SpeakerSearchBar.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.string,
};

export default SpeakerSearchBar;
