import { useState } from "react";

// styles
import { InputContainter, Input, SearchIcon, Icon } from "./SearchInput.styles";

const SearchInput = ({ handleInputSubmision }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // format the city name
    const cityWordsArray = inputValue.toLocaleLowerCase().split(" ");
    const formatedCity = cityWordsArray.map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    const cityName = formatedCity.join(" ");

    handleInputSubmision(cityName);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputContainter>
        <SearchIcon>
          <Icon />
        </SearchIcon>

        <Input
          type="text"
          placeholder="Search for city..."
          value={inputValue}
          onChange={handleChange}
        />
      </InputContainter>
    </form>
  );
};

export default SearchInput;
