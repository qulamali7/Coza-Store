import React, { createContext, useState } from "react";
export const FilterContext = createContext();
function FilterProvider({ children }) {
  const [filterdata, setFilterdata] = useState("All");
  const data = {
    setFilterdata,
    filterdata,
  };
  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
}

export default FilterProvider;
