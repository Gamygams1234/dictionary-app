import React from "react";

const PlayButton = ({ audioSrc }) => {
  const handlePlay = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  return (
    <div onClick={handlePlay} className="play-button">
      <img src="./assets/images/icon-play.svg" alt="Play" />
    </div>
  );
};

export default PlayButton;