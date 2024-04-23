import { useState } from "react"

// styles
import { InputContainter, Input } from "./SearchInput.styles"


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
        <Input type="text"
        placeholder="Search for location..."
        value={inputValue}
        onChange={handleChange} />
      </InputContainter>
    </form>
  )
}

export  default SearchInput