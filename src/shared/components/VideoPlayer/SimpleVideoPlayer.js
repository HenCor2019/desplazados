import React from 'react';
import PropTypes from 'prop-types';

function SimpleVideoPlayer({ embedId, title }) {
  return (
    <iframe
      className="w-full h-full"
      width="auto"
      height="auto"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      allowFullScreen
      title="Reproductor de YouTube"
    />
  );
}

SimpleVideoPlayer.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default SimpleVideoPlayer;
