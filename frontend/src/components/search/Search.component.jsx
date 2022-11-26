import React from "react";
import {
    SearchForm,
    SearchButton,
    SearchInput,
  } from "./Search.styles";


function Search() {
  return (
    <SearchForm>
      <SearchButton>
        <span className="material-symbols-outlined">search</span>
      </SearchButton>
      <SearchInput placeholder="Cappuccino" />
    </SearchForm>
  );
}

export default Search;
