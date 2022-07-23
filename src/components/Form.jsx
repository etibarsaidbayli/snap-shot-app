import React from "react";
import { useState } from "react";

function Form({ tag, setTag }) {
  const [inputText, setInputText] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setTag(inputText);
    setInputText("");
  };

  return (
    <form autoComplete="off" onSubmit={submitForm} className="search-form">
      <input
        onChange={(event) => setInputText(event.target.value)}
        type="text"
        name="search"
        placeholder="Search"
        value={inputText}
      />
      <button className="search-button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default Form;
