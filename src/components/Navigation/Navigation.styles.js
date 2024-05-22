import styled from "styled-components";

export const NavigationCont = styled.nav`
  max-width: 350px;
  margin-left: 15px;
  padding: 10px;
  text-align: center;
  border-right: 1px solid #F2F2F2;
`


export const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 10px auto;
  padding: 0;
`

export const HomeLinkCont = styled.div`
  // border: 1px solid red;
  height: 45px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin: 10px auto;


  a {
    text-decoration: none;
    width: 100%;
  }

  a:visited { 
    text-decoration: none; 
    color: black;
  }
`

export const HomeWrapper = styled.div`
  display: flex;
  justify-content:left ;
  align-items: center;
  width: 100%;
  gap: 1em;

`

export const CurrentCountryIcon = styled.div`
  background-color: #F2F2F2;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;


  img {
    width: 95%;
    height: 95%;
  }
`

export const CurrentLocationWrapper = styled.div`
  h5 {
    margin: 0;
  }

`