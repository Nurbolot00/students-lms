import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Button from '../components/UI/Button';
const Students = ({students}) => {
    return (
        <Block>
            <StyledList>
            {students.map((item,index) => {
                return (
                    <Link to={`${item.id}/details`} key={index}>
                        <li> <h2>{item.studentName}</h2>
                        <Button>Details</Button>
                        </li>

                    </Link>
                )
            })}
            </StyledList>
        </Block>
    );
};

export default Students;

const Block = styled.div`
    background-color: white;
    padding: 2rem;
    margin:  2rem;
`

const StyledList = styled.ul`
width: 60rem;

li{
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #c8c3c3;
    margin-bottom: 1rem;
    margin-left: 2rem;
    padding: 1rem;
    border-radius: 12px;
}
    a{
        text-decoration: none;
    }
`