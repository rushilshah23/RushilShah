import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SupervisorDashboard from "./pages/supervisor/SupervisorDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import ExamHistory from "./components/Student/ExamHistory";
import UpcomingExams from "./components/Student/UpcomingExams";
import Sidebar from "./components/Student/Sidebar";
import "./App.css";
import styled from "styled-components";
import { publicRequest } from "./requestMethods";
import { useEffect } from "react";
import { loginFailure } from "./redux/userRedux";
import Dashboard from "./pages/Dashboard";


const Container = styled.div`
  display: flex;
`;
const RouteContainer = styled.div`
  position: relative;
  left: ${(props) => (props.sidebar ? "250px" : "0px")};


`;

const App = () => {
  const user = useSelector((state) => state.user);
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  let userTypeComponent;

  if (user.currentUser) {
    switch (user.currentUser.role) {
      case "supervisor":
        userTypeComponent = <SupervisorDashboard />;
        break;
      case "student":
        userTypeComponent = <StudentDashboard />;
        break;
      default:   
        break;
    }
  }

  const laodSession = async()=>{
    try{
      const data =  await publicRequest.get("/user")
       console.log(data);
       console.log(data.session);
       
       console.log("------------------------------------");
    }catch(err){
      dispatch(loginFailure());
        console.log(err)  
    }
}
useEffect(()=>{
  laodSession()
  },[]);
  return (
    <BrowserRouter >
      {user.currentUser ? (
        <Container>
          {/* <Sidebar /> */}
          {/* <RouteContainer sidebar={sidebar.isOpen}> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/dashboard" element={userTypeComponent} />
               */}
               <Route exact path="/dashboard" element={<Dashboard/>} />
              <Route exact path="/exams/upcoming" element={<UpcomingExams />} />
              <Route exact path="/exams/history" element={<ExamHistory />} />
             {/* <Route exact path="/user/google/callback" element={<Home />} /> */}
              
              

              <Route path="*" element={<Navigate to={"/"} />} />

            </Routes>
          {/* </RouteContainer>  */}
        </Container>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route exact path="/user/google/callback" element={<Home />} />

        </Routes>
      )}
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              userTypeComponent ? (
                userTypeComponent
              ) : (
                <Navigate replace to="/login" />
              )
            }
          />
   
       
         

          <Route path="/login" element={user.currentUser?<Navigate replace to={"/"}/>:<Login />} />
          <Route path="/register" element={user.currentUser?<Navigate replace to={"/"}/>:<Register />} />
        </Routes> */}
    </BrowserRouter>
  );
};

export default App;
