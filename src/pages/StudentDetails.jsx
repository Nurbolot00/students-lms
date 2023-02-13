import React, { useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import Button from '../components/UI/Button';


const StudentDetails = ({students}) => {
    const [details,setDetails] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        const chosenStudentDetails = students.find((item) => item.id === Number(id))
        setDetails(chosenStudentDetails)
    },[id,students])

    console.log(typeof(Number(id)));
    console.log(details);

    const navigate = useNavigate()
    const goBackToStudentsPageHandler = () =>{
        navigate('/courses/students')
    }
    return (
        <Block>
            <h3>{details.studentName}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat non nam. Ab quo accusantium laudantium vitae delectus minus, placeat dolores necessitatibus provident quod aut enim aliquam, totam cumque. Cum deleniti ab iusto corrupti at explicabo quaerat consequatur earum doloribus cupiditate, labore obcaecati dolorem numquam placeat itaque eaque doloremque nisi.</p>
            <Button onClick={goBackToStudentsPageHandler}>Go Back to Students Page</Button>
        </Block>
    );
};

export default StudentDetails;

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    margin:  2rem;
`
