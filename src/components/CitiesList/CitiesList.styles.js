import styled from "styled-components";

export const CityLi = styled.li`
  margin: 15px auto;
  padding: 0;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  a:visited { 
    text-decoration: none; 
    color: black;
  }
`

export const CityLiCont = styled.div`
  // border: 1px solid red;
  width: 250px;
  height: 40px;
  padding: 5px;
  margin: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1em;

`

export const CountryIconCont = styled.div`
  background-color: #F2F2F2;
  height: 100%;
  width: 20%;

`