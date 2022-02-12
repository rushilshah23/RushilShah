import {
  Divider,
  TextField,
  Box,
  Chip,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { checkGoogleLogin, loginUser } from "../redux/apiCalls";
import { Facebook, Google } from "@mui/icons-material";
import { color, display, margin, padding } from "@mui/system";
import Loading from "../assets/loading.gif";
import zIndex from "@mui/material/styles/zIndex";
import { publicRequest } from "../requestMethods";

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
const ButtonContainer = styled.div`
  > button {
    margin: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 10px 10px;
  }
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 3;
`;

const LoadingIcon = styled.img`
  width: 20px;
  height: 20px;
  background-color: transparent;
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
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFetching = useSelector((state) => state.user.isFetching);
  
  
  

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    loginUser(dispatch, { email, password });
  };
  const googleLogin = () => {
    console.log("google check fired");
    checkGoogleLogin(dispatch);


    // const data = publicRequest.get()
    // window.open("http://localhost:8000/api/user/google","_self");
  }
  return (
    <Container>
      {/* <CircularProgress
        sx={{
          display: isFetching ? "block" : "none",
          zIndex: isFetching ? 1 : -1,
        }}
      /> */}

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
            <ButtonContainer isFetching={isFetching}>
              <Button
                disabled={isFetching}
                // sx={buttonStyle}
                color="success"
                variant="contained"
                onClick={submit}
                endIcon={
                  isFetching ? (
                    <CircularProgress
                      sx={{ color: "white" }}
                      hidden={isFetching}
                      size={20}
                    />
                  ) : null
                }
                // endIcon={isFetching ? <LoadingIcon img src={Loading} alt="loading" /> : null}
              >
                Login
              </Button>
            </ButtonContainer>
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
          sx={buttonStyle}
          variant="contained"
          color="error"
          startIcon={<Google />}
          onClick={googleLogin}
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

export default Login;
