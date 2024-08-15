import React, { useEffect, useState } from "react";
import PlayButton from "./PlayButton";

const Definition = ({ definitionData, changeWord }) => {
  const { word, phonetic, phonetics, meanings, sourceUrls } = definitionData[0];
  const [audio, setAudio] = useState("");
  const [phoneticDisplay, setPhoneticDisplay] = useState("");
  useEffect(() => {
    // Clear the audio state before setting the new one
    setAudio("");


    const foundAudio = phonetics.find((item) => item.audio !== "");
    if (foundAudio) {
      setAudio(foundAudio.audio);
    }

    const foundDisplay = phonetics.find((item) => item.text !== "");
    if (foundDisplay) {
      setPhoneticDisplay(foundDisplay.text);
    }
  }, [definitionData]);

  return (
    <div className="definition-container bg-white">
      <div className="top">
        <div className="word-info">
          <h2 className="word text-black">{word}</h2>
          <p className="phonetic text-purple">{phoneticDisplay}</p>
        </div>

        {audio && (
      <PlayButton audioSrc={audio} />
        )}
      </div>

      {meanings.map((meaning, index) => (
        <div key={index} className="meaning-section">
          <h3 className="part-of-speech text-black mb-1">{meaning.partOfSpeech}</h3>
          <h3 className ="text-medium-gray">Meaning</h3>
          <ul className="definitions">
            {meaning.definitions.map((definition, i) => (
              <li key={i}>
                <p className="text-black">{definition.definition}</p>
                {definition.example && <p className="example text-medium-gray">"{definition.example}"</p>}
              </li>
            ))}
          </ul>
          {meaning.synonyms.length > 0 && (
            <div className="synonyms">
              <strong className="text-medium-gray">Synonyms: </strong>
              {meaning.synonyms.map((word, index) => {
                return (
                  <span key={index}>
                    <span
                      className="synonym text-purple"
                      onClick={() => {
                        changeWord(word);
                      }}
                    >
                      {word}
                    </span>
                    {/* Add a comma after each word except the last one */}
                    <span className="space">
                    {index < meaning.synonyms.length - 1 && ","}
                </span>
                  </span>
                );
              })}
            </div>
          )}
        </div>
      ))}
      <div className="source">
        <strong className="text-black">Source: </strong>
        {sourceUrls.map((url, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Definition;
