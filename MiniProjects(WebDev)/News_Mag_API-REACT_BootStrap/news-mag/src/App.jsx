import { useState } from "react";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");

  return (
    <>
      <NavBar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </>
  );
};

export default App;
