import React, { ReactNode } from "react";

import { Wrapper, Content } from "./styles";

type Props = {
  children: ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default DefaultLayout;
