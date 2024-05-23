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
  width: 250px;
  height: 40px;
  padding: 5px;
  margin: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1em;

  div {
    
  }
`

export const EmptyDiv = styled.div`
  height: 100%;
  width: 20%;
  background: url('https://cdn-icons-png.flaticon.com/128/3530/3530009.png');
  background-size: contain;
  background-repeat: no-repeat;

`

export const CountryIconCont = styled.div`
  background-color: #F2F2F2;
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 95%;
  }

`