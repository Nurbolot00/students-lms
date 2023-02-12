import React, { useEffect, useState } from 'react';
import {useParams,useNavigate, Outlet} from 'react-router-dom'

const MaterialDetails = ({materials}) => {
    const [details,setDetails] = useState({})

    const {id} = useParams()

    useEffect(() =>{
        const chosenmaterialDetails = materials.find((item) => item.id === +id)
        setDetails(chosenmaterialDetails)
    },[materials,id])

    const navigate = useNavigate()

    const goBackToStudentsPageHandler = () =>{
        navigate('/courses/students')
    }

    return (
        <>
        <div>
            <h3>{details.title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat non nam. Ab quo accusantium laudantium vitae delectus minus, placeat dolores necessitatibus provident quod aut enim aliquam, totam cumque. Cum deleniti ab iusto corrupti at explicabo quaerat consequatur earum doloribus cupiditate, labore obcaecati dolorem numquam placeat itaque eaque doloremque nisi.</p>
            <button onClick={goBackToStudentsPageHandler}>Go Back to Students Page</button>
        </div>

        <div>
            
        </div>
        <Outlet/>
        </>
    );
};

export default MaterialDetails;