import React, { createContext, useState } from "react";

export const SelectContext = createContext();

function SelectProvider({children}) {
  const [select, setSelect] = useState("")
  function handleSelect(e) {
    setSelect(e.target.value)
  }
  const data={
    select,handleSelect
  }
  return <SelectContext.Provider value={data}>{children}</SelectContext.Provider>;
}

export default SelectProvider;
