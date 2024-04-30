import styled from "styled-components";

export const SideBarCont = styled.div`
  border: 1px solid #F2F2F2;
  border-right: none;

  padding: 5px;
  p {
    margin: 2px;
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
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 1180px) {
    justify-content: center;
    gap: 1em;
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    
  }

  @media screen and (max-width: 800px) {
    gap: 0;
    h2 {
      margin: 5px 0;
    }
  }


`

