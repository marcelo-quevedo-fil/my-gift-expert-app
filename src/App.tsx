import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";

import { useState } from "react";

function App() {
  const [values, setValues] = useState(["Dragon Ball", "Alf"]);

  const addValue = (value: string) => {
    // ensure it doesn't repeat
    if (values.includes(value)) return;

    setValues([...values, value]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <SearchBar addValue={addValue} />

      {values.map((value) => {
        return <Grid key={value} value={value} />;
      })}
    </>
  );
}

export default App;
