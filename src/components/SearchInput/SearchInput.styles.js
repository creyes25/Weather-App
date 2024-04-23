import styled from 'styled-components'
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'


export const InputContainter = styled.div`
  margin: 10px auto;
  border-radius : 10px;
  background-color: #F5F5F5;
  height: 10px;
  width: 30%;
  height: 30px;
  padding: 10px 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

export const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 10%;
  margin-left: 5px;

`

export const Icon = styled(MagnifyingGlassIcon)`
  width: 22px;
  height: 22px;
`

