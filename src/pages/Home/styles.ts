import styled from "styled-components";
import InputComponent from "~/component/Input";

export const Container = styled.div``;

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 30vw;
`;

export const Image = styled.img`
  border-radius: 25%;
  object-fit: contain;
  margin: 0 0 20px 0;
`;

export const Input = styled(InputComponent)`
  height: 28px;
  width: 80%;
  margin: 5px 0;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled.button`
  height: 40px;
  width: 80%;
  font-size: 18px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
