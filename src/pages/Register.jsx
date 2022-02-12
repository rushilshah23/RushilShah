import { Divider, TextField, Box, Chip, Button, Link } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginUser, registerUser } from "../redux/apiCalls";
import { Facebook, Google } from "@mui/icons-material";
import { color, margin } from "@mui/system";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ccccccfb;
  background-image: linear-gradient(0deg, #fcfcfcf9 10%, #a49fb6 90%);
`;
const Wrapper = styled.div`
  width: 75%;
  padding: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const LocalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 3;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 3;
`;

const textFieldStyle = {
  width: "100%",
  margin: "10px 0px",
};

const buttonStyle = {
  margin: "10px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  padding: "10px 10px",
};
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFetching = useSelector((state) => state.user.isFetching);
  const error = useSelector((state) => state.user.error);
  // const history = History();

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    registerUser(dispatch, { email, password });
    !error && !isFetching && window.location("/");
  };

  return (
    <Container>
      <LocalContainer>
        <Wrapper>
          {/* <Box width="100%"> */}
          <Form>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={textFieldStyle}
            />

            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              sx={textFieldStyle}
            />
            <Button
              sx={buttonStyle}
              color="success"
              variant="contained"
              onClick={submit}
              disabled={isFetching}
            >
              Login
            </Button>
          </Form>
          {/* </Box> */}
        </Wrapper>
      </LocalContainer>
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: "100px 0px",
        }}
      >
        <Chip
          label="OR"
          sx={{ color: "white", fontWeight: "bold", backgroundColor: "grey" }}
        />
      </Divider>
      <SocialContainer>
        <Button
          onClick={() => <Link href="/user/google/callback">Google</Link>}
          sx={buttonStyle}
          variant="contained"
          color="error"
          fullWidth
          startIcon={<Google />}
        >
          Sign In with Google
        </Button>
        <Button
          sx={buttonStyle}
          variant="contained"
          color="primary"
          startIcon={<Facebook />}
        >
          Sign In with Facebook
        </Button>
      </SocialContainer>
    </Container>
  );
};

export default Register;
