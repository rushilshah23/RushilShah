
import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { authFailed } from '../redux/apiCalls'
import { loginFailure } from '../redux/userRedux'
import { userRequest } from '../requestMethods'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100vw;
height:100vh;
background-color:#ccccccfb;
background-image:linear-gradient(0deg, #fcfcfcf9 10%, #a49fb6 90%);

`

const Home = () => {
    const user = useSelector((state) => state.user.currentUser)
    const [res,setRes] = useState(null);
    const dispatch = useDispatch();

    // const checkGoogleLogin = async()=>{
    //     const res = await userRequest.get('/auth/google');
    //     setRes(res);
    // }

    const checkAuth= async()=>{
        try {
            setRes(await userRequest.get('/user'));
        } catch (error) {
            setRes(false);
            authFailed(dispatch)
            // dispatch(loginFailure());
            // <Navigate to="/login"/>
            window.location = '/login';
        }
       
    }


    return (
 
        <Container>
            <Navbar/>
            {user?<Button variant='contained' onClick={checkAuth}>Authenticate</Button>:<></>}
            {res!==null?!res.data?<Typography>UnAuthorized</Typography>:res?<Typography>{res.data}</Typography>:<></>:<></>}   
        </Container>
    )
}

export default Home
