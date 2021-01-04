import React from "react";

import { Container, TopContainer, P } from "./styles";

type Props = {
  month: string;
  amount: number;
};

const MonthCard: React.FC<Props> = ({ month, amount }) => {
  return (
    <Container>
      <TopContainer>
        <p>{month}</p>
      </TopContainer>
      <P>{`R$: ${amount.toFixed(2)}`}</P>
    </Container>
  );
};

export default MonthCard;
