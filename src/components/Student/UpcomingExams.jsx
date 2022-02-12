import React from 'react'
import { userRequest } from '../../requestMethods'

const UpcomingExams = () => {

    const getAllExams = async()=>{
        try {
            const res = await userRequest.get("/exam")
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    getAllExams()
    return (
        <div className='UpcomingExams'>
            upcoming exams
        </div>
    )
}

export default UpcomingExams
