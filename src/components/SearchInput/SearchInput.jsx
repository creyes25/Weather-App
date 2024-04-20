import { useState } from "react"


const SearchInput = ({handleInputSubmision}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleInputSubmision(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Search for location..."
      value={inputValue}
      onChange={handleChange} />
    </form>
  )
}

export  default SearchInput