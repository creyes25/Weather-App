import styled from "styled-components";

export const SideBarCont = styled.div`
  border: 1px solid #F2F2F2;
  border-right: none;

  padding: 5px;
  p {
    margin: 10px 2px;
  }

  @media screen and (max-width: 1180px) {
    p {
      display: none;
    }
    font-size: 0.8em;

  }

  @media screen and (max-width: 800px) {
    border: 1px solid #F2F2F2;
    width: 50%;
  }
`
export const SideBarInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
  align-items: center;
  margin-top: 10px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 1180px) {
    justify-content: center;
    gap: 1em;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 0;
  }

  @media screen and (max-width: 800px) {
    h2 {
      margin: 5px 0;
    }
  }
`

export const IconCont = styled.div`
  width: 50px;
  height: 50px;
  padding: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 10px;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1180px) {
    
  }

  @media screen and (max-width: 950px) {
    img {
      height: 80%;
      width: 80%;
    }
  }

`

