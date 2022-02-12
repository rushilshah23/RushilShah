import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";

import styled from "styled-components";
import { logoutUser } from "../redux/apiCalls";
import {
  Button,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@mui/material";
import { display, padding } from "@mui/system";

// const Container = styled.div`
//   display: flex;
//   padding: 10px;
// `;
const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const MenuItem = styled.div`
  margin: 0px 10px;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

// const MenuItem = styled.div`
//   text-decoration: none;
//   color: black;
//   cursor: pointer;
//   margin-left: 10px;
// `;

// const Button = styled.button`

// `

const buttonStyle = {
  margin: "0px 10px",
  borderRadius: "10%",
  textDecoration: "none",
  linkStyle: {
    color: "black",
    cursor: "pointer",
  },
};

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);

  const handleClick = (e) => {
    e.preventDefault();

    logoutUser(dispatch);
  };

  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Container sx={containerStyle}>
            <Left>
              <Typography variant="h6" component="div">
                Examinator
              </Typography>
            </Left>
            <Middle></Middle>
            <Right>
              {!user.currentUser ? (
                <>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    component={Link}
                    to="/login"
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    component={Link}
                    to="/register"
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  sx={buttonStyle}
                  component={Button}
                  onClick={handleClick}
                >
                  Sign Out
                </Button>
              )}
            </Right>
          </Container>
        </Toolbar>
      </AppBar>
    </>
    // <Conatiner>
    //   <Left>

    //   </Left>
    //   <Middle></Middle>
    //   <Right>
    //       {user.currentUser?<Button onClick={handleClick}>Logout</Button>:
    //       <>
    //     <Link to="/login">
    //       <MenuItem>Login</MenuItem>
    //     </Link>
    //     <Link to="/register">
    //       <MenuItem>Register</MenuItem>
    //     </Link>
    //       </>
    //     }
    //   </Right>
    // </Conatiner>
  );
};

export default Navbar;
