import React from 'react';
import { useNavigate} from 'react-router-dom'
import styled from 'styled-components';

const AnouncementsPage = () => {
    const navigate = useNavigate()

    const goToStudentsPageHandler = () =>{
        navigate('/courses/students')
    }
    return (
        <Container>
            <Block>
            <h1>Anouncements Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id animi doloremque reprehenderit aut eligendi ea repellendus, quasi culpa! Sint possimus repudiandae doloremque adipisci quis vero doloribus aspernatur vel sunt asperiores autem cupiditate voluptas aliquid vitae temporibus, dolore architecto placeat ipsum officiis corrupti dicta animi debitis accusantium totam. Ex, quo!</p>
            <button onClick={goToStudentsPageHandler}> Go To Students Page</button>
            </Block>
        </Container>
    );
};

export default AnouncementsPage;


const Container = styled.div`
padding: 2rem;
background-color: #ccc8c8;
width: 100%;
`

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    height: 100%;
`