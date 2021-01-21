import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MonthCard from "~/components/MonthCard";
import DefaultRootState from "~/store/@types";

import {
  Container,
  MonthContainer,
  ActionContainer,
  PlusButton,
  Calender,
  InputValor,
  InputInstallment,
  InputName,
} from "./styles";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState<string>("");
  const [valor, setValor] = useState<number>(0);
  const [installment, setInstallment] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const { months, loading } = useSelector(
    (state: DefaultRootState) => state.main
  );

  const handleDate = (event: React.FormEvent<HTMLInputElement>) => {
    const currentDate: string = event.currentTarget.value;
    const currentDateSplited = currentDate.split("-");
    setDate(`${currentDateSplited[0]}-${currentDateSplited[1]}-01`);
  };

  const handleValue = (
    dateToSet: string,
    amount: number,
    installmentToSet: number,
    nameToSet: string
  ) => {
    dispatch({
      type: "SPEDING_REQUEST",
      date: dateToSet,
      amount,
      installment: installmentToSet,
      name: nameToSet,
    });
  };

  useEffect(() => {
    dispatch({ type: "BALANCE_NAVIGATION" });
  }, []);
  return (
    <Container>
      <ActionContainer>
        <InputName
          setValue={setName}
          type="text"
          placeholder="Nome da dívida"
        />
        <InputValor
          setValue={setValor}
          type="number"
          placeholder="Valor devedor"
        />
        <InputInstallment
          setValue={setInstallment}
          type="number"
          placeholder="parcelas"
        />
        <Calender type="date" onChange={handleDate} />
        <PlusButton onClick={() => handleValue(date, valor, installment, name)}>
          {loading ? "Carregando..." : "Adicionar"}
        </PlusButton>
      </ActionContainer>
      <MonthContainer>
        {months.map((item, index) => (
          <MonthCard
            key={index.toString()}
            month={item.name}
            amount={item.amount}
          />
        ))}
      </MonthContainer>
    </Container>
  );
};

export default Main;

j
