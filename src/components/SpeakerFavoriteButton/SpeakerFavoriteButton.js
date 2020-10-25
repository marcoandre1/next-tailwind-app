import React from 'react';
import PropTypes from 'prop-types';

const SpeakerFavoriteButton = ({ isFavorite, onFavoriteToggle }) => {
  return (
    <div
      className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}
      onClick={onFavoriteToggle}
    ></div>
  );
};

SpeakerFavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  onFavoriteToggle: PropTypes.bool,
};

export default SpeakerFavoriteButton;
