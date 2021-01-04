import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Card, Image, Input, Button } from "./styles";

import image from "~/assets/default/default.png";

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: "SIGN_IN_REQUEST",
      password,
      email,
    });
  };
  return (
    <Container>
      <Card onSubmit={handleSubmit}>
        <Image src={image} />
        <Input setValue={setEmail} name="email" type="email" />
        <Input setValue={setPassword} name="password" type="password" />
        <Button type="submit">Login</Button>
      </Card>
    </Container>
  );
};

export default Home;
