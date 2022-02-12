import { loginFailure, loginStart, loginSuccess, logout, logoutFailure, registerFailure, registerStart, registerSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import Cookies from "universal-cookie/cjs/Cookies";


const cookie = new Cookies();



export const authFailed = async (dispatch) => {

  cookie.remove('session');
  dispatch(loginFailure());
 
  // window.location.href = "/login";

}


export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/user/login", user);
    dispatch(loginSuccess(res.data));

    console.log(res.data)
  } catch (err) {
    console.log(err);
    authFailed(dispatch)
  }
};

export const registerUser = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/user/register", user);
    dispatch(registerSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(registerFailure());
  }
}

export const logoutUser  =async(dispatch)=>{
    try {
      const res = await userRequest.delete("/user/logout");
      dispatch(logout());
      console.log(res.data)
    } catch (error) {
      dispatch(logoutFailure());
    }
    dispatch(logout());
    
}

export const checkGoogleLogin = async (dispatch) => {
  try {
    const res = await publicRequest.get("user/google");
    dispatch(loginSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    console.log(err);
    authFailed(dispatch)
  }
};


export const authUser = async (dispatch) => {
  try {
    const res = await userRequest.get("/user/");
    dispatch(loginSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    authFailed(dispatch);
  }
}

