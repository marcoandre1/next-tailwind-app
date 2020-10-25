import React from 'react';
import PropTypes from 'prop-types';
import { SimpleImg } from 'react-simple-img';

function SpeakerImage({ id }) {
  const imageUrl = `/speakers/speaker-${id}.jpg`;
  return (
    <SimpleImg
      src={imageUrl}
      animationDuration="1"
      width={200}
      height={200}
      applyReactRatio="true"
    />
  );
}

SpeakerImage.propTypes = {
  id: PropTypes.string,
};

export default SpeakerImage;
