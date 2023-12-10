import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #46bbbb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 25%;
  margin: 10px 0;
  padding: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  width: 20%;
  background-color: white;
  /* color: black; */
  &:hover {
    background-color: #06eeee;
    color: white;
  }
  margin-bottom: 10px;
`;
const Link = styled.a`
  cursor: pointer;
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
`;

const Login = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>LOGIN TO YOUR ACCOUNT</Title>
          <Form>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT REMEMBER THE PASSWORD ?</Link>
            <Link>CREATE A NEW ACCOUNT </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};
export default Login;
