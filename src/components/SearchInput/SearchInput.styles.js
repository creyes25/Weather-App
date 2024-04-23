import styled from 'styled-components'

export const InputContainter = styled.div`
  margin: 10px auto;
  border-radius : 10px;
  background-color: #F5F5F5;
  height: 10px;
  width: 30%;
  height: 30px;
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  height: 80%;
  width: 95%;
  font-size: 1em;
  border: none;
  background-color: #F5F5F5;

  &:focus {
    outline: none;
  }

`;