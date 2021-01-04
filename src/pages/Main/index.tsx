import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MonthCard from "~/components/MonthCard";
import DefaultRootState from "~/store/@types";

import { Container, MonthContainer } from "./styles";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { months } = useSelector((state: DefaultRootState) => state.main);
  useEffect(() => {
    dispatch({ type: "BALANCE_NAVIGATION" });
  }, []);
  return (
    <Container>
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
