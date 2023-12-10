import React from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";

// Styled Components
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #0990a8;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newletter</Title>
        <Description>
          Get timely Updates from your fevorite products.
        </Description>
        <InputContainer>
          <Input placeholder="Your Email" />
          <Button>
            <IoSend />
          </Button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Newsletter;
