import logo from "./logo.svg";
import "./App.scss";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import NoDefinitionsFound from "./components/NoDefinitonsFound";
import Definition from "./components/Definition";
import Loader from "./components/Loader";

function App() {
  const defaultWords = ["puzzle", "tranquil", "harmony", "explore", "galaxy", "whisper", "serendipity", "voyage", "echo", "luminous", "mystery", "adventure", "horizon", "twilight", "solitude", "radiant", "enigma", "breeze", "ethereal", "wander"];
  const [font, setFont] = useState("serif");
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [definitionData, setDefinitionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const classNames = clsx([font, "App", { "dark-mode": darkMode }]);
  const handleFontChange = (font) => {
    setFont(font);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
  };

  const changeWord = (word) => {
    setSearchTerm(word);
    fetchWord(word);
  };

  const fetchWord = (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDefinitionData(data);
        } else {
          setDefinitionData(null);
        }
        setLoading(false)
      })
      .catch((err) => console.error(err));
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    fetchWord(searchTerm);
  };

  useEffect(() => {
    const randomWord = defaultWords[Math.floor(Math.random() * defaultWords.length)];
        setSearchTerm(randomWord);
    fetchWord(randomWord);
  }, []);

  return (
    <div className={classNames}>
      <div className="container">
        <Header handleFontChange={handleFontChange} toggleTheme={toggleTheme} theme={darkMode} font={font} />
        <SearchForm handleSearchTermChange={handleSearchTermChange} searchTerm={searchTerm} handleSubmit={handleSubmit} />

        {loading ? <Loader /> : definitionData? <Definition definitionData={definitionData} changeWord={changeWord} /> : <NoDefinitionsFound />}
      </div>
    </div>
  );
}

export default App;
