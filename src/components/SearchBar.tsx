import { SyntheticEvent, useState } from "react";

interface SearchBarProps {
  addValue: (value: string) => void;
}

function SearchBar(props: SearchBarProps) {
  const { addValue } = props;

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;

    //send to father
    addValue(inputValue);

    // empty text box
    setInputValue("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Buscar Gifs"
            className="form-control"
            value={inputValue}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
