// import React, { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import styled from 'styled-components'
// import Navbar from '../../components/Navbar'
// import ExamHistory from '../../components/Student/ExamHistory'
// import Sidebar from '../../components/Student/Sidebar'
// import UpcomingExams from '../../components/Student/UpcomingExams'



// const Container =styled.div`
//     /* width: 100vw;
//     height: 100vh; */
// `

// const Wrapper  =styled.div`
//     display: flex;
//     border: 2px solid blue;

// `

// const LeftDrawer  =styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     margin: 10px;
//     border: 1px solid black;

    
// `

// const MainBoard = styled.div`
//     flex: 4;
//     border: 1px solid black;
//     margin: 10px;


// `

// const Tab = styled.div`
//     border: 1px solid black;
// `








// const StudentDashboard = () => {
//     // const [Tabname, setTabname] = useState("upcomingExams")
//     const [RenderElement, setRenderElement] = useState(<UpcomingExams/>)
//     // let RenderElement;
//     // const updateMainboardData = (tab)=>{
//     //     setTabname(tab)
//     //     console.log(Tabname);

//     // }


//     // useEffect(() => {
//     //     const switchTabData = ()=>{
//     //         switch (Tabname) {
//     //             case "upcomingExams":
//     //                 setRenderElement(<UpcomingExams/>)  
//     //                 // RenderElement = <UpcomingExams/>    
//     //                 break;
//     //             case "examHistory":
//     //                 setRenderElement(<ExamHistory/>)  
//     //                 // RenderElement = <ExamHistory/>    

//     //                 break;
//     //             default:
//     //                 setRenderElement(<UpcomingExams/>)  
//     //                 // RenderElement = <UpcomingExams/>    
//     //         }
//     //     }
//     //     switchTabData()
//     // }, [Tabname])

//     return (
//         <Container>
//             <Navbar/>      
//             <Wrapper>
//                 <Sidebar/>
//                 <MainBoard>
//                     <Routes>
//                     <Route path = "/exams/upcoming" element={<UpcomingExams/>}/>
//                     <Route path = "/exams/history" element={<ExamHistory/>}/>
//                     </Routes>
//                 </MainBoard>
//             </Wrapper>
        
//         </Container>
//     )
// }

// export default StudentDashboard





import React from 'react'
import Sidebar from '../../components/Student/Sidebar'

const StudentDashboard = () => {
    return (
        <>
        <Sidebar/>
        student dashboard
        </>
    )
}

export default StudentDashboard

