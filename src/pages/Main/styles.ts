import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import Input from "~/components/Input";

export const Container = styled.div`
  height: 100%;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BalancoTotal = styled.div``;

export const PlusButton = styled.button`
  height: 80%;
  width: 120px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputValor = styled(Input)`
  height: 80%;
  width: 200px;
  border: 1px solid #a2a2a2;
  background: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputInstallment = styled(Input)`
  height: 80%;
  width: 150px;
  border: 1px solid #a2a2a2;
  background: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const InputName = styled(Input)`
  height: 80%;
  width: 200px;
  border: 1px solid #a2a2a2;
  background: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Plus = styled(FaPlus).attrs({
  size: 15,
})`
  color: ${({ theme }) => theme.color.queenBlue};
  transition: color 0.5s;
  &:hover {
    color: ${({ theme }) => theme.color.sandyBrown};
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.vegasGold};
  height: 60px;
  width: 100%;
  margin: 60px 0 auto 0;
  border-radius: 4px;
  padding: 0 20px;
`;

export const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 0 0 auto 0;
`;

export const Calender = styled.input`
  background: none;
  width: 200px;
  border: 1px solid #a2a2a2;
  padding: 12px 20px;
  height: 80%;
  text-align: justify;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
