import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0990a8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return (
    <>
      <Container>
        Awesome Deals! Order more than 500 and get exclusive Rewards
      </Container>
    </>
  );
};

export default Announcements;
