import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.vegasGold};
  border-radius: 4px;
  margin: 5px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75%;
  background: ${({ theme }) => theme.color.carolineBlue};
  border-radius: 4px;
  > p {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: bold;
    font-size: 30px;
  }
`;

export const P = styled.p`
  height: 20%;
  margin: 5px 0 0 0;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: bold;
`;
