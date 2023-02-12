import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import Button from '../components/UI/Button';


const StudentDetails = ({students}) => {
    const [details,setDetails] = useState()
    const {id} = useParams()
    useEffect(() =>{
        const chosenStudentDetails = students.find((item) => item.id === +id)
        setDetails(chosenStudentDetails)
    },[students,id])

    const navigate = useNavigate()
    const goBackToStudentsPageHandler = () =>{
        navigate('/courses/students')
    }
    return (
        <div>
            <h3>{details.studentName}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat non nam. Ab quo accusantium laudantium vitae delectus minus, placeat dolores necessitatibus provident quod aut enim aliquam, totam cumque. Cum deleniti ab iusto corrupti at explicabo quaerat consequatur earum doloribus cupiditate, labore obcaecati dolorem numquam placeat itaque eaque doloremque nisi.</p>
            <Button onClick={goBackToStudentsPageHandler}>Go Back to Students Page</Button>
        </div>
    );
};

export default StudentDetails;