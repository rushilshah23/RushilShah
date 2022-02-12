import axios from "axios";



const BASE_URL = "http://localhost:8000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const currentUser = user && JSON.parse(user).currentUser;
// const SESSID = currentUser.sessid;
// const USERID = currentUser.userId;

const getSessId = ()=>{
  const persistRoot = localStorage.getItem("persist:root");
  if(persistRoot){
    const currentUser = JSON.parse(persistRoot).currentUser;
    if(currentUser){
      const sessid = JSON.parse(currentUser).sessid;
      if(sessid){
        return sessid;
      }else{
        return "";
      }
    }else{
      return "";
    }
  }else{
    return "";
  }

 

}
const getUserId = ()=>{
  const persistRoot = localStorage.getItem("persist:root");
  if(persistRoot!==null){
    const currentUser = JSON.parse(persistRoot).currentUser;
    console.log("here");
    if(currentUser!==null){
    console.log("here 1");

      const userId = JSON.parse(currentUser).userId;
      if(userId!==null){
        return userId;
      }else{
        return "";
      }
    }else{
      return "";
    }
  }else{
    return "";
  }

  
}


export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  
  
  withCredentials:true,
  // headers: { sessid: SESSID, userid: USERID },
  // headers:{userid:getUserId(),sessid:getSessId()}
});

userRequest.interceptors.request.use(
  (config) => {
      // config.headers.sessid = getSessId();
      // config.headers.userid = getUserId();
      return config;
  },
  (error) => {
      console.log(error);
  }
);

