import { useState } from "react"

// styles
import { InputContainter, Input, SearchIcon, Icon } from "./SearchInput.styles"


const SearchInput = ({handleInputSubmision}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleInputSubmision(inputValue.toLocaleLowerCase())
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputContainter>
      <SearchIcon>
        <Icon />

      </SearchIcon>


        <Input type="text"
        placeholder="Search for location..."
        value={inputValue}
        onChange={handleChange} />
      </InputContainter>
    </form>
  )
}

export  default SearchInput