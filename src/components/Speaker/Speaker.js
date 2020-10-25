import React from 'react';
import PropTypes from 'prop-types';

import SpeakerImage from '../SpeakerImage/SpeakerImage';
import SpeakerFavoriteButton from '../SpeakerFavoriteButton/SpeakerFavoriteButton';

const Speaker = ({
  id,
  bio,
  firstName,
  lastName,
  isFavorite,
  onFavoriteToggle,
}) => (
  <div className="rounded overflow-hidden shadow-lg p-6">
    <div className="grid grid-cols-4 mb-6">
      <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
      <div className="flex justify-end">
        <SpeakerFavoriteButton
          isFavorite={isFavorite}
          onFavoriteToggle={onFavoriteToggle}
        />
      </div>
    </div>
    <div className="mb-6">
      <SpeakerImage id={id} />
    </div>
    <div className="text-gray-600">{bio.substr(0, 70) + '...'}</div>
  </div>
);

Speaker.propTypes = {
  id: PropTypes.string,
  bio: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isFavorite: PropTypes.string,
  onFavoriteToggle: PropTypes.string,
};

export default Speaker;
