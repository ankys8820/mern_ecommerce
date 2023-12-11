import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import { FiShoppingCart } from "react-icons/fi";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const Cart= styled.div`
  position: relative;
`;
const Badge=styled.span`
   position: absolute;
   top : -10px;
   right : -10px;
   padding : 5px 8px;
   border-radius: 50%;
   background-color: red;
   color: white;
   font-size: 12px;
`;


const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            {/* Search Module */}
            <SearchContainer>
              {/* Input */}
              <Input />
              <FaSearch style={{ color: "gray", fontSize: 16 }} />
              {/* <FaOpencart style={{ color: "gray", fontSize: 18 }} /> */}
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Logo</Logo>
          </Center>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
              {/* <FaOpencart style={{ fontSize: 22 }} /> */}
              <Cart>
                
              <FiShoppingCart style={{ fontSize: 22 }} />
                <Badge>0</Badge>
              </Cart>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
