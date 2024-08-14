import React, { useState } from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Title />
      <Input countries={countries} setCountries={setCountries} />
      <List countries={countries} setCountries={setCountries} />
    </>
  );
};

export default App;
