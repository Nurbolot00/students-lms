import React, { useEffect, useState } from 'react';
import {useParams,useNavigate, Outlet} from 'react-router-dom'
import styled from 'styled-components';
import Button from '../components/UI/Button';

const MaterialDetails = ({materials}) => {
    const [details,setDetails] = useState({})

    const {id} = useParams()

    useEffect(() =>{
        const chosenMaterialDetails = materials.find((item) => item.id === +id)
        setDetails(chosenMaterialDetails)
    },[materials,id])

    const navigate = useNavigate()

    const goBackToMaterialsPageHandler = () =>{
        navigate('/courses/materials')
    }

    return (
        <>
        <Block>
            <h3>{details.title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat non nam. Ab quo accusantium laudantium vitae delectus minus, placeat dolores necessitatibus provident quod aut enim aliquam, totam cumque. Cum deleniti ab iusto corrupti at explicabo quaerat consequatur earum doloribus cupiditate, labore obcaecati dolorem numquam placeat itaque eaque doloremque nisi.</p>
            <Button onClick={goBackToMaterialsPageHandler}>Go Back to Materials Page</Button>
        </Block>
        <Outlet/>
        </>
    );
};

export default MaterialDetails;

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    margin:  2rem;
`
