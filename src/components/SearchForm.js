import React, { useRef, useState } from "react";

const SearchForm = (props) => {
  const { searchTerm, handleSearchTermChange, handleSubmit } = props;

  const formRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const inputValue = formData.get("searchTerm");
    console.log(inputValue);
    if (inputValue.trim() === "") {
      // If the input is blank, show the warning
      setWarningMessage("Please enter a search term.")
      setShowWarning(true);
    } else {
      // If the input is not blank, hide the warning and proceed with the submit
      setShowWarning(false);
      handleSubmit(inputValue);
    }
  };

  const changeText = (val) => {
    setShowWarning(false);
    setWarningMessage("")
    handleSearchTermChange(val);
  };

  return (
    <div id="form" className={showWarning ? "warning" : ""}>
      <form className="search-form" onSubmit={handleFormSubmit} ref={formRef}>
        <input type="text" value={searchTerm} onChange={(e) => changeText(e.target.value)} placeholder="Search..." className="search-input" name="searchTerm" />
        <button type="submit" className="search-button">
          <img src="./assets/images/icon-search.svg" alt="Search" />
        </button>
      </form>
      <div id="warning-message">{warningMessage}</div>
    </div>
  );
};

export default SearchForm;
