import styled from "styled-components";

export const CityLi = styled.li`
  margin: 15px auto;
  padding: 0;
  cursor: pointer;
  display: flex;
  
  a {
    text-decoration: none;
  }

  a:visited { 
    text-decoration: none; 
    color: black;
  }

  .btn-cont {
    width: 50px;
    height: 40px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }

  &:hover .btn-cont {
    opacity: 1;
    visibility: visible;
  }

  .remove-btn {
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .remove-btn img {
    width: 100%;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    .btn-cont {
      opacity: 1;
      visibility: visible;
    }
  }

`

export const CityLiCont = styled.div`
  width: 240px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 95%;
  }

`