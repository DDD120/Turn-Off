import styled from "styled-components";
import IMG1URL from "images/act2/blob1.webp";
import IMG2URL from "images/act2/blob2.webp";

export const Layout = styled.div`
  width: 85%;
  aspect-ratio: 4/3;
  border-radius: 12px;
  background-color: #ffecde;
  background-image: ${() => `url(${IMG1URL}), url(${IMG2URL})`};
  background-repeat: no-repeat, no-repeat;
  background-position: bottom left, top right;
  background-size: 50%, 40%;
  overflow: hidden;
  border: 2px solid #2b2e30;
  box-shadow: 8px 8px 0 #2b2e30;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Top = styled.div`
  flex: 1;
  border-bottom: 2px solid #2b2e30;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  gap: 2px;

  & > div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #2b2e30;
  }
`;

export const Main = styled.div`
  flex: 12;
  padding: 12px;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Bottom = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  & > ul {
    display: flex;
    flex-direction: row;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  padding: 4px;
  transition: 0.3s;
  border-radius: 4px;
  cursor: ${({ cursor }) => cursor && "pointer"};

  &:hover {
    background-color: ${({ hover }) => hover && "#ffffffc1"};
  }

  @media only screen and (max-width: 460px) {
    font-size: 1.4rem;
    padding: 2px;
  }
`;

export const Active = styled.div`
  width: 30%;
  height: 4px;
  background-color: #ffb32f;
  margin: 0 auto;
  border-radius: 20px;
`;
