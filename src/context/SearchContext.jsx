import React, { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchProvider({children}) {
  const [input, setInput] = useState("");
  function HandleSearch(e) {
    setInput(e.target.value)
  }
  const data={
    input,HandleSearch
  }
  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  );
}

export default SearchProvider;
